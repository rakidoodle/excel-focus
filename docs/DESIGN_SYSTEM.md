# Excel Focus Academy design system

## Direction

Education × spreadsheet tool × professional productivity. A calm editorial workspace: warm paper, forest-green actions, dark ink, ruled lists, compact reference material. The product should help someone identify their next action in seconds. Educational clarity takes priority over visual novelty.

The baseline used emoji navigation, identical cards, exaggerated feature counts and a malformed page shell. The redesign keeps useful learning behavior and storage IDs while replacing that presentation.

## Tokens and typography

`css/styles.css` is the token source. Light canvas `#f6f5f0`, surface `#fffefa`, ink `#24332b`, secondary text `#566358`, border `#d9ddd3`, strong border `#b4beb2`, primary `#205c43`, selection `#dbead6`. Success uses green plus a written result; warnings use ochre; errors use terracotta plus an explanation. Neutral backgrounds carry most of the interface.

Dark equivalents are explicitly defined under `[data-theme=dark]`: deep green-black canvas, lighter surfaces, quiet green borders, ivory text and pale green actions. Never invert screenshots or blindly invert the entire page.

IBM Plex Sans carries headings, navigation and reading text. IBM Plex Mono carries formulas, coordinates, numbers and editorial labels. Manrope/Source Sans and Instrument Sans/DM Sans were considered; the Plex pairing provides a consistent technical voice with two families rather than three. The implemented pairing was inspected in the rendered product. Google Fonts loads only the used weights with `display=swap`; local sans-serif/monospace fallbacks keep the UI functional if fonts cannot load.

Body: 15px desktop, 14px mobile; lesson reading text: 16px/1.8, 15px mobile. H1: 27–38px, homepage up to 49px; H2: 24px; H3: 18px. Weight 500 establishes hierarchy without making everything bold. Keep reading passages around 70 characters wide. Numeric cells align right; formulas retain monospace alignment.

## Geometry

Spacing scale: 4, 8, 16, 24, 32, 48, 64px. Use local 12px gaps for compact toolbars. Controls use 4px radius, panels 8px, exceptional larger surfaces 12px maximum. One-pixel borders and surface contrast express hierarchy. Shadows belong to dialogs, navigation overlays and temporary messages, not every row.

Desktop navigation is 222px; compact laptop navigation is 194px. Content has a 1280px maximum width; the Lab uses the available width. Page gutters step from 40/48px to 28px to 20px, with 12px mobile Lab gutters.

CSS breakpoints are centralized at the end of the stylesheet: 1100px, 800px and 540px, with a 1440px wide-screen refinement. CSS custom properties cannot be used directly in standard media-query conditions; retain these explicit breakpoints rather than inventing scattered ones.

## Composition and primitives

- Home: compact editorial split, one original illustration, three explanatory steps, then a ruled learning path.
- Dashboard: one primary continuation panel, practical next actions and a narrow learning-record column. Statistics support action, not decoration.
- Curriculum: expandable track rows with prerequisites, outcomes, lesson count and time estimate; avoid showing all lessons at once.
- Lesson: readable main column with a quiet support rail. Use headings and prose, not a box for every paragraph.
- Practice: searchable task rows with dataset context.
- Lab: title, task, toolbar, formula bar, contained scrolling grid, tabs and status. Keep horizontal scrolling inside the sheet.
- Reference: compact disclosure rows and a shortcut table.
- Projects: two-column editorial index, then a linear brief with milestones and reflection.

Reuse `.btn`, `.btn-primary`, `.btn-quiet`, `.icon-button`, `.page-heading`, `.activity-row`, `.reference-row`, `.feedback`, `.filter-bar` and native `dialog`/`details`. Do not create cosmetic clones of these primitives. A button performs an action; a link navigates.

## Icons and imagery

`js/icons.js` defines original SVG paths in a shared 24×24 viewBox, 1.6px stroke, consistent caps and joins. Decorative icons use `aria-hidden`; the containing control supplies its name. Use text where it is clearer than another icon. No emoji or external icon library for primary controls.

`assets/mark.svg` is an original grid mark. `assets/workbook-editorial.webp` is original generated artwork, compressed to 1200×800. It is an illustration, never presented as an interactive spreadsheet. Set explicit dimensions and descriptive alt text; CSS uses `height:auto` to preserve aspect ratio. See `ASSETS.md` for the generation prompt and provenance.

## States, motion and accessibility

Primary actions have hover, visible focus and disabled states. Feedback includes words, not color alone. Empty search, notes, bookmarks and project states explain the next useful action. Since content is local and synchronous, do not add fake loaders or artificial delays. Imports surface validation failures; saving failures offer export as a recovery path.

Motion is a short 140ms color/navigation transition. Reduced-motion preferences remove it. No decorative bouncing, pulsing, parallax or looping charts.

On mobile, navigation is off-canvas and inert when closed; controls are touch-sized, lesson rails become linear content, project columns collapse, and the Lab retains horizontal scroll. The grid uses roving focus rather than thousands of tab stops. Native dialogs provide focus containment and Escape dismissal.

Good: a clear function name, one-line purpose, expandable syntax and a practice action. Prohibited: giant gradient heroes, glass panels, pills for ordinary buttons, repeated card grids for every task, fake testimonials, invented metrics, decorative charts and placeholder actions.
