---
name: Prabhu Raja Portfolio
description: Designing clarity from complexity. A white-and-pale-butter portfolio with one amber accent, Newsreader headlines and DM Sans for everything else.
colors:
  accent: "#e8b923"
  accent-hover: "#d4a615"
  accent-strong: "#826400"
  accent-light: "#faf4df"
  on-accent: "#353335"
  background: "#ffffff"
  surface: "#fcfaf3"
  ink: "#353335"
  ink-secondary: "#4d4a4d"
  muted: "#6b6b6b"
  border: "#ece5cc"
  border-strong: "#dccfa6"
  focus: "#826400"
  olive: "#71806a"
  terracotta: "#a66c51"
typography:
  hero:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
  eyebrow:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
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
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 20px"
  eyebrow:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
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
    textColor: "{colors.on-accent}"
---

# Design System: Prabhu Raja Portfolio

## Overview

**Creative North Star: "The Annotated Case File"**

A calm white working surface with pale butter bands and soft hairlines, where the case studies do the talking. One amber accent marks what is active or actionable: the primary button, the selected tab, the reading-progress line, the nav underline and the dot on each label. Headlines are set in Newsreader, a serif with an editorial voice; everything that has to be read or operated is DM Sans.

Mode is Experience: the work leads from the first viewport and the interface recedes. The hero is the headline and two actions above a slow filmstrip of product screenshots, so the evidence is on screen before any claim. Structure comes from spacing, type and 1px rules; cards appear only where a project is a self-contained object. Depth is nearly flat, with a soft shadow on the filmstrip cards and on card hover.

**Key Characteristics:**
- One accent, used sparingly; warm neutrals do everything else. 60-30-10: white, pale butter, amber.
- Newsreader for hero statements and section titles (h1, h2); DM Sans for body, navigation, buttons, labels and case-study content (h3 included).
- Amber is a fill, never text. The text-grade accent is the same hue taken darker (ochre).
- A fixed nine-section case-study template, so every project reads the same way.
- Motion is feedback and orientation: a single reveal on entry, a slow filmstrip, a reading-progress line, tab indicators that glide; all of it drops to a static state under reduced motion.

## Colors

60-30-10: white carries the page, pale butter the bands and chips, amber the actions.

