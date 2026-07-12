import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, LayoutGrid, Palette, Workflow, ShieldCheck, Check, FileDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CaseStudySection } from "@/components/CaseStudySection";
import { CaseStudyMotion, CaseStudyMotionItem } from "@/components/CaseStudyMotion";
import { InsightCard } from "@/components/InsightCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { getProjectBySlug, projects } from "@/content/projects";
import { fadeUp, staggerChildren } from "@/lib/motion";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const systemThinkingIcons: Record<string, LucideIcon> = {
  Components: LayoutGrid,
  Tokens: Palette,
  Patterns: Workflow,
  Governance: ShieldCheck,
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Prabhu Raja`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="container-prism pt-14 pb-12 md:pt-20 md:pb-16">
        <CaseStudyMotion variants={staggerChildren(0.1)} className="flex flex-col gap-8">
          <CaseStudyMotionItem variants={fadeUp} className="flex items-center justify-between gap-4 print:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              Back to projects
            </Link>
            <Button
              href={`/case-studies/${project.slug}.pdf`}
              variant="secondary"
              size="md"
              icon={<FileDown className="size-4" />}
            >
              Download PDF
            </Button>
          </CaseStudyMotionItem>

          <CaseStudyMotionItem variants={fadeUp} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-ink-secondary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-eyebrow text-accent-strong">{project.tags.join(" · ")}</span>
            </div>
            <h1 className="max-w-3xl text-[2.5rem] leading-[1.1] tracking-tight text-ink md:text-h1">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg text-ink-secondary md:text-xl">
              {project.description}
            </p>
          </CaseStudyMotionItem>

          <CaseStudyMotionItem
            variants={fadeUp}
            className="grid grid-cols-3 gap-6 border-y border-border py-6 sm:gap-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Role
              </span>
              <span className="text-base text-ink">{project.role}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Timeline
              </span>
              <span className="text-base text-ink">{project.timeline}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                Industry
              </span>
              <span className="text-base text-ink">{project.industry}</span>
            </div>
          </CaseStudyMotionItem>
        </CaseStudyMotion>
      </section>

      <CaseStudySection index="01" title="Context" description={project.context} />

      <CaseStudySection index="02" title="The Challenge" description={project.challenge} tone="surface" />

      <CaseStudySection index="03" title="Research" description={project.research.summary}>
        <CaseStudyMotionItem variants={fadeUp} className="flex flex-wrap gap-2">
          {project.research.methods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-border bg-surface px-3 py-1.5 font-plex text-xs text-ink-secondary"
            >
              {method}
            </span>
          ))}
        </CaseStudyMotionItem>
      </CaseStudySection>

      <CaseStudySection index="04" title="Insights" description="The key findings that shaped the direction." tone="surface">
        <CaseStudyMotionItem
          variants={staggerChildren(0.08)}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {project.insights.map((insight, i) => (
            <InsightCard key={insight.title} index={i + 1} title={insight.title} description={insight.description} />
          ))}
        </CaseStudyMotionItem>
      </CaseStudySection>

      <CaseStudySection index="05" title="Design Strategy" description="How decisions were made.">
        <CaseStudyMotionItem
          variants={staggerChildren(0.08)}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {project.designStrategy.map((step, index) => (
            <CaseStudyMotionItem
              key={step.heading}
              variants={fadeUp}
              className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6 md:p-8"
            >
              <span className="font-plex text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-ink">{step.heading}</h3>
              <p className="text-sm text-ink-secondary">{step.body}</p>
            </CaseStudyMotionItem>
          ))}
        </CaseStudyMotionItem>
      </CaseStudySection>

      <CaseStudySection index="06" title="Solution" description={project.solution.summary} tone="surface">
        <CaseStudyMotionItem
          variants={staggerChildren(0.06)}
          className="flex flex-col gap-3"
        >
          {project.solution.highlights.map((highlight) => (
            <CaseStudyMotionItem
              key={highlight}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-ink-secondary" aria-hidden="true" />
              <span className="text-base text-ink-secondary">{highlight}</span>
            </CaseStudyMotionItem>
          ))}
        </CaseStudyMotionItem>
      </CaseStudySection>

      <CaseStudySection
        index="07"
        title="Design System Thinking"
        description="This project wasn't designed as a one-off — here's how it connects back to the system."
      >
        <CaseStudyMotionItem
          variants={staggerChildren(0.08)}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {project.designSystemThinking.map((item) => {
            const ItemIcon = systemThinkingIcons[item.label] ?? LayoutGrid;
            return (
              <CaseStudyMotionItem
                key={item.label}
                variants={fadeUp}
                className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6"
              >
                <span className="flex size-9 items-center justify-center rounded-md border border-border bg-surface text-ink-secondary">
                  <ItemIcon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold tracking-tight text-ink">{item.label}</h3>
                <p className="text-sm text-ink-secondary">{item.description}</p>
              </CaseStudyMotionItem>
            );
          })}
        </CaseStudyMotionItem>
      </CaseStudySection>

      <CaseStudySection index="08" title="Impact" description={project.outcome} tone="surface">
        <CaseStudyMotionItem
          variants={staggerChildren(0.08)}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-border bg-background p-6">
              <MetricCard value={metric.value} label={metric.label} />
            </div>
          ))}
        </CaseStudyMotionItem>
      </CaseStudySection>

      <CaseStudySection index="09" title="Reflection" description={project.reflection} />

      <section className="border-t border-border print:hidden">
        <div className="container-prism flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div className="flex flex-col gap-1.5">
            <span className="text-eyebrow text-muted">Next project</span>
            <span className="text-2xl font-semibold tracking-tight text-ink">
              {nextProject.title}
            </span>
          </div>
          <Button
            href={`/projects/${nextProject.slug}`}
            variant="secondary"
            icon={<ArrowRight className="size-4" />}
          >
            View project
          </Button>
        </div>
      </section>

      <div className="print:hidden">
        <ContactCTA />
      </div>
    </>
  );
}
