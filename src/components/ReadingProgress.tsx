"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// A hairline under the sticky header that fills as a case study is read,
// so a nine-section page always shows how far along the reader is.
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.4 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-[73px] z-40 h-0.5 origin-left bg-accent print:hidden"
    />
  );
}
