import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { approachSteps } from "@/content/approach";

interface DesignApproachProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  surface?: boolean;
}

export function DesignApproach({
  eyebrow = "How I Work",
  title = "Design approach",
  description = "A repeatable process that turns ambiguity into clear, systemised outcomes.",
  surface = false,
}: DesignApproachProps) {
  const content = (
    <div className="container-prism py-20 md:py-28">
      <div className="flex flex-col gap-12">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <Timeline items={approachSteps} />
      </div>
    </div>
  );

  return surface ? <section className="bg-surface">{content}</section> : <section>{content}</section>;
}
