---
name: Prabhu Raja Portfolio
description: Designing clarity from complexity. A warm white-and-cream portfolio with one burnt-orange accent, shared with Doxa.
colors:
  accent: "#c74504"
  accent-strong: "#a93a03"
  accent-light: "#fdefe7"
  background: "#ffffff"
  surface: "#f4f2ea"
  ink: "#1c1917"
  ink-secondary: "#3d3a36"
  muted: "#6f6963"
  border: "#e8ddc8"
  border-strong: "#d6c7ab"
typography:
  hero:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  h2:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
  eyebrow:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  xl: "32px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  project-card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
  segmented-control:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.full}"
    padding: "4px"
  segmented-control-active:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
---

# Design System: Prabhu Raja Portfolio

## Overview

**Creative North Star: "The Annotated Case File"**

A calm, white working surface with warm cream bands and parchment hairlines, where the case studies do the talking. One burnt-orange accent marks what is active or actionable: the primary button, the selected tab, the reading-progress line and the focus ring. The palette is deliberately the same as Doxa's, so Prabhu's products read as one family.

Mode is Experience: the work leads from the first viewport and the interface recedes. Structure comes from spacing, type weight and 1px rules; cards appear only where a project is a self-contained object. Depth is nearly flat, with a soft shadow on card hover only.

**Key Characteristics:**
- One accent, used sparingly; warm neutrals do everything else.
- Manrope for reading and headings, IBM Plex Sans for small labels, chips and eyebrows.
- A fixed nine-section case-study template, so every project reads the same way.
- Motion is feedback and orientation: a single reveal on entry, a reading-progress line, tab indicators that glide; all of it drops to opacity and colour under reduced motion.

## Colors

- **Burnt Orange** (`accent`, #c74504): fills only: primary buttons, active tab or pill, progress line, focus outline, card-hover border, decorative dots. White on it is 4.9:1.
- **Deep Orange** (`accent-strong`, #a93a03): the only accent used as text (eyebrows, active nav, hover links) and the hover fill of primary buttons. Passes 4.5:1 on white and on surface.
- **Orange Tint** (`accent-light`, #fdefe7): selected-state ground, text selection.
- **Paper White** (`background`, #ffffff): default page and card ground.
- **Cream** (`surface`, #f4f2ea): alternating section bands, chips, inactive tab tracks.
- **Warm Ink** (`ink`, #1c1917): headings and primary text. **Ink Secondary** (#3d3a36) for body copy; **Stone** (`muted`, #6f6963) for captions and meta, 5.4:1 on white.
- **Parchment** (`border`, #e8ddc8) for every hairline; `border-strong` (#d6c7ab) for emphasised dividers.

Do not introduce a second accent hue. Do not use orange for large fills or full sections. There is no dark theme yet.

## Typography

Manrope throughout (400–800), IBM Plex Sans (400–600) for labels.

- **Hero** 40px mobile / 72px desktop, tracking -0.02em. **H1** 48px, **H2** 36px, **H3** 24px.
- **Body** 16–20px, line-height about 1.6, measure capped near 65ch.
- **Eyebrow** 13px uppercase with 0.12em tracking, in `accent-strong`, used above page and hero headings.
- **Label** 12px Plex for chips, tags and indices; tabular numerals on counts.

## Layout

Container 1200px with 24px gutters (40px from 768px up). Sections breathe at 64–80px vertical padding and alternate white and cream. Project grids are 1 / 2 / 3 columns at the default / md / lg breakpoints. Anchored jumps clear the sticky 73px header.

## Elevation & Depth

Flat by default. Cards gain a `0 4px 24px -8px rgba(28,25,23,0.12)` shadow and an accent border on hover. The sticky header uses a 1px bottom border and 90% white with a light backdrop blur. No other shadows.

## Shapes

Controls and buttons use 12px radius, cards 20px, pills and chips fully round, small icon tiles 12px. Icons are Lucide at 16–20px, stroke weight consistent.

## Components

- **Button:** primary (accent fill, white text, deep-orange hover, 2% press scale), secondary (outlined), ghost. Height 44px, 52px for large.
- **Segmented control + underline tabs:** the project filters; active indicator glides with a spring, arrow-key navigable, counts shown as small pills.
- **Project card:** icon tile, title, industry and role, description, impact, tags, and a "View project" link with a nudging arrow.
- **Case-study section:** numbered label, H2, lead paragraph, then section content that reveals once on scroll; alternating white and cream.
- **Hero project reel:** a filmstrip of five featured side projects (`src/content/featured.ts`). The focused card expands to fill the frame while its neighbours collapse to slim labelled slivers (hidden on phones). Navigate by trackpad swipe, touch swipe, mouse drag, arrow keys, dots or buttons. The active dot fills over 5.5s and that fill is the autoplay clock, so it pauses on hover, focus, off-screen or via the pause button. Under reduced motion there is no autoplay and no pause button.
- **Reading progress:** 2px accent line under the header that fills with scroll on case-study pages.
- **Timeline, metric card, gallery:** hairline-bordered, cream ground, no decoration.

## Do's and Don'ts

**Do**
- Keep accent for state and action; keep text in ink tones.
- Use `accent-strong` for any orange text.
- Reveal content once and keep it visible without JavaScript.
- Offer `prefers-reduced-motion` alternatives for every movement.

**Don't**
- Add a second accent colour or gradient text.
- Use coloured side borders, nested cards or icon-plus-heading card walls as page structure.
- Invent metrics, logos or testimonials.
- Animate layout properties or stagger every section identically.
