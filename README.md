# Sophia — Portfolio

Personal portfolio site forked from [sophialu89/sophia-pitch](https://github.com/sophialu89/sophia-pitch). React + Vite + Tailwind v4.

## Dev

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Where content lives

- **Everything Sophia-related:** [`src/data/sophia.js`](src/data/sophia.js) — single source of truth. Edit this file first. Every field is a `TODO:` placeholder.
- **Images:** see [`src/assets/README.md`](src/assets/README.md) for the checklist of images to replace in `public/`.
- **Hardcoded placeholders to replace in components (search the project):**
  - `https://cal.com/sophialu98/30` — calendar booking URL (replace with Sophia's real booking link)
  - `/sophia-avatar.jpg` — avatar image path in `public/`
  - `/sophia-lu-resume.pdf` — resume PDF path in `public/`

## Deploy

This repo is linked to Vercel. Pushes to `main` auto-deploy.
