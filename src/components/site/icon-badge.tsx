import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconBadge({
  icon: Icon,
  className,
  variant = "soft",
}: {
  icon: LucideIcon;
  className?: string;
  variant?: "soft" | "solid";
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
        variant === "soft" && "bg-klin-pink-soft text-klin-pink",
        variant === "solid" && "bg-klin-pink text-white",
        className
      )}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </span>
  );
}
