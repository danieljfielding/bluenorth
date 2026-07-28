# BlueNorth Design System

> **Smarter Procurement. Better outcomes.**
> Brand + product design system for **BlueNorth**, a procurement platform that gives teams a single source of truth from intake → purchase order → invoice.

This repository is the canonical source for BlueNorth's visual language: design tokens, brand assets, reusable React components, and a click-through UI kit of the product.

---

## Sources provided

| Source | What it was | Where it lives now |
|---|---|---|
| `colour pallette.png` | Brand color palette sheet (named swatches, slide "02 · Color Palette") | `assets/reference/colour-palette.png` |
| Logo set (12 PNGs) | Primary, reverse, mono lockups + the four-point "north star" mark | `assets/logos/` |

**No product codebase or Figma file was provided.** The token system and brand cards are derived directly from the supplied palette + logos and are authoritative. The **UI kit** (`ui_kits/bluenorth-app/`) is an on-brand *interpretation* of a procurement product, not a recreation of real product code — see its README and the caveat at the bottom.

---

## CONTENT FUNDAMENTALS

How BlueNorth writes.

- **Voice:** confident, plain-spoken, operator-to-operator. BlueNorth sells clarity and control over messy procurement, so copy is precise and outcome-led — never breathless or salesy.
- **Tagline & structure:** short declaratives, often paired — *"Smarter Procurement. Better outcomes."* Two beats: capability, then payoff. Reuse this rhythm for headlines (*"Every purchase, one source of truth."*).
- **Person:** speak to **"you"** (the procurement lead); BlueNorth is **"we/BlueNorth"** only when needed. Most product UI is impersonal and action-first (*"Submit for approval", "Add supplier"*).
- **Casing:** **Sentence case everywhere** — buttons, nav, headings, table headers. Never Title Case UI. The only all-caps is the **mono eyebrow/kicker** label (e.g. `02 · COLOR PALETTE`, `SPEND YTD`), always letter-spaced.
- **Numbers & money:** numerals always (*"3 requisitions", "$48,000", "4.2d"*). Currency abbreviated in tight UI (`$2.4M`, `$312K`). Set figures in the **mono** face so columns align.
- **Tone in errors:** factual and helpful, no blame — *"Over $50K — needs dual approval"*, *"Could not reach the ERP connector. Retrying in 5 minutes."*
- **Procurement vocabulary:** requisition, purchase order (PO), invoice, supplier/vendor, cost center, spend under management, cycle time, dual approval, NET-30, preferred supplier, risk tier.
- **No emoji.** Status is communicated with color + a dot/icon, never emoji. No exclamation marks in product UI.
- **Punctuation:** periods on full-sentence supporting copy; none on labels, buttons, or chips.

**Examples**
- Headline: *Consolidate spend across every supplier.*
- Sub: *From intake to PO to invoice — approvals that move at the speed of your business.*
- Button: *Create purchase order* · *Submit for approval* · *Decline*
- Empty state: *No requisitions match your filter.*

---

## VISUAL FOUNDATIONS

The look and feel, and the rules that produce it.

### Color
- **A cool, navy-led palette.** Polaris Blue `#1F3A6B` is the primary; Sky Blue `#5E89C9` is the lighter brand accent (the "Blue" in the wordmark). Deep Polaris `#0E1A33` is the dark surface (sidebars, login, inverse sections).
- **Warm-neutral page base.** Surfaces sit on **Paper `#F7F7F4`** (a warm off-white), not pure white — cards are white on Paper. This warmth keeps the heavy navy from feeling clinical.
- **Accents are used sparingly and semantically.** Aurora Teal = success, Sun = warning, Signal Red = danger/error, Glacier = info/links, Beacon/Ember = warm data-viz only. Burgundy is a rare emphasis tone.
- **Soft brand wash** (`--surface-brand-soft`, a pale Polaris tint `#E7EDF6`) backs hovered table rows, selected nav, and quiet info blocks.
- Full palette + semantic aliases: `tokens/colors.css`.

### Typography
- **Brand / display → Poppins.** Geometric, even, friendly-but-serious — matches the wordmark. Used for the logotype, page titles, card titles, big numbers. Weights 600/700. Tight tracking (`-0.02em`) at display sizes.
- **UI / body → Public Sans.** An institutional, highly legible grotesque (USWDS lineage) that reads as trustworthy and neutral — right for tables, forms, and dense data. Default body 15px.
- **Data / labels → IBM Plex Mono.** Eyebrows (uppercase, `0.12em` tracking), IDs (`REQ-4417`), codes, metrics, and all currency/number columns. The mono face is a signature motif, not decoration.
- Scale, weights, tracking: `tokens/typography.css`.
- ⚠️ **Font substitution:** the exact licensed brand faces are unknown. Poppins / Public Sans / IBM Plex Mono are the closest **Google Fonts** matches to the wordmark and palette-sheet typography. **Send the real brand fonts and we'll swap them in** (one edit in `tokens/fonts.css`).

### Logo & the north star
- The wordmark is two-tone: **Blue** (Sky Blue) + **North** (Polaris), with a four-point **north-star sparkle** to the upper-right. The star alone is the app icon / favicon / loading mark.
- Reverse (white) lockup on Deep Polaris is the default for dark surfaces (login, footers). Mono lockups exist for one-color contexts.
- Clearspace: keep at least the height of the "B" around the lockup. Don't recolor, rotate, or add effects.

### Backgrounds
- Predominantly **flat** — Paper for app, white for cards, Deep Polaris for inverse.
- The **one sanctioned gradient** is a subtle dark radial on brand/login surfaces (`radial-gradient(120% 100% at 0% 0%, #1c386a, #0E1A33)`) — low-contrast, navy-on-navy, never rainbow. The star mark may sit at ~10% opacity as a large background watermark on dark panels.
- No photography in-product; no textures, no noise/grain. Imagery, where used in marketing, should read **cool and clean** (blue hour / aurora / northern light tonality), not warm.

