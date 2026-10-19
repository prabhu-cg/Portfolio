"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { getProjectBySlug } from "@/content/projects";
import { heroReel } from "@/content/featured";
import { cn } from "@/lib/utils";

const slides = heroReel.flatMap((entry) => {
  const project = getProjectBySlug(entry.slug);
  const image = project?.gallery?.[entry.shot ?? 0];
  return project && image ? [{ project, image, kind: entry.kind }] : [];
});

const AUTOPLAY_MS = 5500;

export function ProjectReel() {
  const scroller = useRef<HTMLDivElement>(null);
  const { scrollX } = useScroll({ container: scroller });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(1);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [engaged, setEngaged] = useState(false);
  const [visible, setVisible] = useState(true);

  // One slide step = card width + gap, measured so scroll position maps to an index.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const measure = () => {
      const [a, b] = Array.from(el.children) as HTMLElement[];
      if (a && b) setStep(b.offsetLeft - a.offsetLeft || 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Only advance while the reel is on screen.
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollX, "change", (x) => {
    setActive(Math.min(slides.length - 1, Math.max(0, Math.round(x / step))));
  });

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    scroller.current?.scrollTo({ left: next * step, behavior: reduce ? "auto" : "smooth" });
  };

  // Autoplay: stops on hover, focus, off-screen, reduced motion, or when paused by the visitor.
  useEffect(() => {
    if (reduce || !playing || engaged || !visible) return;
    const id = window.setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, playing, engaged, visible, reduce, step]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="flex w-full min-w-0 flex-col gap-5"
      onPointerEnter={() => setEngaged(true)}
      onPointerLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
    >
      <div
        ref={scroller}
        tabIndex={0}
        aria-label="Scroll to browse projects"
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 py-3 [scroll-padding-inline:1.5rem] focus-visible:outline-offset-4 md:mx-0 md:px-0 md:[scroll-padding-inline:0]"
      >
        {slides.map((slide, index) => (
          <Slide
            key={slide.project.slug}
            index={index}
            total={slides.length}
            step={step}
            scrollX={scrollX}
            reduce={!!reduce}
            {...slide}
          />
        ))}
        <div aria-hidden="true" className="w-[calc(14%-1rem)] shrink-0" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1" role="group" aria-label="Choose project">
          {slides.map((slide, index) => (
            <button
              key={slide.project.slug}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${slide.project.title.split(" — ")[0]}`}
              aria-current={index === active}
              className="group flex h-6 items-center px-0.5"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-[width,background-color] duration-300",
                  index === active ? "w-7 bg-accent" : "w-1.5 bg-border-strong group-hover:bg-muted"
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {!reduce && (
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause automatic advance" : "Resume automatic advance"}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-ink hover:text-ink"
            >
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
          )}
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous project"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-ink hover:text-ink"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next project"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-colors hover:border-ink hover:text-ink"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface SlideProps {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
  image: { src: string; alt: string };
  kind: string;
  index: number;
  total: number;
  step: number;
  scrollX: MotionValue<number>;
  reduce: boolean;
}

function Slide({ project, image, kind, index, total, step, scrollX, reduce }: SlideProps) {
  // Distance of this slide from the focused position: 0 = in focus, ±1 = one slide away.
  const offset = useTransform(scrollX, (x) => x / step - index);
  const opacity = useTransform(offset, [-1, 0, 1], [0.55, 1, 0.55]);
  const scale = useTransform(offset, [-1, 0, 1], [0.95, 1, 0.95]);
  const drift = useTransform(offset, [-1, 0, 1], [-26, 0, 26]);

  return (
    <motion.div
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
      style={reduce ? undefined : { opacity, scale }}
      className="w-[86%] shrink-0 snap-start origin-center"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-[border-color,box-shadow] duration-200 hover:border-accent hover:shadow-[0_8px_28px_-10px_rgba(28,25,23,0.18)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
          <motion.div style={reduce ? undefined : { x: drift }} className="absolute inset-0 scale-[1.1]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 480px, 86vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>
        <div className="flex items-center justify-between gap-4 p-4">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="font-plex text-xs text-muted">{kind}</span>
            <span className="truncate text-base font-semibold tracking-tight text-ink">
              {project.title.split(" — ")[0]}
            </span>
            <span className="truncate text-sm text-ink-secondary">{project.industry}</span>
          </div>
          <ArrowRight
            className="size-4 shrink-0 text-ink-secondary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent-strong"
            aria-hidden="true"
          />
        </div>
      </Link>
    </motion.div>
  );
}
