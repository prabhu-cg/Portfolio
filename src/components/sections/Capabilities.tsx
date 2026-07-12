"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CapabilityCard } from "@/components/CapabilityCard";
import { staggerChildren, viewportOnce, fadeUp } from "@/lib/motion";
import { capabilities } from "@/content/capabilities";

export function Capabilities() {
  return (
    <section className="bg-surface">
      <div className="container-prism py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.1)}
          className="flex flex-col gap-10"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow="Capabilities"
              title="Where I add the most value"
              description="A blend of strategic thinking, systems craft and hands-on design execution."
            />
          </motion.div>

          <motion.div
            variants={staggerChildren(0.08)}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((capability) => (
              <CapabilityCard
                key={capability.title}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
