import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhyHeikoTeaser } from "@/components/why-heiko-section";
import { ProgramSection } from "@/components/program-section";
import { StadtteilTeaser } from "@/components/stadtteil-teaser";
import { TermineTeaser } from "@/components/termine-teaser";
import { VoiceAgentTeaser } from "@/components/voice-agent-section";
import { SPRACHAGENT_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Heiko Meyer für Lüneburg | Unabhängig für ein Miteinander",
  description:
    "Heiko Meyer – parteiloser Oberbürgermeister-Kandidat für Lüneburg. OB-Wahl 14. September 2026. 20 Jahre Erfahrung für die Hansestadt. Gestalten statt verwalten.",
  alternates: {
    canonical: "https://meyer-lueneburg.de",
  },
  openGraph: {
    title: "Heiko Meyer für Lüneburg | Unabhängig für ein Miteinander",
    description:
      "Heiko Meyer – parteiloser OB-Kandidat für Lüneburg. OB-Wahl 14. September 2026. Gestalten statt verwalten.",
    url: "https://meyer-lueneburg.de",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyHeikoTeaser />
      <ProgramSection />
      <StadtteilTeaser />
      <TermineTeaser />
      {SPRACHAGENT_ENABLED && <VoiceAgentTeaser />}
    </>
  );
}
