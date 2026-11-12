import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  /** Space between items, any CSS length. */
  gap?: string;
  className?: string;
}

/**
 * Endless horizontal loop with faded edges. Content is rendered twice so the
 * -50% translate lands exactly on the start; the copy is hidden from assistive
 * tech and made inert so it cannot take focus. Pauses on hover and focus, and
 * becomes a plain scrollable row under prefers-reduced-motion (see globals.css).
 */
export function Marquee({ children, duration = 60, gap = "1.25rem", className }: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s`, "--marquee-gap": gap } as CSSProperties;
  return (
    <div className={cn("marquee", className)} style={style}>
      <div className="marquee-track">
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
