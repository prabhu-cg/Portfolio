import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M11 1L21 11L11 21L1 11L11 1Z" stroke="#171614" strokeWidth="1.4" />
        <path d="M11 1L21 11L11 21L1 11L11 1Z" fill="#EE661D" fillOpacity="0.08" />
        <path d="M11 6L16 11L11 16L6 11L11 6Z" fill="#EE661D" />
      </svg>
      <span className="font-semibold text-lg tracking-tight text-ink">PRISM</span>
    </span>
  );
}
