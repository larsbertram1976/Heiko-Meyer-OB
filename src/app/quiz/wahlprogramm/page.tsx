import type { Metadata } from "next";
import { HeikoQuiz } from "@/components/heiko-quiz";
import { programmQuestions } from "@/lib/quiz-data";

export const metadata: Metadata = {
  title: "Wahlprogramm-Quiz – Was hat Heiko Meyer konkret vor?",
  description:
    "10 Fragen aus Heiko Meyers 9-Punkte-Wahlprogramm. Testen Sie, wie gut Sie seine Pläne für Lüneburg kennen. OB-Wahl 13. September 2026.",
  keywords: [
    "Wahlprogramm Quiz Lüneburg",
    "Heiko Meyer Wahlprogramm",
    "OB-Wahl Lüneburg 2026",
    "Wahlprogramm testen",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/quiz/wahlprogramm",
  },
  openGraph: {
    title: "Wahlprogramm-Quiz – Was hat Heiko Meyer konkret vor?",
    description:
      "10 Fragen aus Heiko Meyers 9-Punkte-Wahlprogramm. Wie viele schaffen Sie?",
    url: "https://meyer-lueneburg.de/quiz/wahlprogramm",
  },
};

export default function WahlprogrammQuizPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-[#1a3eaf] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            Wahlprogramm-Quiz
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Kennen Sie Heikos
            <br />
            <span className="text-[#58b046]">Wahlprogramm?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
            10 Fragen rund um Heikos konkrete Vorhaben für Lüneburg –
            von Sicherheit über Wohnen bis zum Sport.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-[#f8f8fa] py-12 md:py-20">
        <div className="px-4 md:px-8">
          <HeikoQuiz
            questions={programmQuestions}
            variant="wahlprogramm"
          />
        </div>
      </section>
    </article>
  );
}
