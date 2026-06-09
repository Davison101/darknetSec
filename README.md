# DarkNetSec

Elite cybersecurity for the threats that operate in the shadows.

A modern, dark-themed single-page marketing site built with Next.js (app router), TypeScript, and Tailwind.

## Features

- **Professional dark cybersec aesthetic** — zinc backgrounds, cyan accents, subtle grid, glassmorphic cards
- **Fully responsive** with sticky mobile-first navbar (hamburger + smooth scroll)
- **All sections implemented**:
  - Hero with strong positioning + CTAs
  - About + key stats
  - 6 core services (Dark Web Intel, Red Team, IR, Threat Hunting, Architecture, Training)
  - Team of 4 operators with bios
  - Functional contact form (client-side state + simulated secure intake)
  - Polished footer
- Proper Next.js 13+ structure (metadata, root layout, no broken wrappers)
- Zero additional runtime dependencies beyond the original package

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Notes

- The contact form is demo-only (logs to console + shows success state). Wire to a real API route, Resend, or Formspree for production.
- Replace placeholder avatars and any demo copy with real assets/content as needed.
- Images live in `public/images` (currently empty — add your own).

Built as the completion of the initial darknetsec placeholder project.

© DarkNetSec
