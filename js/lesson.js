// Get lesson id from URL
const params = new URLSearchParams(window.location.search);
const lessonId = params.get('id');

// ── Озвучка немецкого (бесплатно, через браузер) ──────────────────────────
function speak(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  u.rate = 0.9;
  const v = window.speechSynthesis.getVoices().find(x => /de(-|_)/i.test(x.lang));
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
}
window.speak = speak;
// экранирование для значения HTML-атрибута
function escAttr(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }
function speakBtn(text) { return `<button type="button" class="speak-btn" title="Озвучить" onclick="speak(this.getAttribute('data-t'))" data-t="${escAttr(text)}">🔊</button>`; }

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

  // Подмена персональных имён для гостей (Марго видит как есть)
  const dp = window.depersonalize || (t => t);

  // Theory HTML
  const theoryHtml = content.theory.map(t => `
    <div class="theory-block">
      <h2>${dp(t.heading)}</h2>
      ${dp(t.content)}
    </div>
  `).join('');

  // Exercises HTML
  let exerciseHtml = '';
  content.exercises.forEach((ex, i) => {
    if (ex.type === 'choice') {
      const optionsHtml = ex.options.map((opt, j) =>
        `<button class="option-btn" data-ex="${i}" data-idx="${j}" onclick="selectOption(${i},${j})">${dp(opt)}</button>`
      ).join('');
      exerciseHtml += `
        <div class="exercise" id="ex-${i}">
          <div class="exercise-num">Вопрос ${i + 1}</div>
          <div class="exercise-q">${dp(ex.question)}</div>
          <div class="options">${optionsHtml}</div>
          <button class="check-btn" id="check-${i}" onclick="checkChoice(${i})" disabled>Проверить</button>
          <div class="feedback" id="fb-${i}"></div>
        </div>`;
    } else if (ex.type === 'fill') {
      exerciseHtml += `
        <div class="exercise" id="ex-${i}">
          <div class="exercise-num">Вопрос ${i + 1}</div>
          <div class="exercise-q">${dp(ex.question)}</div>
          <input class="fill-input" id="fill-${i}" placeholder="${ex.placeholder || ''}"
            oninput="enableFillCheck(${i})" onkeydown="if(event.key==='Enter') checkFill(${i})" />
          <button class="check-btn" id="check-${i}" onclick="checkFill(${i})" disabled>Проверить</button>
          <div class="feedback" id="fb-${i}"></div>
        </div>`;
    } else if (ex.type === 'translate') {
      exerciseHtml += `
        <div class="exercise" id="ex-${i}">
          <div class="exercise-num">Перевод ${i + 1}</div>
          <div class="exercise-q">${dp(ex.question)}</div>
          <div class="exercise-hint" style="font-size:0.82rem;color:#b06090;margin-bottom:8px;">${dp(ex.hint || 'Напиши по-немецки')}</div>
          <textarea class="fill-input translate-input" id="fill-${i}" placeholder="${ex.placeholder || 'Auf Deutsch...'}"
            oninput="enableFillCheck(${i})" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();checkFill(${i});}" rows="2"></textarea>
          <button class="check-btn" id="check-${i}" onclick="checkFill(${i})" disabled>Проверить</button>
          <div class="feedback" id="fb-${i}"></div>
        </div>`;
    } else if (ex.type === 'reading') {
      // Текст на немецком + вопросы на понимание
      const qHtml = (ex.questions || []).map((q, k) => {
        if (q.options) {
          const opts = q.options.map((opt, j) =>
            `<button class="option-btn" data-rex="${i}" data-rq="${k}" data-idx="${j}" onclick="selectReadOption(${i},${k},${j})">${dp(opt)}</button>`
          ).join('');
          return `<div class="read-q" id="rq-${i}-${k}">
              <div class="exercise-q">${dp(q.q)}</div>
              <div class="options">${opts}</div>
              <button class="check-btn" id="rcheck-${i}-${k}" onclick="checkReadChoice(${i},${k})" disabled>Проверить</button>
              <div class="feedback" id="rfb-${i}-${k}"></div>
            </div>`;
        }
        return `<div class="read-q" id="rq-${i}-${k}">
            <div class="exercise-q">${dp(q.q)}</div>
            <input class="fill-input" id="rfill-${i}-${k}" placeholder="Antwort..."
              oninput="document.getElementById('rcheck-${i}-${k}').disabled=this.value.trim().length===0"
              onkeydown="if(event.key==='Enter')checkReadFill(${i},${k})" />
            <button class="check-btn" id="rcheck-${i}-${k}" onclick="checkReadFill(${i},${k})" disabled>Проверить</button>
            <div class="feedback" id="rfb-${i}-${k}"></div>
          </div>`;
      }).join('');
      exerciseHtml += `
        <div class="exercise reading-ex" id="ex-${i}">
          <div class="exercise-num">📖 Чтение ${i + 1}</div>
          <div class="reading-text">${dp(ex.text)} ${speakBtn(ex.text)}</div>
          ${ex.translation ? `<button class="link-btn" type="button" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">Показать перевод</button><div class="reading-trans" style="display:none">${dp(ex.translation)}</div>` : ''}
          ${qHtml}
        </div>`;
    } else if (ex.type === 'write') {
      // Свободный ответ с ИИ-проверкой
      exerciseHtml += `
        <div class="exercise" id="ex-${i}">
          <div class="exercise-num">✍️ Письмо ${i + 1}</div>
          <div class="exercise-q">${dp(ex.question)}</div>
          ${ex.hint ? `<div class="exercise-hint" style="font-size:0.82rem;color:#b06090;margin-bottom:8px;">${dp(ex.hint)}</div>` : ''}
          <textarea class="fill-input translate-input" id="write-${i}" placeholder="${ex.placeholder || 'Schreib auf Deutsch...'}"
            oninput="document.getElementById('check-${i}').disabled=this.value.trim().length===0" rows="3"></textarea>
          <button class="check-btn" id="check-${i}" onclick="checkWrite(${i})" disabled>Проверить с ИИ</button>
          <div class="feedback" id="fb-${i}"></div>
        </div>`;
    } else if (ex.type === 'listen') {
      // Диктант: слушаешь немецкую фразу и записываешь
      exerciseHtml += `
        <div class="exercise" id="ex-${i}">
          <div class="exercise-num">🎧 Аудирование ${i + 1}</div>
          <div class="exercise-q">Послушай и запиши, что ты услышал(а): ${speakBtn(ex.answer)}</div>
          ${ex.hint ? `<div class="exercise-hint" style="font-size:0.82rem;color:#b06090;margin-bottom:8px;">${dp(ex.hint)}</div>` : ''}
          <input class="fill-input" id="fill-${i}" placeholder="Schreib auf Deutsch..."
            oninput="enableFillCheck(${i})" onkeydown="if(event.key==='Enter')checkFill(${i})" />
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
  window._autoSave?.();
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

  // Поддержка нескольких правильных ответов через |
  const correctOptions = correct.split('|').map(s => s.trim().toLowerCase());
  const isCorrect = correctOptions.some(opt => val.toLowerCase() === opt);
  if (isCorrect) {
    input.classList.add('correct-input');
    exEl.classList.add('correct');
    fb.textContent = '✓ Правильно!';
    fb.className = 'feedback ok';
  } else {
    input.classList.add('wrong-input');
    exEl.classList.add('wrong');
    fb.textContent = `✗ Почти! Правильный ответ: ${correctOptions[0]}`;
    fb.className = 'feedback bad';
  }
  window._autoSave?.();
}

// ── ЧТЕНИЕ: вопросы на понимание ──────────────────────────────────────────
function selectReadOption(i, k, j) {
  const key = `r${i}_${k}`;
  if (checked[key]) return;
  selected[key] = j;
  document.querySelectorAll(`[data-rex="${i}"][data-rq="${k}"]`).forEach(b => b.classList.remove('selected'));
  document.querySelector(`[data-rex="${i}"][data-rq="${k}"][data-idx="${j}"]`).classList.add('selected');
  document.getElementById(`rcheck-${i}-${k}`).disabled = false;
}
function checkReadChoice(i, k) {
  const key = `r${i}_${k}`;
  if (checked[key]) return;
  checked[key] = true;
  const q = LESSONS_CONTENT[lessonId].exercises[i].questions[k];
  const chosen = selected[key];
  const fb = document.getElementById(`rfb-${i}-${k}`);
  document.getElementById(`rcheck-${i}-${k}`).disabled = true;
  document.querySelectorAll(`[data-rex="${i}"][data-rq="${k}"]`).forEach(b => b.disabled = true);
  const dp = window.depersonalize || (t => t);
  if (chosen === q.answer) {
    document.querySelector(`[data-rex="${i}"][data-rq="${k}"][data-idx="${chosen}"]`).classList.add('correct-ans');
    fb.textContent = '✓ Правильно!'; fb.className = 'feedback ok';
  } else {
    document.querySelector(`[data-rex="${i}"][data-rq="${k}"][data-idx="${chosen}"]`).classList.add('wrong-ans');
    document.querySelector(`[data-rex="${i}"][data-rq="${k}"][data-idx="${q.answer}"]`).classList.add('correct-ans');
    fb.textContent = `✗ Правильный ответ: ${dp(q.options[q.answer])}`; fb.className = 'feedback bad';
  }
  window._autoSave?.();
}
function checkReadFill(i, k) {
  const key = `r${i}_${k}`;
  if (checked[key]) return;
  checked[key] = true;
  const q = LESSONS_CONTENT[lessonId].exercises[i].questions[k];
  const input = document.getElementById(`rfill-${i}-${k}`);
  const fb = document.getElementById(`rfb-${i}-${k}`);
  input.disabled = true;
  document.getElementById(`rcheck-${i}-${k}`).disabled = true;
  const opts = String(q.answer).split('|').map(s => s.trim().toLowerCase());
  if (opts.some(o => input.value.trim().toLowerCase() === o)) {
    input.classList.add('correct-input'); fb.textContent = '✓ Правильно!'; fb.className = 'feedback ok';
  } else {
    input.classList.add('wrong-input'); fb.textContent = `✗ Правильный ответ: ${opts[0]}`; fb.className = 'feedback bad';
  }
  window._autoSave?.();
}

// ── ПИСЬМО: свободный ответ с ИИ-проверкой ────────────────────────────────
async function checkWrite(exIdx) {
  if (checked[exIdx]) return;
  const dp = window.depersonalize || (t => t);
  const ex = LESSONS_CONTENT[lessonId].exercises[exIdx];
  const content = LESSONS_CONTENT[lessonId];
  const val = document.getElementById(`write-${exIdx}`).value.trim();
  if (!val) return;
  const fb = document.getElementById(`fb-${exIdx}`);
  const btn = document.getElementById(`check-${exIdx}`);
  const key = window._orKey;

  // Нет ключа (гость без ключа) — показываем образец
  if (!key) {
    checked[exIdx] = true;
    btn.disabled = true;
    document.getElementById(`ex-${exIdx}`).classList.add('correct');
    fb.className = 'feedback ok';
    fb.innerHTML = ex.sample
      ? `ИИ-проверка сейчас недоступна. Образец ответа:<br><b>${dp(ex.sample)}</b>`
      : 'ИИ-проверка сейчас недоступна. Сравни свой ответ с теорией выше 🙂';
    window._autoSave?.();
    return;
  }

  btn.disabled = true; btn.textContent = 'Проверяю...';
  fb.className = 'feedback'; fb.textContent = '';
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json', 'HTTP-Referer': window.location.origin, 'X-Title': 'Bulochka Deutsch' },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini',
        messages: [
          { role: 'system', content: 'Ты — преподаватель немецкого языка. Кратко проверь ответ ученика на русском. Формат: ✅ что хорошо (1–2 пункта), ❌ ошибки с исправлением «было → стало», 💡 один совет. Будь доброжелателен и краток.' },
          { role: 'user', content: `Тема урока: ${content.title}\nЗадание: ${ex.question}\nОтвет ученика: ${val}` },
        ],
        max_tokens: 500, temperature: 0.4,
      }),
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'Не удалось проверить, попробуй ещё раз.';
    checked[exIdx] = true;
    document.getElementById(`ex-${exIdx}`).classList.add('correct');
    fb.className = 'feedback ok';
    fb.style.whiteSpace = 'pre-wrap';
    fb.textContent = reply;
    btn.style.display = 'none';
    window._autoSave?.();
  } catch (e) {
    fb.className = 'feedback bad';
    fb.textContent = 'Ошибка проверки. Попробуй позже.';
    btn.disabled = false; btn.textContent = 'Проверить с ИИ';
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
  if (typeof window._pushToCloud === 'function') {
    window._pushToCloud();
    if (typeof window.showSync === 'function') window.showSync('☁️ Прогресс сохранён!');
  }
}

// Init
renderHeaderStats();
renderLesson();
