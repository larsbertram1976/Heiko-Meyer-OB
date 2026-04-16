import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termine & Veranstaltungen | Heiko Meyer Lüneburg 2026",
  description:
    "Treffen Sie Heiko Meyer persönlich! Aktuelle Wahlkampftermine, Veranstaltungen und Bürgergespräche in Lüneburg und den Stadtteilen. OB-Wahl 14. September 2026.",
  keywords: [
    "Heiko Meyer Termine",
    "Wahlkampf Lüneburg 2026",
    "OB-Kandidat Lüneburg Veranstaltungen",
    "Bürgergespräch Lüneburg",
    "Heiko Meyer persönlich treffen",
    "OB-Wahl Lüneburg September 2026",
    "Lüneburg Marktplatz",
    "Veranstaltungen Lüneburg",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/termine",
  },
  openGraph: {
    title: "Termine & Veranstaltungen | Heiko Meyer Lüneburg 2026",
    description:
      "Treffen Sie Heiko Meyer persönlich! Aktuelle Wahlkampftermine in Lüneburg. OB-Wahl 14. September 2026.",
    url: "https://meyer-lueneburg.de/termine",
  },
};

export default function TermineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
