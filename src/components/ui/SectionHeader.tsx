import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <span className="text-eyebrow text-accent-strong">{eyebrow}</span>}
      <h2 className="text-[2rem] md:text-h2 font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg text-ink-secondary max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
