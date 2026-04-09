import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhyHeikoSection } from "@/components/why-heiko-section";
import { ProgramSection } from "@/components/program-section";
import { VoiceAgentTeaser } from "@/components/voice-agent-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyHeikoSection />
      <ProgramSection />
      <VoiceAgentTeaser />
    </>
  );
}
