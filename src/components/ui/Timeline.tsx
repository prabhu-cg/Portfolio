"use client";

import { motion } from "framer-motion";
import { staggerChildren, fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerChildren(0.1)}
      className={cn("flex flex-col gap-8 md:flex-row md:gap-6", className)}
    >
      {items.map((item, index) => (
        <motion.div key={item.title} variants={fadeUp} className="relative flex flex-1 gap-4 md:flex-col md:gap-4">
          <div className="flex flex-col items-center md:w-full">
            <div className="flex items-center md:w-full">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-background font-plex text-sm font-medium text-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < items.length - 1 && (
                <span className="hidden h-px flex-1 border-t border-dashed border-border md:block" />
              )}
            </div>
            {index < items.length - 1 && (
              <span className="mt-1 h-full w-px flex-1 border-l border-dashed border-border md:hidden" />
            )}
          </div>
          <div className="flex flex-col gap-1.5 pb-6 md:pb-0 md:pt-2">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-ink-secondary">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
