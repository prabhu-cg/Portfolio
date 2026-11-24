import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ErrorStageProps {
  /** Short pill label, e.g. "Error 404". */
  label: string;
  /** Digits flanking the logo mark. Omit to show the mark alone (maintenance). */
  digits?: [string, string];
  title: string;
  description: string;
  actions: ReactNode;
  footnote?: ReactNode;
}

/** Shared layout for the 404, 500 and maintenance pages. */
export function ErrorStage({ label, digits, title, description, actions, footnote }: ErrorStageProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_38%,var(--surface)_0%,var(--background)_70%)]"
      />
      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-accent-strong">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-strong" />
          {label}
        </span>

        <div className="mb-5 flex items-center justify-center gap-1" aria-hidden="true">
          {digits && <Digit>{digits[0]}</Digit>}
          <span className="relative mx-[-0.25rem] flex size-26 items-center justify-center">
            <span className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-border-strong" />
            <span className="error-dot absolute -right-1 top-1.5 size-2 rounded-full bg-olive opacity-60" />
            <span
              className="error-dot absolute -left-1 bottom-2 size-1.5 rounded-full bg-accent opacity-70"
              style={{ animationDelay: "0.6s" }}
            />
            <Image
              src="/logo-icon.png"
              alt=""
              width={180}
              height={168}
              className="error-drift h-14 w-auto drop-shadow-[0_10px_14px_rgba(53,51,53,0.14)]"
            />
          </span>
          {digits && <Digit>{digits[1]}</Digit>}
        </div>

        <h1 className={cn("mb-2.5 text-balance text-3xl text-ink")}>{title}</h1>
        <p className="mb-8 max-w-sm text-[0.9375rem] leading-relaxed text-muted">{description}</p>
        <div className="flex flex-wrap justify-center gap-2.5">{actions}</div>
        {footnote && <p className="mt-9 text-xs text-muted">{footnote}</p>}
      </div>
    </section>
  );
}

function Digit({ children }: { children: ReactNode }) {
  return (
    <span className="select-none font-display text-[8rem] font-medium leading-none tracking-tight text-ink max-sm:text-[6rem]">
      {children}
    </span>
  );
}
