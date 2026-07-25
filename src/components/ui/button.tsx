"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-klin-pink text-white shadow-[0_8px_24px_-8px_rgba(224,51,154,0.65)] hover:bg-klin-pink-dark hover:-translate-y-0.5 focus-visible:ring-klin-pink",
        outline:
          "border-2 border-klin-pink text-klin-pink bg-transparent hover:bg-klin-pink hover:text-white focus-visible:ring-klin-pink",
        ghost:
          "text-klin-ink hover:bg-klin-pink/10 focus-visible:ring-klin-pink",
        light:
          "bg-white text-klin-pink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 focus-visible:ring-white",
      },
      size: {
        default: "h-12 px-6 py-2 has-[>svg]:px-5",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
