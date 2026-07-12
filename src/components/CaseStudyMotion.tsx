"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { viewportOnce } from "@/lib/motion";

interface MotionProps {
  variants: Variants;
  className?: string;
  children: ReactNode;
}

export function CaseStudyMotion({ variants, className, children }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CaseStudyMotionItem({ variants, className, children }: MotionProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
