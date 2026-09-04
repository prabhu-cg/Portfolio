import type { LucideIcon } from "lucide-react";
import { Languages, ListChecks, Gauge, ClipboardCheck, Network, RefreshCw, ParkingSquare, FileEdit, Bookmark, FileText, Compass, ScanSearch, FileCode2, Scissors, Palette } from "lucide-react";
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

export const projectCategories = ["Side Projects", "Enterprise"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const sideProjectCategories = ["Applications", "Tools", "Plugins"] as const;
export type SideProjectCategory = (typeof sideProjectCategories)[number];

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  subcategory?: SideProjectCategory;
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
    slug: "markly-document-to-markdown",
    title: "Markly — Document to Markdown Converter",
    category: "Side Projects",
    subcategory: "Tools",
    industry: "Developer Tools / Content Tools",
    role: "Designer & Builder",
    timeline: "Sep 2026",
    icon: FileCode2,
    description: "A converter that turns DOCX, TXT, JSON or messy Markdown into clean, normalized Markdown, then validates the result and flags exactly what still needs a fix.",
    impact: "Replaced copy-paste-and-hope document conversion with a client-side tool that cleans formatting as it converts and names what it couldn't fix automatically.",
    tags: ["Developer Tools", "Privacy-first"],
    liveUrl: "https://getmarkly.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Turning a Word doc or a pasted block of inconsistent Markdown into something clean enough to commit to a repo or paste into a CMS usually means manual cleanup — fixing spacing, list markers and heading levels by hand. Markly set out to do that cleanup automatically, entirely in the browser, and to be honest about what it couldn't fix on its own.",
    challenge:
      "The product needed to auto-detect and normalize several very different input formats — DOCX, TXT, JSON, and already-written Markdown — into one consistent output, while clearly separating what got fixed automatically from what still needed a human decision.",
    research: {
      methods: ["Competitive audit of document-to-Markdown converters and pandoc-based tools", "Domain research into common Markdown formatting inconsistencies across editors", "Iterative testing of the auto-detection logic against real DOCX and JSON samples"],
      summary:
        "Collected inconsistently formatted Markdown from several real sources — exported docs, scraped content, hand-written notes — and used the recurring problems (double spacing, inconsistent list markers, missing blank lines) to define what 'clean' needed to mean.",
    },
    insights: [
      {
        title: "Format detection has to be automatic, not a dropdown",
        description:
          "Making someone specify whether their input is DOCX, JSON or Markdown before converting adds a decision nobody wants to make — detecting it from the content itself removes a step entirely.",
      },
      {
        title: "Cleaning and validating are two different jobs",
        description:
          "Auto-fixing spacing and list markers is safe to do silently; flagging a broken link or an ambiguous heading level needs a human decision — conflating the two would make either the fixes untrustworthy or the flags noisy.",
      },
      {
        title: "A validation list beats a single pass/fail",
        description:
          "Splitting results into errors, warnings and suggestions gives someone a prioritized list to work through, instead of a single red flag that doesn't say what to do next.",
      },
    ],
    designStrategy: [
      {
        heading: "Auto-detect format from content, not a picker",
        body: "Built detection around the input's own shape — a leading { or [ for JSON, a # for Markdown — so converting starts the moment something is pasted in.",
      },
      {
        heading: "Separate silent cleanup from flagged issues",
        body: "Let Format Mode silently normalize headings, lists and spacing on conversion, while routing anything genuinely ambiguous into the Validation panel instead of guessing.",
      },
      {
        heading: "Categorize validation by what it means for the user",
        body: "Split validation results into Errors, Warnings and Suggestions with a Fix All action, so a long list of issues still resolves down to a clear next step.",
      },
      {
        heading: "Keep every document entirely client-side",
        body: "Ran conversion and validation entirely in the browser with no upload step, since the documents people convert are often internal drafts nobody wants leaving their machine.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the format-detection logic to the validation engine — without a dedicated engineering team, while keeping every UX decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A client-side document-to-Markdown converter that auto-detects DOCX, TXT, JSON or Markdown input, normalizes formatting on conversion, and validates the result across errors, warnings and suggestions.",
      highlights: [
        "Automatic format detection across DOCX, TXT, JSON and Markdown input",
        "Format Mode that normalizes headings, lists and spacing as it converts",
        "A Validation panel categorizing issues into Errors, Warnings and Suggestions with Fix All",
        "Live Markdown and HTML preview side by side with the source",
        "One-click copy or .md download, with nothing ever uploaded to a server",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared dual-pane editor component (input, live output) reused identically regardless of which source format was detected.",
      },
      {
        label: "Tokens",
        description: "A consistent severity colour scale — error, warning, suggestion — applied across the validation panel and inline issue markers.",
      },
      {
        label: "Patterns",
        description: "A detect-then-clean-then-validate pattern applied to every input, so the interaction model stays the same whether the source was DOCX, JSON or Markdown.",
      },
      {
        label: "Governance",
        description: "100% client-side processing with no upload step, so documents never leave the browser, by architecture rather than policy.",
      },
    ],
    outcome:
      "Markly shipped as a free, account-less alternative to manually cleaning up document exports, giving anyone converting content to Markdown a validation pass most tools skip entirely.",
    metrics: [
      { value: "4", label: "Input formats supported" },
      { value: "3", label: "Validation categories: errors, warnings, suggestions" },
      { value: "0", label: "Documents uploaded to a server" },
    ],
    reflection:
      "The temptation was to let Format Mode silently fix everything. Drawing a hard line between what's safe to auto-fix and what needs a flagged decision took more iteration than the conversion logic itself, but it's the reason the tool feels trustworthy instead of just convenient.",
    gallery: [
      {
        src: "/case-studies/screenshots/markly-document-to-markdown/01-hero.jpg",
        alt: "Markly landing page hero showing the input and output editor panes",
        caption: "The live product at getmarkly.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/markly-document-to-markdown/02-format-and-clean.jpg",
        alt: "Markly editor showing a pasted document normalized into clean Markdown in Format Mode",
        caption: "Format Mode in action — headings, lists and spacing normalized on conversion.",
      },
      {
        src: "/case-studies/screenshots/markly-document-to-markdown/03-validation.jpg",
        alt: "Markly validation panel showing errors, warnings and suggestions counts",
        caption: "The Validation panel — errors, warnings and suggestions, with Fix All and Undo.",
      },
    ],
  },
  {
    slug: "prompttrim-ai-prompt-optimizer",
    title: "PromptTrim — AI Prompt Optimiser",
    category: "Side Projects",
    subcategory: "Tools",
    industry: "AI Tools / Developer Tools",
    role: "Designer & Builder",
    timeline: "Sep 2026",
    icon: Scissors,
    description: "A tool that turns a rambling, conversational prompt into a short, direct instruction — keeping every requirement and exclusion, cutting only the fluff.",
    impact: "Replaced trial-and-error prompt editing with a one-paste optimiser that preserves intent while cutting prompt length dramatically.",
    tags: ["AI Tools", "Developer Tools"],
    liveUrl: "https://getprompttrim.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel", "Groq"],
    context:
      "Prompts written the way people actually talk — polite framing, backstory, restated instructions — cost tokens and dilute the actual instruction inside them. PromptTrim set out to strip a prompt down to what an AI model actually needs, without quietly dropping a requirement or a constraint in the process.",
    challenge:
      "The hard part wasn't shortening text — it was shortening it safely. The tool needed to reliably tell the difference between conversational filler that's safe to cut and a specific requirement, constraint or exclusion that must survive the edit untouched.",
    research: {
      methods: ["Competitive audit of prompt-optimisation and token-reduction tools", "Domain research into prompt structure across dev briefs, meeting notes and marketing copy", "Iterative testing of the trimming model against prompts with deliberately embedded constraints"],
      summary:
        "Wrote test prompts with intentionally buried constraints — 'do NOT include X', specific tech requirements, tone notes — and used how often trimming preserved them to define what 'safe to cut' actually means for this tool.",
    },
    insights: [
      {
        title: "Politeness is safe to cut; constraints never are",
        description:
          "Framing like 'could you please' and 'thanks so much' carries no instruction — but a buried 'do NOT include billing features' is load-bearing, and trimming has to tell the two apart every time.",
      },
      {
        title: "Shorter isn't the goal — clearer is",
        description:
          "A shorter prompt that loses a requirement is worse than the original — the tool is judged on whether the optimised version still gets the same result, not on character count alone.",
      },
      {
        title: "People trust output they can immediately reuse",
        description:
          "Returning plain text with no formatting or commentary meant the result could be copied straight into any model or tool, which mattered more than presenting it inside the product itself.",
      },
    ],
    designStrategy: [
      {
        heading: "Frame the product as trim, not rewrite",
        body: "Positioned the tool explicitly around cutting fluff rather than rewriting intent, so the interaction model stays predictable — the output should still sound like an instruction the user meant to give.",
      },
      {
        heading: "Give people a way in without a real prompt to hand",
        body: "Shipped three example prompts — dev brief, meeting notes, marketing brief — so the value is obvious on the first visit, before anyone pastes their own text.",
      },
      {
        heading: "Show the result as plain text, ready to reuse",
        body: "Returned the optimised prompt as copyable plain text with no extra formatting, since the entire point is pasting it straight into another AI tool.",
      },
      {
        heading: "Say plainly where the prompt goes",
        body: "Stated directly that a submitted prompt is sent to Groq to generate the optimised version and is never logged or stored, instead of leaving that as an assumption.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the trimming prompt design to the interface — without a dedicated engineering team, while keeping every UX decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A single-purpose tool that takes a messy, conversational prompt and returns a short, direct instruction — preserving every requirement, constraint and exclusion while cutting the surrounding fluff.",
      highlights: [
        "One-paste optimisation from messy prompt to short, direct instruction",
        "Three built-in examples — dev brief, meeting notes, marketing brief — to try before pasting a real prompt",
        "Explicit preservation of requirements, constraints and exclusions during trimming",
        "Plain-text output with one-click copy, ready to paste into any AI tool",
        "No account, no API key, and no logging of submitted prompts",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared two-pane input/result layout reused across the empty state, populated input, and optimised result views.",
      },
      {
        label: "Tokens",
        description: "A consistent accent-scissors motif tying the trimming metaphor across the icon, empty state and loading indicator.",
      },
      {
        label: "Patterns",
        description: "An example-first onboarding pattern — try a real sample before pasting your own — reused from the same convention as other free, no-signup tools in this set.",
      },
      {
        label: "Governance",
        description: "Prompts are sent to Groq for processing and explicitly never logged or stored, stated directly in the product rather than buried in a privacy page.",
      },
    ],
    outcome:
      "PromptTrim shipped as a small, single-purpose tool that fixes a specific, recurring annoyance — a prompt that says the right thing in too many words — without needing an account or an API key to try it.",
    metrics: [
      { value: "10,000", label: "Character input limit" },
      { value: "3", label: "Built-in example prompts" },
      { value: "0", label: "Prompts logged or stored" },
    ],
    reflection:
      "It would have been easy to make this feel like a generic AI text shortener. Testing it specifically against prompts with buried constraints — and treating any dropped constraint as a failure, not an edge case — is what kept the tool honest about what it's actually for.",
    gallery: [
      {
        src: "/case-studies/screenshots/prompttrim-ai-prompt-optimizer/01-hero.jpg",
        alt: "PromptTrim landing page hero showing the prompt input and result panels",
        caption: "The live product at getprompttrim.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/prompttrim-ai-prompt-optimizer/02-messy-prompt-input.jpg",
        alt: "PromptTrim with a messy, conversational dev brief example pasted into the input panel",
        caption: "A real example prompt loaded in — conversational, buried requirements and all.",
      },
      {
        src: "/case-studies/screenshots/prompttrim-ai-prompt-optimizer/03-optimized-result.jpg",
        alt: "PromptTrim showing the same dev brief trimmed to a short, direct instruction",
        caption: "The trimmed result — every requirement and exclusion preserved, the fluff gone.",
      },
    ],
  },
  {
    slug: "ratio-color-balance-tool",
    title: "RATIO — 60–30–10 Color Balance Tool",
    category: "Side Projects",
    subcategory: "Tools",
    industry: "Design Tools / Visual Design",
    role: "Designer & Builder",
    timeline: "Sep 2026",
    icon: Palette,
    description: "A visual tool for exploring the 60–30–10 color principle — how much of an interface each color should occupy — with accessibility checks and real interface previews built in.",
    impact: "Replaced guesswork color-balancing with a deliberate, designer-led workspace that shows exactly where each color role belongs and whether it's accessible.",
    tags: ["Design Tools", "Accessibility"],
    liveUrl: "https://getratioapp.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Most designers can shortlist colors that look good together — the harder question is how much space each one should occupy. RATIO set out to make the classic 60–30–10 interior-design color principle usable for interface work, deliberately without AI generating the palette for you.",
    challenge:
      "The product needed to make an abstract ratio feel concrete — showing not just percentages but where each color role actually belongs in a real interface — while staying strictly a decision-support tool rather than a generator that picks colors on someone's behalf.",
    research: {
      methods: ["Competitive audit of color-palette and accessibility-checking tools", "Domain research into the 60–30–10 principle's origins in interior design and its application to UI", "Iterative testing of the Interactive Color Inspector against real interface layouts"],
      summary:
        "Traced the 60–30–10 rule back to its interior-design origins — one dominant surface, one supporting color, one used sparingly — and used that as the frame for translating it into interface color roles rather than inventing a new model.",
    },
    insights: [
      {
        title: "Designers don't need colors generated — they need where clarified",
        description:
          "Most people opening a color tool already have candidate colors in mind; what's missing is a clear answer to how much space each one should take, not a fourth option to choose from.",
      },
      {
        title: "Balance and legibility are two separate questions",
        description:
          "A palette can be proportioned perfectly and still fail someone with a color-vision deficiency — the tool needed to check both independently instead of folding accessibility into a single 'looks good' score.",
      },
      {
        title: "Seeing colors in a real interface beats seeing swatches",
        description:
          "A color ratio means little as three flat blocks — the Interactive Color Inspector, letting someone click through a real Marketing, SaaS or Editorial layout, is what makes the abstraction concrete.",
      },
    ],
    designStrategy: [
      {
        heading: "Visualise the ratio before anything else",
        body: "Led with a direct 60/30/10 bar showing Dominant, Secondary and Accent proportions, so the core idea is legible in the first five seconds without any explanation needed.",
      },
      {
        heading: "Let people click through a real interface, not swatches",
        body: "Built an Interactive Color Inspector across five real contexts — General Product, Marketing, SaaS, Pricing, Editorial — so each color role is seen doing an actual job, not sitting in an isolated chip.",
      },
      {
        heading: "Separate balance from legibility, explicitly",
        body: "Ran WCAG contrast checks and protanopia, deuteranopia, tritanopia and grayscale simulation as a distinct pass from the ratio visualisation, so a well-balanced palette that fails accessibility can't hide behind a good-looking ratio.",
      },
      {
        heading: "Refuse to generate colors on the user's behalf",
        body: "Deliberately left color choice to the designer — RATIO explains and checks a palette rather than producing one, keeping the deliberate, designer-led decision at the center of the product.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the Color Inspector to the accessibility-simulation engine — without a dedicated engineering team, while keeping every design-principle decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A browser-based color-balance workspace applying the 60–30–10 principle to interface design, with an interactive real-interface inspector, WCAG and color-vision accessibility checks, and export to CSS, JSON, SVG or PNG.",
      highlights: [
        "Live 60/30/10 ratio visualisation for any Dominant, Secondary and Accent palette",
        "Interactive Color Inspector across five real interface contexts — General Product, Marketing, SaaS, Pricing, Editorial",
        "Ratio Playground for testing alternative color distributions without changing the palette",
        "WCAG contrast checks plus protanopia, deuteranopia, tritanopia and grayscale simulation",
        "Plain-language Palette Insights and export to CSS variables, JSON, SVG or PNG",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared ratio-bar component (role, percentage, color) reused across the hero, the workspace summary and every example palette.",
      },
      {
        label: "Tokens",
        description: "The Dominant/Secondary/Accent role language applied consistently across the inspector, the playground, the usage map and every export format.",
      },
      {
        label: "Patterns",
        description: "A context-switching pattern — the same palette previewed across five interface types — reused between the Color Inspector and the Color Usage Map.",
      },
      {
        label: "Governance",
        description: "Runs entirely in the browser with no account and no AI-generated colors, keeping every color decision attributable to the designer using it.",
      },
    ],
    outcome:
      "RATIO shipped as a free, deliberately non-generative alternative to AI palette generators, giving designers a way to test and defend a color balance rather than accept one a model produced.",
    metrics: [
      { value: "5", label: "Real interface contexts to inspect" },
      { value: "4", label: "Color-vision simulations: protanopia, deuteranopia, tritanopia, grayscale" },
      { value: "0", label: "AI-generated colors" },
    ],
    reflection:
      "The easiest version of this product would have generated palettes with AI, and that was a deliberate line I didn't cross. Staying a decision-support tool rather than a generator kept the scope honest, even though it meant more design work explaining the 'why' behind every panel.",
    gallery: [
      {
        src: "/case-studies/screenshots/ratio-color-balance-tool/01-hero.jpg",
        alt: "RATIO landing page hero showing the 60/30/10 Dominant, Secondary and Accent ratio bar",
        caption: "The live product at getratioapp.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/ratio-color-balance-tool/02-workspace.jpg",
        alt: "RATIO full workspace showing the palette panel, live interface preview and balance, playground, usage and accessibility tabs",
        caption: "The full workspace — palette, live interface preview, and balance, playground, usage and accessibility tabs.",
      },
      {
        src: "/case-studies/screenshots/ratio-color-balance-tool/03-sixty-thirty-ten.jpg",
        alt: "RATIO explanation of the Dominant, Secondary and Accent color roles at 60, 30 and 10 percent",
        caption: "The 60–30–10 principle broken into Dominant, Secondary and Accent roles.",
      },
    ],
  },
  {
    slug: "solvr-ai-product-design",
    title: "Solvr — AI-Guided Product Design Workspace",
    category: "Side Projects",
    subcategory: "Tools",
    industry: "Product Design / Design Tools",
    role: "Designer & Builder",
    timeline: "Sep 2026",
    icon: Compass,
    description: "A guided workspace that takes a product problem through a full design process — Discover, Define, Ideate, Solution, Validate, Iterate — with AI drafting, critiquing and scoring readiness at every stage.",
    impact: "Replaced a single 'generate a spec' prompt with a seven-stage structured process that names its own gaps and assumptions before a team commits to a direction.",
    tags: ["Product Design", "AI Tools"],
    liveUrl: "https://getsolvr.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "Most AI design tools compress a product problem straight into a finished-looking output — a generated spec, a set of screens — with no visible working. Solvr set out to do the opposite: guide a problem through the same stages a structured design process would use, keeping evidence, assumptions and gaps visible at every step instead of hiding them behind a single generate button.",
    challenge:
      "The product needed to feel like a design partner that pushes back, not a generator that produces a confident-sounding answer to whatever's typed in — while still being usable by someone who doesn't already know a formal UX methodology, and without ever letting the process feel like a rigid form to fill in.",
    research: {
      methods: ["Competitive audit of AI-assisted design and PRD-generation tools", "Domain research into structured design methodologies (Double Diamond, Discover-Define-Develop-Deliver)", "Iterative testing of the stage-readiness scoring model against sample project problems"],
      summary:
        "Reviewed how existing AI design tools collapse a problem straight into an output, and found almost none separated evidence from assumption — which became the central design bet for Solvr instead of a secondary feature.",
    },
    insights: [
      {
        title: "A generate button isn't a design partner",
        description:
          "Tools that produce a finished-looking spec from one prompt skip the part where a real design process would surface what's still unknown — Solvr needed to slow that down, not speed it up further.",
      },
      {
        title: "Evidence and assumption have to stay visibly separate",
        description:
          "The moment an assumption gets treated like a fact, every decision built on top of it inherits the risk — so every stage explicitly tags what's evidence, what's assumption, and what's still a gap.",
      },
      {
        title: "Readiness has to be scored per stage, not once at the end",
        description:
          "A single overall completeness score hides exactly where a project is weak — scoring each of the seven stages independently is what makes 'are we ready to move on' an answerable question.",
      },
    ],
    designStrategy: [
      {
        heading: "Structure the whole process around seven named stages",
        body: "Built Project Setup, Discover, Define, Ideate, Solution, Validate and Iterate as distinct, sequential stages, each with its own inputs and its own definition of done.",
      },
      {
        heading: "Separate evidence from assumption at every stage",
        body: "Gave every stage explicit Strengths, Gaps and Critical Assumptions panels, so a project's confidence level is always visible next to its content, not implied by how polished the output looks.",
      },
      {
        heading: "Score readiness per stage, not the project as a whole",
        body: "Attached a readiness percentage and a plain-language 'what's needed next' note to each stage individually, so moving forward is a decision backed by a specific gap list, not a vibe.",
      },
      {
        heading: "Make the AI challenge the framing, not just answer it",
        body: "Directed the AI to flag gaps and question assumptions at every stage rather than accept the first framing of a problem, so the tool behaves like a partner pushing back, not an assistant agreeing along.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the stage-readiness engine to the guidance panel — without a dedicated engineering team, while keeping every methodology and UX decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A guided design workspace that takes a product problem through seven structured stages — Project Setup, Discover, Define, Ideate, Solution, Validate, Iterate — with AI drafting, critiquing and scoring readiness at each one.",
      highlights: [
        "Seven-stage guided process from problem framing through to an evidence-backed iteration plan",
        "Per-stage readiness scoring with named Strengths, Gaps and Critical Assumptions",
        "AI guidance panel that recommends what to resolve before advancing to the next stage",
        "Multi-concept ideation with side-by-side comparison before committing to a direction",
        "Structured, exportable product and UX specification generated from the Solution stage",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared stage-card component (status, readiness percentage, gaps list) reused identically across all seven stages of the process.",
      },
      {
        label: "Tokens",
        description: "A consistent readiness colour scale — needs attention, on track, complete — applied across stage cards, the guidance panel and generated outputs.",
      },
      {
        label: "Patterns",
        description: "A three-column working pattern — content, AI guidance, readiness — repeated at every stage, so the interaction model stays constant as a project deepens.",
      },
      {
        label: "Governance",
        description: "All project data stays local to the browser in V1, so a product problem never leaves the device before it becomes a validated design.",
      },
    ],
    outcome:
      "Solvr shipped as a structured alternative to single-prompt AI design generators, giving anyone working through a product problem a process that names what it doesn't know yet instead of quietly skipping over it.",
    metrics: [
      { value: "7", label: "Guided design stages" },
      { value: "4", label: "Evidence categories tracked per stage" },
      { value: "0", label: "Accounts or servers required in V1" },
    ],
    reflection:
      "The easiest version of this product would have been a single well-crafted prompt. Resisting that — and building seven stages with their own readiness logic instead — was the harder, slower path, but it's the reason the tool argues back instead of just agreeing with the first idea typed into it.",
    gallery: [
      {
        src: "/case-studies/screenshots/solvr-ai-product-design/01-hero.jpg",
        alt: "Solvr landing page hero showing the Discover stage of a sample project",
        caption: "The live product at getsolvr.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/solvr-ai-product-design/02-discover-readiness.jpg",
        alt: "Solvr Discover stage showing readiness score, strengths, gaps and critical assumptions",
        caption: "A stage in progress — readiness score, strengths, gaps and critical assumptions side by side.",
      },
      {
        src: "/case-studies/screenshots/solvr-ai-product-design/03-design-process.jpg",
        alt: "Solvr seven-stage design process grid from Project Setup to Iterate",
        caption: "The seven stages that structure every project, from Project Setup through to Iterate.",
      },
    ],
  },
  {
    slug: "devlens-design-handoff-clarity",
    title: "DevLens — Design-to-Development Handoff Tool",
    category: "Side Projects",
    subcategory: "Tools",
    industry: "Design Tools / Developer Handoff",
    role: "Designer & Builder",
    timeline: "Sep 2026",
    icon: ScanSearch,
    description: "A tool that documents the interactions, edge cases and responsive rules a Figma file alone can't explain, then scores how ready the result actually is to hand to a developer.",
    impact: "Replaced 'here's the Figma file' handoffs with a scored, question-driven documentation process that surfaces what a developer will ask before they ask it.",
    tags: ["Design Tools", "Developer Handoff"],
    liveUrl: "https://getdevlensapp.vercel.app/",
    stack: ["Next.js", "Claude Code", "Vercel"],
    context:
      "A Figma file communicates spacing, typography and layout well, and says almost nothing about what happens when a list is empty, a field fails validation, or a modal needs to respond to Escape. Those gaps usually surface mid-sprint, as a developer's Slack question. DevLens set out to catch them before handoff, by documenting intent alongside the pixels.",
    challenge:
      "The product needed to identify what's genuinely missing from a design — interactions, edge cases, responsive behaviour, accessibility — without requiring a Figma plugin or API access, and turn that into documentation a developer would actually read instead of a longer document nobody opens.",
    research: {
      methods: ["Competitive audit of design-handoff and Figma Dev Mode workflows", "Domain research into the questions developers most commonly ask during implementation", "Iterative testing of the handoff-readiness scoring model against a sample project"],
      summary:
        "Catalogued the kinds of questions that actually derail a sprint — empty states, loading behaviour, focus and keyboard handling — and used that list to define what 'documented' needed to mean, rather than treating documentation as a single yes/no checkbox.",
    },
    insights: [
      {
        title: "Figma explains what things look like, not what they do",
        description:
          "Spacing, colour and layout are well covered by a design file — interaction, validation and edge-case behaviour almost never are, and that gap is exactly where handoff friction comes from.",
      },
      {
        title: "The right output is a question list, not a document",
        description:
          "A generic 'add more detail' prompt doesn't help — surfacing specific, answerable developer questions per component is what actually gets a design finished before build starts.",
      },
      {
        title: "Readiness has to measure documentation, not design quality",
        description:
          "Conflating 'is this documented' with 'is this good design' would have made the score untrustworthy — the readiness score deliberately measures completeness only, leaving design judgement to the reviewer.",
      },
    ],
    designStrategy: [
      {
        heading: "Detect, document, handoff — as three distinct stages",
        body: "Structured the product around finding what's missing, capturing the intent behind it, and generating structured documentation, so a project's state is always legible as one of those three.",
      },
      {
        heading: "Ask the same questions a developer would",
        body: "Generated per-component developer questions — does this list paginate, what happens on zero results, does Escape dismiss this — instead of a generic 'incomplete' flag.",
      },
      {
        heading: "Score readiness across four independent dimensions",
        body: "Split the handoff-readiness score into Documentation, Interactions, Responsive and Accessibility, so a team can see exactly which dimension is dragging a project down.",
      },
      {
        heading: "Link back to Figma instead of replacing it",
        body: "Let every documented decision link to its corresponding Figma frame, positioning DevLens as the layer that explains intent rather than a competing source of truth for the visuals.",
      },
      {
        heading: "Build solo, with AI as the engineering partner",
        body: "Designed and built end-to-end using Claude Code as a development partner — from the gap-detection logic to the readiness-scoring engine — without a dedicated engineering team, while keeping every UX and scoring decision in my hands.",
      },
    ],
    solution: {
      summary:
        "A local-first handoff-documentation tool that detects undocumented interactions, edge cases and responsive rules in a design, turns them into developer questions, and scores overall handoff readiness across four dimensions.",
      highlights: [
        "Per-component developer questions surfaced automatically — loading states, empty states, validation, keyboard behaviour",
        "A four-dimension handoff-readiness score: Documentation, Interactions, Responsive, Accessibility",
        "Figma frame linking so every documented decision stays traceable to its source design",
        "A full worked sample handoff (a fictional banking dashboard) to show what 'ready' looks like",
        "Exportable, structured documentation in place of a raw Figma link at handoff",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A shared readiness-bar component (dimension, percentage, open questions) reused across the dashboard summary and the per-page documentation views.",
      },
      {
        label: "Tokens",
        description: "A consistent status language — resolved, open question, needs attention — applied across developer questions, readiness bars and the sample handoff.",
      },
      {
        label: "Patterns",
        description: "A detect-then-document pattern — flagged gaps paired with a place to resolve them — reused across interactions, responsive rules and accessibility.",
      },
      {
        label: "Governance",
        description: "Projects are stored locally via IndexedDB with no account and no database, so unreleased design work never leaves the device, by architecture rather than policy.",
      },
    ],
    outcome:
      "DevLens shipped as a working alternative to handing over a Figma link and hoping the right questions get asked in time, giving a design a measurable readiness score before it reaches a developer.",
    metrics: [
      { value: "4", label: "Readiness dimensions scored" },
      { value: "0", label: "Accounts or servers required" },
      { value: "1", label: "Full worked sample handoff included" },
    ],
    reflection:
      "The hardest call was keeping the readiness score honest about what it measures — it would have been easy to let 'documented' quietly drift into 'good,' and the moment that line blurs, the score stops being something a team can trust.",
    gallery: [
      {
        src: "/case-studies/screenshots/devlens-design-handoff-clarity/01-hero.jpg",
        alt: "DevLens landing page hero showing handoff readiness and developer questions",
        caption: "The live product at getdevlensapp.vercel.app.",
      },
      {
        src: "/case-studies/screenshots/devlens-design-handoff-clarity/02-handoff-readiness.jpg",
        alt: "DevLens handoff readiness score broken down by documentation, interactions, responsive and accessibility, next to a developer questions list",
        caption: "Handoff readiness scored across four dimensions, alongside the developer questions it generated.",
      },
      {
        src: "/case-studies/screenshots/devlens-design-handoff-clarity/03-detect-document-handoff.jpg",
        alt: "DevLens three-step process: Detect, Document, Handoff",
        caption: "The three-step model behind every project — detect what's missing, document intent, hand off with clarity.",
      },
    ],
  },
  {
    slug: "reqstudio-project-briefs",
    title: "ReqStudio — Project Brief & Requirements Tool",
    category: "Side Projects",
    subcategory: "Tools",
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
    subcategory: "Tools",
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
    subcategory: "Applications",
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
    subcategory: "Applications",
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
    subcategory: "Applications",
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
    subcategory: "Applications",
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
    subcategory: "Applications",
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
