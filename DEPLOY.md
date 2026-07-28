# Deploying to danieljfielding/bluenorth

Copy the **contents** of this folder into the repo root on `main`.

## Why the last attempt rendered unstyled
GitHub Pages runs Jekyll by default, and **Jekyll excludes any file or folder whose name
starts with an underscore**. The design-system folder was `_ds/`, so the fonts, colours and
component styles were never published — hence serif text and black-on-navy.

Fixed two ways in this build:
- the folder is now `ds/` and the bundle is `ds/ds-bundle.js` (no underscores anywhere)
- a `.nojekyll` file is included, which disables Jekyll entirely

`.nojekyll` is a **hidden file**. If you drag-and-drop through Finder or Explorer it may not
come across — enable hidden files, or use `git add -A` from the command line. The site works
without it thanks to the rename, but including it is safer.

## Do NOT delete these existing repo files
- `CNAME` — holds the custom domain. Removing it drops the domain from GitHub Pages.
- `favicon.ico`, `favicon.png`, `apple-touch-icon.png` — every page links to them.

## Overwrites
`index.html`, `about.html`, `contact.html`, `cpo360.html`

## New pages
`services.html`, `commitment.html`, `team.html`

## New supporting files
`assets/`, `ds/`, `support.js`, `aurora-hero.js`, `robots.txt`, `sitemap.xml`, `.nojekyll`,
`Site Nav.dc.html`, `Site Footer.dc.html`, `Training Explorer.dc.html`

The last three are shared page fragments (nav, footer, training explorer) — **keep those
filenames exactly as-is**, including the spaces. Every page loads them by name.

## Safe to delete after confirming the new site works
`css/`, `js/`, `images/` — no longer referenced.

## One thing still missing
`assets/og-image.png` — the social-share image referenced by the Open Graph tags.
A 1200×630 PNG (logo on the navy gradient) would complete it. Send one and I'll add it,
or the tags will simply fall back to no preview image.
