import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/site/container";
import { IconBadge } from "@/components/site/icon-badge";

export const metadata: Metadata = {
  title: "Hafa samband – Klín",
  description:
    "Hafðu samband við Klín í síma 555 5522 eða á klin@klin.is og fáðu tilboð í ræstingu heimilis, fyrirtækis eða stofnunar. Þjónustusvæði: Höfuðborgarsvæðið og Suðurland.",
};

const INFO = [
  {
    icon: MapPin,
    title: "Þjónustusvæði",
    description: "Höfuðborgarsvæðið og Suðurland",
  },
  {
    icon: Clock,
    title: "Opnunartími",
    description: "Mán–fös 08:00–17:00",
  },
  {
    icon: Clock,
    title: "Viðbragðstími",
    description: "Svörum öllum fyrirspurnum samdægurs",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-klin-pink-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-klin-pink">
              Hafa samband
            </span>
            <h1 className="mt-6 font-heading text-3xl leading-tight text-klin-ink sm:text-4xl">
              Fáðu tilboð
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-klin-ink/70">
              Hringdu eða sendu okkur línu — við svörum samdægurs.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col items-start bg-klin-pink-medium text-white">
              <IconBadge icon={Phone} variant="soft" className="bg-white/15 text-white" />
              <h2 className="mt-6 font-heading text-2xl font-bold">Hringdu í okkur</h2>
              <p className="mt-2 text-white/80">Fljótlegasta leiðin til að fá tilboð.</p>
              <a
                href="tel:5555522"
                className="mt-6 font-display text-3xl tracking-tight"
              >
                555 5522
              </a>
              <Button asChild variant="light" className="mt-8">
                <a href="tel:5555522">Hringja núna</a>
              </Button>
            </Card>

            <Card className="flex flex-col items-start">
              <IconBadge icon={Mail} />
              <h2 className="mt-6 font-heading text-2xl font-bold text-klin-ink">
                Sendu tölvupóst
              </h2>
              <p className="mt-2 text-klin-ink/70">
                Segðu okkur frá rýminu og hvað þú þarft — við svörum með
                tilboði.
              </p>
              <a
                href="mailto:klin@klin.is"
                className="mt-6 font-display text-2xl tracking-tight text-klin-pink break-all"
              >
                klin@klin.is
              </a>
              <Button asChild className="mt-8">
                <a href="mailto:klin@klin.is?subject=Fyrirspurn%20um%20þrif">
                  Senda tölvupóst
                </a>
              </Button>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {INFO.map((item) => (
              <Card key={item.title} className="shadow-none">
                <IconBadge icon={item.icon} variant="solid" />
                <h3 className="mt-5 font-heading text-base font-bold text-klin-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-klin-ink/70">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
