"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DesignIntelligenceCanvas } from "@/components/sections/DesignIntelligenceCanvas";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Hero() {
  return (
    <section className="container-prism pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.1)}
          className="flex flex-col items-start gap-6"
        >
          <motion.span variants={fadeUp} className="text-eyebrow text-accent-strong">
            Senior Product Designer
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-[2.5rem] leading-[1.1] tracking-tight text-ink md:text-hero"
          >
            Designing clarity from complexity.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-lg text-ink-secondary md:text-xl"
          >
            I design enterprise products, design systems and digital
            experiences that help organisations solve complex problems with
            clarity.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-4">
            <Button href="/projects" size="lg" icon={<ArrowRight className="size-4" />}>
              View Projects
            </Button>
            <Button
              href="/resume.pdf"
              variant="secondary"
              size="lg"
              icon={<FileDown className="size-4" />}
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <DesignIntelligenceCanvas />
        </motion.div>
      </div>
    </section>
  );
}
