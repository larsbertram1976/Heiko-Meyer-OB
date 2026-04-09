import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Themenpuls Lüneburg | Was bewegt Sie? – Heiko Meyer",
  description:
    "Was ist Ihnen wichtig? Stimmen Sie ab, welche Themen in Lüneburg Priorität haben. Live-Ergebnis aus ganz Lüneburg. Mitmachen beim interaktiven Themenpuls der OB-Wahl 2026.",
  keywords: [
    "Themenpuls Lüneburg",
    "Lüneburg abstimmen",
    "OB-Wahl Lüneburg Themen",
    "Bürgerbefragung Lüneburg",
    "Heiko Meyer Themen",
    "Kommunalwahl Lüneburg 2026 Themen",
    "Lüneburg Wahlthemen",
    "Bürgerbeteiligung Lüneburg",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/themenprioritaeten",
  },
  openGraph: {
    title: "Themenpuls Lüneburg | Was bewegt Sie? – Heiko Meyer",
    description:
      "Was ist Ihnen wichtig? Stimmen Sie ab und sehen Sie live, was ganz Lüneburg bewegt. OB-Wahl 2026.",
    url: "https://meyer-lueneburg.de/themenprioritaeten",
  },
};

export default function ThemenprioritaetenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
