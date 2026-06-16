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
      await setDoc(doc(db, 'users', currentUid), {
        xp:       parseInt(localStorage.getItem('bulochka-xp')      || '0'),
        streak:   parseInt(localStorage.getItem('bulochka-streak')   || '0'),
        lastDay:  localStorage.getItem('bulochka-last-day') || '',
        progress,
        updatedAt: new Date().toISOString(),
      }, { merge: true });
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
export async function logout() {
  await signOut(auth);
  localStorage.clear();
  window.location.href = 'login.html';
}

export { auth, db };
