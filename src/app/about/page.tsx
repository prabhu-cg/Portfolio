import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { DesignApproach } from "@/components/sections/DesignApproach";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import {
  introduction,
  personalStory,
  designPhilosophy,
  leadershipApproach,
  skills,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About — PRISM",
  description:
    "Prabhu Raja is a Senior UX/Product Designer with 15+ years of experience across financial services, legal technology, public sector and IoT.",
};

export default function AboutPage() {
  return (
    <>
      {/* Introduction */}
      <PageIntro
        eyebrow={introduction.eyebrow}
        title={introduction.title}
        description={introduction.description}
      />

      {/* Personal Story */}
      <section className="container-prism pb-20 md:pb-28">
        <div className="flex flex-col gap-10">
          <SectionHeader eyebrow="Personal Story" title="How I got here" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
            <div className="flex size-40 items-center justify-center rounded-xl border border-border bg-surface font-plex text-3xl font-semibold text-ink lg:size-full lg:aspect-square lg:text-5xl">
              PR
            </div>

            <div className="flex flex-col gap-5 text-lg text-ink-secondary">
              {personalStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="bg-surface">
        <div className="container-prism py-20 md:py-28">
          <div className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Design Philosophy"
              title="Principles I design by"
              description="The same principles that shape the PRISM design system shape how I approach every product."
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {designPhilosophy.map((principle, index) => (
                <Card key={principle.title} hover className="h-full bg-background">
                  <div className="flex flex-col gap-3">
                    <span className="font-plex text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-ink-secondary">{principle.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <DesignApproach
        eyebrow="Process"
        title="How I work"
        description="The same four-step process, applied to every project regardless of size or domain."
      />

      {/* Leadership Approach */}
      <section className="bg-surface">
        <div className="container-prism py-20 md:py-28">
          <div className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Leadership Approach"
              title="How I lead design"
              description="Design leadership isn't just craft — it's building the conditions for good design decisions to happen."
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {leadershipApproach.map((item, index) => (
                <Card key={item.title} hover className="h-full bg-background">
                  <div className="flex flex-col gap-3">
                    <span className="font-plex text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink-secondary">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <ExperienceTimeline
        eyebrow="Career Journey"
        title="15+ years across industries"
        description="Depth built across regulated, high-stakes domains — each one sharpening a different facet of the craft."
        surface={false}
      />

      {/* Skills and Expertise */}
      <section className="bg-surface">
        <div className="container-prism py-20 md:py-28">
          <div className="flex flex-col gap-10">
            <SectionHeader
              eyebrow="Toolkit"
              title="Skills & expertise"
              description="A working toolkit built for enterprise-scale design work."
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {category}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-base text-ink-secondary"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-ink-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
