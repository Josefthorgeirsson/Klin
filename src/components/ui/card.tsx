import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-3xl border border-klin-ink/5 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(43,10,31,0.35)]",
        className
      )}
      {...props}
    />
  );
}

export { Card };
