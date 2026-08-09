"use client";

import { motion } from "framer-motion";
import { PackagePlus } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { staggerChildren, viewportOnce, fadeUp } from "@/lib/motion";
import { projects, projectCategories } from "@/content/projects";

export function ProjectGrid() {
  return (
    <div className="flex flex-col gap-16">
      {projectCategories.map((category) => {
        const categoryProjects = projects.filter((project) => project.category === category);

        return (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.08)}
            className="flex flex-col gap-6"
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-ink">
              {category}
            </motion.h2>

            {categoryProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-surface px-6 py-14 text-center"
              >
                <span className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-ink-secondary">
                  <PackagePlus className="size-5" aria-hidden="true" />
                </span>
                <p className="text-base text-ink-secondary">More projects coming soon.</p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
