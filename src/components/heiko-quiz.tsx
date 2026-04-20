"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { QuizQuestion } from "@/lib/quiz-data";

type Phase = "intro" | "question" | "result";
type Variant = "heiko" | "wahlprogramm";

interface HeikoQuizProps {
  questions: QuizQuestion[];
  variant: Variant;
}

const VARIANT_CONFIG = {
  heiko: {
    introTitle1: "Wie gut kennen",
    introTitle2: "Sie Heiko?",
    introText:
      "Fragen rund um den Menschen Heiko Meyer. Drei Antwortmöglichkeiten je Frage. Eine ist richtig.",
    introBadge: "Heiko persönlich",
    otherQuiz: {
      href: "/quiz/wahlprogramm",
      label: "Wahlprogramm-Quiz starten",
      teaser: "Lust zu testen, wie gut Sie Heikos Wahlprogramm kennen?",
    },
    ratings: {
      top: {
        emoji: "🏆",
        title: "Heiko-Kenner!",
        text: "Wahnsinn – Sie wissen mehr über Heiko als manche Lokalreporter:innen. Vielleicht treffen Sie ihn ja persönlich auf einer Veranstaltung?",
      },
      good: {
        emoji: "🎯",
        title: "Solide Basis!",
        text: "Sie kennen Heiko ganz gut – aber im Wahlprogramm gibt es noch einiges zu entdecken.",
      },
      ok: {
        emoji: "📚",
        title: "Da geht noch was!",
        text: "Sie sind auf dem richtigen Weg. Werfen Sie einen Blick ins Wahlprogramm – dann klappt es beim nächsten Mal sicher besser.",
      },
      low: {
        emoji: "👋",
        title: "Erstmal hallo!",
        text: "Sie haben Heiko gerade kennengelernt – schön, dass Sie da sind. Schauen Sie sich um, das Wahlprogramm wartet auf Sie.",
      },
    },
  },
  wahlprogramm: {
    introTitle1: "Kennen Sie Heikos",
    introTitle2: "Wahlprogramm?",
    introText:
      "Fragen rund um Heikos konkrete Vorhaben für Lüneburg. Drei Antworten je Frage – eine ist richtig.",
    introBadge: "Wahlprogramm-Quiz",
    otherQuiz: {
      href: "/quiz/heiko",
      label: "Persönliches Quiz starten",
      teaser: "Lust zu testen, wie gut Sie Heiko als Mensch kennen?",
    },
    ratings: {
      top: {
        emoji: "🏆",
        title: "Programm-Profi!",
        text: "Sie kennen Heikos Vorhaben nahezu perfekt. Erzählen Sie es weiter – viele Lüneburger:innen wissen noch nicht, was Heiko vorhat.",
      },
      good: {
        emoji: "🎯",
        title: "Solides Wissen!",
        text: "Sie kennen die wichtigsten Pläne. Im Wahlprogramm finden Sie noch viele weitere Details.",
      },
      ok: {
        emoji: "📚",
        title: "Da geht noch was!",
        text: "Schauen Sie sich Heikos Wahlprogramm an – die 9 Punkte sind kompakt geschrieben und schnell gelesen.",
      },
      low: {
        emoji: "👋",
        title: "Hallo!",
        text: "Heikos Wahlprogramm wartet auf Sie – 9 Themen, 42 konkrete Vorhaben. Reinschauen lohnt sich.",
      },
    },
  },
} as const;

function getRating(score: number, total: number, variant: Variant) {
  const percent = (score / total) * 100;
  const r = VARIANT_CONFIG[variant].ratings;
  if (percent >= 90) return r.top;
  if (percent >= 60) return r.good;
  if (percent >= 30) return r.ok;
  return r.low;
}

