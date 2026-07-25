import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

const boldonse = localFont({
  src: "./fonts/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
  weight: "400",
  display: "swap",
});

const bricolage = localFont({
  src: [
    { path: "./fonts/BricolageGrotesque-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/BricolageGrotesque-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/InstrumentSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/InstrumentSans-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const lora = localFont({
  src: [
    { path: "./fonts/Lora-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Lora-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-lora",
  display: "swap",
});

const crimson = localFont({
  src: [
    { path: "./fonts/CrimsonPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/CrimsonPro-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klín – Allhliða ræstingarþjónusta",
  description:
    "Klín sér um þrif fyrir heimili, fyrirtæki og stofnanir á Höfuðborgarsvæðinu og Suðurlandi. Áreiðanleg, glaðleg og fagleg ræstingarþjónusta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="is"
      className={`${boldonse.variable} ${bricolage.variable} ${instrument.variable} ${lora.variable} ${crimson.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
