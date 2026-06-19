// ════════════════════════════════════════════════════════════════════
// theme.js — оформление под тип пользователя.
//
// • personal (Марго, логин 'bulochka') = ДЕФОЛТ: разметку не трогаем вообще.
// • generic (все остальные): убираем персональные надписи и сердечки —
//   более простой нейтральный дизайн.
//
// Подключается на внутренних страницах (НЕ на login.html — там общий вход).
// Сердечки прячутся CSS-классом `.theme-generic` (см. css/style.css), чтобы
// не мигали; текст заменяется на DOMContentLoaded.
// ════════════════════════════════════════════════════════════════════
(function () {
  const PERSONAL_USERS = ['bulochka'];
  const login = (localStorage.getItem('bulochka-login') || '').toLowerCase();
  const isPersonal = PERSONAL_USERS.includes(login);

  // как можно раньше — чтобы CSS успел скрыть сердечки/сплеш
  document.documentElement.classList.add(isPersonal ? 'theme-personal' : 'theme-generic');
  window.IS_PERSONAL_THEME = isPersonal;

  const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';

  // Нейтральное имя для гостей: их логин (если буквенный) иначе «Anna»
  const rawLogin = localStorage.getItem('bulochka-login') || '';
  const neutralName = /^[a-zA-Zа-яёА-ЯЁ]+$/.test(rawLogin) ? cap(rawLogin) : 'Anna';

  // Подмена персональных имён в отображаемом тексте.
  // personal → identity (Маргошины данные видит как есть);
  // generic  → заменяет Марго/Булочка на нейтральное имя.
  window.depersonalize = isPersonal
    ? (t => t)
    : (t => t == null ? t : String(t).replace(/Марго|Margo|Булочк[а-яёА-ЯЁ]*|Bulochka/g, neutralName));

  if (isPersonal) return; // тема Марго — больше ничего не меняем

  const SITE = 'Deutsch lernen';

  function apply() {
    // <title>: "… — Булочка учит Deutsch" → "… — Deutsch lernen"
    document.title = document.title.replace(/Булочка учит Deutsch/g, SITE);

    // Главная: приветствие и подзаголовок (статичная разметка, не перетирается)
    const heroName = document.getElementById('hero-name');
    if (heroName) {
      const h1 = heroName.closest('h1');
      const name = cap(localStorage.getItem('bulochka-login') || '');
      if (h1) h1.textContent = name ? `Willkommen, ${name}! 🇩🇪` : 'Willkommen! 🇩🇪';
      const p = h1 && h1.parentElement && h1.parentElement.querySelector('p');
      if (p) p.textContent = 'Курс немецкого от A1 до B1. Учись в своём темпе.';
    }

    // Футер «от Матвея для Марго» → нейтрально
    const sig = document.querySelector('.footer-sig');
    if (sig) sig.textContent = SITE;

    // Сплеш-экран сердца — на всякий случай удалить (CSS уже прячет)
    const splash = document.getElementById('heart-splash');
    if (splash) splash.remove();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
