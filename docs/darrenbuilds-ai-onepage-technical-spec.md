# DarrenBuilds.ai … Technical Build Spec (Claude Code)
This doc is a technical implementation guide for building a single page founder site for **darrenbuilds.ai** with a minimal, high-contrast aesthetic … quiet authority … subtle forward momentum.

---

## Tech Stack (recommended)
**Next.js (App Router) + TypeScript + Tailwind CSS**

Deployment:
- Cloudflare Pages (works great with Next static export) **or** Vercel

Rendering:
- Static site … no backend required
- Prefer static export where possible

---

## Repo / File Structure
Use this structure (Next.js App Router):

/app  
  layout.tsx  
  page.tsx  
  globals.css  

/components  
  Container.tsx  
  Section.tsx  
  Nav.tsx  
  Hero.tsx  
  BuilderArc.tsx  
  Projects.tsx  
  HowIBuild.tsx  
  Footer.tsx  

/public  
  images/  
    darren-hero.jpg  (source)  
    darren-hero.webp (optimized)  
    darren-hero.avif (optional)  

/README.md  

---

## Dependencies
Required:
- next
- react
- react-dom
- tailwindcss
- postcss
- autoprefixer

Optional:
- clsx (className helper)
- framer-motion (ONLY if you implement subtle motion)

Avoid heavy UI libraries.

---

## Styling Rules
- Background … #ffffff or near-white
- Primary text … near-black (#0a0a0a)
- Secondary text … charcoal (#444 to #555)
- Borders … very light gray (#eaeaea)
- Optional accent … muted steel blue (only for link hover or tiny elements)

Typography:
- H1 … large, confident
- Body … clean sans
- Max reading width … 1040 to 1200px
- Whitespace … generous vertical rhythm

Motion:
- Must respect prefers-reduced-motion
- If used … subtle scale or translate (3 to 5 percent max) … slow easing

No gradients. No noisy textures.

---

## Content (Final Approved Copy)
### Hero
H1 … Darren Builds  
Subhead … I build businesses and software. From brick and mortar to AI powered systems.  
Primary CTA … See what I’m building (scroll to Projects)  
Secondary … Instagram link https://instagram.com/darren_builds

### The Builder Arc (preserve line breaks)
I started coding at 11.  
Computer science was always home.  

Then I built Finley’s Barbershop … an idea that became 18 years of building and refining a multi location brand.  

After leading its growth and transition, I returned to software … fully focused, at a time when AI is redefining what’s possible.  

Same builder. Different tools.  

This might be the most exciting time to build.

In UI:
- Render the final line as bold
- Add extra whitespace before that final bold line

### Projects
PaletteCheck … AI powered brand compliance.  
PolicyPhile … AI policy Q&A for teams.  
Social API … API driven distribution infrastructure.  
Experiments … Always something in progress.

### How I Build
Systems over features  
Distribution matters  
Delete more than you add  
Real world experience informs better software

Footer:
- hello@darrenbuilds.ai
- X, Instagram, LinkedIn links (placeholders ok)

---

## Components (Implementation Notes)

### Container.tsx
- Provides max-width and horizontal padding
- Example … max-w-6xl, px-6, lg:px-10

### Section.tsx
- Standard section spacing
- Accepts id for anchors

### Nav.tsx (optional)
- Minimal … right aligned anchor links
- Only show on desktop (optional)
- Keep low contrast

### Hero.tsx
Layout:
- Desktop: two columns (text left, portrait right)
- Mobile: stacked (text then portrait)

Portrait:
- Use the close-up black and white portrait (hand on chin)
- No heavy effects
- Use next/image with priority and responsive sizes
- Crop so eyes are in top third

CTA behavior:
- “See what I’m building” scrolls to #build

Accessibility:
- alt text … “Black and white portrait of Darren”

Optional subtle motion:
- Implement with CSS only if possible
- If using framer-motion: guard with prefers-reduced-motion

### BuilderArc.tsx
- Render copy with deliberate line breaks
- Final line bold and visually separated

### Projects.tsx
- Render 4 items as minimal cards or rows
- Each item fields:
  - name
  - description
  - status (Building / Beta / Live) … optional
  - href optional

Implementation:
- Use an array of objects and map
- If href missing … render as disabled or “Coming soon”

### HowIBuild.tsx
- Simple bullet list
- No icons required

### Footer.tsx
- Email mailto link
- Social links
- Small type

---

## App Router Skeleton

### app/layout.tsx
- Set metadata title “Darren Builds”
- Set description
- Load fonts (optional) … prefer next/font
- Include globals.css

### app/page.tsx
- Compose the sections in this order:
  Nav (optional)
  Hero
  BuilderArc
  Projects (id="build")
  HowIBuild
  Footer

---

## Tailwind Setup (globals.css)
- Tailwind base/components/utilities
- Set body background and text color
- Define selection color lightly
- Define link hover state

Example global rules:
- body … bg-white text-neutral-950 antialiased
- p … leading-relaxed
- a … underline-offset-4 hover:opacity-80

---

## Image Optimization Workflow
- Put original as /public/images/darren-hero.jpg
- Generate webp (and optionally avif)
- Use next/image with:
  - priority
  - sizes="(max-width: 768px) 100vw, 50vw"
  - quality 80 to 90

If you can … set a subtle max height for the portrait so it does not dominate.

---

## Smooth Scroll
- Use CSS scroll-behavior: smooth on html
- Ensure anchor ids match nav links and CTA

---

## Accessibility Checklist
- h1 once
- h2 for each section
- Keyboard focus visible
- Color contrast AA
- prefers-reduced-motion respected
- All links have clear text

---

## Performance Checklist
- Lighthouse > 95 for performance
- Image optimized
- Minimal JS
- No large client-side bundles

---

## Deployment Notes
### Cloudflare Pages
- Use next export (if needed)
- Ensure images are from /public
- Add build command and output directory accordingly

### Vercel
- Default Next.js deploy

---

## Ready-to-run Prompts for Claude Code
Use these prompts to get Claude to implement quickly:

1) “Create a Next.js App Router project with TypeScript and Tailwind. Implement the page per the spec in this doc. Keep it minimal.”

2) “Implement Hero with two-column layout and next/image. Add anchor smooth scroll and section ids.”

3) “Implement BuilderArc with preserved line breaks and bold final line separated by whitespace.”

4) “Implement Projects as mapped data array. Keep cards minimal. Add optional status badges.”

5) “Ensure prefers-reduced-motion is respected for any animation. Optimize image loading. Keep Lighthouse high.”
