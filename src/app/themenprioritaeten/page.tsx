"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const TOTAL_VOTES = 9;

const TOPICS = [
  { slug: "miteinander", number: "01", label: "Miteinander & Bürgerbeteiligung", color: "#1a3eaf" },
  { slug: "sicherheit", number: "02", label: "Sicherheit & Ordnung", color: "#c0392b" },
  { slug: "wohnraum", number: "03", label: "Bezahlbarer Wohnraum", color: "#e67e22" },
  { slug: "wirtschaft", number: "04", label: "Wirtschaft & Innenstadt", color: "#2980b9" },
  { slug: "bildung", number: "05", label: "Bildung & Universität", color: "#8e44ad" },
  { slug: "soziales", number: "06", label: "Soziales Lüneburg", color: "#e74c3c" },
  { slug: "verkehr", number: "07", label: "Verkehr & Umwelt", color: "#16a085" },
  { slug: "kultur", number: "08", label: "Kultur", color: "#d35400" },
  { slug: "sport", number: "09", label: "Sport", color: "#27ae60" },
];

export default function ThemenprioritaetenPage() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [results, setResults] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const usedVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  const remainingVotes = TOTAL_VOTES - usedVotes;
  const totalResults = Object.values(results).reduce((a, b) => a + b, 0);

  // Load results
  useEffect(() => {
    fetch("/api/topic-vote")
      .then((res) => res.json())
      .then((data) => setResults(data.results))
      .catch(() => {});

    // Check cooldown (24h)
    const lastVote = localStorage.getItem("heiko-topic-vote-time");
    if (lastVote) {
      const diff = Date.now() - parseInt(lastVote);
      if (diff < 24 * 60 * 60 * 1000) {
        setSubmitted(true);
      }
    }
  }, []);

  const addVote = useCallback(
    (slug: string) => {
      if (remainingVotes <= 0) return;
      setVotes((prev) => ({ ...prev, [slug]: (prev[slug] ?? 0) + 1 }));
    },
    [remainingVotes]
  );

  const removeVote = useCallback((slug: string) => {
    setVotes((prev) => {
      const current = prev[slug] ?? 0;
      if (current <= 0) return prev;
      return { ...prev, [slug]: current - 1 };
    });
  }, []);

  const resetVotes = useCallback(() => {
    setVotes({});
  }, []);

  const submitVotes = useCallback(async () => {
    if (usedVotes < 1 || loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/topic-vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ votes }),
      });
      const data = await res.json();
      if (data.results) setResults(data.results);
      setSubmitted(true);
      localStorage.setItem("heiko-topic-vote-time", Date.now().toString());
    } catch {
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }, [votes, usedVotes, loading]);

  const newRound = useCallback(() => {
    setVotes({});
    setSubmitted(false);
    localStorage.removeItem("heiko-topic-vote-time");
  }, []);

  const maxResult = Math.max(...Object.values(results), 1);

  return (
    <article className="min-h-screen bg-[#f8f8fa]">
      {/* Hero */}
      <section className="bg-[#1a3eaf] py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            Ihre Meinung zählt
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Themen-Prioritäten
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            Was ist Ihnen am wichtigsten? Verteilen Sie {TOTAL_VOTES} Stimmen
            auf die Themen, die Ihnen am Herzen liegen.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
        {/* Vote Tokens */}
        {!submitted && (
          <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#1a3eaf]">
                  Ihre Stimmen
                </p>
                <p className="mt-1 text-xs text-[#6b6b7b]">
                  Tippen Sie auf ein Thema, um eine Stimme zu vergeben
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: TOTAL_VOTES }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-3 rounded-full transition-all duration-200 ${
                        i < usedVotes
                          ? "bg-[#58b046] scale-110"
                          : "bg-black/10"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-black tabular-nums text-[#1a3eaf]">
                  {remainingVotes}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Topic Cards for Voting */}
        {!submitted && (
          <div className="mb-8 space-y-3">
            {TOPICS.map((topic) => {
              const count = votes[topic.slug] ?? 0;
              return (
                <div
                  key={topic.slug}
                  className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  {/* Topic info */}
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-sm font-black text-white"
                    style={{ backgroundColor: topic.color }}
                  >
                    {topic.number}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-[#1a1a2e] md:text-base">
                    {topic.label}
                  </span>

                  {/* Vote controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeVote(topic.slug)}
                      disabled={count <= 0}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-lg font-bold text-[#6b6b7b] transition-colors hover:bg-black/10 disabled:opacity-30"
                    >
                      −
                    </button>
                    <span className={`w-6 text-center text-lg font-black tabular-nums ${count > 0 ? "text-[#1a3eaf]" : "text-black/20"}`}>
                      {count}
                    </span>
                    <button
                      onClick={() => addVote(topic.slug)}
                      disabled={remainingVotes <= 0}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a3eaf] text-lg font-bold text-white transition-colors hover:bg-[#15349a] disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Submit / Reset Buttons */}
        {!submitted && (
          <div className="mb-12 flex items-center justify-center gap-3">
            <button
              onClick={resetVotes}
              disabled={usedVotes === 0}
              className="rounded-xl border border-black/10 px-6 py-3 text-sm font-semibold text-[#6b6b7b] transition-colors hover:bg-black/5 disabled:opacity-30"
            >
              Zurücksetzen
            </button>
            <button
              onClick={submitVotes}
              disabled={usedVotes < 1 || loading}
              className="rounded-xl bg-[#58b046] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#58b046]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
            >
              {loading ? "Wird gespeichert..." : `${usedVotes} Stimme${usedVotes !== 1 ? "n" : ""} abgeben`}
            </button>
          </div>
        )}

        {/* Thank you */}
        {submitted && (
          <div className="mb-8 rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#58b046]/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#58b046]">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <p className="text-lg font-bold text-[#1a1a2e]">Danke für Ihre Einschätzung!</p>
            <p className="mt-1 text-sm text-[#6b6b7b]">
              Hier sehen Sie, was den Lüneburgern am wichtigsten ist:
            </p>
            <button
              onClick={newRound}
              className="mt-4 text-xs font-semibold text-[#1a3eaf] underline-offset-2 hover:underline"
            >
              Neue Abstimmung starten
            </button>
          </div>
        )}

        {/* Results Bar Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#1a3eaf]">
                Live-Ergebnis
              </p>
              <p className="mt-1 text-xs text-[#6b6b7b]">
                {totalResults} Stimmen insgesamt
              </p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58b046]/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#58b046]" />
            </div>
          </div>

          <div className="space-y-4">
            {TOPICS
              .map((topic) => ({
                ...topic,
                count: results[topic.slug] ?? 0,
              }))
              .sort((a, b) => b.count - a.count)
              .map((topic, i) => {
                const pct = totalResults > 0 ? (topic.count / totalResults) * 100 : 0;
                const barWidth = maxResult > 0 ? (topic.count / maxResult) * 100 : 0;

                return (
                  <Link
                    key={topic.slug}
                    href={`/wahlprogramm/${topic.slug}`}
                    className="group block"
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {i === 0 && totalResults > 0 && (
                          <span className="rounded bg-[#58b046]/10 px-1.5 py-0.5 text-[0.6rem] font-bold text-[#58b046]">
                            #1
                          </span>
                        )}
                        <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#1a3eaf]">
                          {topic.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs tabular-nums text-[#6b6b7b]">
                          {pct.toFixed(1)}%
                        </span>
                        <span className="text-xs font-bold tabular-nums text-[#1a1a2e]">
                          {topic.count}
                        </span>
                      </div>
                    </div>
                    <div className="h-6 overflow-hidden rounded-full bg-black/[0.04]">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${Math.max(barWidth, topic.count > 0 ? 2 : 0)}%`,
                          backgroundColor: topic.color,
                        }}
                      />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-[0.68rem] text-[#6b6b7b]/50">
          Unverbindliche Themen-Umfrage. Keine offizielle Wahl. Ergebnisse
          dienen der Einschätzung, welche Themen den Lüneburgern am wichtigsten
          sind.
        </p>

        {/* Back */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-[#6b6b7b] hover:text-[#1a3eaf]"
          >
            &larr; Zurück zur Startseite
          </Link>
        </div>
      </div>
    </article>
  );
}
