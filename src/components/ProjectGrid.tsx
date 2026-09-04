"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PackagePlus } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { UnderlineTabs } from "@/components/ui/UnderlineTabs";
import { staggerChildren, viewportOnce, fadeUp } from "@/lib/motion";
import {
  projects,
  projectCategories,
  sideProjectCategories,
  type ProjectCategory,
  type SideProjectCategory,
} from "@/content/projects";

const emptyStateCopy: Record<string, string> = {
  Applications: "More applications coming soon.",
  Tools: "More tools coming soon.",
  Plugins: "More plugins coming soon.",
  Enterprise: "More projects coming soon.",
};

export function ProjectGrid() {
  const [category, setCategory] = useState<ProjectCategory>("Side Projects");
  const [subcategory, setSubcategory] = useState<SideProjectCategory>("Applications");

  const isSideProjects = category === "Side Projects";

  const visibleProjects = projects
    .filter((project) =>
      isSideProjects
        ? project.category === "Side Projects" && project.subcategory === subcategory
        : project.category === "Enterprise"
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  const categoryCounts = projectCategories.reduce<Record<ProjectCategory, number>>(
    (counts, value) => {
      counts[value] = projects.filter((project) => project.category === value).length;
      return counts;
    },
    {} as Record<ProjectCategory, number>
  );

  const subcategoryCounts = sideProjectCategories.reduce<Record<SideProjectCategory, number>>(
    (counts, value) => {
      counts[value] = projects.filter(
        (project) => project.category === "Side Projects" && project.subcategory === value
      ).length;
      return counts;
    },
    {} as Record<SideProjectCategory, number>
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren(0.08)}
      className="flex flex-col gap-10"
    >
      <motion.div variants={fadeUp} className="flex flex-col gap-6">
        <SegmentedControl
          layoutId="project-category"
          aria-label="Project category"
          className="mx-auto"
          options={projectCategories.map((value) => ({ label: value, value, count: categoryCounts[value] }))}
          value={category}
          onChange={setCategory}
        />

        {isSideProjects && (
          <UnderlineTabs
            layoutId="side-project-subcategory"
            aria-label="Side project type"
            options={sideProjectCategories.map((value) => ({ label: value, value, count: subcategoryCounts[value] }))}
            value={subcategory}
            onChange={setSubcategory}
          />
        )}
      </motion.div>

      <motion.div
        key={isSideProjects ? `Side Projects-${subcategory}` : "Enterprise"}
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.06)}
      >
        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
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
            <p className="text-base text-ink-secondary">
              {emptyStateCopy[isSideProjects ? subcategory : category]}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
