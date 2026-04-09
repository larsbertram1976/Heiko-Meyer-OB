import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProgramSection } from "@/components/program-section";
import { PrevoteSection } from "@/components/prevote-section";
import { VoiceAgentTeaser } from "@/components/voice-agent-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <PrevoteSection />
      <VoiceAgentTeaser />
    </>
  );
}
