"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const TOTAL_VOTES = 9;

const TOPICS = [
  {
    slug: "miteinander",
    number: "01",
    label: "Miteinander & Bürgerbeteiligung",
    sub: ["Bürger-Kompetenzteams", "Verwaltung modernisieren", "Transparenz & Digitalisierung"],
  },
  {
    slug: "sicherheit",
    number: "02",
    label: "Sicherheit & Ordnung",
    sub: ["Kommunaler Ordnungsdienst", "Mehr Polizeipräsenz Am Sande", "Aufsuchende Sozialarbeit"],
  },
  {
    slug: "wohnraum",
    number: "03",
    label: "Bezahlbarer Wohnraum",
    sub: ["Leerstand über Geschäften aktivieren", "Neubau beschleunigen", "Bürokratie abbauen"],
  },
  {
    slug: "wirtschaft",
    number: "04",
    label: "Wirtschaft & Innenstadt",
    sub: ["Leerstand-Lotse im Rathaus", "Kaufhaus Lüneburg stärken", "Gewerbetreibende unterstützen"],
  },
  {
    slug: "bildung",
    number: "05",
    label: "Bildung & Universität",
    sub: ["Gründer-Stipendium Leuphana", "Ganztagsschulen ausbauen", "Fachkräfte halten"],
  },
  {
    slug: "soziales",
    number: "06",
    label: "Soziales Lüneburg",
    sub: ["Bürgercafés in jedem Stadtteil", "Sozialarbeit stärken", "Chancengleichheit"],
  },
  {
    slug: "verkehr",
    number: "07",
    label: "Verkehr & Umwelt",
    sub: ["Baustellen-Koordinator", "Park-and-Ride-System", "Verkehrspakt mit Landkreis"],
  },
  {
    slug: "kultur",
    number: "08",
    label: "Kultur",
    sub: ["Pop-up-Galerien in leeren Läden", "Veranstaltungen fördern", "Stadtgeschichte pflegen"],
  },
  {
    slug: "sport",
    number: "09",
    label: "Sport",
    sub: ["Sportstätten sanieren", "Vereins-Sprechstunde", "Online-Hallenbelegung"],
  },
];