- **Amber** (`accent`, #e8b923): fills only: primary buttons, active tab or pill, progress line, nav underline, label dot, card-hover border. Charcoal text on it is 6.8:1. It is 1.8:1 against white, so it never carries text and a control that relies on its outline needs a border.
- **Deep Amber** (`accent-hover`, #d4a615): hover fill of primary buttons.
- **Ochre** (`accent-strong`, #826400): the only accent used as text (active nav, hover links) and the focus ring colour. 5.6:1 on white, 4.9:1 on the tint. Same hue as the fill, darker.
- **Butter Tint** (`accent-light`, #faf4df): selected-state ground, text selection.
- **Paper White** (`background`, #ffffff): default page and card ground.
- **Pale Butter** (`surface`, #fcfaf3): alternating section bands, chips, the label pill, inactive tab tracks.
- **Charcoal** (`ink`, #353335): headings, primary text, and the text on amber fills (`on-accent`). **Ink Secondary** (#4d4a4d) for body copy; **Warm Grey** (`muted`, #6b6b6b) for captions and meta, 5.3:1 on white. The brand swatch is #777777; it is nudged darker to pass 4.5:1.
- **Butter Hairline** (`border`, #ece5cc) for every hairline; `border-strong` (#dccfa6) for emphasised dividers.
- **Terracotta** (#a66c51) and **Olive** (#71806a) are palette members exposed as `--terracotta` and `--olive` for non-text supporting uses. Nothing uses them yet. Neither passes as small text, so do not set text in them.

Do not introduce a second accent hue. Do not use amber for large fills or full sections. There is no dark theme yet.

## Typography

Newsreader for h1 and h2 (weight 500, tracking -0.02em); DM Sans (400–700) for everything else.

- **Hero** 40px mobile / 72px desktop. **H1** 48px, **H2** 36px, in Newsreader. **H3** 24px in DM Sans.
- **Body** 16–20px, line-height about 1.6, measure capped near 65ch.
- **Eyebrow** is a pill, not tracked caps: 14px DM Sans medium on `surface` with a hairline border and a 8px amber dot, used above page, section and hero headings via the shared `Eyebrow` component.
- **Label** 12px for chips, tags and indices; tabular numerals on counts.

## Layout

Container 1200px with 24px gutters (40px from 768px up). Sections breathe at 64–80px vertical padding and alternate white and pale butter. Project grids are 1 / 2 / 3 columns at the default / md / lg breakpoints. Anchored jumps clear the sticky 73px header.

## Elevation & Depth

Flat by default. Cards gain a soft shadow and an accent border on hover. Filmstrip cards carry a long, low shadow (`0 20px 40px -24px`) so they read as raised. The sticky header uses a 1px bottom border and 90% white with a light backdrop blur. No other shadows.

## Shapes

Controls and buttons use 12px radius (hero buttons are fully round), cards 20px, pills and chips fully round, small icon tiles 12px. Icons are Lucide at 16–20px, stroke weight consistent.

## Components

- **Button:** primary (amber fill, charcoal text, deeper-amber hover, 2% press scale), secondary (outlined), ghost. Height 44px, 52px for large.
- **Eyebrow:** the pill label described above; one shared component, used everywhere a label sits over a heading.
- **Segmented control + underline tabs:** the project filters; active indicator glides with a spring, arrow-key navigable, counts shown as small pills.
- **Project card:** icon tile, title, industry and role, description, impact, tags, and a "View project" link with a nudging arrow.
- **Case-study section:** numbered label, H2, lead paragraph, then section content that reveals once on scroll; alternating white and pale butter.
- **Hero filmstrip:** eight side-project screenshots (`src/content/featured.ts`) on raised landscape cards at staggered heights, scrolling slowly and faded at the container edges (`Marquee`, `ProductFilmstrip`). Each card links to its case study and carries the product name and type. Pauses on hover and focus; the duplicate loop copy is aria-hidden and inert. Under reduced motion it is a static row the visitor scrolls by hand. Keep the card count a multiple of four so the vertical rhythm loops cleanly.
- **Reading progress:** 2px accent line under the header that fills with scroll on case-study pages.
- **Timeline, metric card, gallery:** hairline-bordered, pale butter ground, no decoration.

## Do's and Don'ts

**Do**
- Keep amber for state and action; keep text in ink tones.
- Use `accent-strong` (ochre) for any accent-coloured text and for focus.
- Reveal content once and keep it visible without JavaScript.
- Offer `prefers-reduced-motion` alternatives for every movement.

**Don't**
- Set text in amber, terracotta or olive.
- Add a second accent colour or gradient text.
- Use coloured side borders, nested cards or icon-plus-heading card walls as page structure.
- Invent metrics, logos or testimonials.
- Animate layout properties or stagger every section identically.

## Saved Themes

Butter is the shipped theme (tokens in `:root`, `src/app/globals.css`). The alternatives explored in the 2026 brand pass are kept, parked, in `src/styles/themes.css` so they can be revived. Each overrides colour tokens only.

| Theme | Idea | Fill / text accent | Notes |
|---|---|---|---|
| **Classic** | The original Doxa-shared palette | Burnt orange `#c74504` / `#a93a03` on white and cream `#f4f2ea` | Manrope + IBM Plex Sans. Restores colour and type, not the new layout. |
| **A · Graphite** | Butter as a highlighter marker on blue-black ink over cool paper | Marker `#f7db4a` / ink `#131824`; blue `#1f53b8` focus | Cool paper `#f8fafd` lets product screenshots supply the colour. No coloured text accent. |
| **B · Verdigris** | Deep teal on cool green-tinted paper | Teal `#006465` for fill and text; vermilion `--pin` `#dd5230` reserved | White on teal 6.7:1. Drops butter. |
| **C · Ink Blue** | Ultramarine on neutral paper | `#314ec7` for fill and text | The most conventional of the set. |

`themes.css` is parked and not imported, so none of it ships. To use one, import it under `@import "tailwindcss"` in `src/app/globals.css` and set `data-theme="classic|graphite|verdigris|ink"` on `<html>` in `src/app/layout.tsx`, or copy its token block into `:root` to make it the default. There is no switcher and no `?theme=` parameter, so visitors only ever see Butter.

**Product extension (proposed, not built).** One shared chassis (cool neutrals, same type scale and radii); one hue family per kind of product, not per product, at fixed lightness and chroma (fill about `oklch(0.48 0.15 h)`, tint `oklch(0.95 0.03 h)`); the amber marker stays on the portfolio only; semantic success, warning, error and info colours are fixed across all products and independent of the product hue.