### Elevation, borders, radius
- **Shadows are cool and navy-tinted**, low-spread (`rgba(22,29,43,…)`), never warm black. Ramp xs→xl in `tokens/spacing.css`. Cards default to `--shadow-sm`; overlays/drawers use `--shadow-xl`.
- **Borders do most of the work.** 1px `--border-default` (#DCE0E5) separates surfaces; hairline `--border-subtle` (Ice) for internal dividers. Inputs use a 1.5px border that turns Sky Blue on focus with a soft focus ring.
- **Radius is measured, not pill-everything:** 8px (`md`) for buttons/inputs, 12px (`lg`) for cards, full pill reserved for badges, status dots, and progress tracks.

### Motion
- **Quick and confident, no bounce.** Durations 120/200/320ms; standard easing `cubic-bezier(0.2,0,0.1,1)`, entrances use a gentle ease-out. Drawers slide in over a 320ms ease-out; toasts rise + fade.
- **Hover** = subtle background fill (brand-soft) or a darker action color; cards lift `-2px` with a deeper shadow. **Press** = `scale(0.99)` + darker fill (buttons) or `scale(0.94)` (icon buttons). No color-flip surprises.
- Respect `prefers-reduced-motion`.

### Layout
- Fixed **248px dark sidebar** + **60px top bar**; content scrolls in the main column, capped at `--container-wide` (1440px) and centered.
- 4px spacing grid. Generous 24–28px view padding. Dashboards use 4-up KPI grids and a 1.4 / 1 two-column split.
- Tables are border-separated rows (not zebra), 62px tall, with a hover wash and a mono ID column.

### Transparency & blur
- Used lightly: sidebar nav hover is `rgba(255,255,255,0.06)` on dark; the drawer scrim is `rgba(14,26,51,0.42)`. No glassmorphism / backdrop-blur as a primary style.

---

## ICONOGRAPHY

- **System: [Lucide](https://lucide.dev)** — clean 2px-stroke, rounded-join line icons. This is the BlueNorth standard. It pairs well with the geometric brand type and the calm, professional tone, and gives broad coverage for procurement concepts (FileText, ShoppingCart, Building2, ReceiptText, Wallet, TrendingUp, ShieldCheck…).
  - ⚠️ **Substitution flag:** no product code was provided, so the icon set is a documented choice, not extracted. If BlueNorth already uses a specific library (e.g. Phosphor, Heroicons, a custom set), swap the CDN link and we'll match stroke weight.
- **Delivery:** Lucide via CDN (`https://unpkg.com/lucide`), rendered through the small `Icon` helper in `ui_kits/bluenorth-app/data.jsx` and in component cards. Default size 18px, stroke 2, `currentColor`.
- **Stroke, not fill.** Keep icons single-color (inherit text color or a brand tone). Don't mix filled and outlined styles.
- **The north-star mark** is the one brand glyph — used as app icon/favicon and as a faint dark-panel watermark. It is **not** an interface icon; don't use it inline in menus.
- **No emoji. No unicode pictographs** as icons. The only non-Lucide glyphs are the mono `⌘K` keyboard hint and `·` separators.

---

## INDEX — what's in here

**Root**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** (all `@import`ed by `styles.css`)
- `colors.css` — core/neutral/cool/warm palette + semantic aliases (surfaces, text, borders, actions, status, data-viz).
- `typography.css` — families, weights, scale, tracking. · `fonts.css` — Google Fonts (Poppins, Public Sans, IBM Plex Mono).
- `spacing.css` — spacing grid, radii, shadows, motion, layout. · `base.css` — light element resets + `.bn-eyebrow` motif.

**`guidelines/cards/`** — foundation specimen cards (Design System tab): colors (core/neutral/cool/warm/status), type (display/body/mono/scale), spacing (scale/radii/shadows), brand (primary/reverse/mark/lockups).

**`components/`** — reusable React primitives (`window.DesignSystem_3d5da5`):
- `core/` — **Button**, **IconButton**, **Badge**, **Avatar**, **Card** (+ CardHeader/Body/Footer)
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `feedback/` — **Banner**, **ProgressBar**
- `navigation/` — **Tabs**
- `data/` — **StatCard**
Each directory ships a `*.card.html` showcase; each component has `.jsx` + `.d.ts` + `.prompt.md`.

**`ui_kits/bluenorth-app/`** — click-through procurement app: login → dashboard → requisitions → suppliers, plus a new-requisition drawer and toast. See its `README.md`.

**`templates/`** — starting folders consuming projects copy: `procurement-dashboard/` (BlueNorth app shell — sidebar, top bar, KPI row, approvals queue).

**`thumbnail.html`** — the homepage tile for this system (brand mark on Polaris + accent swatch strip).

**`assets/`** — `logos/` (wordmark lockups + north-star mark) and `reference/` (original palette sheet).

---

## Using the system

- **Link one file:** `<link rel="stylesheet" href="styles.css">` — gives you fonts + all tokens.
- **Components** are bundled to `window.DesignSystem_3d5da5`. In a card/kit page, load `_ds_bundle.js` then `const { Button } = window.DesignSystem_3d5da5`.
- **Always reference tokens**, never raw hex — e.g. `color: var(--text-strong)`, `background: var(--surface-card)`.

## Caveats
- **Fonts are substitutions** (Google Fonts) pending the real licensed faces.
- **Icons (Lucide) are a documented choice**, not extracted from product code.
- **The UI kit is an on-brand interpretation**, since no codebase/Figma was supplied. Share either and the kit can be re-grounded to the real product.
