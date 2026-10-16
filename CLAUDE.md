# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing site for **Parcy Digital**, a CRM for selling real-estate projects by availability (units, sales, teams). The unit of work is the **unidad** (apartment, house, lot or commercial space), not just the lot: the product covers vivienda en altura as well as parcelaciones/urbanismos, so copy talks about "unidades" and "disponibilidad" and treats lots as one case. The interactive demos (`HeroScene`, `PlanoInteractivo`) and the screenshots still show a lot project. All user-facing copy is in **Spanish** (`<html lang="es">`, `locale: es_ES`). The product app it links to lives elsewhere at `https://app.parcydigital.com`; the public site is `https://parcydigital.com`.

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

`Capabilities` (`id="capacidades"`) is six equal cards (icon tile, title, one sentence and a small product vignette built from real data: totals by status, reservation timer, approve/reject, project progress, Excel import, roles) plus one full-width card with three extras. The client rejected the earlier bento of screenshot crops as unclear; keep the one-card-one-capability shape.

- `src/app/page.tsx` — home page. Its sections live in `src/app/sections/` (`Hero` + `HeroScene`, `Problem`, `PlanoInteractivo`, `ProductTour`, `Flow`, `Capabilities`, `Comparison`, `FAQ`). Client components: `Hero` (navy band with faint topographic contours; text left, scene right) + `HeroScene` (isometric SVG map: lot highlights, two-storey house rises, "Vendido" pin, looping; recolored for the dark band), `PlanoInteractivo` (`id="producto"`: two modes behind a segmented control. "Asignación de lotes" mirrors the app's assignment view: aerial SVG map (forest, fenced site, dashed parcels, roads) plus a side panel; pick a pending lot, tap the map to drop its marker (pointer-based, works on touch), drag it, change status, save or remove. "Vista de venta" hides the panel, widens the map (16:9 on desktop) and tapping a marker opens the sale sheet modeled on the app's lot detail: status + price, project/stage cards, "Ver en plano", area, tools, and Cerrar / Reservar / Registrar venta. The map box is always 4:3 with the layer filling it (no cover/ResizeObserver); zoom + drag exist only on fine-pointer devices (`matchMedia("(hover: hover) and (pointer: fine)")`), so on touch the map is static and the page scrolls normally. On mobile the tall lot list is replaced by a horizontal "Lotes pendientes" chip strip and the assignment card only shows once a lot is selected; in sale mode the map is centered at `max-w-4xl`), `ProductTour` (`id="capturas"`: tabs + crossfade of real screenshots in a window that rests in 3D perspective on desktop; autoplays while in view, pauses on hover, and after a click resumes 15 s later) and `Flow` (step-driven lot card; auto-advances every 4.5 s while in view, waits 12 s after a click). The rest are server components.
- `src/app/(pages)/<route>/page.tsx` — additional pages (`pricing`, `why-parcy`), grouped under the `(pages)` route group (no URL segment). **Each sub-page keeps its page-specific sections in a colocated `sections/` folder** (e.g. `src/app/(pages)/pricing/sections/`).
- `src/components/layout/` — `ContactFab` (floating launcher bottom-right on every page, rendered from `layout.tsx`: glass circle with the Parcy isotype and a pulsing "Disponible" dot, hover label, card with WhatsApp / email / demo; the WhatsApp number is a `TODO` placeholder), `Header` (the only nav; **every page imports it directly** — there is no shared layout component for it; a floating glass "island" pill: translucent white, `backdrop-blur-2xl` + saturate, the links grouped in a translucent pill with the active one on white, "Iniciar sesión" as text and "Solicitar demo" as the blue pill; it gains shadow once the page scrolls, detected with an IntersectionObserver sentinel, and switches to a dark version over `data-header-dark` sections), `Footer` (also imported directly by each page, rendered last). `NavigationLink` is unused by the header now.
- `src/components/sections/` — section components **shared across pages** (e.g. `Contact`, the `id="contacto"` form section every page renders before the `Footer`: a navy band with the form in a white card). Page-specific sections stay colocated under the page; cross-page sections live here.
- **Legal pages** (`/privacy`, `/terms`, `/data-deletion`) follow the same page shape but share `LegalHero` + `LegalArticle` from `src/components/sections/`; each page's text lives in its colocated `sections/*Content.tsx` as a `LegalSection[]` (id/title/content) rendered with the `.legal-prose` styles in `globals.css`. Company identity (razón social, NIT, address, contact email, last-updated date) and the Meta policy URLs come from **`src/data/legal.ts`** — edit that file, not the pages, when those change. These URLs are what gets registered in Meta for Developers (Tech Provider verification: privacy policy URL + data deletion instructions URL).
- `src/components/ui/` — `Button` (pill-shaped; variants `primary` brand blue / `secondary` white+border / `ghost` / `inverse` for dark backgrounds; internal-vs-external link logic), `CTAButton` (wraps `Button`, defaults `href` to the app URL), `BrowserFrame` (monochrome browser chrome around real screenshots) and `Reveal` (fade-up on viewport entry, honors reduced motion). Reuse these rather than hand-rolling buttons or frames.
- `src/components/illustrations/` — monochrome line illustrations (one 240×160 canvas, 1.5px stroke in `text-ink-faint`, a single `brand-100/brand-500` accent shape). Add new ones to this set and keep the same rules.

