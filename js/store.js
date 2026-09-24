/* ============================================================
   Store — LocalStorage persistence layer
   ============================================================ */
const Store = (() => {
  const KEYS = {
    progress: 'xfa_progress',
    bookmarks: 'xfa_bookmarks',
    notes: 'xfa_notes',
    settings: 'xfa_settings',
    focusState: 'xfa_focus_state',
    completedQuizzes: 'xfa_quizzes',
  };

  function get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch { return fallback; }
  }

  function set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { if(typeof App !== 'undefined') App.showToast('Could not save on this device. Export your work before closing.'); }
  }

  return {
    read: get,
    write: set,
    // Progress
    getProgress:    () => get(KEYS.progress, {}),
    saveProgress:   (p) => set(KEYS.progress, p),
    completeLesson: (levelId, lessonId) => {
      const p = Store.getProgress();
      if (!p[levelId]) p[levelId] = { lessons: {}, quizzes: {} };
      p[levelId].lessons[lessonId] = { completed: true, completedAt: Date.now() };
      Store.saveProgress(p);
      return p;
    },
    completeQuiz: (levelId, quizId, score) => {
      const p = Store.getProgress();
      if (!p[levelId]) p[levelId] = { lessons: {}, quizzes: {} };
      p[levelId].quizzes[quizId] = { score, completedAt: Date.now() };
      Store.saveProgress(p);
      return p;
    },
    getQuizResult: (levelId, quizId) => {
      const p = Store.getProgress();
      return p[levelId]?.quizzes?.[quizId] ?? null;
    },

    // Bookmarks
    getBookmarks: () => get(KEYS.bookmarks, []),
    toggleBookmark: (type, id) => {
      const b = Store.getBookmarks();
      const idx = b.findIndex(x => x.type === type && x.id === id);
      if (idx >= 0) b.splice(idx, 1);
      else b.push({ type, id, at: Date.now() });
      Store.saveBookmarks(b);
      return b;
    },
    isBookmarked: (type, id) => Store.getBookmarks().some(x => x.type === type && x.id === id),
    saveBookmarks: (b) => set(KEYS.bookmarks, b),

    // Notes
    getNotes: () => get(KEYS.notes, {}),
    saveNote: (lessonId, text) => {
      const n = Store.getNotes();
      n[lessonId] = text;
      set(KEYS.notes, n);
    },
    getNote: (lessonId) => Store.getNotes()[lessonId] || '',

    // Settings
    getSettings: () => get(KEYS.settings, {
      theme: 'system',
      lowEnergy: false,
      focusTimer: 25,
      focusTimerEnabled: false,
      xp: 0,
      streak: 0,
      lastActive: null,
    }),
    saveSettings: (s) => set(KEYS.settings, { ...Store.getSettings(), ...s }),

    // Focus state
    getFocusState: () => get(KEYS.focusState, null),
    saveFocusState: (s) => set(KEYS.focusState, s),
    clearFocusState: () => localStorage.removeItem(KEYS.focusState),

    // Utility
    clearAll: () => Object.values(KEYS).forEach(k => localStorage.removeItem(k)),
  };
})();