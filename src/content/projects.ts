import type { LucideIcon } from "lucide-react";
import { Languages, ListChecks, Gauge, ClipboardCheck, Network, RefreshCw, ParkingSquare, FileEdit, Bookmark, FileText } from "lucide-react";
import type { GalleryImage } from "@/components/CaseStudyGallery";

export interface DesignStrategyStep {
  heading: string;
  body: string;
}

export interface Insight {
  title: string;
  description: string;
}

export interface SystemThinkingItem {
  label: string;
  description: string;
}

export const projectCategories = ["Side Projects", "Plugins", "Enterprise"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  industry: string;
  role: string;
  timeline: string;
  icon: LucideIcon;
  description: string;
  impact: string;
  tags: string[];
  context: string;
  challenge: string;
  research: { methods: string[]; summary: string };
  insights: Insight[];
  designStrategy: DesignStrategyStep[];
  solution: { summary: string; highlights: string[] };
  designSystemThinking: SystemThinkingItem[];
  outcome: string;
  metrics: { value: string; label: string }[];
  reflection: string;
  gallery?: GalleryImage[];
  liveUrl?: string;
  stack?: string[];
}

export const projects: Project[] = [
  {
    slug: "reqstudio-project-briefs",
    title: "ReqStudio — Project Brief & Requirements Tool",
    category: "Side Projects",
    industry: "Product Management / Design Tools",
    role: "Designer & Builder",
    timeline: "Aug 2026",
    icon: FileText,
    description: "A local-first tool that turns a scattered requirements document into a ten-section guided brief with a live readiness score — so nothing gets built against a brief with silent gaps.",
    impact: "Replaced ad hoc Word-doc briefs with a structured, scored format that names exactly what's missing before a project starts.",
    tags: ["Product Management", "Privacy-first"],
    liveUrl: "https://getreqstudio.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Most project briefs live in a Word document that someone started once, half-filled in, and never went back to finish — which means the people building from it are often working from a brief with silent, undocumented gaps. ReqStudio set out to replace that with a guided, ten-section structure that always knows what's missing, without asking for an account or a server.",
    challenge:
      "The product needed to make an unstructured brief-writing process feel guided without being rigid — supporting unlimited pages and sections filled in any order, while still producing a single, meaningful completeness signal a stakeholder could trust.",
    research: {
      methods: ["Audit of real client briefs and RFP documents from past enterprise projects", "Competitive review of requirements-gathering and PRD tools", "Iterative testing of readiness-scoring weights against incomplete real briefs"],
      summary:
        "Reviewed how briefs actually get written in practice — rarely start-to-finish, usually revisited out of order across weeks — and used that to justify a section-by-section completion model instead of a linear wizard.",
    },
    insights: [
      {
        title: "Briefs get built out of order, not top to bottom",
        description:
          "Forcing a linear wizard would have fought how people actually write — stakeholders answer what they know first and leave gaps to fill later, so every section needed to be independently completable.",
      },
      {
        title: "A single readiness number needs to say what's missing, not just what's done",
        description:
          "A percentage alone invites arguments about the number; naming the specific missing sections next to the score is what actually gets a brief finished before it's sent.",
      },
      {
        title: "Per-page detail is where requirements actually break down",
        description:
          "The riskiest gaps weren't in the big-picture goals section — they were in unspecified individual pages, so page-level completeness needed its own bar, not just a rollup into one section.",
      },
    ],
    designStrategy: [
      {
        heading: "Structure the brief as ten independent sections, not a wizard",
        body: "Split the brief into overview, goals, audience, structure, pages, functional requirements, content, technical requirements, risks and approvals — each individually trackable, so a half-finished brief is still a usable brief.",
      },
      {
        heading: "Make the readiness score name its gaps",
        body: "Paired the weighted overall percentage with an explicit list of which sections are dragging it down, so 'send this brief' becomes a decision backed by specifics instead of a guess.",
      },
      {
        heading: "Give every page its own completeness bar",
        body: "Broke Page Requirements into per-page cards — purpose, CTA, content needs, components, dependencies, SEO, accessibility, analytics — each scored independently so gaps don't hide inside an aggregate.",
      },
      {
        heading: "Remove the save button entirely",
        body: "Wrote every keystroke to local storage moments after typing stops, and flushed on tab close, so the product never asks a user to remember to save a brief they were interrupted while writing.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the section-scoring engine to the printable report view — without a dedicated engineering team, while keeping every architectural and UX decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A local-first project brief tool with ten guided sections, unlimited pages and projects, and a live, weighted readiness score that names exactly what's still missing before a brief goes out.",
      highlights: [
        "Ten guided brief sections completable in any order, each with its own completion bar",
        "Live, weighted readiness score naming the specific sections still missing",
        "Unlimited pages per project, each scored on purpose, CTAs, content, components, SEO, accessibility and analytics",
        "Autosave to local storage on every keystroke, with no save button anywhere",
        "A shareable report view with sticky table of contents, collapsible sections and a print stylesheet",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared completion-bar component (label, percentage, missing-items list) reused across the sidebar outline, section headers and the readiness score.",
      },
      {
        label: "Tokens",
        description: "A single progress-color scale — from attention to in-progress to complete — applied consistently across sections, pages and the overall score.",
      },
      {
        label: "Patterns",
        description: "A detail-panel-plus-outline pattern shared between the Brief and Page Requirements views, so switching between a section list and its content stays consistent.",
      },
      {
        label: "Governance",
        description: "Fully client-side storage in IndexedDB — client budgets, deadlines and commercial goals never leave the device, by architecture rather than policy.",
      },
    ],
    outcome:
      "ReqStudio shipped as a structured alternative to the scattered brief documents most projects start from, giving anyone writing a brief a live signal for whether it's actually ready to hand off — not just a document that looks finished.",
    metrics: [
      { value: "10", label: "Guided brief sections" },
      { value: "Unlimited", label: "Projects and pages" },
      { value: "0", label: "Accounts or servers required" },
    ],
    reflection:
      "Designing the readiness score was a lesson in resisting false precision — early versions tried to be too clever about weighting, and the version that actually shipped is simpler and more legible because it names its gaps in plain language instead of just producing a number.",
    gallery: [
      {
        src: "/case-studies/screenshots/reqstudio-project-briefs/01-hero.jpg",
        alt: "ReqStudio landing page hero",
        caption: "The live product at getreqstudio.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/reqstudio-project-briefs/02-brief-preview.jpg",
        alt: "ReqStudio brief view showing ten sections and a live readiness score",
        caption: "The Brief tab — ten guided sections with per-section completion and a live readiness score.",
      },
      {
        src: "/case-studies/screenshots/reqstudio-project-briefs/03-dashboard.jpg",
        alt: "ReqStudio dashboard showing project count, average readiness and status breakdown",
        caption: "The Dashboard — where every brief's readiness and status stand at a glance.",
      },
    ],
  },
  {
    slug: "curo-bookmark-manager",
    title: "Curo — Local-First Bookmark Manager",
    category: "Side Projects",
    industry: "Productivity / Browser Tools",
    role: "Designer & Builder",
    timeline: "Jul – Aug 2026",
    icon: Bookmark,
    description: "A local-first bookmark manager that imports your browser's bookmarks, merges duplicates and dead links, and organizes what's left into a searchable library with its own health score — no account, no server.",
    impact: "Replaced an unsearchable bookmarks bar with a self-auditing library that scores its own health and tells you exactly what to fix.",
    tags: ["Productivity", "Privacy-first"],
    liveUrl: "https://getcuro.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Bookmarks accumulate for years across every browser a person has used, and most managers only ever add to that pile — they don't audit it. Curo set out to treat an unmanaged bookmarks bar as a data-quality problem: duplicates, dead folders and links nobody will ever find again, entirely inside the browser with no account and no server.",
    challenge:
      "The product needed to take a raw HTML bookmarks export from any browser and turn it into something a person could trust — deduplicated, organized and scored — without ever sending that browsing history anywhere, which ruled out any server-side processing or account system.",
    research: {
      methods: ["Competitive audit of bookmark managers and read-later tools", "Import-format research across Chrome, Firefox, Safari and Edge", "Iterative testing of fuzzy duplicate-matching thresholds"],
      summary:
        "Looked at how existing bookmark managers handle duplicates and found most only catch exact-URL matches — near-duplicates, like the same article with different tracking params, went untouched, which is why fuzzy grouping became the core of the product rather than a secondary feature.",
    },
    insights: [
      {
        title: "A pile of bookmarks isn't a library — it's an unaudited data set",
        description:
          "Users didn't need another place to save links; they needed something to tell them what was wrong with the links they'd already saved, which reframed the product from a save-tool to an audit-tool.",
      },
      {
        title: "Exact-match duplicate detection catches maybe half the problem",
        description:
          "Near-duplicates — the same article with different query params, or both the AMP and canonical URL bookmarked — needed fuzzy title and URL matching to actually surface, not just exact comparisons.",
      },
      {
        title: "A single health score is what makes 'good enough' visible",
        description:
          "Nobody was going to manually audit two thousand bookmarks; a configurable, weighted score across duplicates, organization, tags and freshness gave people a number to chase instead of an infinite backlog.",
      },
    ],
    designStrategy: [
      {
        heading: "Start from an import, not an empty state",
        body: "Built the first-run experience around dragging in an existing HTML bookmarks export, with a live preview of what will be added, so the product proves its value against a person's real, messy library on the first screen.",
      },
      {
        heading: "Separate detection from resolution",
        body: "Split duplicate handling into a detection pass — exact-URL and fuzzy-title grouping — and a resolution step, so bulk cleanup never silently merges or deletes anything without an explicit choice.",
      },
      {
        heading: "Make the score explain itself",
        body: "Broke the Knowledge Health Score into five weighted, individually adjustable factors — duplicate-free, organized, tagged, well-labeled, fresh — each with its own explanation of what's dragging it down.",
      },
      {
        heading: "Treat local storage as the entire architecture",
        body: "Designed every interaction — search, tagging, collections, export — around IndexedDB as the only datastore, which meant designing for what happens when a user clears their browser data, not just the happy path.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the import pipeline to the scoring engine — without a dedicated engineering team, while keeping every architectural and UX decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A local-first bookmark manager that imports any browser's bookmarks export, detects exact and fuzzy duplicates, flags organizational gaps, and scores the whole library on a configurable Knowledge Health Score — entirely client-side.",
      highlights: [
        "HTML bookmarks import from Chrome, Firefox, Safari or Edge with a live preview before anything is written",
        "Exact-URL and fuzzy near-duplicate detection with one-click bulk merge",
        "Cleanup Engine flagging missing metadata, empty folders and broken hierarchies",
        "Configurable Knowledge Health Score across duplicate-free, organized, tagged, well-labeled and fresh",
        "Custom and automatic collections, fuzzy search, and export to HTML, CSV, JSON or Markdown",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A reusable score-bar component (metric, weight, explanation) shared between the Dashboard summary and the full Health report.",
      },
      {
        label: "Tokens",
        description: "A single accent-driven progress scale used consistently across health scores, duplicate groups and growth charts.",
      },
      {
        label: "Patterns",
        description: "A detect-then-resolve pattern — grouped candidates with a clear default selection — reused across Duplicates and Cleanup.",
      },
      {
        label: "Governance",
        description: "Fully client-side storage in IndexedDB — bookmarks and browsing history never leave the device, by architecture rather than policy.",
      },
    ],
    outcome:
      "Curo shipped as a genuinely free, account-less alternative to bookmark managers that ask for an email address before doing anything — turning an unmanaged bookmarks bar into a searchable, self-scoring library without a single byte leaving the browser.",
    metrics: [
      { value: "9", label: "Built-in tools" },
      { value: "4", label: "Export formats" },
      { value: "0", label: "Accounts or servers required" },
    ],
    reflection:
      "The hardest design problem wasn't the interface — it was deciding what 'good' looks like for a library nobody had audited before. The five-factor health score took several iterations before it stopped feeling arbitrary and started feeling like something a person would trust enough to act on.",
    gallery: [
      {
        src: "/case-studies/screenshots/curo-bookmark-manager/01-hero.jpg",
        alt: "Curo landing page hero",
        caption: "The live product at getcuro.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/curo-bookmark-manager/02-dashboard.jpg",
        alt: "Curo dashboard showing bookmark count, growth chart and Knowledge Health Score",
        caption: "The Dashboard — bookmark growth over time alongside the Knowledge Health Score.",
      },
      {
        src: "/case-studies/screenshots/curo-bookmark-manager/03-health-score.jpg",
        alt: "Curo Health page showing the five scoring factors and adjustable weights",
        caption: "The Health view — five weighted factors, each adjustable and individually explained.",
      },
    ],
  },
  {
    slug: "localens-localization-qa",
    title: "LocaLens — Localization QA Tool",
    category: "Side Projects",
    industry: "Localization / QA Tools",
    role: "Designer & Builder",
    timeline: "Jun – Jul 2026",
    icon: Languages,
    description: "A tool that measures how much translated UI text grows and flags exactly which strings will break their layout, before a translation ships.",
    impact: "Replaced manual, after-the-fact localization QA with an upfront layout-risk check that catches overflow before it reaches production.",
    tags: ["Localization", "Accessibility"],
    liveUrl: "https://localensapp.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Most translation tools stop at the text — they translate a string but say nothing about whether the translated version still fits the button, label or card it was designed for. Teams typically only discover layout breakage after a translated build ships. LocaLens set out to catch that earlier, from a screenshot alone.",
    challenge:
      "The product needed to go from a UI screenshot to a reliable overflow risk assessment — extracting text, translating it, and measuring whether the result still fits its original container — without requiring access to the actual codebase or design file.",
    research: {
      methods: ["Domain research into text expansion by language", "Competitive audit of translation and localization tools", "Iterative testing of OCR extraction accuracy"],
      summary:
        "Researched how much text length typically expands or contracts across common target languages — German and Finnish tend to expand, Japanese and Chinese often contract — and used that as the baseline for what counts as a meaningful overflow risk versus normal variation.",
    },
    insights: [
      {
        title: "Translation length, not translation quality, breaks layouts",
        description:
          "A perfectly accurate translation can still break a UI if it's 40% longer than the source string — length risk and translation quality are separate problems that most tools conflate.",
      },
      {
        title: "OCR position data is what makes the check useful",
        description:
          "Extracting the text alone isn't enough — knowing where each text block sits and how wide its container is is what turns a translation into an actual overflow measurement.",
      },
      {
        title: "Privacy was a precondition, not a feature",
        description:
          "Teams testing pre-release UI screenshots won't upload them to a third-party server — client-side OCR was the only way to make the tool usable for real, unreleased work.",
      },
    ],
    designStrategy: [
      {
        heading: "Start from a screenshot, not a codebase",
        body: "Built the tool around OCR extraction from a UI screenshot, so it works on any interface — shipped or in-progress — without needing design file or code access.",
      },
      {
        heading: "Measure expansion, not just translate",
        body: "Calculated a character-expansion percentage per text block and compared rendered width against the original container, turning 'is this translated' into 'does this still fit.'",
      },
      {
        heading: "Flag risk in three tiers",
        body: "Colour-coded every text block as Safe, Review or High-risk, so a team can triage a screen with dozens of strings in seconds instead of reading every translation.",
      },
      {
        heading: "Keep it client-side",
        body: "Ran OCR entirely in the browser so screenshots of unreleased UI never leave the user's machine, making the tool safe to use on pre-launch work.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the OCR extraction pipeline to the risk-scoring logic — without a dedicated engineering team, while keeping every architectural and UX decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A client-side localization QA tool that extracts text from a UI screenshot via OCR, translates it into 10 languages, and flags exactly which strings risk breaking their original layout.",
      highlights: [
        "OCR extraction of text blocks with position data from PNG, JPG or WEBP screenshots",
        "Translation into 10 languages including French, German, Japanese and Arabic",
        "Character-expansion and container-overflow risk scoring per text block",
        "Side-by-side visual comparison with zoom and pan, exportable as PNG, PDF, CSV, XLSX or JSON",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A reusable risk-badge component (Safe / Review / High-risk) applied consistently across the comparison view and exported reports.",
      },
      {
        label: "Tokens",
        description: "A three-tier risk colour scale shared between the live comparison view and every export format.",
      },
      {
        label: "Patterns",
        description: "A side-by-side comparison pattern with synchronized zoom and pan across source and translated versions.",
      },
      {
        label: "Governance",
        description: "Fully client-side processing — screenshots and extracted text never leave the browser, by design rather than by policy.",
      },
    ],
    outcome:
      "LocaLens shipped as a working QA step most localization workflows skip entirely, turning 'ship the translation and see what breaks' into a check a team can run before release.",
    metrics: [
      { value: "10", label: "Languages supported" },
      { value: "3", label: "Risk tiers: Safe, Review, High-risk" },
      { value: "100%", label: "Client-side — no server upload" },
    ],
    reflection:
      "This was the clearest case of a tool needing a genuinely different data model than I expected going in — I started thinking of it as a translation tool and only later realised the actual product was a measurement tool that happens to use translation as an input.",
    gallery: [
      {
        src: "/case-studies/screenshots/localens-localization-qa/01-hero.jpg",
        alt: "LocaLens landing page hero",
        caption: "The live product at localensapp.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/localens-localization-qa/02-features.jpg",
        alt: "LocaLens feature grid showing OCR extraction, translation and export options",
        caption: "Core capabilities — OCR extraction, translation, side-by-side compare and multi-format export.",
      },
      {
        src: "/case-studies/screenshots/localens-localization-qa/03-risk-preview.jpg",
        alt: "LocaLens risk preview card showing Safe, Review and High-risk counts",
        caption: "The risk-scoring output a team actually sees — safe, review and high-risk blocks for a screenshot.",
      },
    ],
  },
  {
    slug: "uxledger-ux-debt-tracker",
    title: "UXLedger — UX Debt Register",
    category: "Side Projects",
    industry: "Design Tools / Product Management",
    role: "Designer & Builder",
    timeline: "Apr – May 2026",
    icon: ListChecks,
    description: "A living register for tracking UX debt — usability, accessibility and content issues — instead of letting them scatter across spreadsheets and get ignored.",
    impact: "Turned ad-hoc UX issue tracking into a scored, trackable register that teams can use to prioritise fixes and prove improvement over time.",
    tags: ["Design Tools", "Product Management"],
    liveUrl: "https://uxledger.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "UX debt — the small usability, accessibility and content issues that pile up in a product — usually lives in scattered spreadsheets, sticky notes or Slack threads. It rarely gets prioritised against feature work because there's no shared, visible record of how much of it exists or how severe it is. UXLedger set out to give that debt the same visibility a bug tracker gives engineering debt.",
    challenge:
      "The product needed to make UX debt feel measurable and prioritisable — not just a list — while staying lightweight enough that logging an issue takes seconds, not a form-filling exercise. It also needed to speak to two audiences: designers logging issues day-to-day, and stakeholders who only look at the dashboard.",
    research: {
      methods: ["Competitive audit of bug and issue trackers", "Domain research into UX debt as a concept", "Iterative prototyping of the scoring model"],
      summary:
        "Studied how engineering teams track technical debt and bugs, and adapted that model — severity, status, ownership — to the specific shape of UX issues, which don't always map cleanly onto a bug tracker's fields.",
    },
    insights: [
      {
        title: "A health score makes debt legible to non-designers",
        description: "A single 0–100 score, colour-coded by severity, gives stakeholders a number to track without needing to read every logged issue.",
      },
      {
        title: "Logging friction kills adoption faster than anything else",
        description: "If capturing a UX issue takes longer than noticing it, it never gets logged — the entry flow had to be closer to a quick note than a bug report form.",
      },
      {
        title: "Trends matter more than snapshots",
        description: "A single health score answers 'how bad is it now' — a 30-day trend answers the more useful question, 'is it getting better.'",
      },
    ],
    designStrategy: [
      {
        heading: "Borrow the bug-tracker mental model",
        body: "Structured debt items around severity, status, category and ownership — fields designers and engineers already understand from issue trackers.",
      },
      {
        heading: "Score for stakeholders, log for designers",
        body: "Built a weighted 0–100 health score as the stakeholder-facing summary, while keeping the underlying logging flow fast and low-friction for designers.",
      },
      {
        heading: "Make every project its own register",
        body: "Supported multiple projects with custom colour coding and row-level data isolation, so a register never mixes debt across unrelated products.",
      },
      {
        heading: "Design for the export, not just the dashboard",
        body: "Built CSV and Excel export from the start, since most stakeholder conversations about UX debt still happen in a roadmap doc or a review deck, not inside the tool.",
      },
      {
        heading: "Let AI own the scaffolding, not the scoring model",
        body: "Built the register and dashboard with Claude Code as a development partner, but treated the weighted health-score logic as a design decision I owned directly — AI accelerated the build, not the judgement calls that made the score trustworthy.",
      },
    ],
    solution: {
      summary:
        "A UX debt register combining fast issue logging with a scored, trend-tracked dashboard, so usability and accessibility issues get the same visibility as engineering bugs.",
      highlights: [
        "A full debt register with severity, status, category and ownership fields",
        "A weighted 0–100 health score, colour-coded and tracked over a 30-day trend",
        "Rich-text descriptions, file attachments and threaded comments per issue",
        "CSV and Excel export for roadmap and stakeholder reviews",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A reusable issue-card and register-row component shared between the logging flow and the dashboard views.",
      },
      {
        label: "Tokens",
        description: "A severity colour scale applied consistently across the register, the health score and the trend chart.",
      },
      {
        label: "Patterns",
        description: "A filter-sort-search pattern that works identically across every project's register, so switching projects doesn't mean relearning the tool.",
      },
      {
        label: "Governance",
        description: "Row-level security isolating each project's data per account, with an audit trail on every comment and status change.",
      },
    ],
    outcome:
      "UXLedger shipped as a working register that replaces the spreadsheet-and-sticky-note approach most teams default to for tracking UX debt, with a health score that makes the backlog visible to people who never open the tool.",
    metrics: [
      { value: "0–100", label: "Weighted health score" },
      { value: "30-day", label: "Trend visualisation" },
      { value: "2", label: "Export formats: CSV & Excel" },
    ],
    reflection:
      "The hardest part wasn't the register — it was the scoring model. A health score is only useful if people trust the number, which meant the weighting had to be transparent enough that a sceptical stakeholder could see why a 62 wasn't just made up.",
    gallery: [
      {
        src: "/case-studies/screenshots/uxledger-ux-debt-tracker/01-hero.jpg",
        alt: "UXLedger landing page hero",
        caption: "The live product at uxledger.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/uxledger-ux-debt-tracker/02-features.jpg",
        alt: "UXLedger feature grid showing debt register, health score and dashboards",
        caption: "The full register — debt logging, health score, dashboards and export in one tool.",
      },
      {
        src: "/case-studies/screenshots/uxledger-ux-debt-tracker/03-health-score.jpg",
        alt: "UXLedger product health score card showing a score of 82 with severity breakdown",
        caption: "The product health score — a single number backed by a visible severity breakdown.",
      },
    ],
  },
  {
    slug: "uxbeacon-ux-audit-tool",
    title: "UXBeacon — Automated UX Audit Tool",
    category: "Side Projects",
    industry: "Design Tools / Web Analysis",
    role: "Designer & Builder",
    timeline: "Mar 2026",
    icon: Gauge,
    description: "A free, no-login tool that scores any public website's UX across heuristics, accessibility, content and UX-law compliance in seconds.",
    impact: "Replaced black-box AI audit scores with a transparent, rule-based UX health score anyone can inspect and reproduce.",
    tags: ["Design Tools", "Accessibility"],
    liveUrl: "https://uxbeacon.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Most quick UX-audit tools either require a login and a sales conversation, or they return an AI-generated score with no visibility into how it was calculated. UXBeacon set out to be the opposite: free, instant, and built entirely on rules a designer could actually inspect and argue with.",
    challenge:
      "The product needed to analyse a real website — crawling multiple pages — and turn that into a single trustworthy score, fast enough to feel instant, without hiding behind an opaque AI model or a sign-up wall.",
    research: {
      methods: ["Review of established UX heuristics and laws (Nielsen, Hick's, Fitts's, Miller's)", "Accessibility standards research (WCAG 2.2, axe-core)", "Competitive audit of existing AI-based audit tools"],
      summary:
        "Grounded every scoring engine in an established, citable framework — Nielsen's heuristics, WCAG 2.2, classic UX laws — specifically so the tool's output could be traced back to a rule, not a black-box model's opinion.",
    },
    insights: [
      {
        title: "Designers don't trust scores they can't trace",
        description: "A score is only useful if you can ask 'why' and get a concrete rule as the answer — deterministic, rule-based scoring builds more trust than a higher-sounding AI score.",
      },
      {
        title: "No login is a feature, not a compromise",
        description: "Removing the sign-up step wasn't just about lower friction — it changed how the tool got used, as a quick sanity-check rather than a formal audit process.",
      },
      {
        title: "One score isn't enough, but five is too many to act on",
        description: "A single composite score is useful for a first read, but only broken into heuristics, accessibility, content and UX-law categories does it tell you where to actually start fixing.",
      },
    ],
    designStrategy: [
      {
        heading: "Build on citable rules, not a model",
        body: "Implemented each analysis engine — heuristics, accessibility, content, UX laws — as a deterministic rule set that produces the same score for the same input every time.",
      },
      {
        heading: "Remove every barrier to a first scan",
        body: "Required no account and no setup — just a URL — so trying the tool costs nothing more than typing a website address.",
      },
      {
        heading: "Score in layers",
        body: "Combined five category scores into one weighted A–F health score, so the tool answers both 'how good is this site' and 'good at what, specifically.'",
      },
      {
        heading: "Make results portable",
        body: "Built PDF, CSV and JSON export from the start, since a UX audit is rarely useful only inside the tool that generated it.",
      },
      {
        heading: "Direct AI at the build, not the judgement",
        body: "Used Claude Code as a development partner to implement six parallel analysis engines and a full crawler, while every rule the engines score against was specified and reviewed by hand — deterministic scoring depends on it.",
      },
    ],
    solution: {
      summary:
        "A free, login-free UX audit tool that crawls up to 25 pages of a site and runs six deterministic analysis engines in parallel, producing a transparent, exportable health score.",
      highlights: [
        "Six analysis engines: heuristics, accessibility, content, UX laws, health score, exports",
        "Deterministic, rule-based scoring — reproducible and inspectable, not AI-generated",
        "Crawls up to 25 pages per site, running all engines in parallel",
        "PDF, CSV and JSON export for sharing results with a team",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared score-card component reused across all six engines and the composite health-score summary.",
      },
      {
        label: "Tokens",
        description: "An A–F grading scale with consistent colour coding applied across every category and the composite score.",
      },
      {
        label: "Patterns",
        description: "A crawl-then-score pattern that runs all six engines in parallel against the same page set, rather than sequential single-page checks.",
      },
      {
        label: "Governance",
        description: "Every score traces back to a specific, inspectable rule — no engine outputs a number without a documented reason.",
      },
    ],
    outcome:
      "UXBeacon shipped as a free, instant alternative to sales-gated audit tools, giving any designer or developer a reproducible UX health score for a site in seconds.",
    metrics: [
      { value: "6", label: "Parallel analysis engines" },
      { value: "25", label: "Pages crawled per scan" },
      { value: "0", label: "Login required" },
    ],
    reflection:
      "Choosing deterministic rules over an AI model was the harder, slower path to build — every rule had to be defined and justified by hand. But it's also the reason someone can actually trust and act on the score, which was the entire point of the tool.",
    gallery: [
      {
        src: "/case-studies/screenshots/uxbeacon-ux-audit-tool/01-hero.jpg",
        alt: "UXBeacon landing page hero with URL input",
        caption: "The live product at uxbeacon.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/uxbeacon-ux-audit-tool/02-engines.jpg",
        alt: "UXBeacon six analysis engines grid",
        caption: "The six parallel engines behind every scan — heuristics, accessibility, content, UX laws and more.",
      },
      {
        src: "/case-studies/screenshots/uxbeacon-ux-audit-tool/03-score-card.jpg",
        alt: "UXBeacon score card showing an A grade with category breakdown",
        caption: "A sample scan result — an A–F grade with a transparent, per-category breakdown.",
      },
    ],
  },
  {
    slug: "assessly-online-exams",
    title: "Assessly — Online Examination Platform",
    category: "Side Projects",
    industry: "EdTech",
    role: "Designer & Builder",
    timeline: "Feb 2026",
    icon: ClipboardCheck,
    description: "An exam platform that lets teachers create, share and auto-grade tests without the administrative busywork.",
    impact: "Replaced manual test administration with an invite-code flow and instant MCQ grading, cutting setup and grading friction to near zero.",
    tags: ["EdTech", "Product Design"],
    liveUrl: "https://assesslyapp.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Teachers running tests in a classroom or remote setting typically juggle spreadsheets for rosters, paper or PDF exports for grading, and no easy way to see who has actually attempted a test. Assessly set out to replace that patchwork with a single, lightweight platform built around how a teacher actually runs a test day.",
    challenge:
      "The core tension was keeping setup effortless for teachers while keeping access frictionless for students, without requiring every student to create an account. Grading also needed to feel instant for objective questions while still leaving room for manual judgement on written answers.",
    research: {
      methods: ["Competitive audit of existing exam tools", "Workflow mapping for a typical test cycle", "Iterative prototyping"],
      summary:
        "Mapped the end-to-end lifecycle of a classroom test — creation, distribution, attempt, grading, review — and audited existing tools to find where they added friction teachers didn't need, like mandatory student sign-up before a test even started.",
    },
    insights: [
      {
        title: "Sign-up was the single biggest drop-off risk",
        description: "Requiring students to register before taking a test added friction at exactly the moment engagement mattered most — an invite code removed that step entirely.",
      },
      {
        title: "Grading needed two speeds",
        description: "Multiple-choice and short-answer questions can be scored the instant a student submits; long-answer questions need a teacher's judgement — the product had to support both without making either feel like an afterthought.",
      },
      {
        title: "Teachers and students needed different dashboards, not different apps",
        description: "The same underlying data — tests, attempts, results — needed to be scoped completely differently depending on who was looking at it.",
      },
    ],
    designStrategy: [
      {
        heading: "Design around the test lifecycle",
        body: "Structured the whole product around four stages — create, distribute, attempt, grade — so every screen maps to a moment a teacher actually experiences.",
      },
      {
        heading: "Remove sign-up from the critical path",
        body: "Replaced student registration with an 8-character invite code, so a class could start a test in seconds instead of managing a roster of accounts.",
      },
      {
        heading: "Grade what can be graded instantly",
        body: "Built automatic scoring for multiple-choice questions so results are ready the moment a student submits, while routing written answers to a clear manual review queue.",
      },
      {
        heading: "Scope every dashboard to its audience",
        body: "Gave teachers and students separate, purpose-built dashboards instead of one shared view with permission toggles, so neither audience sees controls that aren't theirs.",
      },
      {
        heading: "Ship the full stack solo, with AI as the build partner",
        body: "Used Claude Code as a development partner to take the invite-code auth flow and auto-grading logic from design to production, without a dedicated engineering team on the project.",
      },
    ],
    solution: {
      summary:
        "A lightweight exam platform where teachers create mixed-format tests and distribute them by invite code, with multiple-choice questions graded automatically and submissions organised clearly for manual review.",
      highlights: [
        "Invite-code access that skips student sign-up entirely",
        "Instant automated scoring for multiple-choice questions",
        "A submission tracker showing who's attempted, submitted, or still pending",
        "Separate role-scoped dashboards for teachers and students",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A reusable set of question-builder components supporting multiple-choice, short-answer and long-answer formats in a single test.",
      },
      {
        label: "Tokens",
        description: "A consistent visual language for status — attempted, submitted, graded — reused across every dashboard and list view.",
      },
      {
        label: "Patterns",
        description: "An invite-code entry pattern that replaces traditional authentication for the student-facing side of the product.",
      },
      {
        label: "Governance",
        description: "A single source of truth for test state — draft, live, closed — that keeps teacher and student views from ever disagreeing.",
      },
    ],
    outcome:
      "Assessly shipped as a working platform that takes a teacher from writing a test to reviewing graded results without the spreadsheet-and-email workarounds most classrooms fall back on.",
    metrics: [
      { value: "3", label: "Question formats supported" },
      { value: "8-char", label: "Invite code, zero sign-up" },
      { value: "Instant", label: "MCQ grading" },
    ],
    reflection:
      "The biggest design decision wasn't a screen — it was deciding what not to require. Every piece of mandatory setup I removed, accounts, rosters, templates, made the product faster to trust on a first use.",
    gallery: [
      {
        src: "/case-studies/screenshots/assessly-online-exams/01-hero.jpg",
        alt: "Assessly landing page hero",
        caption: "The live product at assesslyapp.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/assessly-online-exams/02-dashboard.jpg",
        alt: "Assessly teacher dashboard showing tests, students and pending review counts",
        caption: "The teacher dashboard — total tests, students and pending reviews at a glance.",
      },
      {
        src: "/case-studies/screenshots/assessly-online-exams/03-features.jpg",
        alt: "Assessly feature grid covering test building, invite codes and grading",
        caption: "Everything a classroom needs to run a test, from question to grade.",
      },
    ],
  },
  {
    slug: "sitenest-visual-sitemaps",
    title: "SiteNest — Visual Sitemap Builder",
    category: "Side Projects",
    industry: "Productivity / Design Tools",
    role: "Designer & Builder",
    timeline: "Jan 2026",
    icon: Network,
    description: "A visual, canvas-based tool for planning a site's structure — pages, connections and rough wireframes — without reaching for a slide deck.",
    impact: "Replaced static screenshots and slide decks with a living canvas that stays accurate as scope changes, exportable as PNG or JSON.",
    tags: ["Productivity", "Interaction Design"],
    liveUrl: "https://sitenestapp.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Planning a site's structure usually ends up split across two disconnected tools — a diagramming tool for the sitemap and a slide deck or whiteboard for rough page layouts. Both go stale the moment scope changes. SiteNest set out to put structure and layout on the same canvas.",
    challenge:
      "The product needed to feel as fast and unstructured as a whiteboard while still producing something structured enough to export and hand off. It also had to work for both the big-picture view of the whole site and the detail view of one page's layout, without forcing a mode switch.",
    research: {
      methods: ["Competitive audit of diagramming and whiteboard tools", "Workflow mapping for site-planning sessions", "Iterative prototyping of canvas interaction"],
      summary:
        "Looked at how sitemaps actually get made in practice — usually starting from a blank page and growing organically — and audited existing diagramming tools to see where generic canvas tools broke down for this specific job.",
    },
    insights: [
      {
        title: "A blank canvas beats a template",
        description: "Templates assume a site structure before you know what you're planning — starting from nothing and letting structure emerge matched how sitemaps actually get built.",
      },
      {
        title: "Zoom is the real navigation model",
        description: "The same canvas needed to answer 'what does the whole site look like' and 'what does this one page look like' — infinite zoom did that better than switching views.",
      },
      {
        title: "Export has to match how the output gets used",
        description: "PNG for a deck, JSON for a handoff — the two people who ask for a sitemap almost always want it in a different format.",
      },
    ],
    designStrategy: [
      {
        heading: "Start from nothing",
        body: "Built an infinite canvas with no forced starting template, so a project begins exactly as empty as a new sitemap actually is.",
      },
      {
        heading: "Merge structure and layout",
        body: "Let pages carry both their position in the site structure and a rough wireframe of their layout, on the same canvas, instead of splitting them into separate tools.",
      },
      {
        heading: "Design for two zoom levels",
        body: "Made the canvas work equally well zoomed out for the full site structure and zoomed in for one page's wireframe blocks.",
      },
      {
        heading: "Export for the request, not the tool",
        body: "Shipped both PNG and JSON export from day one, covering the two most common reasons someone asks to see a sitemap.",
      },
      {
        heading: "Treat AI as the pair, not the author",
        body: "Built the canvas, connection and wireframe-block logic with Claude Code as a development partner, while the interaction model itself — what infinite zoom needed to feel like — stayed a hands-on design call throughout.",
      },
    ],
    solution: {
      summary:
        "An infinite-canvas sitemap builder combining page structure, navigation connections and pre-built wireframe blocks in one tool, exportable as PNG or JSON.",
      highlights: [
        "An infinite canvas for both site-wide structure and single-page layout",
        "19+ pre-built wireframe blocks for fast page sketches",
        "A properties panel for editing titles, URLs, notes and colours in place",
        "Light and dark themes that remember the user's preference",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "19+ wireframe blocks — heroes, forms, footers — built as reusable canvas primitives rather than one-off shapes.",
      },
      {
        label: "Tokens",
        description: "A light/dark theme system applied consistently across canvas, panels and exports.",
      },
      {
        label: "Patterns",
        description: "A connection pattern for linking pages that doubles as both navigation mapping and user-flow documentation.",
      },
      {
        label: "Governance",
        description: "Row-level data isolation per project, so every sitemap is private to its owner by default.",
      },
    ],
    outcome:
      "SiteNest shipped as a working alternative to the slide-deck-and-whiteboard combination most teams default to, with structure and layout living on one exportable canvas.",
    metrics: [
      { value: "∞", label: "Canvas — no size limit" },
      { value: "19+", label: "Wireframe blocks" },
      { value: "2", label: "Export formats: PNG & JSON" },
    ],
    reflection:
      "The temptation with a canvas tool is to add every feature a generic diagramming tool has. Staying narrowly focused on 'this is for planning a site' — not flowcharts, not org charts — is what kept the interaction model simple enough to actually feel fast.",
    gallery: [
      {
        src: "/case-studies/screenshots/sitenest-visual-sitemaps/01-hero.jpg",
        alt: "SiteNest landing page hero",
        caption: "The live product at sitenestapp.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/sitenest-visual-sitemaps/02-canvas.jpg",
        alt: "SiteNest canvas editor showing a connected page structure with a properties panel",
        caption: "The canvas itself — connected pages, an editable structure, and a live properties panel.",
      },
      {
        src: "/case-studies/screenshots/sitenest-visual-sitemaps/03-how-it-works.jpg",
        alt: "SiteNest how-it-works steps and slide-deck comparison",
        caption: "From blank canvas to shareable plan in four steps.",
      },
    ],
  },
  {
    slug: "collaborate-web-app-redesign",
    title: "Collaborate — Responsive Web App Redesign",
    category: "Enterprise",
    industry: "Legal Tech / Enterprise Software",
    role: "Lead Product Designer",
    timeline: "58-week redesign · ~18-month rollout",
    icon: RefreshCw,
    description: "A ground-up redesign of HighQ's flagship legal collaboration platform, replacing a decade of accumulated complexity with a streamlined, responsive interface.",
    impact: "Lifted user adoption 30% and satisfaction to 85% within three months of the version 5 launch, while cutting clicks for routine tasks by 40%.",
    tags: ["Enterprise Software", "Legal Tech"],
    context:
      "Collaborate is HighQ's flagship platform, used by top legal firms for over a decade. Despite its longevity, user feedback consistently pointed to the same problem: the platform's complexity made routine tasks harder than they needed to be, and HighQ risked losing business to competitors as a result. The redesign set out to modernise the UI and UX while retaining the essence of a platform legal teams had built years of workflow around.",
    challenge:
      "The platform's complexity was hampering legal professionals from completing routine tasks efficiently, driving frustration and a decline in market competitiveness. Any redesign had to work within the existing technological architecture, align with stakeholder expectations and business goals, and come with a structured change management plan — this was a decade-old platform with an established user base, not a blank slate.",
    research: {
      methods: ["Contextual inquiry (20 users)", "User interviews (15 users)", "Persona creation", "Survey questionnaire (50 respondents, 75% response rate)", "Iterative user testing (10 users)"],
      summary:
        "Combined contextual inquiry inside users' actual work environments with structured interviews and a firm-wide survey, then validated every redesign decision against a 10-user testing panel through each phase of the rollout.",
    },
    insights: [
      {
        title: "Navigation, not features, was the core complaint",
        description:
          "70% of users found navigation cumbersome and 60% struggled to complete tasks — the platform had the right capabilities, but users couldn't reliably find their way to them.",
      },
      {
        title: "Users wanted the interface to adapt to them",
        description:
          "70% of users asked for customisable dashboards tailored to their own workflow, rather than one fixed layout serving every role from legal associate to systems administrator.",
      },
      {
        title: "A cluttered interface was actively driving away business",
        description:
          "80% of participants wanted a more intuitive interface with streamlined functionality — a strong enough signal that HighQ treated the redesign as a retention issue, not a cosmetic one.",
      },
    ],
    designStrategy: [
      {
        heading: "Run the full 5D process on a live platform",
        body: "Took the redesign through Discover, Define, Design, Develop and Deploy & Measure stages — from stakeholder interviews and competitive audits through to heuristic analysis after launch — rather than skipping straight to visual design.",
      },
      {
        heading: "Redesign module by module",
        body: "Rolled the redesign out incrementally across modules over 12 months instead of a single big-bang release, so legal teams could adapt gradually rather than relearn the whole platform at once.",
      },
      {
        heading: "Make every module responsive by default",
        body: "Rebuilt navigation, file browsing and dashboards to work across desktop, tablet and phone, since legal professionals were increasingly working from client sites and courtrooms, not just their desks.",
      },
      {
        heading: "Pair every redesign with a change management plan",
        body: "Built structured communication and support materials alongside each module release, treating user adoption of the new UI as a deliverable in its own right, not an assumed outcome.",
      },
    ],
    solution: {
      summary:
        "A phased, responsive redesign of Collaborate's core modules — dashboard, file management, activity feed and navigation — moving from a dense, desktop-only interface to a modern, mobile-aware one built on a shared design system.",
      highlights: [
        "Simplified global, secondary and site navigation, replacing deeply nested menus with clearer wayfinding",
        "A redesigned file and folder browser with list/thumbnail views and clearer sort controls",
        "A modernised activity feed and dashboard supporting quick updates, image handling and threaded comments",
        "A fully responsive mobile experience, contributing to a 50% increase in mobile user activity",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared pattern library and style guide built during the Develop stage, reused across every redesigned module instead of each team styling its own screens.",
      },
      {
        label: "Tokens",
        description: "Structural and dynamic markup standards and style sheets that kept typography, spacing and colour consistent as the redesign rolled out module by module over a year.",
      },
      {
        label: "Patterns",
        description: "A consistent navigation and list-view pattern — used for files, wikis, tasks and events alike — so learning one module's interaction model transferred to the next.",
      },
      {
        label: "Governance",
        description: "A documented 5D process (Discover, Define, Design, Develop, Deploy & Measure) that gave the offshore development team and product owners a shared, repeatable way to ship each module.",
      },
    ],
    outcome:
      "Following the version 5 launch, HighQ saw user adoption rise 30%, satisfaction reach 85%, and community engagement jump 150%, while new client acquisitions grew 25% — evidence that the redesign addressed a real competitive risk, not just a cosmetic complaint.",
    metrics: [
      { value: "30%", label: "Increase in user adoption post-launch" },
      { value: "85%", label: "Post-release user satisfaction" },
      { value: "40%", label: "Reduction in clicks for routine tasks" },
    ],
    reflection:
      "Engaging users early and testing iteratively drove most of the good decisions in this redesign — but with hindsight, I'd have pushed for even more testing time and a more structured training rollout before launch, since a lot of early friction came from users encountering the new UI cold rather than the UI itself being wrong.",
    gallery: [
      {
        src: "/case-studies/screenshots/collaborate-web-app-redesign/01-device-mockup.jpg",
        alt: "Collaborate shown across desktop, tablet and phone",
        caption: "The redesign had to hold up across desktop, tablet and phone — not just the primary desktop view.",
      },
      {
        src: "/case-studies/screenshots/collaborate-web-app-redesign/02-homepage-before.jpg",
        alt: "The pre-redesign Collaborate homepage and activity feed",
        caption: "The pre-redesign homepage — dense navigation, a single fixed layout for every role.",
      },
      {
        src: "/case-studies/screenshots/collaborate-web-app-redesign/03-file-list-before.jpg",
        alt: "File browser before redesign, showing sort menu",
        caption: "File browser, before: functional, but with limited view and sort affordances.",
      },
      {
        src: "/case-studies/screenshots/collaborate-web-app-redesign/04-file-list-after.jpg",
        alt: "File browser after redesign, with search and clearer layout",
        caption: "File browser, after: added search, clearer hierarchy, same core information.",
      },
    ],
  },
  {
    slug: "parking-permit-customer-portal",
    title: "Parking Permit — Customer Portal",
    category: "Enterprise",
    industry: "GovTech / Public Sector Services",
    role: "Lead Product Designer",
    timeline: "16-week UX phase · in progress",
    icon: ParkingSquare,
    description: "A redesign of the UK council parking-permit application portal, moving it in-house and rebuilding it around users aged 18 to 70 with wildly different comfort with technology.",
    impact: "Targeting an 80% user satisfaction score and a 30% increase in completed applications, after research found 70% of users considered the existing portal confusing.",
    tags: ["GovTech", "Accessibility"],
    context:
      "The Parking Permit Customer Portal lets the public apply for and purchase parking permits specific to individual UK councils, each with its own rules and restrictions. The existing portal was confusing and outdated, and had long been run by a third-party provider at rising cost. MarstonHoldings made the call to bring development in-house, both to fix the user experience and to respond to user needs faster than an external vendor relationship allowed.",
    challenge:
      "The portal had to serve residents from age 18 to 70 with very different levels of technology comfort, alongside internal MarstonHoldings staff and council employees managing applications — all through one interface, without a login wall discouraging casual users. Regulatory compliance varies by council, and the offshore development team added its own coordination overhead on top of an already tight timeline.",
    research: {
      methods: ["Survey (1,500 respondents)", "Heuristic evaluation", "Persona creation", "Cognitive walkthrough", "In-depth interviews (12 users)"],
      summary:
        "Ran a large-scale survey alongside a personal heuristic evaluation and cognitive walkthrough to separate what users said frustrated them from what independently, measurably failed — then used 12 in-depth interviews to understand the why behind both.",
    },
    insights: [
      {
        title: "The portal was failing on its own terms, not just by user report",
        description:
          "70% of surveyed users found the portal confusing, and a cognitive walkthrough independently found a 60% task-completion failure rate — the complaints and the measured usability problems agreed with each other.",
      },
      {
        title: "One portal has to work for a teenager and a retiree",
        description:
          "Personas ranged from a 24-year-old junior professional to a 65-year-old retired teacher who prefers face-to-face help over online forms — the interface couldn't assume a single baseline of digital confidence.",
      },
      {
        title: "Bulk and single applications are different jobs",
        description:
          "A corporate manager handling permits for an entire fleet needs efficient bulk workflows and reporting; a parent applying for one permit needs speed and clarity — conflating the two made both worse.",
      },
    ],
    designStrategy: [
      {
        heading: "Run a 4D cycle: Discover, Define, Design, Determine",
        body: "Structured the whole redesign around understanding context of use, specifying user requirements, designing solutions and validating with users, repeating the loop rather than shipping one linear pass.",
      },
      {
        heading: "Design for the widest possible age and skill range",
        body: "Built personas spanning a 24-year-old professional to a 65-year-old retiree with low tech confidence, and stress-tested every flow against the least tech-comfortable persona, not the most.",
      },
      {
        heading: "Split resident and business flows early",
        body: "Separated the fast, single-permit resident journey from the bulk-application, reporting-heavy business journey at the information-architecture level, rather than bolting bulk features onto a consumer flow.",
      },
      {
        heading: "Bring the system in-house, not just the interface",
        body: "Paired the visual redesign with a genuine in-house management system and support for onboarding additional councils, since the underlying cost and speed problem was as much operational as it was UX.",
      },
    ],
    solution: {
      summary:
        "A responsive customer portal redesign covering permit and licence homepages, account and payment management, and a full mobile app IA — moving from wireframes through to high-fidelity Figma prototypes ready for handoff.",
      highlights: [
        "Parallel homepage designs for permits and licences, each surfacing the most popular options up front",
        "A dedicated account area for managing saved payment cards, renewals and permit history",
        "A separate, purpose-built mobile app information architecture rather than a shrunk desktop layout",
        "A documented design system — grids, brand colours, contrast-checked palettes — handed to development alongside the screens",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared library of permit and licence cards, action-item tiles and account panels, documented in Confluence for the offshore development team to build from directly.",
      },
      {
        label: "Tokens",
        description: "A defined brand colour palette with a contrast-grid check built in, plus a responsive grid system specified down to phone, tablet and desktop breakpoints.",
      },
      {
        label: "Patterns",
        description: "A repeatable homepage pattern — hero, action items, popular options, browse by location — reused across both the permits and licences experiences.",
      },
      {
        label: "Governance",
        description: "Design decisions cross-referenced against established UX laws (Fitts's Law, Jakob's Law) documented in the team's playbook, so choices could be justified against a named principle rather than personal preference.",
      },
    ],
    outcome:
      "As a project still in progress, the redesign has shipped as a full set of design specifications, a documented design system and validated wireframes handed to development — with 80% user satisfaction, a 30% increase in completed applications and a 40% reduction in task completion time set as the targets for post-launch measurement.",
    metrics: [
      { value: "70%", label: "Of users found the original portal confusing" },
      { value: "80%", label: "Target user satisfaction score post-redesign" },
      { value: "30%", label: "Target increase in completed applications" },
    ],
    reflection:
      "Surveying 1,500 users gave this project a research base most redesigns don't get, and it shaped real decisions. If I were running it again, I'd push for more iterative testing rounds before handoff and more structured training time for internal users — both flagged as gaps precisely because the research base was strong enough to expose them.",
    gallery: [
      {
        src: "/case-studies/screenshots/parking-permit-customer-portal/02-homepage-variants.jpg",
        alt: "Permits and licences homepage designs side by side",
        caption: "Parallel homepage designs for permits and licences, sharing one visual system.",
      },
      {
        src: "/case-studies/screenshots/parking-permit-customer-portal/03-account-payments.jpg",
        alt: "Account area showing saved payment methods and card management",
        caption: "Account and payment management — saved cards, renewals and permit history in one place.",
      },
      {
        src: "/case-studies/screenshots/parking-permit-customer-portal/01-4d-process.jpg",
        alt: "Diagram of the 4D design process: Discover, Define, Design, Determine",
        caption: "The 4D process used to structure research, design and validation.",
      },
    ],
  },
  {
    slug: "ms-word-addon-document-creation",
    title: "MS Add-on — Document Creation",
    category: "Enterprise",
    industry: "Legal Tech / Enterprise Software",
    role: "Senior Product Designer",
    timeline: "12-week UX plan",
    icon: FileEdit,
    description: "A Microsoft Word add-on that lets legal teams generate complex contractual documents through guided, permission-based data merges — no Mail Merge code required.",
    impact: "Replaced a Mail Merge/Velocity-code workflow that 95% of users struggled to learn, targeting a 40% cut in document creation time.",
    tags: ["Legal Tech", "Enterprise Software"],
    context:
      "Legal and business-processing professionals at law firms were already using Microsoft Word's built-in mail merge to generate documents, but the underlying Velocity code was a serious barrier for anyone without technical training. HighQ set out to build a Word add-on that gave legal teams the same document-generation power — live database sync, conditional logic, permission-based data — without requiring anyone to write or read code.",
    challenge:
      "Despite mail merge already existing, users struggled with time-consuming processes, an interface not built for legal workflows, and the difficulty of merging varied data sets without technical skill. The add-on had to work within Word's existing architecture, integrate with multiple database types and configurations, and be learnable without extensive training — while still supporting loops, nested conditions and permission-based data access.",
    research: {
      methods: ["Contextual inquiry (6 users)", "User interviews (10 users)", "Persona creation", "Usability testing (8 users)"],
      summary:
        "Went into law firms directly to observe how legal and business-processing staff actually generated documents day to day, then validated the add-on's design against 8 users pulled from the same interview pool, so testers already understood the domain.",
    },
    insights: [
      {
        title: "The barrier was the code, not the concept",
        description:
          "95% of users struggled with learning Mail Merge's underlying Velocity code — the idea of merged documents wasn't the problem, the syntax required to produce them was.",
      },
      {
        title: "Integration mattered more than features",
        description:
          "70% of participants wanted a solution that fit into their existing workflow without extensive training, ranking that above any specific new capability the add-on could offer.",
      },
      {
        title: "A guided interface beat a powerful one, immediately",
        description:
          "90% of users found the new prototype more intuitive than their existing methods in first testing — validating that structured UI, not raw feature count, was what actually reduced errors.",
      },
    ],
    designStrategy: [
      {
        heading: "Follow the 5D process end to end",
        body: "Moved through Discover, Define, Design, Develop and Deploy & Measure — from stakeholder interviews and task analysis through sketches and prototypes to a documented pattern library and style guide.",
      },
      {
        heading: "Put database logic behind a visual interface",
        body: "Represented live iSheet database columns, images, conditions and loops as ribbon commands and inline document tags, so users manipulated data structure without touching a formula or script.",
      },
      {
        heading: "Colour-code every merge element",
        body: "Gave conditions, loops and inserted images distinct, consistent tag colours directly inside the Word document, so a user could read a template's logic at a glance instead of tracing code.",
      },
      {
        heading: "Build validation and preview into the flow",
        body: "Added live document previews and validation checks during document generation, catching data or permission errors before a legal document was finalised, not after.",
      },
    ],
    solution: {
      summary:
        "A Word ribbon add-on that lets legal teams insert live database content, conditional logic and loops into a document through guided dialogs, with permission-based access and live preview built in.",
      highlights: [
        "An Insert Image dialog pulling directly from a connected iSheet database, no manual file handling required",
        "A Variables panel exposing up to 200 database columns with drag-and-drop insertion into the document",
        "In-document condition and loop tags with distinct colour coding, editable inline without leaving Word",
        "An Associations panel linking document views to specific iSheets, with permission-based column-level access",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A consistent set of ribbon dialogs — Insert Image, Variables, Conditions, Loop — reused across every part of the document-building flow.",
      },
      {
        label: "Tokens",
        description: "A fixed colour language for in-document tags — distinct colours for conditions, loops and image placeholders — so template logic stayed legible at a glance.",
      },
      {
        label: "Patterns",
        description: "A drag-and-drop pattern for inserting database columns directly into document text, replacing manually typed merge codes.",
      },
      {
        label: "Governance",
        description: "Permission-based data access built into the Associations panel, ensuring confidentiality and compliance were enforced by the tool, not left to user discipline.",
      },
    ],
    outcome:
      "The add-on shipped to increased user adoption and high satisfaction ratings, with active client engagement driving new feature requests and new business opportunities for HighQ — replacing a workflow 95% of users had struggled to learn with one 90% found more intuitive on first use.",
    metrics: [
      { value: "40%", label: "Target reduction in document creation time" },
      { value: "90%", label: "Found the new prototype more intuitive in testing" },
      { value: "24", label: "Users involved across inquiry, interviews & testing" },
    ],
    reflection:
      "Prototype testing came back more positive than expected, which validated the core design assumptions early — but a narrower set of user segments took part in the interviews than I'd have liked, and I'd extend the research to cover longer-term usage, not just first-use impressions, if I ran this again.",
    gallery: [
      {
        src: "/case-studies/screenshots/ms-word-addon-document-creation/02-conditions-editor.jpg",
        alt: "Word document showing inline condition and loop tags",
        caption: "Conditions and loops as inline, colour-coded tags — no Velocity code visible to the user.",
      },
      {
        src: "/case-studies/screenshots/ms-word-addon-document-creation/03-associations-panel.jpg",
        alt: "Associations panel linking document views to iSheet databases",
        caption: "The Associations panel, linking document views to specific databases with column-level permissions.",
      },
      {
        src: "/case-studies/screenshots/ms-word-addon-document-creation/01-5d-process.jpg",
        alt: "Diagram of the 5D design process: Discover, Define, Design, Develop, Deploy & Measure",
        caption: "The 5D process used to take the add-on from discovery through to a measured launch.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
