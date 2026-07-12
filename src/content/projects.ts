import type { LucideIcon } from "lucide-react";
import { Languages, ListChecks, Gauge, ClipboardCheck, Network } from "lucide-react";

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

export interface Project {
  slug: string;
  title: string;
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
}

export const projects: Project[] = [
  {
    slug: "localens-localization-qa",
    title: "LocaLens — Localization QA Tool",
    industry: "Localization / QA Tools",
    role: "Designer & Builder",
    timeline: "Jun – Jul 2026",
    icon: Languages,
    description: "A tool that measures how much translated UI text grows and flags exactly which strings will break their layout, before a translation ships.",
    impact: "Replaced manual, after-the-fact localization QA with an upfront layout-risk check that catches overflow before it reaches production.",
    tags: ["Localization", "Accessibility"],
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
  },
  {
    slug: "uxledger-ux-debt-tracker",
    title: "UXLedger — UX Debt Register",
    industry: "Design Tools / Product Management",
    role: "Designer & Builder",
    timeline: "Apr – May 2026",
    icon: ListChecks,
    description: "A living register for tracking UX debt — usability, accessibility and content issues — instead of letting them scatter across spreadsheets and get ignored.",
    impact: "Turned ad-hoc UX issue tracking into a scored, trackable register that teams can use to prioritise fixes and prove improvement over time.",
    tags: ["Design Tools", "Product Management"],
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
  },
  {
    slug: "uxbeacon-ux-audit-tool",
    title: "UXBeacon — Automated UX Audit Tool",
    industry: "Design Tools / Web Analysis",
    role: "Designer & Builder",
    timeline: "Mar 2026",
    icon: Gauge,
    description: "A free, no-login tool that scores any public website's UX across heuristics, accessibility, content and UX-law compliance in seconds.",
    impact: "Replaced black-box AI audit scores with a transparent, rule-based UX health score anyone can inspect and reproduce.",
    tags: ["Design Tools", "Accessibility"],
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
  },
  {
    slug: "assessly-online-exams",
    title: "Assessly — Online Examination Platform",
    industry: "EdTech",
    role: "Designer & Builder",
    timeline: "Feb 2026",
    icon: ClipboardCheck,
    description: "An exam platform that lets teachers create, share and auto-grade tests without the administrative busywork.",
    impact: "Replaced manual test administration with an invite-code flow and instant MCQ grading, cutting setup and grading friction to near zero.",
    tags: ["EdTech", "Product Design"],
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
  },
  {
    slug: "sitenest-visual-sitemaps",
    title: "SiteNest — Visual Sitemap Builder",
    industry: "Productivity / Design Tools",
    role: "Designer & Builder",
    timeline: "Jan 2026",
    icon: Network,
    description: "A visual, canvas-based tool for planning a site's structure — pages, connections and rough wireframes — without reaching for a slide deck.",
    impact: "Replaced static screenshots and slide decks with a living canvas that stays accurate as scope changes, exportable as PNG or JSON.",
    tags: ["Productivity", "Interaction Design"],
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
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
