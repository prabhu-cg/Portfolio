import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The pill label that sits above a heading: accent dot plus a short phrase. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-secondary",
        className
      )}
    >
      <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent" />
      {children}
    </span>
  );
}
