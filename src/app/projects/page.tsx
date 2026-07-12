import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects — Prabhu Raja",
  description:
    "Selected projects from 15+ years designing enterprise products, design systems and digital experiences.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected Projects"
        title="Projects in context."
        description="Each project below covers the context, the problem, the approach and the outcome — not just the finished screens."
      />

      <section className="container-prism pb-20 md:pb-28">
        <ProjectGrid />
      </section>

      <ContactCTA />
    </>
  );
}