export function HeikoQuiz({ questions, variant }: HeikoQuizProps) {
  const config = VARIANT_CONFIG[variant];
  const TOTAL = questions.length;

  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [shareUrl, setShareUrl] = useState("");
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedIndex !== null;
  const isCorrect =
    isAnswered && selectedIndex === currentQuestion?.correctIndex;

  function handleAnswer(index: number) {
    if (isAnswered) return;
    setSelectedIndex(index);
    if (index === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= TOTAL) {
      setPhase("result");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
    }
  }

  function handleStart() {
    setPhase("question");
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
  }

  function handleRestart() {
    handleStart();
  }

  async function handleShare() {
    const text = `Mein Score beim ${variant === "heiko" ? "Heiko" : "Wahlprogramm"}-Quiz: ${score}/${TOTAL}! Wie viele schafft ihr? ${shareUrl}`;
    try {
      await navigator.clipboard.writeText(text);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  const rating = getRating(score, TOTAL, variant);
  const whatsappText = encodeURIComponent(
    `Mein Score beim ${variant === "heiko" ? "Heiko" : "Wahlprogramm"}-Quiz: ${score}/${TOTAL}! Wie viele schafft ihr? ${shareUrl}`
  );

  // ── INTRO ────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-2xl rounded-sm border-l-4 border-[#58b046] bg-white p-8 shadow-sm md:p-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#58b046]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#58b046]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
          {config.introBadge}
        </div>
        <h2 className="text-3xl font-black uppercase text-[#1a1a2e] md:text-4xl">
          {config.introTitle1}
          <br />
          <span className="text-[#1a3eaf]">{config.introTitle2}</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#6b6b7b] md:text-lg">
          {TOTAL} Fragen. {config.introText}
        </p>
        <button
          onClick={handleStart}
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#58b046] px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#4e9e3f] hover:shadow-xl"
        >
          Quiz starten
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m12 19 7-7-7-7" />
          </svg>
        </button>
      </div>
    );
  }

  // ── RESULT ──────────────────────────────────────────────
  if (phase === "result") {
    const percent = Math.round((score / TOTAL) * 100);
    return (
      <div className="mx-auto max-w-2xl rounded-sm border-l-4 border-[#58b046] bg-white p-8 shadow-sm md:p-12">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#6b6b7b]">
          Dein Ergebnis
        </p>
        <div className="mt-6 flex flex-col items-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#58b046] bg-[#58b046]/5 text-4xl font-black text-[#1a3eaf]">
            {score}/{TOTAL}
          </div>
          <p className="mt-2 text-sm text-[#6b6b7b]">
            ({percent}% richtig)
          </p>
        </div>

        <div className="mt-8 rounded-sm bg-[#f8f8fa] p-6 text-center">
          <p className="text-4xl">{rating.emoji}</p>
          <p className="mt-2 text-xl font-black text-[#1a1a2e]">
            {rating.title}
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#6b6b7b]">
            {rating.text}
          </p>
        </div>

        {/* Cross-Quiz CTA */}
        <div className="mt-8 rounded-sm border-2 border-[#1a3eaf]/15 bg-[#1a3eaf]/5 p-5 text-center">
          <p className="text-sm text-[#1a1a2e]">
            {config.otherQuiz.teaser}
          </p>
          <Link
            href={config.otherQuiz.href}
            className="mt-3 inline-flex items-center gap-2 rounded-sm bg-[#1a3eaf] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#15349a]"
          >
            {config.otherQuiz.label}
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
          </Link>
        </div>

        {/* Share */}
        <div className="mt-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-[#6b6b7b]">
            Ergebnis teilen
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={`https://wa.me/?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Facebook
            </a>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-sm bg-[#1a3eaf] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {shareCopied ? "Kopiert!" : "Link kopieren"}
            </button>
          </div>
        </div>

        {/* CTAs + Restart */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/wahlprogramm"
            className="inline-flex items-center gap-2 rounded-sm bg-[#1a3eaf] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#15349a]"
          >
            Wahlprogramm ansehen
          </Link>
          <Link
            href="/termine"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a3eaf] px-6 py-3 text-sm font-bold text-[#1a3eaf] transition-colors hover:bg-[#1a3eaf] hover:text-white"
          >
            Heiko persönlich treffen
          </Link>
        </div>
        <button
          onClick={handleRestart}
          className="mx-auto mt-6 block text-sm text-[#6b6b7b] underline underline-offset-4 hover:text-[#1a3eaf]"
        >
          Nochmal spielen
        </button>
      </div>
    );
  }

  // ── QUESTION ────────────────────────────────────────────
  const progressPercent = ((currentIndex + 1) / TOTAL) * 100;

  return (
    <div className="mx-auto max-w-2xl rounded-sm border-l-4 border-[#58b046] bg-white p-6 shadow-sm md:p-10">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#6b6b7b]">
          <span>
            Frage {currentIndex + 1} von {TOTAL}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-[#1a3eaf]/10">
          <div
            className="h-1.5 rounded-full bg-[#58b046] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl font-black leading-snug text-[#1a1a2e] md:text-2xl">
        {currentQuestion.question}
      </h2>

      {/* Answers */}
      <div className="mt-6 space-y-3">
        {currentQuestion.answers.map((answer, i) => {
          const isSelected = selectedIndex === i;
          const isThisCorrect = i === currentQuestion.correctIndex;
          let style =
            "border-2 border-[#1a3eaf]/15 bg-white text-[#1a1a2e] hover:border-[#1a3eaf] hover:bg-[#1a3eaf]/5";

          if (isAnswered) {
            if (isThisCorrect) {
              style = "border-2 border-[#58b046] bg-[#58b046]/10 text-[#1a1a2e]";
            } else if (isSelected) {
              style = "border-2 border-red-400 bg-red-50 text-[#1a1a2e]";
            } else {
              style = "border-2 border-[#1a3eaf]/10 bg-white text-[#6b6b7b] opacity-60";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={isAnswered}
              className={`flex w-full items-center justify-between rounded-sm px-5 py-4 text-left text-base font-semibold transition-all ${style} ${!isAnswered ? "cursor-pointer" : "cursor-default"}`}
            >
              <span>{answer}</span>
              {isAnswered && isThisCorrect && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 flex-shrink-0 text-[#58b046]"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
              {isAnswered && isSelected && !isThisCorrect && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 flex-shrink-0 text-red-500"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div
          className={`mt-6 rounded-sm border-l-4 p-4 ${isCorrect ? "border-[#58b046] bg-[#58b046]/5" : "border-[#1a3eaf] bg-[#1a3eaf]/5"}`}
        >
          <p className="text-sm font-bold uppercase tracking-wider">
            {isCorrect ? (
              <span className="text-[#58b046]">✅ Richtig!</span>
            ) : (
              <span className="text-[#1a3eaf]">💡 Knapp daneben</span>
            )}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#2c2c3a]">
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      {/* Next button */}
      {isAnswered && (
        <button
          onClick={handleNext}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#58b046] px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#4e9e3f]"
        >
          {currentIndex + 1 >= TOTAL ? "Ergebnis ansehen" : "Nächste Frage"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m12 19 7-7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}
