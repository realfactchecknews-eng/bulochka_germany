import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';

const MODEL = 'openai/gpt-4o-mini';

const SYSTEM_PROMPT = `Ты — Ski Aggu, крутой и дружелюбный преподаватель немецкого языка с 15-летним опытом. Твоя студентка — Марго, русскоязычная девушка, которая учит немецкий с нуля чтобы поступить в университет в Австрии.

ТВОЯ РОЛЬ: Ты ТОЛЬКО преподаватель немецкого. Ты не выходишь из роли ни при каких условиях. Ты не обсуждаешь другие темы кроме немецкого языка, грамматики, лексики, культуры немецкоязычных стран и учёбы.

Если Марго пишет тебе на русском — отвечай на русском, но объяснения на немецком всегда сопровождай переводом.
Если она пишет на немецком — мягко исправляй ошибки прямо в ответе и хвали за попытку.
Если она спрашивает про что-то не связанное с немецким — дружелюбно верни разговор к языку.

СТИЛЬ: Тёплый, поддерживающий, немного с юмором. Объяснения короткие и понятные. Используй примеры. Можешь иногда говорить «Sehr gut, Margo!» или «Wunderbar!» — это мотивирует.

Помни: её цель — поступить в австрийский университет. Это важно и ты всегда об этом помнишь.`;

let orKey = null;
const history = []; // conversation memory for this session

async function loadKey() {
  if (orKey) return orKey;
  if (window._orKey) { orKey = window._orKey; return orKey; }
  try {
    const appName = 'chat-widget';
    const existing = getApps().find(a => a.name === appName);
    const app = existing || initializeApp(FIREBASE_CONFIG, appName);
    const db = getFirestore(app);
    const snap = await getDoc(doc(db, 'config', 'openrouter'));
    if (snap.exists()) { orKey = snap.data().key; return orKey; }
  } catch(e) { console.warn('Chat: key load failed', e); }
  return null;
}

