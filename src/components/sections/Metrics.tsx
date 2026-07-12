"use client";

import { motion } from "framer-motion";
import { staggerChildren, viewportOnce } from "@/lib/motion";
import { MetricCard } from "@/components/ui/MetricCard";
import { metrics } from "@/content/metrics";

export function Metrics() {
  return (
    <section className="border-y border-border bg-surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerChildren(0.08)}
        className="container-prism grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-16"
      >
        {metrics.map((metric) => (
          <MetricCard key={metric.label} value={metric.value} label={metric.label} />
        ))}
      </motion.div>
    </section>
  );
}
