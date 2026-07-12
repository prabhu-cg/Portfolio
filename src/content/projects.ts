import type { LucideIcon } from "lucide-react";
import { LayoutGrid, Workflow, Sparkles } from "lucide-react";

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
    slug: "enterprise-design-system",
    title: "Enterprise Design System",
    industry: "Financial Services",
    role: "Lead Product Designer",
    timeline: "18 months",
    icon: LayoutGrid,
    description: "Building scalable design foundations for enterprise products.",
    impact: "Created scalable design foundations adopted by 12 product teams, cutting UI build time by 40%.",
    tags: ["Design Systems", "Enterprise UX"],
    context:
      "This financial services organisation had grown through acquisition, absorbing several product teams that each maintained their own design language. Leadership needed a single design system that could scale across a diverse, regulated product portfolio without slowing teams down.",
    challenge:
      "Each product team had evolved its own patterns, components and visual language over several years. This created inconsistent experiences for customers, slowed engineering velocity, and made accessibility compliance difficult to guarantee across the portfolio.",
    research: {
      methods: ["Component audit", "Stakeholder interviews", "Engineering workshops", "Accessibility audit"],
      summary:
        "Catalogued every component and pattern in active use, interviewed designers and engineers across twelve teams, and audited existing UI against WCAG 2.1 AA to establish a baseline.",
    },
    insights: [
      {
        title: "Governance was the real blocker",
        description:
          "Teams didn't lack components — they lacked a trusted, maintained source of truth and a clear process for contributing to it.",
      },
      {
        title: "Design and code had drifted apart",
        description:
          "Figma libraries and the production codebase had diverged over time, so 'using the system' still meant rebuilding from scratch.",
      },
      {
        title: "Accessibility was inconsistent by default",
        description:
          "Contrast, focus states and keyboard support varied team to team because no shared baseline enforced them.",
      },
    ],
    designStrategy: [
      {
        heading: "Audit and align",
        body: "Catalogued every component, pattern and token in active use across products, then facilitated alignment workshops with design and engineering leads to agree on a single source of truth.",
      },
      {
        heading: "Token-first architecture",
        body: "Established a layered token model — core, semantic and component-level — so themes, density and accessibility contrast could be adjusted without rebuilding components.",
      },
      {
        heading: "Build with engineering",
        body: "Paired directly with front-end engineers to ship components as code alongside Figma equivalents, ensuring design and implementation never drifted apart.",
      },
      {
        heading: "Enable adoption",
        body: "Created documentation, contribution guidelines and office hours so product teams could adopt and extend the system with confidence rather than working around it.",
      },
    ],
    solution: {
      summary:
        "A token-first design system with layered, themeable foundations, a component library shipped as code and Figma in lockstep, and a governance model that gave teams a clear way to contribute back.",
      highlights: [
        "Core, semantic and component-level token layers supporting theming and density",
        "40+ production components shipped as code and Figma equivalents",
        "A contribution model with clear ownership and review process",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description:
          "40+ components covering forms, data display, navigation and feedback, each with documented states and usage guidance.",
      },
      {
        label: "Tokens",
        description:
          "A three-layer token model — core, semantic, component — enabling theming and accessible contrast without rebuilding components.",
      },
      {
        label: "Patterns",
        description:
          "Composed patterns for common enterprise flows — data tables, multi-step forms, permission-aware navigation.",
      },
      {
        label: "Governance",
        description:
          "A contribution model with clear ownership, versioning and a review process that kept design and code in sync.",
      },
    ],
    outcome:
      "The system became the default foundation for new product work, cut UI build time significantly, and gave every team a shared, accessible baseline to design and build on.",
    metrics: [
      { value: "40%", label: "Faster UI build time" },
      { value: "12", label: "Product teams onboarded" },
      { value: "98%", label: "WCAG AA components" },
    ],
    reflection:
      "The hardest part wasn't building components — it was building trust in a shared system after years of teams working independently. Investing early in governance and co-design with engineering mattered more than any individual component.",
  },
  {
    slug: "digital-transformation-platform",
    title: "Digital Transformation Platform",
    industry: "Public Sector",
    role: "Senior Product Designer",
    timeline: "12 months",
    icon: Workflow,
    description: "Simplifying complex workflows for users.",
    impact: "Reduced task completion time by 55% and consolidated five legacy tools into one.",
    tags: ["Enterprise UX", "Workflow Design"],
    context:
      "A public sector agency relied on a patchwork of legacy case management tools accumulated over two decades. Frontline staff needed to open five separate systems to complete a single case, and the agency was under pressure to modernise service delivery.",
    challenge:
      "Frontline staff relied on multiple disconnected systems to complete a single task, leading to long handling times, frequent errors and low confidence in the tools they were required to use daily.",
    research: {
      methods: ["Contextual inquiry", "Workshops", "Analytics review", "Usability testing"],
      summary:
        "Spent time directly with frontline staff observing real workflows, ran workshops with operations leadership to map the end-to-end process, and reviewed system analytics to quantify where time was lost.",
    },
    insights: [
      {
        title: "The workflow was the problem, not the UI",
        description:
          "Much of the friction came from an outdated process, not just outdated screens — simplifying the UI alone wouldn't fix it.",
      },
      {
        title: "Staff had built invisible workarounds",
        description:
          "Experienced staff relied on personal notes and memorised sequences to bridge gaps between systems — knowledge new hires didn't have.",
      },
      {
        title: "Trust had to be earned back",
        description:
          "Previous tooling changes had failed, so staff were sceptical of a new system until they saw it handle edge cases correctly.",
      },
    ],
    designStrategy: [
      {
        heading: "Understand the work",
        body: "Spent time directly with frontline staff observing real workflows, mapping every step, decision point and workaround that had formed around the legacy systems.",
      },
      {
        heading: "Redesign the workflow, not just the UI",
        body: "Worked with operations leadership to simplify the underlying process before designing new interfaces, removing steps that no longer served a purpose.",
      },
      {
        heading: "Progressive disclosure",
        body: "Designed task-based views that surface only what is relevant to the step at hand, pushing edge cases and advanced options behind clear, deliberate disclosure.",
      },
      {
        heading: "Validate with real users",
        body: "Ran structured usability testing with frontline staff across three release cycles, adjusting flows based on observed hesitation and error points.",
      },
    ],
    solution: {
      summary:
        "A single, task-based platform that replaced five legacy tools, built around the actual sequence of frontline work rather than internal system boundaries.",
      highlights: [
        "One coherent case view replacing five separate systems",
        "Task-based screens surfacing only what's relevant to the current step",
        "A phased rollout validated with frontline staff across three release cycles",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description:
          "A task-flow component set — step indicators, case timelines, inline validation — reused across every workflow in the platform.",
      },
      {
        label: "Tokens",
        description:
          "Status and priority tokens shared across the case timeline, task list and reporting views for consistent meaning.",
      },
      {
        label: "Patterns",
        description:
          "A progressive disclosure pattern applied consistently so advanced options never blocked the primary task.",
      },
      {
        label: "Governance",
        description:
          "A shared pattern library handed to the platform team to extend the system into adjacent case types.",
      },
    ],
    outcome:
      "The platform replaced five legacy tools with one coherent product, reducing task completion time and giving staff a system they trusted to get the work done correctly.",
    metrics: [
      { value: "55%", label: "Reduction in task time" },
      { value: "5→1", label: "Legacy tools consolidated" },
      { value: "-32%", label: "Support tickets" },
    ],
    reflection:
      "Redesigning the workflow before the interface was the single highest-leverage decision on this project. It meant the design team spent political capital on simplifying the process, not just polishing screens on top of a broken one.",
  },
  {
    slug: "ai-product-exploration",
    title: "AI Product Exploration",
    industry: "Enterprise SaaS",
    role: "Design Lead, Innovation Team",
    timeline: "6 months",
    icon: Sparkles,
    description: "Exploring future interactions between humans and AI.",
    impact: "Defined a validated AI interaction pattern library adopted across the product portfolio.",
    tags: ["AI Innovation", "Interaction Design"],
    context:
      "As the product organisation began introducing AI-assisted features across its portfolio, teams were shipping AI interactions inconsistently — with no shared point of view on transparency, trust or control.",
    challenge:
      "Early AI features were being bolted onto existing products without a consistent point of view on how users should understand, trust and control AI-generated output.",
    research: {
      methods: ["Prototype testing", "Interaction audits", "Analytics", "Cross-team interviews"],
      summary:
        "Audited existing AI features shipping across the portfolio, interviewed the teams building them, and user-tested six rapid prototypes exploring different interaction models.",
    },
    insights: [
      {
        title: "Users didn't distrust AI — they distrusted silence",
        description:
          "Hesitation dropped sharply once outputs showed confidence and source attribution, even when the AI was wrong.",
      },
      {
        title: "Undo mattered more than accuracy",
        description:
          "A fast, obvious way to reverse an AI action increased willingness to try it more than marginal accuracy improvements did.",
      },
      {
        title: "Teams wanted permission, not just patterns",
        description:
          "Engineering and product teams needed explicit principles to point to when making tradeoffs, not just a component library.",
      },
    ],
    designStrategy: [
      {
        heading: "Define principles first",
        body: "Established a small set of interaction principles — transparency, reversibility, and appropriate friction — to guide every subsequent design decision.",
      },
      {
        heading: "Prototype interaction patterns",
        body: "Built a library of rapid prototypes exploring suggestion, generation and agentic interaction models, tested against real workflows rather than isolated demos.",
      },
      {
        heading: "Design for trust calibration",
        body: "Introduced confidence indicators, source attribution and easy undo paths so users could calibrate trust in AI output rather than accepting or rejecting it blindly.",
      },
      {
        heading: "Share findings across teams",
        body: "Turned the exploration into a set of reusable patterns and guidelines adopted by other product teams introducing AI features.",
      },
    ],
    solution: {
      summary:
        "A validated set of AI interaction patterns — suggestion, generation and agentic models — built around transparency, reversibility and appropriate friction.",
      highlights: [
        "Confidence indicators and source attribution built into every AI output",
        "Consistent, fast undo paths across suggestion and generation patterns",
        "A decision framework for when to use each interaction model",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description:
          "A set of AI-specific components — confidence badges, source citations, inline suggestion cards — built on top of the core design system.",
      },
      {
        label: "Tokens",
        description:
          "New semantic tokens for AI-generated states, distinguishing system-authored from AI-authored content at a glance.",
      },
      {
        label: "Patterns",
        description:
          "Three documented interaction patterns — suggest, generate, act — each with clear guidance on when to use it.",
      },
      {
        label: "Governance",
        description:
          "A lightweight review process for teams introducing new AI features, backed by the shared principles and pattern library.",
      },
    ],
    outcome:
      "The exploration produced a validated set of AI interaction patterns now used as the starting point for new AI features across the product portfolio.",
    metrics: [
      { value: "3", label: "Interaction models validated" },
      { value: "6", label: "Prototypes user-tested" },
      { value: "1", label: "Adopted pattern library" },
    ],
    reflection:
      "The output that mattered most wasn't a component library — it was a shared vocabulary. Once teams could say 'this is a suggestion pattern' or 'this needs an undo path,' design reviews got faster and more consistent.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
