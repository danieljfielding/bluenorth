# Deploying to danieljfielding/bluenorth

Copy the **contents** of this folder into the repo root on `main`.
**Except `worker/`** — that is not a website file. See "Contact form" below.

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

---

# Contact form

**The form does not email anyone until you finish these steps.** Until then it falls back to
opening the visitor's own mail client with the enquiry pre-written — workable, but it relies
on them pressing send.

GitHub Pages is static, so it cannot hold the Resend API key (anyone could read it in the
page source and send email as your domain). A small Cloudflare Worker sits in between.

### 1. Verify the domain in Resend
Resend → Domains → Add domain → `bluenorth.com.au`, then add the DNS records it gives you.
Sending from an unverified domain fails.

### 2. Deploy the Worker
`worker/contact-worker.js` in this folder. **Do not commit it to the website repo root** —
it is server code, not a page.

- dash.cloudflare.com → Workers & Pages → Create → Worker
- paste the file in, Deploy
- Worker → Settings → Variables → add a **Secret** named `RESEND_API_KEY` (value starts `re_`)
- copy the Worker URL, e.g. `https://bluenorth-contact.danieljfielding.workers.dev`

Full steps are also in the comment at the top of that file.

### 3. Point the form at the Worker
Open `contact.html`, find this line near the top of the inline `<script>` block:

```js
const FORM_ENDPOINT = '';
```

Put the Worker URL between the quotes, save, commit. That is the only edit needed.

### Where enquiries land
`hello@bluenorth.com.au`, with reply-to set to the visitor so you can just hit reply.
To change the recipient or split by enquiry type, edit `TO` at the top of the Worker.

---

# One thing still missing

`assets/og-image.png` — the social-share image referenced by the Open Graph tags.
A 1200×630 PNG (logo on the navy gradient) would complete it. Send one and I'll add it,
or the tags will simply fall back to no preview image.
