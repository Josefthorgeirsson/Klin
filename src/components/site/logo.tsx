import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 group",
        className
      )}
      aria-label="Klín – forsíða"
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-lg transition-transform duration-200 group-hover:-rotate-6",
          dark ? "bg-white text-klin-pink" : "bg-klin-pink text-white"
        )}
      >
        K
      </span>
      <span
        className={cn(
          "font-display text-2xl leading-none tracking-tight",
          dark ? "text-white" : "text-klin-pink"
        )}
      >
        Klín
      </span>
    </Link>
  );
}
