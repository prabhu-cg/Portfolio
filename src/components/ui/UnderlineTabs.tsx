"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface UnderlineTabsOption<T extends string> {
  label: string;
  value: T;
}

interface UnderlineTabsProps<T extends string> {
  options: UnderlineTabsOption<T>[];
  value: T;
  onChange: (value: T) => void;
  layoutId: string;
  "aria-label": string;
}

export function UnderlineTabs<T extends string>({
  options,
  value,
  onChange,
  layoutId,
  "aria-label": ariaLabel,
}: UnderlineTabsProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex items-center justify-start gap-8 border-b border-border"
    >
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative py-3 text-sm font-medium transition-colors duration-200",
              isActive ? "text-ink" : "text-ink-secondary hover:text-ink"
            )}
          >
            {option.label}
            {isActive && (
              <motion.span
                layoutId={layoutId}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-accent-strong"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
