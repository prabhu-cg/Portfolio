"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SegmentedControlOption<T extends string> {
  label: string;
  value: T;
  count?: number;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: "md" | "sm";
  layoutId: string;
  className?: string;
  "aria-label": string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  size = "md",
  layoutId,
  className,
  "aria-label": ariaLabel,
}: SegmentedControlProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-full border border-border bg-surface p-1",
        size === "sm" && "gap-0.5 p-0.5",
        className
      )}
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
              "relative rounded-full font-medium transition-colors duration-200",
              size === "sm" ? "px-3.5 py-1.5 text-xs" : "px-4 py-2 text-sm",
              isActive ? "text-white" : "text-ink-secondary hover:text-ink"
            )}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                className="absolute inset-0 rounded-full bg-accent-strong"
              />
            )}
            <span className="relative z-10 inline-flex items-center gap-1.5">
              {option.label}
              {typeof option.count === "number" && (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-px text-[10px] font-semibold leading-normal tabular-nums",
                    isActive ? "bg-white/20 text-white" : "bg-border/70 text-ink-secondary"
                  )}
                >
                  {option.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
