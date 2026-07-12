"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export function ContactCTA() {
  return (
    <section className="container-prism py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerChildren(0.1)}
        className="flex flex-col items-center gap-8 rounded-xl border border-border bg-surface px-6 py-16 text-center md:px-12 md:py-24"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-2xl text-[2rem] leading-[1.15] font-semibold tracking-tight text-ink md:text-h1"
        >
          Have a complex challenge? Let&apos;s design something meaningful.
        </motion.h2>
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg" icon={<Mail className="size-4" />}>
            Get in Touch
          </Button>
          <Button href="/projects" variant="secondary" size="lg" icon={<ArrowRight className="size-4" />}>
            View Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
