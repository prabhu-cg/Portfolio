import type { LucideIcon } from "lucide-react";
import { LayoutGrid, Workflow, LineChart, Cpu, Scale } from "lucide-react";

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
    slug: "bny-marketing-design-system",
    title: "Marketing Design System at BNY",
    industry: "Financial Services",
    role: "VP User Experience",
    timeline: "Nov 2025 – Present",
    icon: LayoutGrid,
    description: "Building and governing the design system behind BNY's marketing and demand-gen web and app products.",
    impact: "Established a governed design system now being adopted across BNY's AEM-driven marketing websites and apps.",
    tags: ["Design Systems", "Financial Services"],
    context:
      "BNY's Marketing Data & Demand Generation team runs a growing portfolio of public-facing websites and apps, most built on Adobe Experience Manager (AEM) and maintained with the help of an external digital agency. As the portfolio grew, so did inconsistency — new sites were being built with one-off components, with no shared source of truth for design decisions.",
    challenge:
      "Design work was split between an internal team and an external digital agency handling business-as-usual work, with no shared component library to keep them aligned. Every new AEM site risked drifting further from the last, and stakeholders across marketing, brand and engineering had no single place to validate design decisions against.",
    research: {
      methods: ["Stakeholder interviews", "Design audits", "Engineering workshops", "Design critiques"],
      summary:
        "Audited components already in use across existing AEM sites, ran requirement-gathering sessions with marketing and brand stakeholders, and worked directly with engineering to understand implementation constraints on AEM.",
    },
    insights: [
      {
        title: "The agency needed a system, not just a spec",
        description:
          "Handing over static designs to the digital agency for BAU work produced visible drift within weeks — they needed a governed, versioned library to build against.",
      },
      {
        title: "AEM's constraints had to shape the system",
        description:
          "Component decisions that looked simple in Figma weren't always simple to implement in AEM, so design and engineering had to define the system together.",
      },
      {
        title: "Stakeholders needed a shared vocabulary",
        description:
          "Requirement gathering moved much faster once marketing, brand and engineering could point to the same named components instead of describing them from scratch each time.",
      },
    ],
    designStrategy: [
      {
        heading: "Audit and align",
        body: "Catalogued components already in use across BNY's marketing and demand-gen sites, then aligned with brand, marketing and engineering stakeholders on which patterns should become the system's foundation.",
      },
      {
        heading: "Design with AEM in mind",
        body: "Worked closely with the engineering team from the outset so every component was validated against AEM's real implementation constraints, not just its visual design.",
      },
      {
        heading: "Partner with the agency",
        body: "Built the system to be usable by the external digital agency handling day-to-day site work, not just the internal team, so consistency holds regardless of who's building.",
      },
      {
        heading: "Drive adoption, not just documentation",
        body: "Run design critiques and office hours to get the system actually adopted across live AEM sites, rather than letting it sit unused in Figma.",
      },
    ],
    solution: {
      summary:
        "A governed, AEM-aware design system for BNY's marketing and demand-gen properties, built collaboratively with engineering and usable by both the internal team and the external digital agency.",
      highlights: [
        "A component library validated against real AEM implementation constraints",
        "A shared vocabulary and working process for internal team, agency and engineering",
        "An ongoing critique and adoption process embedded across live marketing sites",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description:
          "A growing library of AEM-ready components, each validated with engineering before being handed to the digital agency for BAU builds.",
      },
      {
        label: "Tokens",
        description:
          "Foundational tokens aligned to BNY's brand guidelines, giving marketing and demand-gen sites a consistent visual baseline.",
      },
      {
        label: "Patterns",
        description:
          "Reusable page and section patterns that reduce how much new sites need to be designed from scratch.",
      },
      {
        label: "Governance",
        description:
          "A critique and requirement-gathering process that keeps the internal team, the digital agency and engineering working from the same source of truth.",
      },
    ],
    outcome:
      "The system is now the shared foundation for new AEM builds across BNY's marketing and demand-gen portfolio, giving the internal team, the digital agency and engineering a single source of truth to design, validate and build against.",
    metrics: [
      { value: "Ongoing", label: "Rollout across AEM sites" },
      { value: "3", label: "Teams aligned: internal, agency, engineering" },
      { value: "1", label: "Shared design system" },
    ],
    reflection:
      "This role is a reminder that a design system's hardest problem usually isn't the components — it's getting a distributed set of people, an internal team, an external agency and engineering, to actually build against the same source of truth. Getting the working process right matters as much as the Figma file.",
  },
  {
    slug: "marston-public-sector-services",
    title: "Public Sector Digital Services at Marston",
    industry: "Public Sector",
    role: "Senior Experience Designer",
    timeline: "Nov 2023 – Mar 2025",
    icon: Workflow,
    description: "Designing and scaling internal-facing B2B digital services for public sector caseworkers and administrators.",
    impact: "Built and governed a Figma component library that improved design-to-dev handoff speed and consistency across a large-scale transformation programme.",
    tags: ["Public Sector", "Enterprise UX"],
    context:
      "Marston Holdings delivers services on behalf of public sector clients, with internal-facing tools used daily by caseworkers and administrative staff. As part of a large-scale transformation programme, the organisation needed to modernise these services for a mix of technical and non-technical users.",
    challenge:
      "Caseworkers and administrative users were working with dashboards and services that hadn't kept pace with the scale of the transformation programme, increasing effort for day-to-day tasks. Design and development also lacked a shared component library, slowing handoff and creating visual inconsistency across services.",
    research: {
      methods: ["Co-creation workshops", "Stakeholder interviews", "Usability reviews", "Design QA audits"],
      summary:
        "Ran research and co-creation workshops directly with caseworkers, administrative users and stakeholders to validate assumptions before committing to a direction, and embedded design QA reviews across the team to catch accessibility and consistency issues early.",
    },
    insights: [
      {
        title: "Effort, not just usability, was the real metric",
        description:
          "The biggest wins came from reducing the number of steps and amount of manual effort required from caseworkers, not just polishing individual screens.",
      },
      {
        title: "A shared library changes the conversation with engineering",
        description:
          "Once a governed Figma component library existed, design-to-dev handoff conversations shifted from 'how do I build this' to 'which variant do I use.'",
      },
      {
        title: "Non-technical stakeholders needed a seat at the table early",
        description:
          "Involving non-technical audiences in co-creation workshops early avoided costly rework later in the transformation programme.",
      },
    ],
    designStrategy: [
      {
        heading: "Understand the caseworker's day",
        body: "Spent time understanding how caseworkers and administrative users actually moved through their daily tasks before proposing any redesign.",
      },
      {
        heading: "Build the library alongside the services",
        body: "Developed the Figma component library in parallel with live service work, so it was shaped by real screens rather than designed in the abstract.",
      },
      {
        heading: "Co-create, don't just consult",
        body: "Ran workshops with users and stakeholders as genuine co-creation sessions, using them to validate direction before investing in detailed design.",
      },
      {
        heading: "Embed QA into the process",
        body: "Built design QA checkpoints into the team's workflow so accessibility and UI consistency were caught before release, not after.",
      },
    ],
    solution: {
      summary:
        "A set of redesigned internal-facing services built around caseworker effort and administrative accuracy, backed by a governed Figma component library that sped up design-to-dev handoff across the transformation programme.",
      highlights: [
        "Redesigned dashboards and workflows that reduced effort for caseworkers and administrative users",
        "A governed, tailored Figma component library adopted across the B2B application suite",
        "An embedded design QA process aligning teams on quality, accessibility and UI standards",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description:
          "A B2B-focused Figma component library built specifically for the demands of internal case-management and administrative tooling.",
      },
      {
        label: "Tokens",
        description:
          "Shared visual foundations that kept dashboards and services consistent across a growing service portfolio.",
      },
      {
        label: "Patterns",
        description:
          "Reusable dashboard and workflow patterns that reduced effort for caseworkers doing repetitive, high-volume tasks.",
      },
      {
        label: "Governance",
        description:
          "A design QA process embedded across the team, aligning contributors on quality, accessibility and UI standards before release.",
      },
    ],
    outcome:
      "The transformation programme shipped with a governed component library in place, faster design-to-dev handoff, and services that reduced effort for the caseworkers and administrators who use them daily.",
    metrics: [
      { value: "1", label: "Governed component library shipped" },
      { value: "Large-scale", label: "Transformation programme" },
      { value: "2", label: "User groups: caseworkers & administrators" },
    ],
    reflection:
      "Public sector work sharpened my sense that 'usability' is often really about effort — every unnecessary click is effort a caseworker has to spend hundreds of times a day. Building the component library alongside live service work, rather than upfront and in the abstract, kept it honest.",
  },
  {
    slug: "bny-financial-platforms",
    title: "Enterprise Financial Platforms at BNY",
    industry: "Financial Services",
    role: "Senior UX Designer (Contract)",
    timeline: "Sep 2022 – Jun 2023",
    icon: LineChart,
    description: "Leading UX for enterprise-grade B2B financial platforms used by internal teams and enterprise clients.",
    impact: "Created a unified design library for internal tools, increasing delivery velocity and consistency across the platform.",
    tags: ["Financial Services", "Design Systems"],
    context:
      "BNY's internal and client-facing tools spanned multiple B2B financial platforms, each with its own navigation, dashboard and workflow conventions. Product managers, business analysts and engineering needed a faster, more consistent way to design and ship features.",
    challenge:
      "Navigation, dashboards and workflows had grown inconsistently across the platform, and there was no unified design library to draw from — every new feature risked reinventing patterns that already existed elsewhere in the product.",
    research: {
      methods: ["Stakeholder workshops", "Design audits", "Usability reviews", "Cross-team interviews"],
      summary:
        "Worked closely with product managers, business analysts and engineering to understand where technical and business goals weren't yet aligned with user needs, and audited existing tools to find where a unified design library could remove the most friction.",
    },
    insights: [
      {
        title: "Complexity was often unnecessary, not inherent",
        description:
          "Many multi-step flows and financial concepts could be simplified for internal teams and enterprise clients without losing the underlying capability.",
      },
      {
        title: "A unified library paid for itself quickly",
        description:
          "Once a shared design library existed for internal tools, delivery velocity and consistency both improved, because teams stopped rebuilding the same patterns.",
      },
      {
        title: "Mentorship compounds design maturity",
        description:
          "Investing time in mentoring junior designers and improving documentation practices raised the baseline quality of work across the wider team, not just individual projects.",
      },
    ],
    designStrategy: [
      {
        heading: "Simplify before you systemise",
        body: "Started by simplifying complex financial concepts and multi-step flows, making sure the underlying task was as clear as possible before turning it into a reusable pattern.",
      },
      {
        heading: "Build the library where the pain was worst",
        body: "Prioritised the internal tools and products causing the most duplicated design effort, to get delivery velocity gains early.",
      },
      {
        heading: "Align technical and business goals",
        body: "Worked directly with product managers, BAs and engineering so the design library reflected both business priorities and technical reality, not just visual preference.",
      },
      {
        heading: "Raise the floor through mentorship",
        body: "Mentored junior UX designers and improved documentation practices using Figma best practices, so design maturity kept improving after the initial library shipped.",
      },
    ],
    solution: {
      summary:
        "A unified design library for BNY's internal tools and products, paired with simplified navigation, dashboards and workflows across enterprise-grade B2B financial platforms.",
      highlights: [
        "A unified design library adopted across internal tools, increasing delivery velocity",
        "Simplified multi-step financial workflows made accessible to internal teams and enterprise clients",
        "A mentorship and documentation practice that raised design maturity across the team",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description:
          "A unified set of components for internal financial tools, replacing duplicated, platform-specific patterns.",
      },
      {
        label: "Tokens",
        description: "Consistent visual foundations applied across navigation, dashboards and workflow screens.",
      },
      {
        label: "Patterns",
        description:
          "Simplified patterns for multi-step financial flows, designed to be accessible to both internal teams and enterprise clients.",
      },
      {
        label: "Governance",
        description: "Documentation practices and mentoring that kept design maturity improving after the library's initial release.",
      },
    ],
    outcome:
      "Delivery velocity and consistency improved across internal tools once the unified design library was in place, and complex financial workflows became more accessible to both internal teams and enterprise clients.",
    metrics: [
      { value: "1", label: "Unified design library shipped" },
      { value: "Faster", label: "Delivery velocity" },
      { value: "Mentored", label: "Junior UX designers" },
    ],
    reflection:
      "This contract confirmed something I keep relearning: in finance, the fastest way to improve delivery speed is almost never 'work faster' — it's removing the duplicated effort caused by not having a shared library in the first place.",
  },
  {
    slug: "sweepr-iot-platform",
    title: "B2B IoT Support Platform at Sweepr",
    industry: "IoT / Digital Support",
    role: "Senior Product Designer",
    timeline: "Mar 2021 – Sep 2022",
    icon: Cpu,
    description: "Turning raw IoT device data into actionable, human-readable dashboards for a B2B customer-support platform.",
    impact: "Designed a scalable system spanning web and mobile, built through direct research with UK ISP clients and their end users.",
    tags: ["IoT Innovation", "Interaction Design"],
    context:
      "Sweepr builds a digital support platform that uses AI and machine learning to automate customer service for service providers, including major UK ISPs. The core design challenge was turning dense, technical device data into something a support agent or end customer could actually act on.",
    challenge:
      "Device-level data from customer hardware was technically rich but not human-readable, making it hard for support teams and end users to diagnose issues quickly. The platform also needed to work consistently across web portals and native mobile apps, for a distributed, cross-functional remote team.",
    research: {
      methods: ["Client interviews", "Heuristic reviews", "Qualitative & quantitative research", "Dovetail synthesis"],
      summary:
        "Ran research directly with clients and end users to understand what 'actionable' actually meant to them, and used heuristic and expert reviews to find where the existing designs were creating friction rather than clarity.",
    },
    insights: [
      {
        title: "'Human-readable' had to be defined per audience",
        description:
          "A support agent and an end customer needed very different levels of detail from the same underlying device data.",
      },
      {
        title: "Design system gaps cost more on a distributed team",
        description:
          "Working with a remote, cross-functional team across time zones made an early, deliberate design system decision far more valuable than it would be for a co-located team.",
      },
      {
        title: "MVP clarity reduced iteration cycles",
        description:
          "Getting explicit alignment on MVP scope with product and engineering leads noticeably reduced the number of design iterations needed per feature.",
      },
    ],
    designStrategy: [
      {
        heading: "Start with stakeholder goals",
        body: "Spent time in-depth with stakeholders understanding both the business goals behind the platform and the real needs of support teams and end users.",
      },
      {
        heading: "Design a system, not a screen",
        body: "Built the information architecture and visual design system from scratch, so consistency held across web portals and native mobile apps from day one.",
      },
      {
        heading: "Review before you redesign",
        body: "Used heuristic and expert reviews to identify specific usability issues in existing flows before committing design effort to a new direction.",
      },
      {
        heading: "Streamline for a remote team",
        body: "Clarified MVP requirements directly with product and engineering leads to reduce iteration cycles across a distributed, remote-first team.",
      },
    ],
    solution: {
      summary:
        "A design system and set of dashboards that transformed technical IoT device data into actionable, human-readable views for support teams and end customers, consistent across web and mobile.",
      highlights: [
        "A design system spanning web portals and native mobile apps",
        "Dashboards translating raw device data into actionable views for support and end users",
        "Streamlined agile practices that reduced iteration cycles across a remote team",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A component set built for data-dense dashboards, shared across the web portal and mobile apps.",
      },
      {
        label: "Tokens",
        description: "Visual foundations aligned to Sweepr's brand guidelines, applied consistently across every client-facing surface.",
      },
      {
        label: "Patterns",
        description: "Patterns for turning raw device data into actionable, human-readable views for two very different audiences.",
      },
      {
        label: "Governance",
        description: "Close collaboration with product and engineering leads to keep MVP scope and design decisions aligned across a remote team.",
      },
    ],
    outcome:
      "The platform gave support teams and end users a consistent, actionable way to understand device data across web and mobile, and directly shaped roadmap priorities through the research carried out with clients and users.",
    metrics: [
      { value: "2", label: "Platforms unified: web & mobile" },
      { value: "UK ISPs", label: "Enterprise clients supported" },
      { value: "Remote", label: "Cross-functional team" },
    ],
    reflection:
      "Sweepr taught me that 'actionable' is doing a lot of work in any IoT or data-heavy product — it means something different to every audience, and the design system has to hold multiple levels of detail without duplicating effort to maintain them.",
  },
  {
    slug: "thomson-reuters-highq-legal-platform",
    title: "Legal Collaboration Platform at Thomson Reuters HighQ",
    industry: "Legal Technology",
    role: "Senior Product Designer",
    timeline: "Nov 2013 – Mar 2021",
    icon: Scale,
    description: "Designing and optimising workflows for a B2B legal collaboration platform used by law firms and financial institutions.",
    impact: "Introduced structured usability testing and a design library that reduced onboarding time and support volume.",
    tags: ["Legal Technology", "Enterprise UX"],
    context:
      "HighQ, later acquired by Thomson Reuters, built cloud-based collaboration and content tools — including Collaborate, Publisher and Data Room — used by law firms, banks and corporates for document-heavy, high-stakes work. Over seven years, the product scaled from a single collaboration platform to a suite spanning dashboards, workflow, document automation and mobile apps.",
    challenge:
      "Legal and financial workflows are domain-heavy by nature, and translating them into interfaces that non-specialist users could pick up quickly, without stripping out the capability specialists relied on, was a recurring challenge across every feature area.",
    research: {
      methods: ["Discovery workshops", "Design thinking sessions", "Usability testing", "Functional & UI QA"],
      summary:
        "Led discovery and design thinking workshops with stakeholders to uncover client pain points, and introduced structured usability testing protocols to bring direct user evidence into design decisions that had previously relied on internal opinion.",
    },
    insights: [
      {
        title: "Domain complexity needed translation, not removal",
        description:
          "Law firms and financial institutions needed the underlying capability preserved — the job was to make the workflow legible, not to simplify away what specialists actually relied on.",
      },
      {
        title: "Usability testing changed how decisions got made",
        description:
          "Once structured usability testing protocols existed, design decisions could be backed by direct user evidence instead of internal debate.",
      },
      {
        title: "Mentoring scaled the design function further than headcount did",
        description:
          "Cross-team mentoring initiatives let a relatively small design function support feature pods and delivery teams well beyond what direct staffing allowed.",
      },
    ],
    designStrategy: [
      {
        heading: "Shape strategic direction",
        body: "Helped shape product direction toward simplicity, intuitiveness and consistency across a wide array of devices and platforms, working closely with the Chief Product Officer and later the VP of Product.",
      },
      {
        heading: "Translate domain complexity",
        body: "Turned dense legal and financial workflows into interfaces, dashboards and data visualisations that reduced onboarding time for new users.",
      },
      {
        heading: "Test with real evidence",
        body: "Introduced structured usability testing protocols and a shared design library, replacing opinion-led decisions with direct user evidence.",
      },
      {
        heading: "Scale through mentoring",
        body: "Led cross-team mentoring initiatives, supporting designers across feature pods and delivery teams as the product suite grew.",
      },
    ],
    solution: {
      summary:
        "A design system and structured usability testing practice applied across HighQ's growing suite — Collaborate, Publisher, Data Room, dashboards, workflow and mobile — translating domain-heavy legal and financial work into intuitive, consistent interfaces.",
      highlights: [
        "Unified dashboards, data visualisations and workflow tools designed across the product suite",
        "Structured usability testing protocols bringing direct user evidence into design decisions",
        "iOS and Android HighQ Drive apps extending the platform to mobile",
      ],
    },
    designSystemThinking: [
      {
        label: "Components",
        description: "A design library spanning Collaborate, Publisher, Data Room, dashboards and workflow tools, reused across feature pods.",
      },
      {
        label: "Tokens",
        description: "Consistent visual foundations applied across web and the HighQ Drive mobile apps on iOS and Android.",
      },
      {
        label: "Patterns",
        description: "Patterns for translating dense legal and financial workflows into intuitive dashboards and data visualisations.",
      },
      {
        label: "Governance",
        description: "Cross-team mentoring and design QA at the close of every sprint, using JIRA to track functional and UI testing.",
      },
    ],
    outcome:
      "Onboarding time and support volume both reduced as domain-heavy workflows became easier to learn, and the structured usability testing practice introduced during this period gave the design function a lasting evidence base for future decisions.",
    metrics: [
      { value: "7+", label: "Years on the platform" },
      { value: "iOS & Android", label: "HighQ Drive mobile apps" },
      { value: "Reduced", label: "Onboarding time & support volume" },
    ],
    reflection:
      "Seven years on one product is long enough to watch a design function grow up. The shift that mattered most wasn't a single feature — it was moving from opinion-led decisions to a usability testing practice with real evidence behind it, and then scaling that judgement through mentoring rather than headcount alone.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
