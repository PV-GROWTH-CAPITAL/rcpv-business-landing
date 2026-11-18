# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start Vite dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint        # eslint .
npm run typecheck   # tsc --noEmit -p tsconfig.app.json
```

There is no test runner configured in this project. To run a single lint check on one file, use `npx eslint path/to/File.tsx`.

## Architecture

This is a one-page marketing/landing site for "RCPV Business" (a business ecosystem spanning trading, personal development, e-commerce, and content creators), built with Vite + React + TypeScript + Tailwind CSS. It was scaffolded from Bolt.new's `bolt-vite-react-ts` template (see `.bolt/config.json`).

**No routing, no state management, no backend calls.** `App.tsx` just composes section components in a fixed vertical order — `Header, Hero, About, Areas, TradingEcosystem, DesarrolloEcosystem, Philosophy, AboutCompany, CTA, Footer` — and navigation is plain in-page anchors (`#inicio`, `#areas`, `#ecosistema`, `#desarrollo`, `#nosotros`, `#contacto`) handled by `Header.tsx`'s link list plus native smooth scrolling (`scroll-behavior: smooth` in `index.css`). Each file in `src/components/` is a self-contained section with its own content data (arrays of copy) inlined at the top of the file.

`@supabase/supabase-js` is listed in `package.json` but is not imported or used anywhere in `src/` — there is currently no live backend integration in this project.

**Scroll-reveal pattern:** most sections wrap their content in `Reveal.tsx`, a shared component using `IntersectionObserver` to add an `is-visible` class (fade/translate transition defined by the `.reveal` / `.reveal.is-visible` rules in `src/index.css`) the first time a section scrolls into view. New sections that want the same fade-in should reuse `Reveal` rather than reimplementing the observer.

**Ecosystem sections:** `TradingEcosystem.tsx` and `DesarrolloEcosystem.tsx` are thin wrappers (copy + pillar data inline) around the shared `EcosystemSection.tsx`, which renders the eyebrow/title/subtitle header and the pillars grid. A pillar with `comingSoon: true` (or no `href`) renders as a muted, non-link card with a lock + "Próximamente". Grid columns adapt to 3 or 4 pillars via a literal class map. Any new area that gets its own section should reuse `EcosystemSection`. `Footer.tsx` links support the same `comingSoon` flag.

## Areas and subdomains

The same order is used in `Areas.tsx` (cards), `AboutCompany.tsx` (roadmap), `Footer.tsx`, the Hero tagline and the `index.html` meta description — keep them in sync:

| # | Area | State | Link |
|---|------|-------|------|
| 01 | Trading | Active | `#ecosistema` (in-page section) |
| 02 | Desarrollo personal | Active | `https://desarrollo.rcpvbusiness.com` |
| 03 | E-commerce | Próximamente | — |
| 04 | Creadores | Próximamente | — |
| 05 | Nuevos proyectos | Próximamente | — |

Trading pillars (`TradingEcosystem.tsx`):
- **Bitácora** — active, `https://bitacora.rcpvbusiness.com` — the deployed sibling project in `../BITACORA` (repo `bitacora-rcpvbusiness`), the trading-journal app.
- **Fiscalidad** — Próximamente, not linked (`fiscalidadtrading.rcpvbusiness.com` does not exist yet).
- **Mentalidad** — Próximamente, not linked (`mentalidadtrading.rcpvbusiness.com` does not exist yet).

Desarrollo personal sections (`DesarrolloEcosystem.tsx`), each at `https://desarrollo.rcpvbusiness.com/<slug>`:
- Series → `/series`
- Mentalidad → `/mentalidad`
- Mi proceso → `/mi-proceso`
- Reto de hábitos → Próximamente, not linked (`/reto-de-habitos` is marked `proximamente` upstream)

The source of truth for these slugs is `../RCPV-CONTENIDO/src/config/sitios.ts` (the content sites' repo). Read it, don't edit it from here. That file also defines the future `mentalidad` and `fiscalidad` trading sites.

The former "Hábitos y salud" area (`habitosysalud.rcpvbusiness.com`) was replaced by Desarrollo personal and is no longer linked. The former "Operativa" Trading pillar was removed — don't reintroduce it.

**Styling:** Tailwind CSS (`tailwind.config.js`) with a custom `navy`/`gold` color scale and two custom font families — `display` (Playfair Display, for headings) and `sans` (Manrope, for body text) — loaded via Google Fonts `<link>` tags in `index.html`. Reusable visual effects (`bg-grid`, `bg-hero-glow`, `bg-radial-glow`, `text-gradient-gold`, `bg-gradient-gold`, `gold-divider`, `shadow-gold-glow`) are defined once as Tailwind `@layer utilities` in `src/index.css` and reused across sections — prefer these over inventing new one-off gradients/glows.

`vite.config.ts` defines a `@` → `src/` path alias, though current code uses relative imports (`./components/...`) throughout rather than the alias.

There is no deployment config committed in this repo (no `netlify.toml`/`vercel.json`), unlike the sibling BITACORA project. The site deploys on Netlify from pushes to `main`, and every deploy costs credits. **Never push without the user's explicit confirmation**: batch changes, let them review locally (`npm run dev -- --host` to open it from a phone on the same Wi-Fi), then make one commit and one push.
