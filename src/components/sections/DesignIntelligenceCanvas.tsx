"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { viewportOnce } from "@/lib/motion";
import { approachSteps } from "@/content/approach";

const swatches = [
  { hex: "#171614", label: "Ink" },
  { hex: "#FFFAEF", label: "Surface" },
  { hex: "#C74504", label: "Accent" },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function DesignIntelligenceCanvas() {
  return (
    <div className="relative w-full max-w-md" aria-hidden="true">
      {/* Stacked artifact edges, suggesting a synced system rather than a single screen */}
      <div className="absolute inset-0 rotate-[3deg] rounded-xl border border-border bg-background" />
      <div className="absolute inset-0 -rotate-2 rounded-xl border border-border bg-background" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{ hidden: {}, visible: {} }}
        className="relative aspect-[4/5] w-full rounded-xl border border-border bg-surface p-5 md:p-6"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(23,22,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,22,20,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "-1px -1px",
        }}
      >
        {/* Chrome */}
        <motion.div custom={0} variants={cardVariant} className="flex items-center justify-between">
          <span className="text-eyebrow text-muted">Design System</span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent-strong" />
            <span className="size-1.5 rounded-full bg-border" />
            <span className="size-1.5 rounded-full bg-border" />
          </span>
        </motion.div>

        {/* Identity — real content, not a placeholder */}
        <motion.div
          custom={1}
          variants={cardVariant}
          className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-background p-3"
        >
          <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-border">
            <Image src="/prabhu-raja.jpg" alt="" fill sizes="44px" className="object-cover object-top" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-ink">Prabhu Raja</span>
            <span className="text-xs text-muted">Senior Designer</span>
          </div>
        </motion.div>

        {/* Type + a real component, rendered — not sketched */}
        <motion.div custom={2} variants={cardVariant} className="mt-3 grid grid-cols-2 gap-3">
          <div className="flex flex-col justify-between gap-3 rounded-lg border border-border bg-background p-3">
            <span className="font-sans text-2xl font-semibold leading-none text-ink">Aa</span>
            <span className="font-plex text-[10px] leading-tight text-muted">
              Manrope
              <br />
              16–72px
            </span>
          </div>
          <div className="flex flex-col justify-between gap-3 rounded-lg border border-border bg-background p-3">
            <span className="font-plex text-[10px] text-muted">Button</span>
            <span className="inline-flex items-center justify-center gap-1 self-start rounded-md bg-accent-strong px-2.5 py-1.5 font-sans text-[11px] font-medium text-white">
              View project
              <ArrowRight className="size-3" />
            </span>
          </div>
        </motion.div>

        {/* Real token swatches */}
        <motion.div custom={3} variants={cardVariant} className="mt-3 flex gap-2">
          {swatches.map((swatch) => (
            <span
              key={swatch.hex}
              className="flex flex-1 flex-col gap-1.5 rounded-lg border border-border bg-background p-2"
            >
              <span
                className="h-4 w-full rounded-md border border-border/60"
                style={{ backgroundColor: swatch.hex }}
              />
              <span className="font-plex text-[10px] text-muted">{swatch.hex}</span>
            </span>
          ))}
        </motion.div>

        {/* Process — mirrors the Design Approach section below */}
        <motion.div
          custom={4}
          variants={cardVariant}
          className="mt-3 rounded-lg border border-border bg-background p-3"
        >
          <span className="font-plex text-[10px] uppercase tracking-wide text-muted">Process</span>
          <div className="mt-3 flex items-center justify-between">
            {approachSteps.map((step, i) => (
              <div key={step.title} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span
                    className={`size-2.5 rounded-full ${i === 2 ? "bg-accent-strong" : "bg-ink/70"}`}
                  />
                  <span className="font-plex text-[9px] text-muted">{step.title}</span>
                </div>
                {i < approachSteps.length - 1 && (
                  <span className="mx-1 mb-4 h-px w-4 border-t border-dashed border-border sm:w-6" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating status chip */}
        <motion.div
          custom={5}
          variants={cardVariant}
          className="absolute -right-4 -top-4 hidden rounded-lg border border-border bg-background px-3 py-2 shadow-[0_8px_24px_-8px_rgba(23,22,20,0.15)] sm:flex sm:items-center sm:gap-2"
        >
          <span className="size-2 rounded-full bg-accent" />
          <span className="font-plex text-xs font-medium text-ink-secondary">System v2.4</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
