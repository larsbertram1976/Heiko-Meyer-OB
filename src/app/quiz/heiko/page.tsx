import type { Metadata } from "next";
import { HeikoQuiz } from "@/components/heiko-quiz";
import { heikoQuestions } from "@/lib/quiz-data";

export const metadata: Metadata = {
  title: "Heiko persönlich – Wie gut kennen Sie Heiko Meyer?",
  description:
    "Testen Sie Ihr Wissen über Heiko Meyer als Mensch. 11 Fragen rund um Person, Familie und Lüneburg-Geschichte. OB-Wahl 13. September 2026.",
  keywords: [
    "Heiko Meyer Quiz",
    "Heiko Meyer kennenlernen",
    "OB-Kandidat Lüneburg",
    "Lüneburg Quiz",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/quiz/heiko",
  },
  openGraph: {
    title: "Heiko persönlich – Wie gut kennen Sie Heiko Meyer?",
    description:
      "11 Fragen über Heiko Meyer als Mensch. Wer von Ihnen kennt ihn am besten?",
    url: "https://meyer-lueneburg.de/quiz/heiko",
  },
};

export default function HeikoQuizPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-[#1a3eaf] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            Heiko persönlich
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Wie gut kennen Sie
            <br />
            <span className="text-[#58b046]">Heiko Meyer?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Testen Sie Ihr Wissen über Lüneburgs unabhängigen
            OB-Kandidaten – mit Augenzwinkern und ein paar überraschenden
            Fakten.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-[#f8f8fa] py-12 md:py-20">
        <div className="px-4 md:px-8">
          <HeikoQuiz questions={heikoQuestions} variant="heiko" />
        </div>
      </section>
    </article>
  );
}
