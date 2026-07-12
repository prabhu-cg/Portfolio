"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { staggerChildren, viewportOnce, fadeUp } from "@/lib/motion";
import { projects } from "@/content/projects";

export function SelectedProjects() {
  return (
    <section className="container-prism py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerChildren(0.1)}
        className="flex flex-col gap-10"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Selected Projects"
            title="Selected projects"
            description="A sample of the products, systems and explorations I've led."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-strong"
          >
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerChildren(0.08)}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
