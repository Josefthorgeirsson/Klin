import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Check, Home as HomeIcon, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/site/container";
import { IconBadge } from "@/components/site/icon-badge";

export const metadata: Metadata = {
  title: "Þjónusta – Klín",
  description:
    "Ræstingarþjónusta Klín fyrir heimili, fyrirtæki og stofnanir á Höfuðborgarsvæðinu og Suðurlandi.",
};

const CATEGORIES = [
  {
    id: "heimili",
    icon: HomeIcon,
    title: "Heimili og húsfélög",
    description: "Regluleg þrif og djúphreinsun fyrir heimilið þitt.",
    items: [
      "Regluleg þrif",
      "Djúphreinsun",
      "Flutningsþrif",
      "Gluggaþvottur",
      "Stigagangar og sameignir fyrir húsfélög",
    ],
  },
  {
    id: "fyrirtaeki",
    icon: Building2,
    title: "Fyrirtækjaþrif",
    items: [
      "Skrifstofur og verslanir",
      "Sameignir og stigagangar",
      "Fundarherbergi",
      "Þjónustusamningar",
    ],
  },
  {
    id: "stofnanir",
    icon: Landmark,
    title: "Stofnanaþrif",
    items: [
      "Leikskólar og skólar",
      "Heilbrigðisstofnanir",
      "Sérhæfð sótthreinsun",
      "Sveigjanlegir tímar",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((category) => (
              <Card key={category.id} id={category.id} className="scroll-mt-24">
                <IconBadge icon={category.icon} variant="solid" />
                <h2 className="mt-6 font-heading text-xl font-bold text-klin-ink">
                  {category.title}
                </h2>
                {category.description && (
                  <p className="mt-2 text-sm leading-relaxed text-klin-ink/70">
                    {category.description}
                  </p>
                )}
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-klin-pink" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-klin-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/hafa-samband">Fá tilboð</Link>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
