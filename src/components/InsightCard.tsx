"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface InsightCardProps {
  index: number;
  title: string;
  description: string;
}

export function InsightCard({ index, title, description }: InsightCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6"
    >
      <span className="flex size-8 items-center justify-center rounded-full border border-border bg-surface font-plex text-xs font-medium text-ink">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="text-base font-semibold tracking-tight text-ink">{title}</h3>
      <p className="text-sm text-ink-secondary">{description}</p>
    </motion.div>
  );
}
