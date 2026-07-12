"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { fadeUp } from "@/lib/motion";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function CapabilityCard({ icon: Icon, title, description }: CapabilityCardProps) {
  return (
    <motion.div variants={fadeUp}>
      <Card hover className="h-full bg-background">
        <div className="flex flex-col gap-4">
          <div className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-ink-secondary">
            <Icon className="size-5" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
            <p className="text-sm text-ink-secondary">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
