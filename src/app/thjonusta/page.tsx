import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Check,
  Home as HomeIcon,
  Landmark,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/site/container";
import { IconBadge } from "@/components/site/icon-badge";
import { ProcessSteps } from "@/components/site/process-steps";

export const metadata: Metadata = {
  title: "Þjónusta – Klín",
  description:
    "Ræstingarþjónusta Klín fyrir heimili, fyrirtæki og stofnanir: regluleg þrif, djúphreinsun, flutningsþrif og fleira.",
};

const CATEGORIES = [
  {
    id: "heimili",
    icon: HomeIcon,
    title: "Heimilisþrif",
    description:
      "Hvort sem þú vilt reglulega aðstoð eða þrif fyrir sérstök tilefni, sníðum við þjónustuna að heimilinu þínu.",
    items: [
      "Regluleg þrif — vikulega, aðra hverja viku eða mánaðarlega",
      "Djúphreinsun eldhúss og baðherbergja",
      "Flutningsþrif — aðflutnings- og útflutningsþrif",
      "Gluggaþvottur",
      "Þrif fyrir og eftir viðburði",
    ],
  },
  {
    id: "fyrirtaeki",
    icon: Building2,
    title: "Fyrirtækjaþrif",
    description:
      "Snyrtilegur vinnustaður hefur áhrif á bæði starfsfólk og viðskiptavini. Við mætum utan háannatíma svo starfsemin raskast ekki.",
    items: [
      "Skrifstofur og opin vinnurými",
      "Verslanir og þjónusturými",
      "Sameignir, stigagangar og lyftur",
      "Fundarherbergi og eldhúsaðstaða",
      "Reglulegir þjónustusamningar með sveigjanlegri tíðni",
    ],
  },
  {
    id: "stofnanir",
    icon: Landmark,
    title: "Stofnanaþrif",
    description:
      "Skólar, leikskólar og heilbrigðisstofnanir gera ríkar kröfur um hreinlæti. Við þekkjum staðlana og störfum eftir þeim.",
    items: [
      "Leikskólar og grunnskólar",
      "Heilbrigðis- og hjúkrunarstofnanir",
      "Íþróttamannvirki og félagsmiðstöðvar",
      "Sérhæfð sótthreinsun",
      "Sveigjanlegir tímar utan opnunartíma",
    ],
  },
];

const EXTRA_SERVICES = [
  "Gluggaþvottur",
  "Teppa- og bólstursþrif",
  "Byggingarþrif eftir framkvæmdir",
  "Djúphreinsun eldhúsa og fituhreinsun",
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-klin-pink-tint py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-klin-pink-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-klin-pink">
              Þjónustan okkar
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.5] text-klin-ink sm:text-5xl">
              Þrif fyrir hvert rými, hverja þörf
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-klin-ink/70">
              Frá litlum íbúðum að stórum stofnunum — Klín sníður umfang,
              tíðni og verklag að því rými sem þarf að þrífa.
            </p>
          </div>
        </Container>
      </section>

      {CATEGORIES.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-24 py-20 ${index % 2 === 1 ? "bg-klin-pink-tint" : ""}`}
        >
          <Container>
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
              <div>
                <IconBadge icon={category.icon} variant="solid" className="h-14 w-14 rounded-3xl" />
                <h2 className="mt-6 font-heading text-3xl font-bold text-klin-ink">
                  {category.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-klin-ink/70">
                  {category.description}
                </p>
              </div>
              <Card>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-klin-pink" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-klin-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </section>
      ))}

      {/* Extra services */}
      <section className="py-20">
        <Container>
          <div className="rounded-[2.5rem] bg-klin-ink px-8 py-14 sm:px-16">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-klin-pink-bright" aria-hidden="true" />
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Aukaþjónusta
              </h2>
            </div>
            <p className="mt-3 max-w-xl text-white/70">
              Þarftu eitthvað umfram hefðbundin þrif? Þetta bjóðum við líka.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EXTRA_SERVICES.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20">
        <Container>
          <h2 className="text-center font-heading text-3xl font-bold text-klin-ink sm:text-4xl">
            Svona virkar það
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-klin-ink/70">
            Fjögur einföld skref frá fyrstu skilaboðum að hreinu rými.
          </p>
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <div className="rounded-[2.5rem] bg-klin-pink px-8 py-16 text-center sm:px-16">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Ekki viss hvaða þjónusta hentar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Sendu okkur línu og við hjálpum þér að finna réttu lausnina —
              engin skuldbinding.
            </p>
            <div className="mt-8">
              <Button asChild variant="light" size="lg">
                <Link href="/hafa-samband">Fá tilboð</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
