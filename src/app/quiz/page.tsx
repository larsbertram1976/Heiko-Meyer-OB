import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Heiko-Quiz: Persönlich oder Wahlprogramm?",
  description:
    "Zwei Quizzes über Heiko Meyer: Lernen Sie den Menschen kennen oder testen Sie Ihr Wissen über sein Wahlprogramm. OB-Wahl Lüneburg 13. September 2026.",
  keywords: [
    "Heiko Meyer Quiz",
    "Wahlprogramm Quiz Lüneburg",
    "OB-Kandidat Lüneburg",
    "Heiko Meyer kennenlernen",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/quiz",
  },
  openGraph: {
    title: "Heiko-Quiz: Persönlich oder Wahlprogramm?",
    description:
      "Zwei Quizzes warten auf Sie: Heiko persönlich oder sein Wahlprogramm. Welches schaffen Sie besser?",
    url: "https://meyer-lueneburg.de/quiz",
  },
};

export default function QuizHubPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-[#1a3eaf] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            Heiko-Quiz
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Welches Quiz möchten
            <br />
            <span className="text-[#58b046]">Sie machen?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Zwei Quizzes warten auf Sie. Wählen Sie selbst – oder
            spielen Sie einfach beide hintereinander.
          </p>
        </div>
      </section>

      {/* Quiz-Karten */}
      <section className="bg-[#f8f8fa] py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Quiz 1: Heiko persönlich */}
            <Link
              href="/quiz/heiko"
              className="group flex flex-col gap-4 rounded-sm border-l-4 border-[#58b046] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#58b046]/10 text-3xl">
                👤
              </div>
              <h2 className="text-2xl font-black uppercase text-[#1a1a2e]">
                Heiko persönlich
              </h2>
              <p className="text-sm leading-relaxed text-[#6b6b7b]">
                Wer ist der Mensch hinter dem Kandidaten? 11 Fragen rund
                um Heikos Leben, seine Familie und seine Lüneburg-Geschichte.
              </p>
              <ul className="space-y-1.5 text-xs text-[#6b6b7b]">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-[#58b046]"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  11 Fragen
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-[#58b046]"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Mit Augenzwinkern
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-[#58b046]"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Ca. 3 Minuten
                </li>
              </ul>
              <span className="mt-2 inline-flex items-center gap-2 self-start rounded-sm bg-[#58b046] px-5 py-2.5 text-sm font-bold text-white transition-all group-hover:bg-[#4e9e3f]">
                Spielen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m12 19 7-7-7-7" />
                </svg>
              </span>
            </Link>

            {/* Quiz 2: Wahlprogramm */}
            <Link
              href="/quiz/wahlprogramm"
              className="group flex flex-col gap-4 rounded-sm border-l-4 border-[#1a3eaf] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a3eaf]/10 text-3xl">
                📋
              </div>
              <h2 className="text-2xl font-black uppercase text-[#1a1a2e]">
                Wahlprogramm
              </h2>
              <p className="text-sm leading-relaxed text-[#6b6b7b]">
                Was hat Heiko konkret vor? 10 Fragen aus seinem
                9-Punkte-Wahlprogramm – von Sicherheit bis Sport.
              </p>
              <ul className="space-y-1.5 text-xs text-[#6b6b7b]">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-[#1a3eaf]"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  10 Fragen
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-[#1a3eaf]"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Inhaltlich, kein Bla
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-[#1a3eaf]"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Ca. 3 Minuten
                </li>
              </ul>
              <span className="mt-2 inline-flex items-center gap-2 self-start rounded-sm bg-[#1a3eaf] px-5 py-2.5 text-sm font-bold text-white transition-all group-hover:bg-[#15349a]">
                Spielen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m12 19 7-7-7-7" />
                </svg>
              </span>
            </Link>
          </div>

          <p className="mt-8 text-center text-sm text-[#6b6b7b]">
            💡 Tipp: Nach jedem Quiz können Sie direkt das andere starten!
          </p>
        </div>
      </section>
    </article>
  );
}
