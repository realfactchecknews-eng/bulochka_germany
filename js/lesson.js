// Get lesson id from URL
const params = new URLSearchParams(window.location.search);
const lessonId = params.get('id');

// Find lesson meta from MODULES
function findLessonMeta(id) {
  for (const mod of MODULES) {
    for (const l of mod.lessons) {
      if (l.id === id) return { ...l, moduleLevel: mod.level };
    }
  }
  return null;
}

// Progress helpers (reuse from app.js globals)
function getLessonProgress() {
  return JSON.parse(localStorage.getItem('bulochka-progress') || '{}');
}
function markLessonDone(id) {
  const p = getLessonProgress();
  p[id] = true;
  localStorage.setItem('bulochka-progress', JSON.stringify(p));
}
function getXPLocal() { return parseInt(localStorage.getItem('bulochka-xp') || '0'); }
function addXPLocal(n) {
  const xp = getXPLocal() + n;
  localStorage.setItem('bulochka-xp', xp);
  return xp;
}
function updateStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem('bulochka-last-day');
  let streak = parseInt(localStorage.getItem('bulochka-streak') || '0');
  if (last !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = (last === yesterday) ? streak + 1 : 1;
    localStorage.setItem('bulochka-streak', streak);
    localStorage.setItem('bulochka-last-day', today);
  }
}

// Render header stats
function renderHeaderStats() {
  const xpEl = document.getElementById('total-xp');
  const streakEl = document.getElementById('streak');
  if (xpEl) xpEl.textContent = getXPLocal();
  if (streakEl) streakEl.textContent = localStorage.getItem('bulochka-streak') || '0';
}

// Build lesson HTML
function renderLesson() {
  const root = document.getElementById('lesson-root');
  if (!root) return;

  const meta = findLessonMeta(lessonId);
  const content = LESSONS_CONTENT[lessonId];

  if (!content) {
    root.innerHTML = `
      <div class="lesson-page">
        <a class="back-btn" href="index.html">← Назад</a>
        <div class="theory-block">
          <h2>🚧 Урок в разработке</h2>
          <p>Этот урок скоро появится! Матвей уже работает над ним 💕</p>
        </div>
      </div>`;
    return;
  }

  // Theory HTML
  const theoryHtml = content.theory.map(t => `
    <div class="theory-block">
      <h2>${t.heading}</h2>
      ${t.content}
    </div>
  `).join('');

  // Exercises HTML
  let exerciseHtml = '';
  content.exercises.forEach((ex, i) => {
    if (ex.type === 'choice') {
      const optionsHtml = ex.options.map((opt, j) =>
        `<button class="option-btn" data-ex="${i}" data-idx="${j}" onclick="selectOption(${i},${j})">${opt}</button>`
      ).join('');
      exerciseHtml += `
        <div class="exercise" id="ex-${i}">
          <div class="exercise-num">Вопрос ${i + 1}</div>
          <div class="exercise-q">${ex.question}</div>
          <div class="options">${optionsHtml}</div>
          <button class="check-btn" id="check-${i}" onclick="checkChoice(${i})" disabled>Проверить</button>
          <div class="feedback" id="fb-${i}"></div>
        </div>`;
    } else if (ex.type === 'fill') {
      exerciseHtml += `
        <div class="exercise" id="ex-${i}">
          <div class="exercise-num">Вопрос ${i + 1}</div>
          <div class="exercise-q">${ex.question}</div>
          <input class="fill-input" id="fill-${i}" placeholder="${ex.placeholder || ''}"
            oninput="enableFillCheck(${i})" onkeydown="if(event.key==='Enter') checkFill(${i})" />
          <button class="check-btn" id="check-${i}" onclick="checkFill(${i})" disabled>Проверить</button>
          <div class="feedback" id="fb-${i}"></div>
        </div>`;
    }
  });

  root.innerHTML = `
    <div class="lesson-page">
      <a class="back-btn" href="index.html">← На главную</a>
      <div class="lesson-top">
        <div class="lesson-level">${content.level}</div>
        <h1>${content.title}</h1>
        <p>${content.intro}</p>
      </div>
      ${theoryHtml}
      <div class="exercises-section">
        <h2>✏️ Упражнения</h2>
        ${exerciseHtml}
      </div>
      <div class="complete-section">
        <button class="complete-btn" onclick="completeLesson()">Завершить урок 🎉</button>
      </div>
    </div>`;
}

