# Klín

Marketing website for **Klín**, an Icelandic cleaning service for homes,
companies, and institutions.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and
shadcn/ui-style components. Content is in Icelandic.

## Pages

- `/` — Heim (home)
- `/thjonusta` — Þjónusta (services)
- `/um-okkur` — Um okkur (about)
- `/hafa-samband` — Hafa samband (contact)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Brand

- Primary color: `#D1116F` (Klín pink)
- Display font: Boldonse (logo, hero headlines)
- Heading font: Bricolage Grotesque
- Body font: Instrument Sans

Fonts are self-hosted from `.claude/skills/ui-styling/canvas-fonts` via
`next/font/local`, defined in `src/app/layout.tsx`.
