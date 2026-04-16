import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitmachen | Heiko Meyer für Lüneburg",
  description:
    "Unterstützen Sie Heiko Meyer bei der OB-Wahl 2026 in Lüneburg. Ehrenamtlich helfen, Flyer verteilen, Infostand betreuen oder einfach informiert bleiben – so können Sie mitmachen.",
  keywords: [
    "Mitmachen Heiko Meyer",
    "Wahlkampf helfen Lüneburg",
    "Ehrenamt OB-Wahl Lüneburg 2026",
    "Heiko Meyer unterstützen",
    "Freiwillige Lüneburg Wahl",
    "OB-Wahl Lüneburg September 2026",
    "Bürgerengagement Lüneburg",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/mitmachen",
  },
  openGraph: {
    title: "Mitmachen | Heiko Meyer für Lüneburg",
    description:
      "Unterstützen Sie Heiko Meyer bei der OB-Wahl 2026 in Lüneburg. Helfen Sie mit – vor Ort oder online.",
    url: "https://meyer-lueneburg.de/mitmachen",
  },
};

export default function MitmachenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
