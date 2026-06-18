// ══════════════════════════════════════════
// Firebase Auth + Firestore синхронизация
// ══════════════════════════════════════════

import { initializeApp }                              from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut }       from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const app  = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db   = getFirestore(app);

let currentUid  = null;
let syncTimeout = null;

// ─── АВТОРИЗАЦИЯ ────────────────────────────────────────
export function initAuth(onReady) {
  onAuthStateChanged(auth, async user => {
    if (!user) {
      // Не залогинен — на страницу входа
      window.location.href = 'login.html';
      return;
    }
    currentUid = user.uid;

    // Подтягиваем данные из облака → сливаем с локальными
    await pullFromCloud();

    // Показываем имя пользователя в хедере
    const nameEl = document.getElementById('user-name');
    if (nameEl) {
      const localLogin = localStorage.getItem('bulochka-login') || 'Булочка';
      nameEl.textContent = localLogin.charAt(0).toUpperCase() + localLogin.slice(1);
    }

    onReady();

    // Живое обновление из облака (для случая когда открыто несколько вкладок/устройств)
    listenCloud();
  });
}

// ─── ЧИТАЕМ ИЗ ОБЛАКА → ОБНОВЛЯЕМ localStorage ─────────
async function pullFromCloud() {
  try {
    const snap = await getDoc(doc(db, 'users', currentUid));
    if (!snap.exists()) return;
    const data = snap.data();
    if (data.xp       !== undefined) localStorage.setItem('bulochka-xp',       String(data.xp));
    if (data.streak   !== undefined) localStorage.setItem('bulochka-streak',    String(data.streak));
    if (data.lastDay  !== undefined) localStorage.setItem('bulochka-last-day',  data.lastDay);
    if (data.progress !== undefined) localStorage.setItem('bulochka-progress',  JSON.stringify(data.progress));
  } catch (e) {
    console.warn('pullFromCloud error:', e);
  }
}

// ─── ПИШЕМ В ОБЛАКО ─────────────────────────────────────
export function pushToCloud() {
  if (!currentUid) return;
  clearTimeout(syncTimeout);
  // Дебаунс: не чаще раза в 2 секунды
  syncTimeout = setTimeout(async () => {
    try {
      const progress = JSON.parse(localStorage.getItem('bulochka-progress') || '{}');
      const srs = JSON.parse(localStorage.getItem('bulochka-anki-srs') || '{}');
      const customWords = JSON.parse(localStorage.getItem('bulochka-custom-words') || '[]');

      await setDoc(doc(db, 'users', currentUid), {
        xp:       parseInt(localStorage.getItem('bulochka-xp')      || '0'),
        streak:   parseInt(localStorage.getItem('bulochka-streak')   || '0'),
        lastDay:  localStorage.getItem('bulochka-last-day') || '',
        progress,
        updatedAt: new Date().toISOString(),
      }, { merge: true });

      // Синхронизируем SRS и пользовательские слова в отдельных документах
      await setDoc(doc(db, 'users', currentUid, 'data', 'srs'), { data: srs, updatedAt: new Date().toISOString() }, { merge: true });
      await setDoc(doc(db, 'users', currentUid, 'data', 'custom_words'), { data: customWords, updatedAt: new Date().toISOString() }, { merge: true });
    } catch (e) {
      console.warn('pushToCloud error:', e);
    }
  }, 2000);
}

// ─── СЛУШАЕМ ОБНОВЛЕНИЯ В РЕАЛЬНОМ ВРЕМЕНИ ──────────────
function listenCloud() {
  onSnapshot(doc(db, 'users', currentUid), snap => {
    if (!snap.exists()) return;
    const data = snap.data();
    // Обновляем только если облачные данные новее
    const cloudXP = data.xp ?? 0;
    const localXP = parseInt(localStorage.getItem('bulochka-xp') || '0');
    if (cloudXP > localXP) {
      localStorage.setItem('bulochka-xp', String(cloudXP));
      localStorage.setItem('bulochka-streak', String(data.streak ?? 0));
      localStorage.setItem('bulochka-progress', JSON.stringify(data.progress ?? {}));
      // Обновляем UI без перезагрузки
      if (typeof renderStats   === 'function') renderStats();
      if (typeof renderOverall === 'function') renderOverall();
      if (typeof renderModules === 'function') renderModules();
    }
  });
}

// ─── ВЫХОД ──────────────────────────────────────────────
// ─── ПОЛЬЗОВАТЕЛЬСКИЕ СЛОВА И ДРУГИЕ ДАННЫЕ ──────────────────────
export async function saveToFirestore(uid, collection, data) {
  try {
    await setDoc(doc(db, 'users', uid, 'data', collection), { data, updatedAt: new Date().toISOString() }, { merge: true });
  } catch (e) {
    console.warn(`saveToFirestore(${collection}) error:`, e);
  }
}

export async function loadFromFirestore(uid, collection) {
  try {
    const snap = await getDoc(doc(db, 'users', uid, 'data', collection));
    return snap.exists() ? snap.data().data : null;
  } catch (e) {
    console.warn(`loadFromFirestore(${collection}) error:`, e);
    return null;
  }
}

// Загружаем все данные из облака при загрузке (override локальных если облачные новее)
export async function loadAllDataFromFirestore(uid) {
  try {
    // Загружаем SRS
    const cloudSRS = await loadFromFirestore(uid, 'srs');
    if (cloudSRS) localStorage.setItem('bulochka-anki-srs', JSON.stringify(cloudSRS));

    // Загружаем пользовательские слова
    const cloudWords = await loadFromFirestore(uid, 'custom_words');
    if (cloudWords) localStorage.setItem('bulochka-custom-words', JSON.stringify(cloudWords));
  } catch (e) {
    console.warn('loadAllDataFromFirestore error:', e);
  }
}

// Экспортируем для использования в других скриптах
window.saveToFirestore = saveToFirestore;
window.loadFromFirestore = loadFromFirestore;
window.loadAllDataFromFirestore = loadAllDataFromFirestore;

export async function logout() {
  await signOut(auth);
  localStorage.clear();
  window.location.href = 'login.html';
}

export { auth, db };
