# bluenorth website update (14 November 2026)

Copy the contents of this folder into the root of the `danieljfielding/bluenorth` repo on `main`, overwriting existing files.

## What is in this package

**Updated pages:** `index.html`, `about.html`, `services.html`, `contact.html`, `skillsmap.html`

**New service pages:** `procurement-transformation.html`, `value-accelerator.html`, `procurement-diagnostic.html`, `capability-development.html`, `social-procurement.html`, `mentoring.html`

**Shared fragments** (keep these exact file names, spaces included): `Site Nav.dc.html` (new mega menu), `Site Footer.dc.html`, `Value Compass.dc.html` (new, used by the Value Accelerator page)

**Site-wide style:** `responsive.css` (new editorial look: serif headings, plain labels, no watermarks)

**Assets:** `assets/hero-balloons.mp4` (desktop), `assets/hero-balloons-mobile.mp4`, `assets/hero-balloons-poster.jpg`

**SEO:** `sitemap.xml` (now lists the six new service pages)

## Leave these existing repo files in place
- `ds/`, `support.js`, `assets/` (logos, photos, insight images, CPO360 video), `Training Explorer.dc.html`
- `cpo360.html`, `team.html`, `commitment.html`, `insights.html`, the three `insight-*.html` articles. These pick up the new menu, footer and look automatically.
- `CNAME`, `favicon.ico`, `favicon.png`, `apple-touch-icon.png`, `.nojekyll`, `robots.txt`
- `aurora-hero.js` is no longer used by the home page and can be deleted later.

## After publishing
1. Open the live site and check the Services menu, each new service page and the home page video on desktop and phone.
2. Submit `https://bluenorth.com.au/sitemap.xml` in Google Search Console and request indexing for the six new service pages.
3. Old links such as `services.html#learning` redirect to the matching new page automatically.
