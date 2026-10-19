# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Hiring managers, design leaders, recruiters and prospective collaborators evaluating Prabhu Raja, a Senior UX/Product Designer with 15+ years in B2B SaaS. They arrive from a resume, a LinkedIn message or a referral, often with a few minutes between meetings, and want to judge three things quickly: depth of craft, how the designer thinks, and whether they have shipped at enterprise scale. Many read on a laptop at work; some open the link on a phone first.

## Product Purpose
A personal portfolio that shows how Prabhu designs, not just what the finished screens look like. Each project is a case study covering context, challenge, research, insights, strategy, solution, design-system thinking, impact and reflection. Work is grouped as Enterprise (three case studies from client and employer work) and Side Projects (Applications, Tools, Plugins) that Prabhu designed and built solo with AI as the engineering partner. Success is a visitor who understands the person's thinking within minutes and gets in touch or downloads the resume.

It is not a template gallery, a blog, a store or a showcase of effects.

## Positioning
Senior, systems-minded and honest about process: design system governance, accessibility, design QA and measurable outcomes sit beside the visuals. Side projects are live, linked products with real stacks, not mock-ups. Where a case study has no hard numbers, it says what was actually learned rather than inventing results.

## Operating Context
Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons, Manrope and IBM Plex Sans. Content lives in `src/content/*` (projects, about, experience, approach, capabilities, metrics, nav) and is rendered by a fixed case-study template at `/projects/[slug]`. Deployed on Vercel at prabhuraja.vercel.app; every push to `main` ships to production. Routes: Home, About, Projects (filterable by Side Projects / Enterprise with Applications / Tools / Plugins sub-tabs, kept in `?tab=`), Contact. A resume PDF is downloadable from the header and hero.

## Capabilities and Constraints
- Content is factual. Do not invent clients, metrics, testimonials or outcomes; enterprise case studies describe real roles and side projects describe real, linked products.
- Case-study PDFs exist for enterprise work and are linked from those pages.
- Palette and typography are shared with Doxa so Prabhu's products read as one family.
- Motion respects `prefers-reduced-motion` and must keep content visible if scripts fail.
- Must stay readable and fast on a phone; no layout that depends on hover.

## Brand Commitments
Name: Prabhu Raja, Senior Designer. Primary accent burnt orange `#c74504` on white with warm cream (`#f4f2ea`) bands and parchment hairlines; Manrope for text, IBM Plex Sans for small labels and chips. Tone is plain, confident and specific, in British English.

## Evidence on Hand
15+ years' experience; roles at BNY (VP User Experience, earlier contract), Marston Holdings, Sweepr and Thomson Reuters HighQ; sixteen project case studies, thirteen of them live side projects with screenshots and stacks. Use only what exists in `src/content`.

## Product Principles
1. Show the thinking: process and decisions are the product, screens are the evidence.
2. The work leads; the interface recedes and never competes with a case study.
3. Specific beats impressive: real roles, real stacks, honest outcomes.
4. Make the next step obvious: view a project, download the resume, get in touch.
5. Motion explains and confirms; it never delays reading.

## Accessibility & Inclusion
Semantic HTML, skip link, keyboard-operable tabs and menus, visible focus, WCAG AA contrast (accent text uses `#a93a03`), meaning never carried by colour alone, reduced-motion support, responsive from phone to wide desktop, print-friendly case studies.
