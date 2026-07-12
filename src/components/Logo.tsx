import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image src="/logo-icon.png" alt="" width={180} height={168} className="h-6 w-auto" aria-hidden="true" />
      <span className="font-semibold text-lg tracking-tight text-ink">Prabhu Raja</span>
    </span>
  );
}