// Exercise state
const selected = {};
const checked = {};

function selectOption(exIdx, optIdx) {
  if (checked[exIdx]) return;
  selected[exIdx] = optIdx;
  document.querySelectorAll(`[data-ex="${exIdx}"]`).forEach(btn => btn.classList.remove('selected'));
  document.querySelector(`[data-ex="${exIdx}"][data-idx="${optIdx}"]`).classList.add('selected');
  document.getElementById(`check-${exIdx}`).disabled = false;
}

function enableFillCheck(exIdx) {
  const val = document.getElementById(`fill-${exIdx}`).value.trim();
  document.getElementById(`check-${exIdx}`).disabled = val.length === 0;
}

function checkChoice(exIdx) {
  if (checked[exIdx]) return;
  checked[exIdx] = true;
  const content = LESSONS_CONTENT[lessonId];
  const ex = content.exercises[exIdx];
  const chosen = selected[exIdx];
  const correct = ex.answer;
  const fb = document.getElementById(`fb-${exIdx}`);
  const exEl = document.getElementById(`ex-${exIdx}`);
  document.getElementById(`check-${exIdx}`).disabled = true;
  document.querySelectorAll(`[data-ex="${exIdx}"]`).forEach(btn => btn.disabled = true);

  if (chosen === correct) {
    document.querySelector(`[data-ex="${exIdx}"][data-idx="${chosen}"]`).classList.add('correct-ans');
    exEl.classList.add('correct');
    fb.textContent = '✓ Правильно!';
    fb.className = 'feedback ok';
  } else {
    document.querySelector(`[data-ex="${exIdx}"][data-idx="${chosen}"]`).classList.add('wrong-ans');
    document.querySelector(`[data-ex="${exIdx}"][data-idx="${correct}"]`).classList.add('correct-ans');
    exEl.classList.add('wrong');
    fb.textContent = `✗ Не совсем. Правильный ответ: ${ex.options[correct]}`;
    fb.className = 'feedback bad';
  }
}

function checkFill(exIdx) {
  if (checked[exIdx]) return;
  checked[exIdx] = true;
  const content = LESSONS_CONTENT[lessonId];
  const ex = content.exercises[exIdx];
  const input = document.getElementById(`fill-${exIdx}`);
  const val = input.value.trim();
  const correct = ex.answer;
  const fb = document.getElementById(`fb-${exIdx}`);
  const exEl = document.getElementById(`ex-${exIdx}`);
  input.disabled = true;
  document.getElementById(`check-${exIdx}`).disabled = true;

  if (val.toLowerCase() === correct.toLowerCase()) {
    input.classList.add('correct-input');
    exEl.classList.add('correct');
    fb.textContent = '✓ Правильно!';
    fb.className = 'feedback ok';
  } else {
    input.classList.add('wrong-input');
    exEl.classList.add('wrong');
    fb.textContent = `✗ Почти! Правильный ответ: ${correct}`;
    fb.className = 'feedback bad';
  }
}

function completeLesson() {
  const meta = findLessonMeta(lessonId);
  const xp = meta ? meta.xp : 30;
  markLessonDone(lessonId);
  updateStreak();
  const newXP = addXPLocal(xp);
  document.getElementById('modal-xp').textContent = `+${xp} XP · Всего: ${newXP} XP`;
  document.getElementById('complete-modal').classList.add('show');
  // Синхронизируем прогресс в облако
  if (typeof window._pushToCloud === 'function') {
    window._pushToCloud();
    if (typeof window.showSync === 'function') window.showSync('☁️ Прогресс сохранён!');
  }
}

// Init
renderHeaderStats();
renderLesson();
