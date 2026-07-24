import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  Home as HomeIcon,
  Landmark,
  Leaf,
  Quote,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/site/container";
import { IconBadge } from "@/components/site/icon-badge";

const TRUST_BADGES = [
  { icon: BadgeCheck, label: "100% ánægjutrygging" },
  { icon: Clock, label: "Sveigjanlegir tímar" },
  { icon: Leaf, label: "Umhverfisvænar vörur" },
  { icon: Sparkles, label: "Vandvirkt starfsfólk" },
];

const SERVICES = [
  {
    icon: HomeIcon,
    title: "Heimili",
    description:
      "Regluleg þrif, djúphreinsun og flutningsþrif fyrir heimilið þitt — í höndum fólks sem þér er treystandi fyrir.",
    href: "/thjonusta#heimili",
  },
  {
    icon: Building2,
    title: "Fyrirtæki",
    description:
      "Skrifstofur, verslanir og sameignir sem líta alltaf vel út fyrir starfsfólk og viðskiptavini.",
    href: "/thjonusta#fyrirtaeki",
  },
  {
    icon: Landmark,
    title: "Stofnanir",
    description:
      "Leikskólar, skólar og heilbrigðisstofnanir þrifin af nákvæmni, með hreinlætiskröfur í fyrirrúmi.",
    href: "/thjonusta#stofnanir",
  },
];

const FEATURES = [
  {
    icon: Clock,
    title: "Áreiðanleiki",
    description: "Við mætum á réttum tíma, í hvert einasta sinn — engar afsakanir.",
  },
  {
    icon: BadgeCheck,
    title: "Þjálfað starfsfólk",
    description: "Reynt og traust fólk sem vandar til verka og gengur vel um heimilið þitt.",
  },
  {
    icon: Leaf,
    title: "Umhverfisvænar vörur",
    description: "Öflug en skaðlaus hreinsiefni — góð fyrir heimilið, vinnustaðinn og umhverfið.",
  },
  {
    icon: Sparkles,
    title: "Sniðin þjónusta",
    description: "Þrif löguð að þínum þörfum, hvort sem er einu sinni eða reglulega.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Klín hefur gjörbreytt því hvernig heimilið mitt lítur út — og hvernig mér líður. Frábær þjónusta í hvert sinn.",
    name: "Sigríður",
    role: "Heimili í Kópavogi",
  },
  {
    quote:
      "Fagmennska og stundvísi í fyrirrúmi. Skrifstofan okkar hefur aldrei verið hreinni.",
    name: "Jón",
    role: "Fyrirtækjaeigandi í Reykjavík",
  },
  {
    quote:
      "Starfsfólk Klín er einstaklega vandvirkt og áreiðanlegt. Mælum hiklaust með þeim.",
    name: "Katrín",
    role: "Leikskólastjóri",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-klin-pink-tint">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-klin-pink-soft blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-klin-pink/10 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid gap-14 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center rounded-full bg-klin-pink-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-klin-pink">
              Allhliða ræstingarþjónusta
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.5] text-klin-ink sm:text-5xl lg:text-6xl">
              Hreint er okkar hjartans mál
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-klin-ink/70">
              Klín þrífur heimili, fyrirtæki og stofnanir um allt
              höfuðborgarsvæðið — af alúð, öryggi og smá glettni. Þú slakar á,
              við sjáum um restina.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/hafa-samband">
                  Fá tilboð
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/thjonusta">Skoða þjónustu</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 shrink-0 text-klin-pink" aria-hidden="true" />
                  <dt className="text-xs font-bold leading-tight text-klin-ink/70">{label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-[2.5rem] bg-klin-pink p-10 shadow-[0_40px_80px_-30px_rgba(209,17,111,0.55)]">
              <div className="absolute inset-6 rounded-[2rem] border-2 border-dashed border-white/25" />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center text-white">
                <span className="font-display text-7xl leading-none">K</span>
                <Sparkles className="h-10 w-10" aria-hidden="true" />
                <p className="font-heading text-xl font-bold">
                  Hreint, einfalt, Klín.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-klin-ink sm:text-4xl">
              Þjónusta fyrir hvern og einn
            </h2>
            <p className="mt-4 text-lg text-klin-ink/70">
              Sama hvort það er heimilið, vinnustaðurinn eða stofnunin þín —
              við eigum lausn sem hentar.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <IconBadge icon={service.icon} />
                <h3 className="mt-6 font-heading text-xl font-bold text-klin-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-klin-ink/70">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-klin-pink hover:text-klin-pink-dark"
                >
                  Skoða nánar
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Klín */}
      <section className="bg-klin-pink-tint py-24">
        <Container>
          <div className="grid gap-14 md:grid-cols-2 md:items-start">
            <div className="md:sticky md:top-28">
              <h2 className="font-heading text-3xl font-bold text-klin-ink sm:text-4xl">
                Af hverju velja Klín?
              </h2>
              <p className="mt-4 max-w-md text-lg text-klin-ink/70">
                Við tökum þrifin alvarlega — en aldrei okkur sjálf. Útkoman:
                hreinsun sem þú getur treyst, af fólki sem þykir vænt um
                verkin sín.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <IconBadge icon={feature.icon} variant="solid" />
                  <div>
                    <h3 className="font-heading text-base font-bold text-klin-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-klin-ink/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <h2 className="text-center font-heading text-3xl font-bold text-klin-ink sm:text-4xl">
            Fólk treystir Klín
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="flex flex-col bg-klin-pink-tint shadow-none">
                <Quote className="h-8 w-8 text-klin-pink" aria-hidden="true" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-klin-ink/80">
                  “{t.quote}”
                </p>
                <div className="mt-6">
                  <p className="font-heading text-sm font-bold text-klin-ink">{t.name}</p>
                  <p className="text-xs text-klin-ink/60">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA banner */}
      <section className="py-8">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-klin-pink px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Tilbúin/n að létta á þrifalistanum?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Sendu okkur línu í dag og fáðu tilboð sniðið að þínum þörfum —
              engin skuldbinding, bara hreint plan.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="light" size="lg">
                <Link href="/hafa-samband">Hafa samband í dag</Link>
              </Button>
              <a
                href="tel:5555522"
                className="text-sm font-bold text-white underline-offset-4 hover:underline"
              >
                eða hringdu í 555 5522
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
