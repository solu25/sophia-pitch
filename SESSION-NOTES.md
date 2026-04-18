# Session Notes — March 28, 2026

## Context
Continuing from a previous session ("Build freelance designer job finder tool") that hit an API error while trying to export Roadrunner Figma screenshots. The error was unrecoverable and the session had to be abandoned.

## What the previous session completed
- Built LeadSignal job finder app (separate project, not pitch-app)
- Built pitch-app portfolio at `/Users/jenny/Documents/Claude/jenny/pitch-app/`
- Exported and saved all Arena Labs screens (pre/mid/post-shift states) → `/public/arena-screen-1/2/3.png`
- Exported and saved all MegPrime screens (calculator, rent details, payment method) → `/public/megprime-screen-1/2/3.png`
- Exported Roadrunner screens → `/public/roadrunner-screen-1/2/3.png` ✓ (saved before crash)
- jenny.js has full story + screen references for: myperks, roadrunner, megprime, navigation, curbside, arenalabs

## Where the previous session crashed
Trying to read/process a Roadrunner Figma image hit a 400 API error ("Could not process image"). The session got stuck in an error loop and became unresponsive.

## What this session added
- Added `leadgen` case study to `jenny.js` — the lead-gen tool (scrapes YC/Reddit/HN/LinkedIn, scores leads, drafts outreach)
- No screens added for leadgen yet (skip images for now)

## Current state of jenny.js projects
| ID | Company | Screens |
|----|---------|---------|
| myperks | Giant Eagle | none (screens: []) |
| roadrunner | Roadrunner Recycling | roadrunner-screen-1/2/3.png ✓ |
| megprime | MegPrime Pay | megprime-screen-1/2/3.png ✓ |
| navigation | Giant Eagle | none (uses problem/insight/process format, no screens) |
| curbside | Giant Eagle | none (uses problem/insight/process format, no screens) |
| arenalabs | Arena Labs | arena-screen-1/2/3.png ✓ |
| leadgen | Side Project | none (screens: []) — added this session |

## Routes wired up
- `/` → PitchPage (main portfolio)
- `/taxbit` → TaxbitPage (love letter)

## Other company data files (not yet wired to routes)
- `aurora.js` — relevantProjects: roadrunner, myperks, curbside
- `novella.js` — relevantProjects: roadrunner, megprime, myperks
- `rakuten.js` — relevantProjects: myperks, curbside, navigation

## Next steps (pending)
- Skip image work for now
- Wire remaining company pages to routes if needed
- Add leadgen to a route if desired
