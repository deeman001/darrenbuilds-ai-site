# darrenbuilds.ai — Agent Handoff

Single-page founder site. Minimal, dark, confident. The portrait does the heavy lifting — the site supports it.

**Live URL:** darrenbuilds.ai  
**Design reference:** `darrenbuilds-dark.html` (self-contained, approved)  
**Portrait asset:** `darren-closeup.jpeg`

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Google Fonts (DM Serif Display + Inter) |
| Images | `next/image` with static optimization |
| Deployment | Vercel **or** Cloudflare Pages (static export) |

No backend. No database. Static export only. Anchor links only — single route `/`.

---

## Design Tokens

### Colors

```ts
// tailwind.config.ts — extend these
colors: {
  bg:        '#080808',  // page background
  surface:   '#0f0f0f',  // card hover state
  border:    '#1c1c1c',  // all dividers and borders
  textHi:    '#f0f0f0',  // headings, primary text
  textMid:   '#e8e8e8',  // nav wordmark, footer email
  textBody:  '#888888',  // arc body copy
  textMuted: '#777777',  // hero subhead
  textDim:   '#555555',  // project descriptions, nav links
  textFaint: '#444444',  // section labels
  textGhost: '#2a2a2a',  // footer copyright
  rule:      '#333333',  // principle list rules
}
```

### Status Badge Colors

```ts
live:     { text: '#4aab74', border: '#1a3d2a', bg: '#0a1f14' }
beta:     { text: '#6a8fc5', border: '#1a2a40', bg: '#0a1220' }
building: { text: '#c09050', border: '#3d2a10', bg: '#1f1408' }
always:   { text: '#555555', border: '#1e1e1e', bg: '#0d0d0d' }
```

### Typography

```ts
fonts: {
  heading: "'DM Serif Display', Georgia, 'Times New Roman', serif",
  body:    "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
}
```

```
H1 (hero):         DM Serif Display, 400, clamp(3.5rem, 5.5vw, 5rem), line-height 1.0
H2 (section):      DM Serif Display, 400, clamp(1.75rem, 3vw, 2.5rem), line-height 1.15
Section label:     Inter, 500, 0.7rem, letter-spacing 0.14em, uppercase, color #444
Body copy:         Inter, 300, 1.05rem, line-height 1.85, color #888
Subhead:           Inter, 300, 1.05rem, line-height 1.7, color #777
Project name:      Inter, 500, 1rem, color #e0e0e0
Project desc:      Inter, 300, 0.88rem, color #555
Status badge:      Inter, 500, 0.65rem, letter-spacing 0.1em, uppercase
Nav links:         Inter, 400, 0.82rem, letter-spacing 0.02em
Footer social:     Inter, 400, 0.82rem
Footer copyright:  Inter, 400, 0.72rem, letter-spacing 0.02em
```

### Spacing & Layout

```
Max content width:  1120px
Container padding:  2.5rem horizontal
Hero top padding:   5.5rem
Section padding:    5rem top and bottom
Hero grid gap:      4rem
Hero copy pb:       5rem (aligns copy baseline with portrait base)
```

---

## File Structure

```
/app
  layout.tsx          ← metadata, fonts, globals
  page.tsx            ← composes all sections in order
  globals.css         ← base resets and scroll-behavior

/components
  Nav.tsx
  Hero.tsx
  BuilderArc.tsx
  Projects.tsx
  HowIBuild.tsx
  Footer.tsx
  Container.tsx       ← max-width wrapper
  Section.tsx         ← section wrapper with id and border

/public
  images/
    darren-hero.jpg   ← source (copy from darren-closeup.jpeg)
    darren-hero.webp  ← generate with sharp or squoosh
```

---

## Components

### `Container.tsx`

Max-width wrapper. Use on every section.

```tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1120px] mx-auto px-10">
      {children}
    </div>
  )
}
```

### `Nav.tsx`

Minimal top bar. Wordmark left, anchor links right. Hide links on mobile.

```tsx
// Links: About → #arc | Building → #build | How → #principles
// Wordmark: "darrenbuilds.ai" — 0.8rem, 500, tracking-widest, uppercase
// Border bottom: border-[#1c1c1c]
// Hide nav links below 800px
```

### `Hero.tsx`

Two-column grid on desktop. Portrait full-bleed to container edge on the right, bleeding off the bottom with no section border.

**Portrait blending — this is the key technique:**

