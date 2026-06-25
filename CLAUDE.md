# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing site for **Parcy Digital**, a SaaS for managing real-estate parcelación/urbanismo projects (lot availability, sales, teams). All user-facing copy is in **Spanish** (`<html lang="es">`, `locale: es_ES`). The product app it links to lives elsewhere at `https://app.parcydigital.com`; the public site is `https://parcydigital.com`.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next core-web-vitals + typescript configs)
```

There is no test suite. Verify changes by running `npm run dev` / `npm run build`.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** — configured purely via `@import "tailwindcss"` in `src/app/globals.css` and the `@tailwindcss/postcss` plugin in `postcss.config.mjs`. There is **no `tailwind.config.*`**; design tokens are CSS variables in `globals.css` and Tailwind utilities are used inline.
- **framer-motion** for animation, **lucide-react** for icons
- Path alias: `@/*` → `./src/*`

## Architecture

The site is a small set of statically-composed pages. The repeating pattern across every page:

**A page = `Header` + a sequence of self-contained section components.** Pages contain almost no markup of their own — they import section components and render them in order, and each page also exports its own `metadata`.

- `src/app/page.tsx` — home page. Its sections live in `src/app/sections/` (`Hero`, `Problem`, `Solution`, `Features`, `Differentiators`, `FinalCTA`, …).
- `src/app/(pages)/<route>/page.tsx` — additional pages (`pricing`, `why-parcy`), grouped under the `(pages)` route group (no URL segment). **Each sub-page keeps its page-specific sections in a colocated `sections/` folder** (e.g. `src/app/(pages)/pricing/sections/`).
- `src/components/layout/` — `Header` (the only nav; **every page imports it directly** — there is no shared layout component for it), `Footer` (also imported directly by each page, rendered last), `NavigationLink`.
- `src/components/sections/` — section components **shared across pages** (e.g. `Contact`, the `id="contacto"` form section every page renders before the `Footer`). Page-specific sections stay colocated under the page; cross-page sections live here.
- `src/components/ui/` — `Button` (base, variant/size styles + internal-vs-external link logic) and `CTAButton` (wraps `Button`, defaults `href` to the app URL). Reuse `CTAButton` for calls-to-action rather than hand-rolling buttons.

Sections default to server components. Add `"use client"` only when a section needs interactivity (e.g. `Header` uses `useState` + framer-motion for the mobile menu).

### Navigation behavior

`Header` defines `navigationLinks` inline and `handleLinkClick` smooth-scrolls for `#anchor` hrefs while letting Next.js `<Link>` handle route hrefs. The `Button` component switches between a plain `<a>` (for `http(s)://` hrefs, i.e. the external app) and Next.js `<Link>` (for internal routes) automatically.

**Contact CTAs** point to `href="#contacto"` and rely on `scroll-behavior: smooth` + `scroll-padding-top` (set on `html` in `globals.css`) to scroll to the shared `Contact` section on the same page. The contact form posts to **Web3Forms** (`api.web3forms.com`) from the client; the access key comes from `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (the form errors at submit time if it's missing). Contact details and legal links in `Contact`/`Footer` are placeholders marked with `TODO`.

### SEO (a primary concern of this repo)

SEO is wired in several coordinated places — keep them in sync when adding/renaming pages:

- `src/app/layout.tsx` — root `metadata` (title template `%s | Parcy Digital`, OpenGraph/Twitter defaults, `metadataBase`), the `viewport` export, and an inline `Organization` JSON-LD via `next/script`.
- Each `page.tsx` exports its own `metadata` with a page `title`, `description`, OpenGraph, and an `alternates.canonical` absolute URL.
- `src/app/sitemap.ts` and `src/app/robots.ts` — generated routes. **Add new routes to `sitemap.ts`** when creating pages.
- `https://parcydigital.com` is hardcoded as the base URL in `layout.tsx`, `sitemap.ts`, and `robots.ts`.

## Conventions

- Image assets live in `public/` (`public/images/`, `public/logos/`) and are referenced by absolute path; use `next/image`.
- Code comments and copy are written in Spanish, matching the rest of the codebase.
- When adding a page, follow the existing shape: create `src/app/(pages)/<route>/page.tsx` that renders `<Header />` + colocated sections, export `metadata` (including `alternates.canonical`), and register the route in `sitemap.ts`.
