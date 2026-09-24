# Architecture and repository map

Static HTML, CSS and classic JavaScript scripts. No frontend framework or application server. `index.html` explicitly orders shared global bindings. `App` routes hash URLs (`#learn/<track>/<lesson>`); `Components` renders each view. Back/forward and direct lesson links use the same routing path.

| Source | Responsibility |
| --- | --- |
| `index.html`, `css/styles.css` | Semantic shell, responsive layout and design tokens |
| `js/app.js`, `js/components.js` | Routing, shared actions, screen rendering, native dialogs |
| `js/store.js` | Existing learner data contracts plus generic local reads/writes |
| `js/curriculum.js` | Original 20 lessons and stable lookup helpers |
| `js/academy.js` | 24 modern tracks, concepts and applied micro-lessons |
| `js/exercises.js`, `js/practice-skills.js` | Formula and structural workbook tasks |
| `js/datasets.js` | Eight deterministic fictional datasets and workbook seeds |
| `js/project-cases.js` | 32 case-study briefs, milestones and checkpoints |
| `js/reference.js` | Function, shortcut and error references |
| `js/lab.js`, `js/engine.js` | Grid interaction, workbook history, formula parser and CSV |
| `js/quiz.js`, `js/focus.js`, `js/search.js` | Checkpoints, focus sessions and global search |
| `js/icons.js`, `assets/` | Original icon system, mark and compressed editorial art |
| `lib/formula-entry.js`, `js/vendor/` | Formula.js selection and generated browser bundle |
| `tests/`, `scripts/` | Unit/content/browser checks and documentation generation |

The original `formulas.js`, `shortcuts.js` and `projects.js` establish legacy data globals; the modern reference/project sources replace their arrays at startup. Legacy lesson IDs and storage keys are preserved. Future cleanup may migrate these declarations, but must not break script order or old bookmarks.

State is local to the browser origin. There is no backend, authentication, analytics, remote content fetch or collaboration service. Google Fonts is the only runtime network dependency; system fonts remain usable when offline. The application itself can be served as static files; a local HTTP server is recommended for reliable clipboard and storage behavior.

Sanitize learner/imported text before inserting HTML. Author-controlled lesson HTML is trusted source content, not imported user HTML. Formulas use a parser, never eval. Import validation limits workbook size and rejects invalid coordinates. Do not put implementation diagnostics into normal product UI unless they explain a limitation or recovery action.
