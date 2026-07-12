import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { experienceTimeline } from "@/content/experience";

interface ExperienceTimelineProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  surface?: boolean;
}

export function ExperienceTimeline({
  eyebrow = "Experience",
  title = "15+ years across industries",
  description = "Depth built across regulated, high-stakes domains — each one sharpening a different facet of the craft.",
  surface = true,
}: ExperienceTimelineProps) {
  const content = (
    <div className="container-prism py-20 md:py-28">
      <div className="flex flex-col gap-12">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <Timeline items={experienceTimeline} />
      </div>
    </div>
  );

  return surface ? <section className="bg-surface">{content}</section> : <section>{content}</section>;
}
