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

This is a one-page marketing/landing site for "RCPV Business" (a business ecosystem spanning trading, e-commerce, and content creators), built with Vite + React + TypeScript + Tailwind CSS. It was scaffolded from Bolt.new's `bolt-vite-react-ts` template (see `.bolt/config.json`).

**No routing, no state management, no backend calls.** `App.tsx` just composes section components in a fixed vertical order — `Header, Hero, About, Areas, TradingEcosystem, Philosophy, AboutCompany, CTA, Footer` — and navigation is plain in-page anchors (`#inicio`, `#areas`, `#ecosistema`, `#nosotros`, `#contacto`) handled by `Header.tsx`'s link list plus native smooth scrolling (`scroll-behavior: smooth` in `index.css`). Each file in `src/components/` is a self-contained section with its own content data (arrays of copy) inlined at the top of the file.

`@supabase/supabase-js` is listed in `package.json` but is not imported or used anywhere in `src/` — there is currently no live backend integration in this project.

**Scroll-reveal pattern:** most sections wrap their content in `Reveal.tsx`, a shared component using `IntersectionObserver` to add an `is-visible` class (fade/translate transition defined by the `.reveal` / `.reveal.is-visible` rules in `src/index.css`) the first time a section scrolls into view. New sections that want the same fade-in should reuse `Reveal` rather than reimplementing the observer.

**Cross-project link:** `TradingEcosystem.tsx` links out to `https://bitacora.rcpvbusiness.com` — the deployed sibling project in `../BITACORA` (repo `bitacora-rcpvbusiness`), the actual trading-journal app this landing page promotes.

**Styling:** Tailwind CSS (`tailwind.config.js`) with a custom `navy`/`gold` color scale and two custom font families — `display` (Playfair Display, for headings) and `sans` (Manrope, for body text) — loaded via Google Fonts `<link>` tags in `index.html`. Reusable visual effects (`bg-grid`, `bg-hero-glow`, `bg-radial-glow`, `text-gradient-gold`, `bg-gradient-gold`, `gold-divider`, `shadow-gold-glow`) are defined once as Tailwind `@layer utilities` in `src/index.css` and reused across sections — prefer these over inventing new one-off gradients/glows.

`vite.config.ts` defines a `@` → `src/` path alias, though current code uses relative imports (`./components/...`) throughout rather than the alias.

There is no deployment config committed in this repo (no `netlify.toml`/`vercel.json`), unlike the sibling BITACORA project.
