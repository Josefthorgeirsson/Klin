import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Leaf, ShieldCheck, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { IconBadge } from "@/components/site/icon-badge";

export const metadata: Metadata = {
  title: "Um okkur – Klín",
  description:
    "Klín er ræstingarþjónusta sem byggir á áreiðanleika, alúð og gleði — fyrir heimili, fyrirtæki og stofnanir.",
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Áreiðanleiki",
    description:
      "Þú getur alltaf treyst því að við mætum, á umsömdum tíma, með umsamið verk í huga.",
  },
  {
    icon: HeartHandshake,
    title: "Alúð",
    description:
      "Við göngum um heimilið þitt og vinnustaðinn eins og okkar eigin — af virðingu og natni.",
  },
  {
    icon: Smile,
    title: "Gleði",
    description:
      "Þrif þurfa ekki að vera leiðinleg. Við mætum með jákvæðni sem smitar út frá sér.",
  },
  {
    icon: Leaf,
    title: "Umhverfisvitund",
    description:
      "Við veljum hreinsivörur sem eru öflugar gegn óhreinindum en mildar við umhverfið.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-klin-pink-tint py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-klin-pink-soft px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-klin-pink">
              Um Klín
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.5] text-klin-ink sm:text-5xl">
              Stofnað af ástríðu fyrir hreinlæti — og fólki
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6 text-lg leading-relaxed text-klin-ink/75">
              <p>
                Klín varð til út frá einfaldri hugmynd: að ræstingarþjónusta
                geti verið bæði fagleg og persónuleg. Of oft finnst
                viðskiptavinum þeir vera bara enn eitt nafnið á lista — hjá
                okkur er hver og einn viðskiptavinur ástæðan fyrir því sem
                við gerum.
              </p>
              <p>
                Við byrjuðum smátt, með áherslu á að gera hvert einasta verk
                vel — hvort sem það er lítil íbúð eða stór vinnustaður. Sú
                nálgun hefur skilað okkur viðskiptavinum sem treysta okkur
                aftur og aftur, og mæla með okkur áfram.
              </p>
              <p>
                Í dag þjónustar Klín heimili, fyrirtæki og stofnanir um allt
                Suðurland, alltaf með sama markmið að leiðarljósi: að skila
                hreinu rými og góðri upplifun, í hvert einasta skipti.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-klin-pink p-10 text-white">
              <p className="font-display text-3xl leading-[1.5]">
                „Hreint er ekki bara útlit — það er tilfinning.“
              </p>
              <p className="mt-6 text-white/80">
                Þess vegna leggjum við jafn mikið upp úr smáatriðunum og
                heildarmyndinni — sama hvert verkefnið er.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-klin-pink-tint py-20">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-klin-ink sm:text-4xl">
            Gildin okkar
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title}>
                <IconBadge icon={value.icon} />
                <h3 className="mt-5 font-heading text-lg font-bold text-klin-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-klin-ink/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-[2.5rem] bg-klin-ink px-8 py-16 text-center sm:px-16">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Viltu kynnast Klín betur?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Hafðu samband — við tökum vel á móti öllum spurningum.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/hafa-samband">Hafa samband</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
