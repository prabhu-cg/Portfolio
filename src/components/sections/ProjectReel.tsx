"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { getProjectBySlug } from "@/content/projects";
import { heroReel } from "@/content/featured";
import { cn } from "@/lib/utils";

const slides = heroReel.flatMap((entry) => {
  const project = getProjectBySlug(entry.slug);
  const image = project?.gallery?.[entry.shot ?? 0];
  return project?.subcategory && image
    ? [{ project, image, kind: project.subcategory.replace(/s$/, "") }]
    : [];
});

const AUTOPLAY_MS = 5500;
const SWIPE_PX = 48;

// Shortest signed distance around the loop, so the strip wraps without a jump.
function loopOffset(index: number, active: number, total: number) {
  let d = index - active;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
}

export function ProjectReel() {
  const root = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  const wheelLock = useRef(false);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [engaged, setEngaged] = useState(false);
  const [visible, setVisible] = useState(true);
  const total = slides.length;

  const goTo = (index: number) => setActive((index + total) % total);

  // Autoplay only runs while the reel is on screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Horizontal trackpad / wheel gestures step one project at a time. Needs a
  // non-passive listener so the browser's back-swipe doesn't also fire.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || Math.abs(event.deltaX) < 8) return;
      event.preventDefault();
      if (wheelLock.current || Math.abs(event.deltaX) < 24) return;
      wheelLock.current = true;
      setActive((current) => (current + (event.deltaX > 0 ? 1 : -1) + total) % total);
      window.setTimeout(() => (wheelLock.current = false), 450);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [total]);

  const onPanEnd = (_: PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > SWIPE_PX || Math.abs(info.velocity.x) > 500) {
      goTo(active + (info.offset.x < 0 ? 1 : -1));
    }
    window.setTimeout(() => (dragged.current = false), 0);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") goTo(active + 1);
    else if (event.key === "ArrowLeft") goTo(active - 1);
  };

  const onSlideClick = (event: MouseEvent, index: number) => {
    if (dragged.current) {
      event.preventDefault();
      return;
    }
    if (index !== active) {
      event.preventDefault();
      goTo(index);
    }
  };

  const clockRunning = playing && !engaged && visible;

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      className="flex w-full min-w-0 flex-col gap-5"
      onPointerEnter={() => setEngaged(true)}
      onPointerLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
      onKeyDown={onKeyDown}
    >
      <motion.div
        onPanStart={() => (dragged.current = false)}
        onPan={(_, info) => {
          if (Math.abs(info.offset.x) > 6) dragged.current = true;
        }}
        onPanEnd={onPanEnd}
        className="flex h-[21rem] cursor-grab touch-pan-y select-none overscroll-x-contain [--sliver:0px] active:cursor-grabbing sm:h-[22rem] sm:[--sliver:3.25rem]"
      >
        {slides.map((slide, index) => {
          const offset = loopOffset(index, active, total);
          const pos = offset === 0 ? "active" : Math.abs(offset) === 1 ? "near" : "far";
          return (
            <div
              key={slide.project.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}`}
              aria-hidden={pos === "far" ? true : undefined}
              data-pos={pos}
              style={{ order: offset + 2 }}
              className={cn(
                "group relative min-w-0 overflow-hidden rounded-lg border border-border bg-background",
                "transition-[flex,margin,opacity,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "data-[pos=active]:mx-1 data-[pos=active]:flex-[1_1_0px] data-[pos=active]:hover:border-accent",
                "data-[pos=near]:mx-1 data-[pos=near]:flex-[0_0_var(--sliver)] max-sm:data-[pos=near]:opacity-0",
                "data-[pos=far]:pointer-events-none data-[pos=far]:mx-0 data-[pos=far]:flex-[0_0_0px] data-[pos=far]:border-transparent data-[pos=far]:opacity-0"
              )}
            >
              <Link
                href={`/projects/${slide.project.slug}`}
                tabIndex={pos === "far" ? -1 : 0}
                draggable={false}
                onClick={(event) => onSlideClick(event, index)}
                aria-label={
                  pos === "active"
                    ? `${slide.project.title}: view case study`
                    : `Show ${slide.project.title.split(" — ")[0]}`
                }
                className="absolute inset-0 block"
              >
                <div className="absolute inset-x-0 top-0 bottom-[5.5rem] overflow-hidden border-b border-border bg-surface">
                  <Image
                    src={slide.image.src}
                    alt={pos === "active" ? slide.image.alt : ""}
                    fill
                    draggable={false}
                    priority={index === 0}
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="scale-110 object-cover object-[50%_top] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[pos=active]:scale-100"
                  />
                </div>

                {/* Active: full caption */}
                <div className="absolute inset-x-0 bottom-0 flex h-[5.5rem] items-center justify-between gap-4 p-4 opacity-0 transition-opacity duration-300 group-data-[pos=active]:opacity-100 group-data-[pos=active]:delay-200">
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="font-plex text-xs text-muted">{slide.kind}</span>
                    <span className="truncate text-base font-semibold tracking-tight text-ink">
                      {slide.project.title.split(" — ")[0]}
                    </span>
                    <span className="truncate text-sm text-ink-secondary">{slide.project.industry}</span>
                  </div>
                  <ArrowRight
                    className="size-4 shrink-0 text-ink-secondary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                    aria-hidden="true"
                  />
                </div>

                {/* Neighbour: vertical label */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 flex h-[5.5rem] items-end justify-center pb-3 opacity-0 transition-opacity duration-300 group-data-[pos=near]:opacity-100"
                >
                  <span className="rotate-180 text-xs font-semibold tracking-tight text-ink-secondary [writing-mode:vertical-rl]">
                    {slide.project.title.split(" — ")[0]}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </motion.div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1" role="group" aria-label="Choose project">
          {slides.map((slide, index) => {
            const isActive = index === active;
            return (
              <button
                key={slide.project.slug}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${slide.project.title.split(" — ")[0]}`}
                aria-current={isActive}
                className="flex h-6 items-center px-0.5"
              >
                <span
                  className={cn(
                    "relative block h-1.5 overflow-hidden rounded-full transition-[width,background-color] duration-300",
                    isActive ? "w-10 bg-border-strong" : "w-1.5 bg-border-strong hover:bg-muted"
                  )}
                >
                  {isActive && (
                    // The fill is the autoplay clock: when it completes, the reel advances.
                    <span
                      key={active}
                      onAnimationEnd={() => goTo(active + 1)}
                      style={{
                        animationDuration: `${AUTOPLAY_MS}ms`,
                        animationPlayState: clockRunning ? "running" : "paused",
                        animationName: reduce ? "none" : "reel-fill",
                        animationTimingFunction: "linear",
                        animationFillMode: "forwards",
                      }}
                      className={cn("absolute inset-0 origin-left rounded-full bg-accent", reduce && "scale-x-100")}
                    />
                  )}
                </span>
              </button>
            );
          })}
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
