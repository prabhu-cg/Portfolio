import type { ReactNode } from "react";
import { CaseStudyMotion, CaseStudyMotionItem } from "@/components/CaseStudyMotion";
import { fadeUp, staggerChildren } from "@/lib/motion";

interface CaseStudySectionProps {
  index: string;
  title: string;
  description?: string;
  tone?: "default" | "surface";
  children?: ReactNode;
}

export function CaseStudySection({
  index,
  title,
  description,
  tone = "default",
  children,
}: CaseStudySectionProps) {
  return (
    <section className={tone === "surface" ? "bg-surface" : undefined}>
      <div className="container-prism py-16 md:py-20">
        <CaseStudyMotion variants={staggerChildren(0.1)} className="flex flex-col gap-10">
          <CaseStudyMotionItem variants={fadeUp} className="flex max-w-3xl flex-col gap-4">
            <span className="font-plex text-xs text-muted">{index}</span>
            <h2 className="text-h3 font-semibold tracking-tight text-ink">{title}</h2>
            {description && <p className="text-lg text-ink-secondary">{description}</p>}
          </CaseStudyMotionItem>
          {children}
        </CaseStudyMotion>
      </div>
    </section>
  );
}