export default function ThemenprioritaetenPage() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [results, setResults] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const usedVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  const remainingVotes = TOTAL_VOTES - usedVotes;
  const totalResults = Object.values(results).reduce((a, b) => a + b, 0);

  useEffect(() => {
    fetch("/api/topic-vote")
      .then((res) => res.json())
      .then((data) => setResults(data.results))
      .catch(() => {});

    const lastVote = localStorage.getItem("heiko-topic-vote-time");
    if (lastVote) {
      const diff = Date.now() - parseInt(lastVote);
      if (diff < 24 * 60 * 60 * 1000) setSubmitted(true);
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

  const sortedResults = TOPICS.map((t) => ({
    ...t,
    count: results[t.slug] ?? 0,
  })).sort((a, b) => b.count - a.count);

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a3eaf] py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            Live-Stimmungsbild
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Themenpuls Lüneburg
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            Was bewegt Sie? Verteilen Sie <span className="font-bold text-[#58b046]">{TOTAL_VOTES} Stimmen</span> auf
            die Themen, die Ihnen am wichtigsten sind – und sehen Sie live, was
            ganz Lüneburg bewegt.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
        {/* ===== VOTING UI ===== */}
        {!submitted && (
          <>
            {/* Token Counter */}
            <div className="mb-6 flex items-center justify-between rounded-sm border-l-4 border-[#58b046] bg-white p-5 shadow-sm">
              <div>
                <p className="text-sm font-bold text-[#1a1a2e]">
                  Noch <span className="text-[#1a3eaf]">{remainingVotes}</span> von {TOTAL_VOTES} Stimmen übrig
                </p>
                <p className="mt-0.5 text-xs text-[#6b6b7b]">
                  Verteilen Sie frei – alle für ein Thema oder auf mehrere
                </p>
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_VOTES }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-4 rounded-full border-2 transition-all duration-200 ${
                      i < usedVotes
                        ? "border-[#58b046] bg-[#58b046] scale-110"
                        : "border-[#1a3eaf]/20 bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Topic Cards */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              {TOPICS.map((topic) => {
                const count = votes[topic.slug] ?? 0;
                const isActive = count > 0;

                return (
                  <div
                    key={topic.slug}
                    className={`group relative overflow-hidden rounded-sm border-2 bg-white p-5 transition-all ${
                      isActive
                        ? "border-[#1a3eaf] shadow-md"
                        : "border-transparent shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Vote count badge */}
                    {isActive && (
                      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a3eaf] text-sm font-black text-white">
                        {count}
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[#1a3eaf] text-sm font-black italic text-white">
                        {topic.number}
                      </span>
                      <div className="flex-1 pr-8">
                        <h3 className="text-sm font-bold text-[#1a1a2e]">
                          {topic.label}
                        </h3>
                        {/* Sub-topics */}
                        <ul className="mt-2 space-y-1">
                          {topic.sub.map((s) => (
                            <li
                              key={s}
                              className="flex items-center gap-1.5 text-xs text-[#6b6b7b]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-2.5 w-2.5 flex-shrink-0 text-[#58b046]"
                              >
                                <path d="M5 12l5 5L20 7" />
                              </svg>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="mt-4 flex items-center gap-2 border-t border-black/[0.06] pt-3">
                      <button
                        onClick={() => removeVote(topic.slug)}
                        disabled={count <= 0}
                        className="flex h-9 w-9 items-center justify-center rounded-sm bg-black/5 text-base font-bold text-[#6b6b7b] transition-colors hover:bg-black/10 disabled:opacity-20"
                      >
                        −
                      </button>
                      <button
                        onClick={() => addVote(topic.slug)}
                        disabled={remainingVotes <= 0}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-sm bg-[#1a3eaf]/10 py-2 text-xs font-semibold text-[#1a3eaf] transition-colors hover:bg-[#1a3eaf]/20 disabled:opacity-30"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </svg>
                        Stimme geben
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Submit */}
            <div className="mb-12 flex items-center justify-center gap-3">
              <button
                onClick={() => setVotes({})}
                disabled={usedVotes === 0}
                className="rounded-sm border-2 border-black/10 px-6 py-3 text-sm font-semibold text-[#6b6b7b] transition-colors hover:bg-black/5 disabled:opacity-30"
              >
                Zurücksetzen
              </button>
              <button
                onClick={submitVotes}
                disabled={usedVotes < 1 || loading}
                className="rounded-sm bg-[#58b046] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#58b046]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
              >
                {loading
                  ? "Wird gespeichert..."
                  : `${usedVotes} Stimme${usedVotes !== 1 ? "n" : ""} abgeben`}
              </button>
            </div>
          </>
        )}

        {/* ===== SUBMITTED STATE ===== */}
        {submitted && (
          <div className="mb-8 flex items-center justify-between rounded-sm border-l-4 border-[#58b046] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#58b046]/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[#58b046]">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1a2e]">
                  Danke für Ihre Einschätzung!
                </p>
                <p className="text-xs text-[#6b6b7b]">
                  So sieht der Themenpuls der Lüneburger aus:
                </p>
              </div>
            </div>
            <button
              onClick={newRound}
              className="rounded-sm border border-[#1a3eaf]/20 px-4 py-2 text-xs font-semibold text-[#1a3eaf] transition-colors hover:bg-[#1a3eaf]/5"
            >
              Neu abstimmen
            </button>
          </div>
        )}

        {/* ===== RESULTS ===== */}
        <div className="rounded-sm border-l-4 border-[#1a3eaf] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black uppercase text-[#1a3eaf]">
                Live-Ergebnis
              </h2>
              <p className="mt-0.5 text-xs text-[#6b6b7b]">
                {totalResults.toLocaleString("de-DE")} Stimmen aus ganz Lüneburg
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#58b046]/10 px-3 py-1 text-xs font-medium text-[#58b046]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
              Live
            </div>
          </div>

          <div className="space-y-5">
            {sortedResults.map((topic, i) => {
              const pct =
                totalResults > 0
                  ? (topic.count / totalResults) * 100
                  : 0;
              const barWidth =
                maxResult > 0
                  ? (topic.count / maxResult) * 100
                  : 0;

              return (
                <Link
                  key={topic.slug}
                  href={`/wahlprogramm/${topic.slug}`}
                  className="group block"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center bg-[#1a3eaf] text-[0.65rem] font-black italic text-white">
                        {topic.number}
                      </span>
                      {i === 0 && totalResults > 0 && (
                        <span className="rounded-sm bg-[#58b046] px-1.5 py-0.5 text-[0.6rem] font-bold text-white">
                          TOP
                        </span>
                      )}
                      <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#1a3eaf]">
                        {topic.label}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black tabular-nums text-[#1a3eaf]">
                        {pct > 0 ? pct.toFixed(1) : "0"}%
                      </span>
                      <span className="text-xs tabular-nums text-[#6b6b7b]">
                        ({topic.count.toLocaleString("de-DE")})
                      </span>
                    </div>
                  </div>
                  <div className="h-5 overflow-hidden rounded-sm bg-[#1a3eaf]/[0.06]">
                    <div
                      className="flex h-full items-center rounded-sm bg-gradient-to-r from-[#1a3eaf] to-[#2551c7] transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.max(barWidth, topic.count > 0 ? 3 : 0)}%`,
                      }}
                    />
                  </div>
                  {/* Sub-topics under bar */}
                  <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                    {topic.sub.map((s) => (
                      <span key={s} className="text-[0.65rem] text-[#6b6b7b]/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[0.68rem] text-[#6b6b7b]/40">
          Unverbindliche Themen-Umfrage · Keine offizielle Wahl · Ergebnisse
          zeigen Tendenzen, was den Lüneburgern am wichtigsten ist
        </p>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-[#6b6b7b] hover:text-[#1a3eaf]">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </article>
  );
}