function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .chat-fab {
      position: fixed; bottom: 80px; right: 24px; z-index: 900;
      width: 54px; height: 54px;
      background: linear-gradient(135deg, #f855a0, #e0397f);
      border: none; border-radius: 50%; cursor: pointer;
      box-shadow: 0 4px 20px rgba(224,57,127,0.45);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.35rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .chat-fab:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(224,57,127,0.55); }
    .chat-fab .chat-fab-dot {
      position: absolute; top: 2px; right: 2px;
      width: 14px; height: 14px; border-radius: 50%;
      background: #fff; display: flex; align-items: center; justify-content: center;
      font-size: 0.5rem; color: #e0397f; font-weight: 900;
    }

    .chat-popup {
      position: fixed; bottom: 148px; right: 24px; z-index: 901;
      width: 340px; max-width: calc(100vw - 32px);
      background: #fff; border-radius: 22px;
      border: 1.5px solid #ffd6e7;
      box-shadow: 0 12px 48px rgba(224,57,127,0.18);
      display: flex; flex-direction: column;
      overflow: hidden;
      transform: scale(0.85) translateY(20px);
      opacity: 0; pointer-events: none;
      transition: transform 0.22s cubic-bezier(0.34,1.3,0.64,1), opacity 0.18s;
      transform-origin: bottom right;
    }
    .chat-popup.open {
      transform: scale(1) translateY(0);
      opacity: 1; pointer-events: all;
    }

    .chat-header {
      background: linear-gradient(135deg, #f855a0, #e0397f);
      padding: 13px 16px; display: flex; align-items: center; gap: 10px;
    }
    .chat-avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.25);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; flex-shrink: 0;
    }
    .chat-header-info { flex: 1; }
    .chat-header-name { color: #fff; font-weight: 700; font-size: 0.9rem; }
    .chat-header-sub { color: rgba(255,255,255,0.8); font-size: 0.72rem; }
    .chat-close-btn {
      background: none; border: none; color: rgba(255,255,255,0.8);
      font-size: 1.1rem; cursor: pointer; padding: 2px 6px;
      border-radius: 8px; transition: background 0.15s;
    }
    .chat-close-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }

    .chat-messages {
      flex: 1; overflow-y: auto; padding: 14px 14px 8px;
      display: flex; flex-direction: column; gap: 10px;
      max-height: 320px; min-height: 180px;
      scroll-behavior: smooth;
    }
    .chat-messages::-webkit-scrollbar { width: 4px; }
    .chat-messages::-webkit-scrollbar-thumb { background: #ffd6e7; border-radius: 4px; }

    .chat-msg {
      max-width: 88%; font-size: 0.88rem; line-height: 1.55;
      padding: 9px 13px; border-radius: 16px;
      animation: msgIn 0.2s ease;
    }
    @keyframes msgIn { from { opacity:0; transform: translateY(6px); } to { opacity:1; transform:none; } }
    .chat-msg.bot {
      background: linear-gradient(135deg, #fff0f7, #fce8f3);
      color: #3d1a2e; border-bottom-left-radius: 4px;
      align-self: flex-start;
    }
    .chat-msg.user {
      background: linear-gradient(135deg, #f855a0, #e0397f);
      color: #fff; border-bottom-right-radius: 4px;
      align-self: flex-end;
    }
    .chat-msg.typing { opacity: 0.7; font-style: italic; }

    .chat-input-row {
      display: flex; gap: 8px; padding: 10px 12px 12px;
      border-top: 1px solid #fce8f3;
    }
    .chat-input {
      flex: 1; border: 1.5px solid #ffd6e7; border-radius: 12px;
      padding: 9px 13px; font-family: 'Inter', sans-serif; font-size: 0.88rem;
      color: #3d1a2e; outline: none; resize: none;
      transition: border-color 0.18s; background: #fff8fc;
      max-height: 90px; overflow-y: auto;
    }
    .chat-input:focus { border-color: #f855a0; }
    .chat-input::placeholder { color: #d4a0b8; }
    .chat-send-btn {
      width: 38px; height: 38px; flex-shrink: 0;
      background: linear-gradient(135deg, #f855a0, #e0397f);
      border: none; border-radius: 12px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; transition: opacity 0.18s, transform 0.15s;
      align-self: flex-end;
    }
    .chat-send-btn:hover:not(:disabled) { opacity: 0.88; transform: scale(1.06); }
    .chat-send-btn:disabled { opacity: 0.4; cursor: default; }
  `;
  document.head.appendChild(style);
}

function injectHTML() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <button class="chat-fab" id="chat-fab" title="Спросить преподавателя">
      💬
      <span class="chat-fab-dot">AI</span>
    </button>
    <div class="chat-popup" id="chat-popup">
      <div class="chat-header">
        <div class="chat-avatar">👩‍🏫</div>
        <div class="chat-header-info">
          <div class="chat-header-name">Ski Aggu</div>
          <div class="chat-header-sub">Преподаватель немецкого · онлайн</div>
        </div>
        <button class="chat-close-btn" id="chat-close">✕</button>
      </div>
      <div class="chat-messages" id="chat-messages"></div>
      <div class="chat-input-row">
        <textarea class="chat-input" id="chat-input" placeholder="Спроси про немецкий..." rows="1"></textarea>
        <button class="chat-send-btn" id="chat-send" title="Отправить">➤</button>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);
}

function addMsg(text, role) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function showTyping() {
  return addMsg('печатает...', 'bot typing');
}

async function sendMessage(text) {
  if (!text.trim()) return;

  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  input.value = '';
  input.style.height = '';
  sendBtn.disabled = true;
  addMsg(text, 'user');

  history.push({ role: 'user', content: text });

  const typingEl = showTyping();

  const key = await loadKey();
  if (!key) {
    typingEl.remove();
    addMsg('Нет подключения к ИИ. Попробуй позже.', 'bot');
    sendBtn.disabled = false;
    return;
  }

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
        'X-Title': 'Bulochka Deutsch Chat',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...history,
        ],
        max_tokens: 600,
        temperature: 0.6,
      }),
    });

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'Не смогла ответить, попробуй ещё раз.';
    history.push({ role: 'assistant', content: reply });

    typingEl.remove();
    addMsg(reply, 'bot');

    // Ограничиваем историю — макс 20 сообщений (чтоб не раздувать запрос)
    if (history.length > 20) history.splice(0, 2);

  } catch(e) {
    typingEl.remove();
    addMsg('Ошибка соединения. Попробуй позже.', 'bot');
  }

  sendBtn.disabled = false;
}

function init() {
  injectStyles();
  injectHTML();

  const fab = document.getElementById('chat-fab');
  const popup = document.getElementById('chat-popup');
  const closeBtn = document.getElementById('chat-close');
  const sendBtn = document.getElementById('chat-send');
  const input = document.getElementById('chat-input');

  let opened = false;

  fab.addEventListener('click', () => {
    opened = !opened;
    popup.classList.toggle('open', opened);
    if (opened && document.getElementById('chat-messages').children.length === 0) {
      addMsg('Привет, Марго! 👋 Я Ski Aggu, твой преподаватель немецкого. Спрашивай всё что непонятно — грамматику, слова, произношение. Ich helfe dir gerne! 💕', 'bot');
    }
    if (opened) setTimeout(() => input.focus(), 250);
  });

  closeBtn.addEventListener('click', () => {
    opened = false;
    popup.classList.remove('open');
  });

  sendBtn.addEventListener('click', () => sendMessage(input.value));

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
    }
  });

  // Авто-растягивание textarea
  input.addEventListener('input', () => {
    input.style.height = '';
    input.style.height = Math.min(input.scrollHeight, 90) + 'px';
  });
}

init();
