import Link from "next/link";
import { Building2, Home as HomeIcon, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/site/container";
import { IconBadge } from "@/components/site/icon-badge";
import { Wordmark } from "@/components/site/wordmark";

const SERVICES = [
  {
    icon: HomeIcon,
    title: "Heimili og húsfélög",
    description: "Regluleg þrif og djúphreinsun fyrir heimilið þitt.",
  },
  {
    icon: Building2,
    title: "Fyrirtæki",
    description: "Skrifstofur og verslanir sem líta alltaf vel út.",
  },
  {
    icon: Landmark,
    title: "Stofnanir",
    description: "Skólar og heilbrigðisstofnanir þrifnar af nákvæmni.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section>
        <Container className="grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <h1 className="font-display text-4xl leading-[1.5] text-klin-ink sm:text-5xl lg:text-6xl">
              Klín er leiðandi fyrirtæki á Íslandi í þrifum
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-klin-ink/70">
              Ræstingarþjónusta fyrir heimili, fyrirtæki og stofnanir um allt
              Suðurland.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/hafa-samband">Fá tilboð</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto flex aspect-[16/10] w-full max-w-md items-center justify-center rounded-[2.5rem] border border-klin-pink/10 bg-klin-pink-soft shadow-[0_30px_70px_-35px_rgba(149,12,83,0.35)]">
              <Wordmark className="text-6xl text-klin-pink-dark sm:text-7xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.title} className="flex flex-col items-start">
                <IconBadge icon={service.icon} />
                <h3 className="mt-6 font-heading text-xl font-bold text-klin-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-klin-ink/70">
                  {service.description}
                </p>
                <Button asChild className="mt-6">
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
