const STEPS = [
  {
    number: "01",
    title: "Hafðu samband",
    description: "Segðu okkur frá rýminu þínu og þörfum — í síma, tölvupósti eða á vefnum.",
  },
  {
    number: "02",
    title: "Fáðu tilboð",
    description: "Við sendum þér skýrt tilboð, sniðið að stærð og umfangi verksins.",
  },
  {
    number: "03",
    title: "Við mætum og þrífum",
    description: "Þjálfað starfsfólk mætir á umsömdum tíma, útbúið öllum réttu tólunum.",
  },
  {
    number: "04",
    title: "Þú nýtur útkomunnar",
    description: "Ekkert eftir nema að njóta hreins og ferskt rýmis — við sjáum um restina.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step) => (
        <li key={step.number} className="relative">
          <span className="font-display text-3xl text-klin-pink/30">{step.number}</span>
          <h3 className="mt-3 font-heading text-lg font-bold text-klin-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-klin-ink/70">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