```css
/* CSS mask fades portrait into black on top, bottom, and right edges */
/* Apply to the portrait wrapper element */
-webkit-mask-image:
  linear-gradient(to bottom, transparent 0%, black 10%, black 72%, transparent 100%),
  linear-gradient(to right,  black 0%, black 55%, transparent 100%);
-webkit-mask-composite: destination-in;
mask-image:
  linear-gradient(to bottom, transparent 0%, black 10%, black 72%, transparent 100%),
  linear-gradient(to right,  black 0%, black 55%, transparent 100%);
mask-composite: intersect;
```

```css
/* Portrait image treatment */
filter: grayscale(100%) brightness(0.8) contrast(1.1);
object-position: center 15%;   /* keeps eyes in upper third */
max-height: 680px;
```

```css
/* Hover: subtle brightness lift + scale — guard with prefers-reduced-motion */
@media (prefers-reduced-motion: no-preference) {
  .portrait-wrap:hover img {
    filter: grayscale(100%) brightness(0.9) contrast(1.1);
    transform: scale(1.025);
    transition: filter 0.7s ease, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
}
```

**Mobile:** stack portrait above copy. Simplify mask to top/bottom fade only (remove right-edge fade). Max height 400px.

**CTA:** "See what I'm building" → smooth scroll to `#build`  
**Secondary link:** "Instagram" → `https://instagram.com/darren_builds` (external, `rel="noopener noreferrer"`)

```tsx
// next/image props
<Image
  src="/images/darren-hero.webp"
  alt="Black and white portrait of Darren"
  priority
  sizes="(max-width: 800px) 100vw, 50vw"
  quality={85}
/>
```

### `BuilderArc.tsx`

Preserve explicit line breaks. The final line is bold and visually separated with extra top margin.

```tsx
const copy = [
  <>I started coding at 11.<br />Computer science was always home.</>,
  <>Then I built Finley&#8217;s Barbershop&#8202;&#8230; an idea that became 18 years of building and refining a multi&#8209;location brand.</>,
  <>After leading its growth and transition, I returned to software&#8202;&#8230; fully focused, at a time when AI is redefining what&#8217;s possible.</>,
  <>Same builder. Different tools.</>,
]
// Final line — rendered separately with bold weight, #e8e8e8, mt-12
const finalLine = "This might be the most exciting time to build."
```

### `Projects.tsx`

2×2 grid with thin borders. Render from a data array.

```ts
const projects = [
  { name: 'PaletteCheck', desc: 'AI powered brand compliance.',          status: 'live'     },
  { name: 'PolicyPhile',  desc: 'AI policy Q&A for teams.',             status: 'beta'     },
  { name: 'Social API',   desc: 'API driven distribution infrastructure.', status: 'building' },
  { name: 'Experiments',  desc: 'Always something in progress.',         status: 'always'   },
]
```

Status badge labels: `live` → "Live" | `beta` → "Beta" | `building` → "Building" | `always` → "Always"

Grid border rules: outer border on the grid container, inner borders on individual cards (right border on card 2, top border on cards 3 and 4).

### `HowIBuild.tsx`

Simple list. No icons. Each item has a 22px `#333` horizontal rule before it, rendered as a CSS pseudo-element or a styled `<span>`. Top and bottom borders on each item using `#1c1c1c`.

```ts
const principles = [
  'Systems over features',
  'Distribution matters',
  'Delete more than you add',
  'Real world experience informs better software',
]
```

### `Footer.tsx`

```
Left:  hello@darrenbuilds.ai  (mailto link, border-bottom underline style)
Right: X | Instagram | LinkedIn  (all external, noopener)
Below: © 2026 Darren Peterson · darrenbuilds.ai  (centered, #2a2a2a, 0.72rem)
```

Social URLs:
- X: `https://x.com`
- Instagram: `https://instagram.com/darren_builds`
- LinkedIn: `https://linkedin.com/in/darrenpeterson` ← confirm and update

---

## Page Assembly (`app/page.tsx`)

Render in this exact order:

```tsx
<Nav />
<Hero />                           {/* id: none — top of page */}
<BuilderArc id="arc" />
<Projects id="build" />            {/* CTA scrolls here */}
<HowIBuild id="principles" />
<Footer />
```

---

## Approved Copy

All copy below is final. Do not paraphrase.

### Hero
- **H1:** Darren Builds
- **Subhead:** I build businesses and software. From brick and mortar to AI‑powered systems.
- **CTA:** See what I'm building
- **Secondary:** Instagram