Sections default to server components. Add `"use client"` only when a section needs interactivity (e.g. `Header` uses `useState` + framer-motion for the mobile menu).

### Navigation behavior

`Header` defines `navigationLinks` inline and `handleLinkClick` smooth-scrolls for `#anchor` hrefs while letting Next.js `<Link>` handle route hrefs. The `Button` component switches between a plain `<a>` (for `http(s)://` hrefs, i.e. the external app) and Next.js `<Link>` (for internal routes) automatically.

**Contact CTAs** point to `href="#contacto"` and rely on `scroll-behavior: smooth` + `scroll-padding-top` (set on `html` in `globals.css`) to scroll to the shared `Contact` section on the same page. The contact form (`src/components/sections/ContactForm.tsx`, client component with idle/loading/success/error states) posts to **Web3Forms** (`api.web3forms.com`); the access key comes from `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (the form shows an error at submit time if it is missing). Contact details and legal links in `Contact`/`Footer` are placeholders marked with `TODO`.

### SEO (a primary concern of this repo)

SEO is wired in several coordinated places — keep them in sync when adding/renaming pages:

- `src/app/layout.tsx` — root `metadata` (title template `%s | Parcy Digital`, OpenGraph/Twitter defaults, `metadataBase`), the `viewport` export, and an inline `Organization` JSON-LD via `next/script`.
- Each `page.tsx` exports its own `metadata` with a page `title`, `description`, OpenGraph, and an `alternates.canonical` absolute URL.
- `src/app/sitemap.ts` and `src/app/robots.ts` — generated routes. **Add new routes to `sitemap.ts`** when creating pages.
- `https://parcydigital.com` is hardcoded as the base URL in `layout.tsx`, `sitemap.ts`, and `robots.ts`.

## Design system ("tonos de azul", redesigned 2026-10-16)

