import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhyHeikoTeaser } from "@/components/why-heiko-section";
import { ProgramSection } from "@/components/program-section";
import { TermineTeaser } from "@/components/termine-teaser";
import { VoiceAgentTeaser } from "@/components/voice-agent-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyHeikoTeaser />
      <ProgramSection />
      <TermineTeaser />
      <VoiceAgentTeaser />
    </>
  );
}
