"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { fadeUp } from "@/lib/motion";

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex h-full flex-col gap-5 rounded-lg border border-border bg-background p-6 transition-all duration-200 hover:border-accent hover:shadow-[0_4px_24px_-8px_rgba(23,22,20,0.12)] md:p-8"
      >
        <div className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-ink-secondary">
          <Icon className="size-5" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted">
            <span>{project.industry}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>
        </div>

        <p className="text-base text-ink-secondary">{project.description}</p>

        <p className="text-sm text-ink-secondary">
          <span className="font-semibold text-ink">Impact </span>
          {project.impact}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-2.5 py-1 font-plex text-xs text-ink-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-ink transition-colors group-hover:text-accent-strong">
          View project
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
