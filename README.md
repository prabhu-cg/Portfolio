# Prabhu Raja — Portfolio

Personal portfolio for Prabhu Raja, Senior Designer — built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/                 Routes: home, about, projects, projects/[slug], contact
  components/
    ui/                 Design system primitives (Button, Card, SectionHeader, Timeline, MetricCard)
    sections/            Page sections (Hero, Metrics, Capabilities, DesignApproach, ExperienceTimeline, ...)
    icons/                Custom icons not covered by lucide-react
    CaseStudySection.tsx  Reusable numbered section wrapper for the project detail template
    InsightCard.tsx       Card for a case study's Insights section
    ProjectCard.tsx        Card used on the homepage and Projects listing
  content/               Content, separate from components: projects, about, experience, approach, capabilities, metrics, nav
  lib/                    Shared utilities (cn, motion variants)
```

Projects are the single source of portfolio work — there is no separate "work" vs "case studies" split. Each project's detail page (`/projects/[slug]`) follows a fixed 10-section template: Hero, Context, Challenge, Research, Insights, Design Strategy, Solution, Design System Thinking, Impact, Reflection.

## Design system

Design tokens (colour, type scale, radius, container width) live in `src/app/globals.css` under the Tailwind v4 `@theme` block, with a semantic token reference documented at the top of the file. The accent colour (`#EE661D`) is used sparingly and intentionally: primary buttons, eyebrow labels, highlights, active states and the hero's design-system visual — never large backgrounds or repeated across every card/icon.

## Build

```bash
npm run build
npm run lint
```
