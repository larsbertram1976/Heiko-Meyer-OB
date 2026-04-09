import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heiko Digital – KI-Sprachassistent | Heiko Meyer Lüneburg",
  description:
    "Sprechen Sie direkt mit Heiko Meyer – per KI-Sprachassistent, rund um die Uhr. Stellen Sie Fragen zum Wahlprogramm, zur OB-Wahl 2026 in Lüneburg und zu Heikos Positionen. Parteilos und bürgernah.",
  keywords: [
    "Heiko Digital",
    "KI Sprachassistent Lüneburg",
    "Heiko Meyer sprechen",
    "OB-Kandidat Lüneburg fragen",
    "Heiko Meyer Wahlprogramm fragen",
    "Sprachagent Lüneburg",
    "OB-Wahl Lüneburg 2026",
    "parteilos Lüneburg",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/sprachagent",
  },
  openGraph: {
    title: "Heiko Digital – KI-Sprachassistent | Heiko Meyer Lüneburg",
    description:
      "Sprechen Sie direkt mit Heiko Meyer per KI-Assistent. Fragen zum Wahlprogramm, zur OB-Wahl 2026 in Lüneburg und mehr.",
    url: "https://meyer-lueneburg.de/sprachagent",
  },
};

export default function SprachagentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
