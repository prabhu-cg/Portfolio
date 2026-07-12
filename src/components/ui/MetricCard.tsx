"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <motion.div variants={fadeUp} className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-[2rem] font-semibold tracking-tight text-ink md:text-h2">
        {value}
      </span>
      <span className="text-sm text-muted">{label}</span>
    </motion.div>
  );
}
