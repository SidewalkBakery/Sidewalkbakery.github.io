# Barkside Bakery 🐾

Hand-baked organic dog treats from Austin, TX. By locals, for locals.

## What's here

- **`index.html`** — Main landing page (Austin hippie vibes, full story)
- **`video.html`** — QR code destination for "The Taste Test" video
- **`card.html`** — Printable business cards (front + back with QR)
- **`css/styles.css`** — Tie-dye backgrounds, earthy palette, animations
- **`js/main.js`** — QR generation, scroll animations

## Run locally

```bash
cd ~/Projects/barkside-bakery
python3 -m http.server 8080
```

Open http://localhost:8080

## Add your video

1. Put your video at `videos/taste-test.mp4`
2. In `video.html`, uncomment the `<video>` tag and add a poster image if you want
3. Or embed YouTube/Vimeo instead

## Deploy

Works as static files on Netlify, Vercel, GitHub Pages, or any host. Update the QR URL in `js/main.js` if needed after deploy.

## Downtown handout flow

1. Print `card.html` on cardstock (double-sided if your printer supports it)
2. Fill kraft goodie bags with treats
3. Drop a card in each bag
4. Find every dog downtown. Be charming. Eat a treat on camera later.

---

*Keep Austin Weird. Keep your dog happy.* ✌️🌻
