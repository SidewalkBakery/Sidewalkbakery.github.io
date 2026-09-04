# Sidewalk Bakery

Limited-release baked goods from Austin, TX.

**Found, not ordered.**

## Pages

- `index.html` — Homepage + next drop
- `drops.html` — Release archive
- `about.html` — Brand story
- `find-us.html` — Drop location + follow CTA

## Run locally

```bash
python3 -m http.server 8080
```

## Drop updates

Edit drop details in `index.html`, `drops.html`, and `find-us.html`.

To auto-reveal a location at a set time, set `revealAt` in `js/main.js`:

```js
const revealAt = new Date('2026-01-01T00:00:00-06:00'); // set when drop date is locked
```

## Deploy

Static site. Works on GitHub Pages, Netlify, or Vercel.

Update Instagram links when the account is live.
