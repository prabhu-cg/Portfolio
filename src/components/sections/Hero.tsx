"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductFilmstrip } from "@/components/sections/ProductFilmstrip";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Hero() {
  return (
    <section className="overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.1)}
        className="container-prism flex flex-col items-center gap-6 text-center"
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>Senior Human-AI Designer</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="max-w-4xl text-balance text-[2.5rem] leading-[1.1] tracking-tight text-ink md:text-hero"
        >
          Designing clarity from complexity.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-balance text-lg text-ink-secondary md:text-xl"
        >
          I design enterprise products, design systems and digital experiences
          that help organisations solve complex problems with clarity.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            href="/projects"
            size="lg"
            className="rounded-full"
            icon={<ArrowRight className="size-4" />}
          >
            View Projects
          </Button>
          <Button
            href="/resume.pdf"
            variant="secondary"
            size="lg"
            className="rounded-full"
            icon={<FileDown className="size-4" />}
          >
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="container-prism mt-14 md:mt-16"
      >
        <ProductFilmstrip />
      </motion.div>
    </section>
  );
}
