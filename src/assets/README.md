# Image replacement checklist

All images referenced by components live in `public/` (not `src/assets/`). They're currently Sophia's images — swap them out with your own, keeping the same filenames.

## Required (components reference these directly)

- [ ] `public/sophia-avatar.jpg` — your headshot, square, ~200×200 min. *(currently Sophia's avatar renamed)*
- [ ] `public/sophia-lu-resume.pdf` — **missing**, add your resume PDF here. Referenced by HomeClose, ResumePage, LLContact. (Rename `sophia-lu-resume.pdf` → `sophia-resume.pdf` if you prefer, then update the three components that link to it.)
- [ ] `public/favicon.png` — your favicon, 32×32 or 64×64

## Project hero / screenshot images (referenced in `src/data/sophia.js`)

Currently Sophia's project images are still in `public/` (e.g. `myPerks-loyalty.png`, `arena-screen-*.png`, `ge-nav-*.jpg`, `megprime-screen-*.png`, `roadrunner-*.png`, `ai-hub-video.mp4`). When you add your own projects to `sophia.js`:

1. Drop your images in `public/`
2. Reference them in `sophia.js` → `selectedProjects[i].heroImage` and `caseStudy.screens[].src`
3. Delete Sophia's leftover images once you no longer reference them

## Recommended dimensions

- Hero project images: 1600×900 (16:9)
- Screen captures: 1200×800 or match source app
- Avatar: 400×400 square
