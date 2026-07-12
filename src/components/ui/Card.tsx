import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
}

const paddings = {
  sm: "p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export function Card({
  children,
  padding = "md",
  hover = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background",
        paddings[padding],
        hover &&
          "transition-all duration-200 hover:border-accent hover:shadow-[0_4px_24px_-8px_rgba(23,22,20,0.12)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
