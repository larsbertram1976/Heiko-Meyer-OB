"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const TOTAL_VOTES = 9;

const TOPICS = [
  {
    slug: "miteinander",
    number: "01",
    label: "Miteinander & Bürgerbeteiligung",
    sub: [
      "Bürgerbeteiligung fördern",
      "Verwaltung neuorganisieren",
      "Steuerverschwendung beenden",
      "Transparenz stärken",
      "Begegnungsräume schaffen",
      "Digitalisierung der Verwaltung",
    ],
  },
  {
    slug: "sicherheit",
    number: "02",
    label: "Sicherheit & Ordnung",
    sub: [
      "Mehr Polizeipräsenz in der Innenstadt",
      "Kommunaler Ordnungsdienst – jetzt",
      "Aufsuchende Sozialarbeit stärken",
      "Klare Regeln für öffentliche Plätze",
      "Zusammenarbeit aller Akteure",
    ],
  },
  {
    slug: "wohnraum",
    number: "03",
    label: "Bezahlbarer Wohnraum",
    sub: [
      "Wohnraum über Geschäften aktivieren",
      "Digitales Bauamt: Neubau beschleunigen",
      "Bürokratie beim Bauen abbauen",
      "Sozial und fair",
    ],
  },
  {
    slug: "wirtschaft",
    number: "04",
    label: "Wirtschaft & Innenstadt",
    sub: [
      "Leerstand aktiv bekämpfen",
      "Wirtschafts-Perspektive ins Rathaus",
      "Das \"Kaufhaus Lüneburg\" stärken",
      "Wohnraum über Geschäften",
    ],
  },
  {
    slug: "bildung",
    number: "05",
    label: "Bildung & Universität",
    sub: [
      "Zusammenarbeit mit der Leuphana stärken",
      "Ganztagsschulen ausbauen",
      "Bildungspakt 2040 umsetzen",
      "Fachkräfte für Lüneburg",
    ],
  },
  {
    slug: "soziales",
    number: "06",
    label: "Soziales Lüneburg",
    sub: [
      "Bezahlbarer Wohnraum als Grundrecht",
      "Familien besser unterstützen",
      "Begegnungsräume für alle",
      "Chancengleichheit",
    ],
  },
  {
    slug: "verkehr",
    number: "07",
    label: "Verkehr & Umwelt",
    sub: [
      "Alle Verkehrsteilnehmer berücksichtigen",
      "Ausreichend Stellplätze",
      "Vier kostenfreie Park-and-Ride-Plätze",
      "Bessere Baustellenkoordination",
      "Zusammenarbeit mit dem Landkreis",
      "Umwelt und Klimaschutz",
    ],
  },
  {
    slug: "kultur",
    number: "08",
    label: "Kultur",
    sub: [
      "Kulturräume sichern und schaffen",
      "Veranstaltungen fördern",
      "Kultur für alle",
      "Lüneburgs Geschichte lebendig halten",
    ],
  },
  {
    slug: "sport",
    number: "09",
    label: "Sport",
    sub: [
      "Sportstätten sanieren und ausbauen",
      "Vereine stärken",
      "Schwimmen lernen und Breitensport",
      "Bewegung im öffentlichen Raum",
    ],
  },
];

