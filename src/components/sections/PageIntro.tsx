"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="container-prism pt-14 pb-16 md:pt-20 md:pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.1)}
        className="flex max-w-2xl flex-col gap-5"
      >
        <motion.span variants={fadeUp} className="text-eyebrow text-accent-strong">
          {eyebrow}
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-[2.5rem] leading-[1.1] tracking-tight text-ink md:text-h1"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p variants={fadeUp} className="text-lg text-ink-secondary md:text-xl">
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
