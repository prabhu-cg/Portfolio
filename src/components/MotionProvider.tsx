"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Honours the visitor's reduced-motion setting: transforms and layout motion
// are removed, opacity and colour transitions still carry state changes.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
