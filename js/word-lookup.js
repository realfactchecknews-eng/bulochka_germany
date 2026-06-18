// ════════════════════════════════════════════════════════════════════
// word-lookup.js — кликабельные немецкие слова: перевод + добавление в Anki
// Подключается на страницах с немецким текстом (уроки и т.п.).
// Использует window._orKey (OpenRouter) для перевода и
// localStorage 'bulochka-custom-words' (+ Firestore sync) для колоды «Мои слова».
// ════════════════════════════════════════════════════════════════════
(function () {
  const CUSTOM_WORDS_KEY = 'bulochka-custom-words';
  const transCache = {};

  // ── Колода «Мои слова» ──────────────────────────────────────────────
  function getCustomWords() {
    return JSON.parse(localStorage.getItem(CUSTOM_WORDS_KEY) || '[]');
  }
  function addWordToCollection(de, ru, ex = '') {
    const words = getCustomWords();
    if (words.some(w => w.de === de)) return false;
    words.push({ de, ru, ex });
    localStorage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(words));
    const uid = localStorage.getItem('bulochka_uid');
    if (uid && typeof window.saveToFirestore === 'function') {
      window.saveToFirestore(uid, 'custom_words', words).catch(() => {});
    }
    return true;
  }
  // Доступно глобально (та же функция, что и addWordToAnki на странице карточек)
  window.addWordToCollection = addWordToCollection;

  // ── Стили (вставляем один раз, чтобы не править CSS каждой страницы) ──
  function injectStyles() {
    if (document.getElementById('wl-styles')) return;
    const css = `
      .wl-word { cursor: pointer; border-radius: 3px; transition: background .12s; }
      .wl-word:hover { background: #ffd6e7; }
      .wl-word.wl-added { background: #d6f5d6; }
      .wl-tip {
        position: fixed; z-index: 3000; background: #fff;
        border: 2px solid var(--pink-300, #ffadd1); border-radius: 14px;
        padding: 12px 16px 12px; box-shadow: 0 8px 32px rgba(224,57,127,0.18);
        max-width: 260px; min-width: 150px; display: none;
        font-family: 'Inter', sans-serif;
      }
      .wl-tip.visible { display: block; }
      .wl-tip-word { font-weight: 800; font-size: 1rem; color: #3a2230; margin-bottom: 4px; }
      .wl-tip-trans { font-size: 0.9rem; color: var(--pink-500, #e0397f); font-weight: 600; margin-bottom: 8px; }
      .wl-tip-loading { font-size: 0.82rem; color: #999; }
      .wl-tip-close { position: absolute; top: 6px; right: 9px; background: none; border: none; font-size: .85rem; color: #999; cursor: pointer; }
      .wl-tip-add {
        display: block; width: 100%; padding: 8px; border: none; border-radius: 8px;
        background: linear-gradient(135deg, var(--pink-400,#ff80b9), var(--pink-500,#e0397f));
        color: #fff; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: transform .12s;
      }
      .wl-tip-add:hover { transform: translateY(-1px); }
      .wl-tip-add:disabled { background: #cda; opacity: .8; cursor: default; transform: none; }
    `;
    const style = document.createElement('style');
    style.id = 'wl-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ── Тултип (один на всю страницу) ───────────────────────────────────
  let tip, tipWord, tipTrans, tipAdd;
  let current = { de: '', ru: '', el: null };

  function ensureTip() {
    if (tip) return;
    tip = document.createElement('div');
    tip.className = 'wl-tip';
    tip.innerHTML =
      '<button class="wl-tip-close" aria-label="Закрыть">✕</button>' +
      '<div class="wl-tip-word"></div>' +
      '<div class="wl-tip-trans"></div>' +
      '<button class="wl-tip-add">➕ В Anki</button>';
    document.body.appendChild(tip);
    tipWord  = tip.querySelector('.wl-tip-word');
    tipTrans = tip.querySelector('.wl-tip-trans');
    tipAdd   = tip.querySelector('.wl-tip-add');
    tip.querySelector('.wl-tip-close').addEventListener('click', (e) => { e.stopPropagation(); closeTip(); });
    tip.addEventListener('click', (e) => e.stopPropagation());
    tipAdd.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!current.de || !current.ru) return;
      addWordToCollection(current.de, current.ru, '');
      if (current.el) current.el.classList.add('wl-added');
      tipAdd.disabled = true;
      tipAdd.textContent = '✓ Добавлено';
    });
    document.addEventListener('click', closeTip);
  }

  function closeTip() { if (tip) tip.classList.remove('visible'); }

  async function translate(word) {
    const lower = word.toLowerCase();
    if (transCache[lower]) return transCache[lower];
    const key = window._orKey;
    if (!key) return null;
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json', 'HTTP-Referer': window.location.origin, 'X-Title': 'Bulochka Deutsch' },
        body: JSON.stringify({
          model: 'openai/gpt-4o-mini',
          messages: [{ role: 'user', content: `Переведи немецкое слово "${word}" на русский. Дай только перевод (1–4 слова), без пояснений. Если слово не немецкое — напиши "—".` }],
          max_tokens: 30, temperature: 0,
        }),
      });
      const data = await res.json();
      const trans = data.choices?.[0]?.message?.content?.trim() || '—';
      transCache[lower] = trans;
      return trans;
    } catch (e) {
      return null;
    }
  }

  async function onWordClick(e, el, word) {
    e.stopPropagation();
    ensureTip();
    const rect = el.getBoundingClientRect();
    tip.style.left = Math.min(rect.left, window.innerWidth - 280) + 'px';
    tip.style.top  = (rect.bottom + 8) + 'px';
    tipWord.textContent = word;
    tipTrans.innerHTML = '<span class="wl-tip-loading">Перевожу…</span>';
    tipAdd.style.display = 'none';
    tipAdd.disabled = false;
    tipAdd.textContent = '➕ В Anki';
    current = { de: word, ru: '', el };
    tip.classList.add('visible');

    const trans = await translate(word);
    // тултип мог уже закрыться/смениться
    if (current.de !== word) return;
    if (!trans) { tipTrans.textContent = '⚠️ ИИ недоступен'; return; }
    tipTrans.textContent = trans;
    if (trans !== '—') {
      current.ru = trans;
      const already = getCustomWords().some(w => w.de === word);
      tipAdd.style.display = 'block';
      tipAdd.disabled = already;
      tipAdd.textContent = already ? '✓ Уже в колоде' : '➕ В Anki';
    }
  }

  // ── Оборачиваем немецкие слова в кликабельные спаны ──────────────────
  // Немецкое слово: латиница (с äöüß), длина ≥ 3, без кириллицы.
  const GERMAN_RE = /[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß\-]{2,}/g;          // для exec (global)
  const GERMAN_TEST = /[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß\-]{2,}/;          // для boolean-проверок (без g)
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'BUTTON', 'INPUT', 'TEXTAREA', 'A']);

  function wrapTextNode(node) {
    const text = node.nodeValue;
    if (!text || !GERMAN_TEST.test(text)) return;
    GERMAN_RE.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while ((m = GERMAN_RE.exec(text))) {
      const word = m[0];
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const span = document.createElement('span');
      span.className = 'wl-word';
      span.textContent = word;
      span.addEventListener('click', (e) => onWordClick(e, span, word));
      frag.appendChild(span);
      last = m.index + word.length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  function attach(container) {
    if (!container) return;
    injectStyles();
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let p = node.parentNode;
        while (p && p !== container) {
          if (SKIP_TAGS.has(p.tagName) || (p.classList && p.classList.contains('wl-word'))) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return GERMAN_TEST.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(wrapTextNode);
  }

  window.WordLookup = { attach };
})();
