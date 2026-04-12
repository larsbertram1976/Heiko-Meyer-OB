import type { Metadata } from "next";
import { StadtteilCheck } from "@/components/stadtteil-check";

export const metadata: Metadata = {
  title: "Stadtteil-Check Lüneburg | Heiko Meyer",
  description:
    "Interaktive Karte der Lüneburger Stadtteile: Welche Probleme bewegen Ihren Stadtteil und wie will Heiko Meyer sie lösen? OB-Wahl Lüneburg 14. September 2026.",
  keywords: [
    "Stadtteile Lüneburg",
    "Kaltenmoor",
    "Altstadt Lüneburg",
    "Weststadt Lüneburg",
    "Rotes Feld Lüneburg",
    "Heiko Meyer Stadtteile",
    "Lüneburg Karte",
    "Stadtteil-Check",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/stadtteile",
  },
  openGraph: {
    title: "Stadtteil-Check Lüneburg | Heiko Meyer",
    description:
      "Interaktive Karte der Lüneburger Stadtteile mit Problemen und Heikos Lösungen.",
    url: "https://meyer-lueneburg.de/stadtteile",
  },
};

export default function StadtteilePage() {
  return <StadtteilCheck />;
}
