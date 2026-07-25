import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/site/logo";

const NAV_LINKS = [
  { href: "/", label: "Heim" },
  { href: "/thjonusta", label: "Þjónusta" },
  { href: "/hafa-samband", label: "Hafa samband" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Ræstingarþjónusta fyrir heimili, fyrirtæki og stofnanir á
              Suðurlandi.
            </p>
          </div>

          <div>
            <h3
              aria-hidden="true"
              className="font-heading text-sm font-bold uppercase tracking-wide text-white"
            >
              &nbsp;
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Hafðu samband
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:5555522"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  555 5522
                </a>
              </li>
              <li>
                <a
                  href="mailto:klin@klin.is"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  klin@klin.is
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                Suðurland
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Klín ehf. Öll réttindi áskilin.</p>
          <p>Kt. 000000-0000</p>
        </div>
      </div>
    </footer>
  );
}
