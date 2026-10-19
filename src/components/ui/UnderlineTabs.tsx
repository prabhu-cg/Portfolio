"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { handleTabKeys } from "@/lib/tabs";

export interface UnderlineTabsOption<T extends string> {
  label: string;
  value: T;
  count?: number;
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
      onKeyDown={(event) =>
        handleTabKeys(event, options.map((option) => option.value), value, onChange)
      }
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
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.value)}
            className={cn(
              "relative py-3 text-sm font-medium transition-colors duration-200",
              isActive ? "text-ink" : "text-ink-secondary hover:text-ink"
            )}
          >
            <span className="inline-flex items-center gap-1.5">
              {option.label}
              {typeof option.count === "number" && (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-px text-[10px] font-semibold leading-normal tabular-nums",
                    isActive ? "bg-accent-strong/10 text-accent-strong" : "bg-surface text-ink-secondary"
                  )}
                >
                  {option.count}
                </span>
              )}
            </span>
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
