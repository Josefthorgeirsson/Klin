"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Heim" },
  { href: "/thjonusta", label: "Þjónusta" },
  { href: "/hafa-samband", label: "Hafa samband" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-klin-pink/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo dark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Aðalvalmynd">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-bold text-white transition-colors hover:text-white/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:5555522"
            className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-white/70"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            555 5522
          </a>
          <Button asChild variant="light" size="default">
            <Link href="/hafa-samband">Fá tilboð</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Loka valmynd" : "Opna valmynd"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-klin-pink px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Farsímavalmynd">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-heading text-base font-bold text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="light" className="mt-4 w-full">
            <Link href="/hafa-samband" onClick={() => setOpen(false)}>
              Fá tilboð
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
