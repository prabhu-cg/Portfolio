"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerChildren, viewportOnce, fadeUp } from "@/lib/motion";
import { workGallery } from "@/content/gallery";

export function WorkGallery() {
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
            eyebrow="Process"
            title="Sketches, wireframes and screens from the work"
            description="A closer look at the process behind two enterprise products — from early sketches to shipped interfaces."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-strong"
          >
            View all projects
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <div className="flex flex-col gap-12">
          {workGallery.map((group) => (
            <motion.div key={group.company} variants={fadeUp} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{group.company}</h3>
                <span className="text-sm text-muted">— {group.role}</span>
              </div>

              <div className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6 md:-mx-10 md:px-10">
                {group.images.map((image) => (
                  <div
                    key={image.src}
                    className="relative h-56 shrink-0 overflow-hidden rounded-lg border border-border bg-surface md:h-64"
                    style={{ aspectRatio: `${image.width} / ${image.height}` }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 480px, 320px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
