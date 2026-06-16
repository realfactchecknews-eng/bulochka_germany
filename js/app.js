// State
function getProgress() {
  return JSON.parse(localStorage.getItem('bulochka-progress') || '{}');
}
function saveProgress(p) {
  localStorage.setItem('bulochka-progress', JSON.stringify(p));
}
function getXP() { return parseInt(localStorage.getItem('bulochka-xp') || '0'); }
function addXP(n) {
  const xp = getXP() + n;
  localStorage.setItem('bulochka-xp', xp);
  return xp;
}
function getStreak() { return parseInt(localStorage.getItem('bulochka-streak') || '0'); }

// Total lessons count
function totalLessons() {
  return MODULES.reduce((s, m) => s + m.lessons.length, 0);
}
function completedLessons() {
  const p = getProgress();
  return Object.values(p).filter(Boolean).length;
}

// Render header stats
function renderStats() {
  const xpEl = document.getElementById('total-xp');
  const streakEl = document.getElementById('streak');
  if (xpEl) xpEl.textContent = getXP();
  if (streakEl) streakEl.textContent = getStreak();
}

// Render overall progress
function renderOverall() {
  const pct = Math.round((completedLessons() / totalLessons()) * 100);
  const bar = document.getElementById('overall-bar');
  const pctEl = document.getElementById('overall-pct');
  if (bar) bar.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
}

// Render modules
function renderModules() {
  const container = document.getElementById('modules-container');
  if (!container) return;
  const progress = getProgress();

  container.innerHTML = MODULES.map((mod, mi) => {
    const prevCompleted = mi === 0 ? true :
      MODULES[mi - 1].lessons.every(l => progress[l.id]);

    const lessonsHtml = mod.lessons.map((lesson, li) => {
      const done = !!progress[lesson.id];
      const unlocked = prevCompleted || li === 0 || !!progress[mod.lessons[li - 1]?.id];
      const locked = !unlocked && !done;
      return `
        <a class="lesson-card ${done ? 'completed' : ''} ${locked ? 'locked' : ''}"
           href="${locked ? '#' : 'lesson.html?id=' + lesson.id}"
           onclick="${locked ? 'return false' : ''}">
          <div class="lesson-num">Урок ${li + 1}</div>
          <div class="lesson-title">${lesson.title}</div>
          <div class="lesson-desc">${lesson.desc}</div>
          <div class="lesson-footer">
            <span class="lesson-xp">+${lesson.xp} XP</span>
            <span class="lesson-type">${lesson.type}</span>
          </div>
        </a>`;
    }).join('');

    return `
      <div class="module">
        <div class="module-header">
          <div class="module-icon" style="background:${mod.iconBg}">${mod.icon}</div>
          <div class="module-meta">
            <h3>${mod.title}</h3>
            <p>${mod.desc}</p>
          </div>
          <span class="module-level-tag tag-${mod.level.toLowerCase()}">${mod.level}</span>
        </div>
        <div class="lessons-grid">${lessonsHtml}</div>
      </div>`;
  }).join('');
}

// Init index page
if (document.getElementById('modules-container')) {
  renderStats();
  renderOverall();
  renderModules();
}