### The Builder Arc
```
I started coding at 11.
Computer science was always home.

Then I built Finley's Barbershop … an idea that became 18 years of building
and refining a multi-location brand.

After leading its growth and transition, I returned to software … fully focused,
at a time when AI is redefining what's possible.

Same builder. Different tools.

[bold, separated] This might be the most exciting time to build.
```

### What I'm Building Now
```
PaletteCheck   — AI powered brand compliance.          [Live]
PolicyPhile    — AI policy Q&A for teams.              [Beta]
Social API     — API driven distribution infrastructure. [Building]
Experiments    — Always something in progress.          [Always]
```

### How I Build
```
Systems over features
Distribution matters
Delete more than you add
Real world experience informs better software
```

### Footer
```
hello@darrenbuilds.ai
X · Instagram · LinkedIn
© 2026 Darren Peterson · darrenbuilds.ai
```

---

## `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
  background: #080808;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

body {
  background: #080808;
  color: #e8e8e8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: #333;
  color: #f0f0f0;
}
```

---

## `app/layout.tsx` Metadata

```ts
export const metadata: Metadata = {
  title: 'Darren Builds',
  description: 'Builder of businesses and software. From brick and mortar to AI-powered systems.',
  openGraph: {
    title: 'Darren Builds',
    description: 'Builder of businesses and software.',
    url: 'https://darrenbuilds.ai',
    siteName: 'Darren Builds',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darren Builds',
  },
}
```

---

## Image Optimization

```bash
# Generate webp from source (use sharp CLI or squoosh)
npx @squoosh/cli --webp '{"quality":85}' darren-closeup.jpeg -d public/images/ -s darren-hero

# Output target: < 200KB
# Place source at: public/images/darren-hero.jpg (keep as fallback)
# Primary serve:   public/images/darren-hero.webp
```

---

## Smooth Scroll

Handled via `scroll-behavior: smooth` on `html`. Ensure all section `id` attributes match nav hrefs and the hero CTA exactly:

| Href | Section id |
|---|---|
| `#arc` | `arc` |
| `#build` | `build` |
| `#principles` | `principles` |

---

## Accessibility Checklist

- [ ] One `<h1>` on the page (hero)
- [ ] `<h2>` for every section heading
- [ ] `alt="Black and white portrait of Darren"` on portrait
- [ ] All links have descriptive text (no "click here")
- [ ] Keyboard focus visible on all interactive elements
- [ ] Color contrast ≥ AA (WCAG 2.1) — verify with Lighthouse
- [ ] `prefers-reduced-motion` disables all transitions and animations
- [ ] `rel="noopener noreferrer"` on all external links
- [ ] Semantic landmarks: `<nav>`, `<main>`, `<section>`, `<footer>`

---

## Performance Checklist

- [ ] Portrait served as `.webp`, under 200KB
- [ ] `next/image` with `priority` on hero image
- [ ] `sizes` prop set: `"(max-width: 800px) 100vw, 50vw"`
- [ ] No client-side JS required (all static)
- [ ] Google Fonts loaded via `next/font` (not `<link>` tag)
- [ ] Lighthouse performance score ≥ 95

---

## Deployment

### Vercel (recommended)
```bash
# Connect GitHub repo to Vercel
# Build command: next build
# Output: automatic
# Set env: NEXT_PUBLIC_SITE_URL=https://darrenbuilds.ai
```

### Cloudflare Pages
```bash
# next.config.ts
output: 'export'
trailingSlash: true

# Build command: next build
# Output directory: out
```

**DNS:** Point `darrenbuilds.ai` A record to deployment IP, or use nameserver delegation.

---

## What's Not Included

- Analytics (add Plausible or Fathom if needed — no GA)
- Contact form (email link only)
- Blog or CMS
- Any server-side logic

---

## Reference Files

All files in `/Users/darrenpeterson/Documents/darrenbuilds/`:

| File | Purpose |
|---|---|
| `darrenbuilds-dark.html` | Approved design — self-contained, open in browser to verify |
| `darren-closeup.jpeg` | Portrait source — copy to `public/images/darren-hero.jpg` |
| `darrenbuilds-ai-onepage-spec.md` | Original content spec |
| `darrenbuilds-ai-onepage-technical-spec.md` | Original technical spec |
| `darrenbuilds-agent-handoff.md` | This file |
