# Accessibility implementation and review

The app uses landmark navigation, one visible page H1, semantic section headings, native links/buttons, labeled inputs, native disclosures and native dialogs. The skip link focuses main content without changing application routes. Navigation announces its current page; mobile navigation is inert while closed. Escape closes dialogs and mobile navigation. Focus indicators use a two-pixel accent outline with offset.

SVG icons are decorative and hidden from assistive technology; button text or an accessible label supplies purpose. The original artwork has descriptive alt text. Success/error states include written explanations. Reduced-motion preferences remove transitions and animations.

The Lab exposes a named grid with row/column headers and coordinate-labeled inputs. Only the active cell is in normal tab order. Arrow keys move through cells, Shift extends selection, F2/Enter edits, and Escape cancels. The formula/name inputs provide alternatives to pointer editing. Cell size is a keyboard-accessible alternative to dragging resize boundaries. Native sheet tabs expose selected state. Undo/redo, import errors, save errors and answer feedback are visible; toast/feedback regions announce updates.

Responsive targets: 1440, 1024, 768 and 390px. Mobile toolbar controls are enlarged; the workbook scrolls inside its own region, without making the page scroll sideways. Reference tables have contained overflow. Dialogs fit within the viewport and scroll internally.

Review checklist when changing a surface:

- Reach its controls with Tab; verify visible focus and meaningful names.
- Complete the task without pointer input; verify Escape and focus return.
- Check light/dark text contrast and non-color feedback.
- Confirm long formulas, labels and imported text do not break page width.
- Check reduced motion, zoom and the small-screen navigation state.
- Use a screen reader for release acceptance when available.

Automated/browser checks do not constitute a WCAG conformance claim. Full screen-reader review and a comprehensive assistive-technology matrix remain release work. The bounded grid is a learning tool; native Excel and browser shortcuts can differ, and those differences are labeled.
