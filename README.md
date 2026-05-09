# Black Thunder Active+ — UBalance Naturals PDP

Static HTML PDP. Deployable to Vercel as-is.

## Structure

```
index.html              — main page (responsive)
content.jsx             — copy + product data
variation-a.jsx         — right-rail product info component
product-gallery.jsx     — image gallery (left rail + thumbs)
assets/                 — logo
product-images/         — product photography
vercel.json             — static caching config
```

The page uses **React 18 + Babel Standalone** loaded from unpkg CDN — JSX is transpiled in the browser. No build step required. For higher performance later, swap to a pre-built bundle (Vite / Next.js).

## Deploy to Vercel

### One-time

```bash
npm i -g vercel
```

### Deploy

From this folder:

```bash
vercel deploy            # preview deployment
vercel deploy --prod     # production deployment
```

First run will prompt to link the directory to a Vercel project — accept the defaults.

### Or connect via Git

1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. Import it on [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects this as a static site — no build settings needed.

## Local preview

Any static server works. From this folder:

```bash
npx serve .
# or
python3 -m http.server 5173
```

Open http://localhost:3000 (or :5173).

## Notes

- The page is responsive: ≥768px desktop two-column, <768px stacks with sticky bottom buy bar.
- All images are `.webp`. The Vercel config caches them aggressively.
- To edit product copy, change `content.jsx` and reload — no compile step.
