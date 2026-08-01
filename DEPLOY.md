# Deploying to danieljfielding/bluenorth

Copy the **contents** of this folder into the repo root on `main`.
**Except `worker/`** — that is server code, already deployed to Cloudflare. Don't publish it.

## Why an earlier attempt rendered unstyled
GitHub Pages runs Jekyll by default, and **Jekyll excludes any file or folder whose name
starts with an underscore**. The design-system folder used to be `_ds/`, so the fonts, colours
and component styles were never published — hence serif text and black-on-navy.

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

---

# Contact form — live

The form posts to your Cloudflare Worker, which sends via Resend to
**hello@bluenorth.com.au**, with reply-to set to the visitor so you can just hit reply.

- Endpoint: `https://bluenorth-contact.danieljfielding.workers.dev`
  (already set as `FORM_ENDPOINT` in `contact.html` — nothing to edit)
- Worker source: `worker/contact-worker.js` — keep for reference, don't publish
- To change the recipient, edit `TO` at the top of the Worker and redeploy

### If submissions don't arrive
1. **Resend → Domains** — `bluenorth.com.au` must show **Verified**. Until the GoDaddy DNS
   records propagate, Resend rejects the send and the visitor sees
   "Could not send. Please email hello@bluenorth.com.au." That's expected, not a bug.
2. **Cloudflare → your Worker → Logs** shows the exact Resend error.
3. Check `RESEND_API_KEY` is set as a **Secret** under Settings → Variables.
4. Check spam/junk on the first one.

### Test it
Submit the form on the live site. Success looks like a pale blue panel:
"Thank you — your message is on its way."

---

# Google Analytics

The GA4 tag (`G-8WRB5DG3ND`) is already in the `<head>` of all 11 pages — nothing to add.

**It only reports from the live domain.** Opening the files locally sends nothing useful.
After publishing, check **GA4 → Reports → Realtime** and load a page or two to confirm.

Because the site is multi-page (not a single-page app), GA counts each page load
automatically. No extra event configuration is needed for basic visitor tracking.

If you later want to see contact-form submissions as a conversion, that needs one extra
line in `contact.html` — ask and it can be added.

---

# SEO — what's in place

Per page: unique `<title>` and meta description, canonical URL, Open Graph and Twitter card
tags, `lang="en-AU"`. Site-wide: `robots.txt`, `sitemap.xml`, `assets/og-image.png` for link
previews, and Organization + founder structured data on the home page.

After publishing, submit `https://bluenorth.com.au/sitemap.xml` in **Google Search Console**
to speed up indexing of the three new pages.

### One known limitation
Pages render their content with JavaScript. Google handles this fine, but Bing and some social
scrapers are weaker at it. If organic search becomes a priority, the pages can be flattened to
plain static HTML — ask and it can be done as a follow-up.