function slugifySubtopic(label: string): string {
  return label
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ThemenprioritaetenPage() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [results, setResults] = useState<Record<string, number>>({});
  const [subResults, setSubResults] = useState<Record<string, Record<string, number>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  // Track which sub-topics have been clicked (from localStorage)
  const [clickedSubtopics, setClickedSubtopics] = useState<Record<string, string[]>>({});
  // Track which topic accordions are open
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  const usedVotes = Object.values(votes).reduce((a, b) => a + b, 0);
  const remainingVotes = TOTAL_VOTES - usedVotes;
  const totalResults = Object.values(results).reduce((a, b) => a + b, 0);

  useEffect(() => {
    fetch("/api/topic-vote")
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results ?? {});
        setSubResults(data.subResults ?? {});
      })
      .catch(() => {});

    const lastVote = localStorage.getItem("heiko-topic-vote-time");
    if (lastVote) {
      const diff = Date.now() - parseInt(lastVote);
      if (diff < 24 * 60 * 60 * 1000) setSubmitted(true);
    }

    try {
      const stored = localStorage.getItem("heiko-subtopic-votes");
      if (stored) setClickedSubtopics(JSON.parse(stored));
    } catch {
      // ignore
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

  const toggleAccordion = useCallback((slug: string) => {
    setOpenAccordions((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }, []);

  const clickSubtopic = useCallback((topicSlug: string, subLabel: string) => {
    setClickedSubtopics((prev) => {
      const existing = prev[topicSlug] ?? [];
      if (existing.includes(subLabel)) return prev; // already clicked
      const updated = { ...prev, [topicSlug]: [...existing, subLabel] };
      try {
        localStorage.setItem("heiko-subtopic-votes", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });

    // Optimistically update subResults display
    setSubResults((prev) => {
      const topicSubs = prev[topicSlug] ?? {};
      const key = slugifySubtopic(subLabel);
      return {
        ...prev,
        [topicSlug]: { ...topicSubs, [key]: (topicSubs[key] ?? 0) + 1 },
      };
    });

    // Send to API
    fetch("/api/topic-vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subVotes: { [topicSlug]: [subLabel] } }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.subResults) setSubResults(data.subResults);
      })
      .catch(() => {});
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
      if (data.subResults) setSubResults(data.subResults);
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
            Was bewegt Sie? Verteilen Sie{" "}
            <span className="font-bold text-[#58b046]">{TOTAL_VOTES} Stimmen</span> auf
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
                const isOpen = openAccordions[topic.slug] ?? false;
                const clickedSubs = clickedSubtopics[topic.slug] ?? [];

                return (
                  <div
                    key={topic.slug}
                    className={`group relative overflow-hidden rounded-sm border-2 bg-white transition-all ${
                      isActive
                        ? "border-[#1a3eaf] shadow-md"
                        : "border-transparent shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className="p-5">
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
                          {/* Sub-topics summary list */}
                          <ul className="mt-2 space-y-1">
                            {topic.sub.slice(0, 3).map((s) => (
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
                            {topic.sub.length > 3 && (
                              <li className="text-xs text-[#6b6b7b]/60">
                                +{topic.sub.length - 3} weitere Unterthemen
                              </li>
                            )}
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

                      {/* Accordion trigger */}
                      <button
                        onClick={() => toggleAccordion(topic.slug)}
                        className="mt-2 flex w-full items-center gap-1 text-[0.65rem] font-medium text-[#1a3eaf]/60 transition-colors hover:text-[#1a3eaf]"
                      >
                        <span
                          className={`inline-block transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        >
                          ▼
                        </span>
                        Unterthemen bewerten
                        {clickedSubs.length > 0 && (
                          <span className="ml-1 rounded-full bg-[#58b046]/20 px-1.5 py-0.5 text-[0.6rem] font-bold text-[#58b046]">
                            {clickedSubs.length}
                          </span>
                        )}
                      </button>
                    </div>

                    {/* Accordion content */}
                    {isOpen && (
                      <div className="border-t border-black/[0.06] bg-[#f8f9ff] px-5 pb-4 pt-3">
                        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-wider text-[#6b6b7b]">
                          Was ist Ihnen dabei am wichtigsten?
                        </p>
                        <div className="flex flex-col gap-2">
                          {topic.sub.map((s) => {
                            const isClicked = clickedSubs.includes(s);
                            return (
                              <button
                                key={s}
                                onClick={() => !isClicked && clickSubtopic(topic.slug, s)}
                                disabled={isClicked}
                                className={`flex items-center gap-2 rounded-sm px-3 py-2 text-left text-xs font-medium transition-all ${
                                  isClicked
                                    ? "bg-[#58b046]/15 text-[#58b046] cursor-default"
                                    : "bg-white text-[#1a1a2e] shadow-sm hover:bg-[#1a3eaf]/5 hover:shadow-md"
                                }`}
                              >
                                {isClicked ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3 flex-shrink-0"
                                  >
                                    <path d="M5 12l5 5L20 7" />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-3 w-3 flex-shrink-0 text-[#1a3eaf]/40"
                                  >
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                  </svg>
                                )}
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
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

          <div className="space-y-6">
            {sortedResults.map((topic, i) => {
              const pct =
                totalResults > 0
                  ? (topic.count / totalResults) * 100
                  : 0;
              const barWidth =
                maxResult > 0
                  ? (topic.count / maxResult) * 100
                  : 0;

              // Sub-topics for this topic with counts, sorted descending
              const topicSubResults = subResults[topic.slug] ?? {};
              const subEntries = topic.sub
                .map((subLabel) => ({
                  label: subLabel,
                  key: slugifySubtopic(subLabel),
                  count: topicSubResults[slugifySubtopic(subLabel)] ?? 0,
                }))
                .sort((a, b) => b.count - a.count);
              const hasSubVotes = subEntries.some((e) => e.count > 0);
              const maxSubCount = Math.max(...subEntries.map((e) => e.count), 1);

              return (
                <div key={topic.slug}>
                  <Link href={`/wahlprogramm/${topic.slug}`} className="group block">
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
                  </Link>

                  {/* Sub-topic bars – only if there are votes */}
                  {hasSubVotes && (
                    <div className="mt-2 ml-4 space-y-1.5 border-l-2 border-[#1a3eaf]/10 pl-3">
                      {subEntries
                        .filter((e) => e.count > 0)
                        .map((entry, j, arr) => {
                          const isLast = j === arr.length - 1;
                          const subBarWidth =
                            maxSubCount > 0 ? (entry.count / maxSubCount) * 100 : 0;
                          return (
                            <div key={entry.key} className="flex items-center gap-2">
                              <span className="shrink-0 text-[0.6rem] text-[#6b6b7b]/50 font-mono leading-none">
                                {isLast ? "└" : "├"}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="mb-0.5 flex items-center justify-between gap-2">
                                  <span className="truncate text-[0.65rem] text-[#6b6b7b]">
                                    {entry.label}
                                  </span>
                                  <span className="shrink-0 text-[0.6rem] tabular-nums text-[#6b6b7b]/60">
                                    {entry.count}
                                  </span>
                                </div>
                                <div className="h-1.5 overflow-hidden rounded-sm bg-[#1a3eaf]/[0.06]">
                                  <div
                                    className="h-full rounded-sm bg-gradient-to-r from-[#4a7fd4] to-[#6a9be0] transition-all duration-700 ease-out"
                                    style={{
                                      width: `${Math.max(subBarWidth, entry.count > 0 ? 5 : 0)}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
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