- Three colors only: the logo blue, the ink (blue-black text) and white. The blue is used across its whole scale and that is the whole look: **deep blue bands** (`.band-navy`, brand-950 → night gradient with two soft blue lights) for the hero, the `Flow` band and the contact + footer close; **pale blue** (`bg-surface`, #f3f7fc) alternating with white for the light sections; **brand blue** (`brand-600` #0b6ef5, sampled from the logo) for primary buttons, links and active states; **celeste** (`celeste` #0b96f0 on light, `celeste-light` #6fcbff on navy, the sky blue at the top of the logo) only for the accent phrase inside headings (the client asked for the heading accent to be "más celeste"). Home rhythm: navy → white → surface → white → navy → surface → white → surface → navy (contact) → night (footer). Pricing and why-parcy use the same bands (navy hero, `Enterprise` / `WhyNow` as navy bands).
- Surfaces are **flat**: no glass, backdrop blur, blurred blobs, glass sheets or gradient text anywhere except the header island (the one thing the client liked from the previous design; `ContactFab` shares its recipe). Cards use `.card` (white, 1px `line` border, 1.25rem radius, very soft shadow) and `.card-hover` for the lift + blue border; on dark bands add a strong dark shadow utility. `.icon-tile` is the small blue-on-pale-blue icon square. The page scrollbar is styled to match (pale-blue track, brand-blue pill; bottom of `globals.css`), which the client asked for.
- **Section transitions are fades, never hard cuts.** The section that ends carries `fade-b-<next color>` (`fade-b-panel` / `fade-b-surface` / `fade-b-navy`, `globals.css`): a `::after` gradient inside its own bottom padding (no extra height, `isolation: isolate` keeps it under the content) that goes from transparent to the next background. Navy ↔ light fades pass through muted, desaturated blues (the client found the saturated brand-blue horizon too strong) (`.band-navy.fade-b-*` 7rem / 9rem on lg, `.fade-b-navy` 6rem / 8rem on lg); light ↔ light fades are a 6rem veil. **The fade must never be taller than the section's bottom padding** (the client flagged a version that overlapped the hero chips and left a big empty area): sections that fade into navy use `pb-24 sm:pb-28 lg:pb-32`, navy bands that fade into light use `pb-28 lg:pb-36`. No radial glows inside the fade (they drew a visible line at its top edge). `.band-navy` itself is a flat brand-950 → night gradient so a light → navy fade ends in exactly its top color; only heros add `.band-hero` for the two soft blue lights at the top. The client asked for these explicitly ("un difuminado bien estiloso entre los fondos").
- The signature is the **plano** (the product's plan): `.band-topo` draws faint topographic contour lines (two "hills" of irregular rings, an SVG data URI generated by a script) on every navy band (hero, Flow, Contact, Enterprise, WhyNow), fading downward; a square grid, an isometric lattice and a dashed-parcel pattern (`.band-plan`, still in globals.css but unused) were tried first and the client asked for something clearly different and then for the contours on all the blue bands; the `Flow` step connector is a dashed line like a road; `Problem` cards carry a big faint "01/02/03" numeral in `brand-50`; `ProductTour`'s window rests in slight 3D perspective on desktop (`.tour-stage` / `.tour-window`) and straightens on hover.
- Hero: navy band, text left (no badge above the H1; it starts right under the header) + `HeroScene` right, the isometric SVG map (lot highlight, two-storey house rising, white "Vendido" pin, looping) floating on a blue halo. The client explicitly asked to keep this animation. On mobile: title + CTAs → scene → highlight grid. A real-screenshot hero was tried and replaced by the scene. `FacetMesh.tsx` stays in the repo unused.
- `Header` is theme-aware: sections with `data-header-dark` (navy bands at the top of a page, and `Footer`) switch the island to its dark version (same glass, white text) while the pill's midline is inside them; it is measured on scroll with rAF. Everything else about the island (translucent white, grouped links with the active one on white, blue "Solicitar demo") is unchanged.
- Headings (h1–h3) use the display font Plus Jakarta Sans via `--font-display`; body is Geist. Section H2s share one recipe: `text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem]` with a `mt-3 text-base sm:text-lg` lead. Section rhythm: `py-14 sm:py-16 lg:py-20` (`py-16 sm:py-20 lg:py-24` on navy bands), heading→content gap `mt-8`/`mt-10`. No eyebrow/kicker labels above headings, no emoji. Each heading puts its key phrase in `text-celeste` (`text-celeste-light` on navy; the hero H1 through `WordReveal`'s `accent` + `accentClassName`). Color only, never marker highlights. On navy, body copy is `text-white/70`, checks are `bg-brand-600` dots or `text-brand-300` icons.
- Motion: entrance 12px + opacity + blur-to-sharp (`Reveal`) with `cubic-bezier(0.16,1,0.3,1)`, 150–300ms for UI, the hero H1 word by word (`WordReveal`) and the `HeroScene` loop. Everything respects `prefers-reduced-motion`.
- Product is shown with real screenshots from `public/images` (never div-built mockups) in `BrowserFrame` (`tone="dark"` exists for navy bands). `picture_1.png` = project page with plan (OG), `hero/prueba.png` = dashboard with project progress, `hero/dashboard_hero.png` = lot inventory, `solution/plano_interactivo.png` = interactive plan with lot states (the 2026 app). The tour frame uses the screenshot aspect ratio (1846/916) on every breakpoint so nothing gets cropped on mobile.
- Lot-status colors (`disponible`/`reservado`/`vendido`) appear only inside product content. The monochrome line illustrations in `src/components/illustrations/` are no longer used by any page (replaced by lucide icon tiles) but stay in the repo.

## Conventions

- Mobile alignment: below `sm` (640px) ALL text is centered (hero, section headers, card bodies, comparison rows, footer columns, pricing cards); from tablet up everything is left-aligned (`text-center sm:text-left`, `mx-auto … sm:mx-0`). Checklists stay as a centered block with left-aligned rows (`mx-auto w-fit … sm:mx-0 sm:w-auto` on the `<ul>`) so the checks line up. Keep this when adding a section.

- Image assets live in `public/` (`public/images/`, `public/logos/`) and are referenced by absolute path; use `next/image`.
- Code comments and copy are written in Spanish, matching the rest of the codebase.
- When adding a page, follow the existing shape: create `src/app/(pages)/<route>/page.tsx` that renders `<Header />` + colocated sections, export `metadata` (including `alternates.canonical`), and register the route in `sitemap.ts`.
