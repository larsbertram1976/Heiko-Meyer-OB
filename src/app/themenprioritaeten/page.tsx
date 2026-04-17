"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const MAX_SELECTIONS = 10;

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
      'Das "Kaufhaus Lüneburg" stärken',
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

// Flat list of all sub-topics with their parent topic info
const ALL_SUBTOPICS = TOPICS.flatMap((topic) =>
  topic.sub.map((label) => ({
    id: `${topic.slug}:${slugifySubtopic(label)}`,
    label,
    topicSlug: topic.slug,
    topicLabel: topic.label,
    topicNumber: topic.number,
  }))
);

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

// Topic color palette (one per topic)
const TOPIC_COLORS: Record<string, string> = {
  miteinander: "#1a3eaf",
  sicherheit: "#2c3e80",
  wohnraum: "#3366b8",
  wirtschaft: "#1a7a8a",
  bildung: "#4a8fd4",
  soziales: "#58b046",
  verkehr: "#2a8a6a",
  kultur: "#5a5aaf",
  sport: "#3a9a5a",
};

export default function ThemenprioritaetenPage() {
  // selected: Set of sub-topic IDs (topicSlug:subSlug)
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"top10" | "themen">("top10");
  const [showAllResults, setShowAllResults] = useState(false);

  // Results from API
  const [subResults, setSubResults] = useState<Record<string, Record<string, number>>>({});

  const usedCount = selected.size;
  const remaining = MAX_SELECTIONS - usedCount;
  const maxReached = usedCount >= MAX_SELECTIONS;

  useEffect(() => {
    // Fetch current results
    fetch("/api/topic-vote")
      .then((res) => res.json())
      .then((data) => {
        setSubResults(data.subResults ?? {});
      })
      .catch(() => {});

    // Check cooldown
    const lastVote = localStorage.getItem("heiko-top10-time");
    if (lastVote) {
      const diff = Date.now() - parseInt(lastVote);
      if (diff < 24 * 60 * 60 * 1000) setSubmitted(true);
    }
  }, []);

  const toggleSubtopic = useCallback(
    (id: string) => {
      setSelected((prev) => {
        if (prev.has(id)) {
          const next = new Set(prev);
          next.delete(id);
          return next;
        }
        if (prev.size >= MAX_SELECTIONS) return prev;
        const next = new Set(prev);
        next.add(id);
        return next;
      });
    },
    []
  );

  const submitVotes = useCallback(async () => {
    if (selected.size < 1 || loading) return;
    setLoading(true);
    try {
      const top10 = Array.from(selected);
      const res = await fetch("/api/topic-vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ top10 }),
      });
      const data = await res.json();
      if (data.subResults) setSubResults(data.subResults);
      if (data.alreadyVoted) {
        // Server says IP already voted – show results, don't re-count
        setSubmitted(true);
        window.scrollTo({ top: 0 });
        return;
      }
      setSubmitted(true);
      localStorage.setItem("heiko-top10-votes", JSON.stringify(top10));
      localStorage.setItem("heiko-top10-time", Date.now().toString());
      window.scrollTo({ top: 0 });
    } catch {
      setSubmitted(true);
      window.scrollTo({ top: 0 });
    } finally {
      setLoading(false);
    }
  }, [selected, loading]);

  // No public "new round" button - prevents gaming.
  // For campaign events: clear localStorage manually or use incognito.

  // Compute flat ranked sub-topics from subResults
  const rankedSubtopics = ALL_SUBTOPICS.map((st) => {
    const topicSubs = subResults[st.topicSlug] ?? {};
    const subSlug = slugifySubtopic(st.label);
    return { ...st, count: topicSubs[subSlug] ?? 0 };
  }).sort((a, b) => b.count - a.count);

  const maxSubCount = Math.max(...rankedSubtopics.map((s) => s.count), 1);

  // Compute aggregated topic scores from subResults
  const topicScores = TOPICS.map((topic) => {
    const topicSubs = subResults[topic.slug] ?? {};
    const total = topic.sub.reduce((sum, label) => {
      const key = slugifySubtopic(label);
      return sum + (topicSubs[key] ?? 0);
    }, 0);
    // Top 3 sub-topics for this topic
    const topSubs = topic.sub
      .map((label) => ({
        label,
        count: topicSubs[slugifySubtopic(label)] ?? 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
    return { ...topic, total, topSubs };
  }).sort((a, b) => b.total - a.total);

  const maxTopicScore = Math.max(...topicScores.map((t) => t.total), 1);
  const totalTopicVotes = topicScores.reduce((s, t) => s + t.total, 0);

  const displayedRanked = showAllResults ? rankedSubtopics : rankedSubtopics.slice(0, 10);

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
            Bürgerbeteiligung von Anfang an
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Was soll Heiko zuerst anpacken?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Heiko Meyer hat{" "}
            <span className="font-bold text-[#58b046]">41 konkrete Vorhaben</span>{" "}
            für die nächsten 8 Jahre als Oberbürgermeister. Helfen Sie ihm zu
            priorisieren: Wählen Sie Ihre{" "}
            <span className="font-bold text-white">Top 10</span> – was soll
            Heiko zuerst anpacken?
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
        {/* ===== VOTING UI ===== */}
        {!submitted && (
          <>
            {/* Budget Bar – sticky so it stays visible while scrolling */}
            <div className="sticky top-16 z-40 -mx-4 mb-8 border-b border-black/[0.06] bg-white/95 px-4 py-3 shadow-sm backdrop-blur md:-mx-8 md:px-8">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a3eaf] text-sm font-black text-white">
                    {remaining}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#1a1a2e]">
                      {maxReached ? "Limit erreicht" : `Noch ${remaining} von ${MAX_SELECTIONS}`}
                    </p>
                    <p className="hidden text-xs text-[#6b6b7b] sm:block">
                      {maxReached
                        ? "Auswahl aufheben, um andere zu wählen"
                        : "Klicken Sie auf die Vorhaben, die Ihnen am wichtigsten sind"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: MAX_SELECTIONS }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-3 rounded-full transition-all duration-200 ${
                        i < usedCount
                          ? "bg-[#58b046]"
                          : "bg-[#1a3eaf]/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Topic Groups */}
            <div className="mb-8 space-y-6">
              {TOPICS.map((topic) => {
                const color = TOPIC_COLORS[topic.slug] ?? "#1a3eaf";
                const selectedInGroup = topic.sub.filter((label) =>
                  selected.has(`${topic.slug}:${slugifySubtopic(label)}`)
                ).length;

                return (
                  <div key={topic.slug} className="overflow-hidden rounded-sm shadow-sm">
                    {/* Group Header */}
                    <div
                      className="flex items-center gap-3 px-4 py-3"
                      style={{ backgroundColor: color }}
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-white/10 text-sm font-black italic text-white">
                        {topic.number}
                      </span>
                      <h2 className="flex-1 text-sm font-black uppercase tracking-wide text-white">
                        {topic.label}
                      </h2>
                      {selectedInGroup > 0 && (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#58b046] text-xs font-black text-white">
                          {selectedInGroup}
                        </span>
                      )}
                    </div>

                    {/* Sub-topic cards */}
                    <div className="grid gap-2 bg-[#f4f6ff] p-3 sm:grid-cols-2">
                      {topic.sub.map((label) => {
                        const id = `${topic.slug}:${slugifySubtopic(label)}`;
                        const isSelected = selected.has(id);
                        const isDisabled = !isSelected && maxReached;

                        return (
                          <button
                            key={id}
                            onClick={() => !isDisabled && toggleSubtopic(id)}
                            disabled={isDisabled}
                            className={`flex items-center gap-2.5 rounded-sm border px-3 py-2.5 text-left text-sm font-medium transition-all ${
                              isSelected
                                ? "border-[#58b046] bg-[#58b046]/10 text-[#1a1a2e] shadow-sm"
                                : isDisabled
                                  ? "cursor-not-allowed border-black/5 bg-white/50 text-[#6b6b7b]/40"
                                  : "border-black/8 bg-white text-[#1a1a2e] shadow-sm hover:border-[#1a3eaf]/30 hover:shadow-md"
                            }`}
                          >
                            <span
                              className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                                isSelected
                                  ? "border-[#58b046] bg-[#58b046]"
                                  : isDisabled
                                    ? "border-black/10"
                                    : "border-[#1a3eaf]/30"
                              }`}
                            >
                              {isSelected && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-3 w-3"
                                >
                                  <path d="M5 12l5 5L20 7" />
                                </svg>
                              )}
                            </span>
                            <span className="leading-snug">{label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Submit row */}
            <div className="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => setSelected(new Set())}
                disabled={usedCount === 0}
                className="rounded-sm border-2 border-black/10 px-6 py-3 text-sm font-semibold text-[#6b6b7b] transition-colors hover:bg-black/5 disabled:opacity-30"
              >
                Zurücksetzen
              </button>
              <button
                onClick={submitVotes}
                disabled={usedCount < 1 || loading}
                className="rounded-sm bg-[#58b046] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#58b046]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
              >
                {loading
                  ? "Wird gespeichert..."
                  : `${usedCount} Vorhaben${usedCount !== 1 ? "" : ""} absenden`}
              </button>
            </div>
          </>
        )}

        {/* ===== SUBMITTED STATE ===== */}
        {submitted && (
          <div className="mb-8 rounded-sm border-l-4 border-[#58b046] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#58b046]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#58b046]"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1a2e]">
                  Danke für Ihre Einschätzung!
                </p>
                <p className="text-xs text-[#6b6b7b]">
                  Ihre Stimme wurde gezählt. Schauen Sie sich die bisherigen Ergebnisse an:
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ===== RESULTS TOGGLE ===== */}
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            className="mb-8 flex w-full items-center justify-center gap-2 rounded-sm bg-[#1a3eaf] py-4 text-sm font-bold text-white transition-colors hover:bg-[#15349a]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
            </svg>
            Zu den bisherigen Ergebnissen
          </button>
        ) : (
          <>
            {/* Tab Switcher */}
            <div className="mb-6 flex overflow-hidden rounded-sm border border-[#1a3eaf]/20">
              <button
                onClick={() => setActiveTab("top10")}
                className={`flex-1 py-3 text-sm font-bold transition-colors ${
                  activeTab === "top10"
                    ? "bg-[#1a3eaf] text-white"
                    : "bg-white text-[#1a3eaf] hover:bg-[#1a3eaf]/5"
                }`}
              >
                Top 10 Einzelthemen
              </button>
              <button
                onClick={() => setActiveTab("themen")}
                className={`flex-1 py-3 text-sm font-bold transition-colors ${
                  activeTab === "themen"
                    ? "bg-[#1a3eaf] text-white"
                    : "bg-white text-[#1a3eaf] hover:bg-[#1a3eaf]/5"
                }`}
              >
                Nach Themenblock
              </button>
            </div>

        {/* Section 1: Top Sub-topics */}
        {activeTab === "top10" && (
        <div className="mb-8 rounded-sm border-l-4 border-[#58b046] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black uppercase text-[#1a1a2e]">
                Top 10 der Lüneburger:innen
              </h2>
              <p className="mt-0.5 text-xs text-[#6b6b7b]">
                Die meistgewählten Vorhaben aller Themen
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#58b046]/10 px-3 py-1 text-xs font-medium text-[#58b046]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
              Live
            </div>
          </div>

          <div className="space-y-3">
            {displayedRanked.map((st, i) => {
              const barPct = maxSubCount > 0 ? (st.count / maxSubCount) * 100 : 0;
              const displayPct = totalTopicVotes > 0 ? ((st.count / totalTopicVotes) * 100).toFixed(1) : "0";
              const color = TOPIC_COLORS[st.topicSlug] ?? "#1a3eaf";
              return (
                <div key={st.id} className="flex items-center gap-3">
                  {/* Rank */}
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center text-xs font-black ${
                      i === 0
                        ? "rounded-sm bg-[#58b046] text-white"
                        : i < 3
                          ? "rounded-sm bg-[#1a3eaf]/10 text-[#1a3eaf]"
                          : "text-[#6b6b7b]/50"
                    }`}
                  >
                    #{i + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-1.5">
                      <span className="text-sm font-semibold text-[#1a1a2e]">
                        {st.label}
                      </span>
                      <span
                        className="rounded-sm px-1.5 py-0.5 text-[0.6rem] font-bold text-white"
                        style={{ backgroundColor: color }}
                      >
                        {st.topicNumber} {st.topicLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-sm bg-black/[0.06]">
                        <div
                          className="h-full rounded-sm transition-all duration-700 ease-out"
                          style={{
                            width: `${Math.max(barPct, st.count > 0 ? 2 : 0)}%`,
                            background: `linear-gradient(to right, ${color}, ${color}bb)`,
                          }}
                        />
                      </div>
                      <span className="w-16 flex-shrink-0 text-right text-xs tabular-nums text-[#6b6b7b]">
                        {displayPct}% ({st.count})
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {rankedSubtopics.length > 10 && (
            <button
              onClick={() => setShowAllResults((v) => !v)}
              className="mt-4 w-full rounded-sm border border-[#1a3eaf]/10 py-2 text-xs font-semibold text-[#1a3eaf] transition-colors hover:bg-[#1a3eaf]/5"
            >
              {showAllResults
                ? "Top 10 anzeigen"
                : `Alle ${rankedSubtopics.length} Vorhaben anzeigen`}
            </button>
          )}
        </div>
        )}

        {/* Section 2: Themen-Ranking */}
        {activeTab === "themen" && (
        <div className="rounded-sm border-l-4 border-[#1a3eaf] bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-black uppercase text-[#1a1a2e]">
              Themen-Ranking
            </h2>
            <p className="mt-0.5 text-xs text-[#6b6b7b]">
              Aggregierte Stimmen pro Themenbereich ·{" "}
              {totalTopicVotes.toLocaleString("de-DE")} Stimmen gesamt
            </p>
          </div>

          <div className="space-y-6">
            {topicScores.map((topic, i) => {
              const barWidth =
                maxTopicScore > 0 ? (topic.total / maxTopicScore) * 100 : 0;
              const pct =
                totalTopicVotes > 0
                  ? ((topic.total / totalTopicVotes) * 100).toFixed(1)
                  : "0";
              const color = TOPIC_COLORS[topic.slug] ?? "#1a3eaf";
              const maxTopSub = Math.max(...topic.topSubs.map((s) => s.count), 1);

              return (
                <div key={topic.slug}>
                  <div className="mb-1.5 flex items-center gap-2">
                    <span
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center text-[0.65rem] font-black italic text-white"
                      style={{ backgroundColor: color }}
                    >
                      {topic.number}
                    </span>
                    {i === 0 && topic.total > 0 && (
                      <span className="rounded-sm bg-[#58b046] px-1.5 py-0.5 text-[0.6rem] font-bold text-white">
                        TOP
                      </span>
                    )}
                    <span className="flex-1 text-sm font-semibold text-[#1a1a2e]">
                      {topic.label}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-black tabular-nums text-[#1a3eaf]">
                        {pct}%
                      </span>
                      <span className="text-xs tabular-nums text-[#6b6b7b]">
                        ({topic.total})
                      </span>
                    </div>
                  </div>

                  <div className="h-5 overflow-hidden rounded-sm bg-[#1a3eaf]/[0.06]">
                    <div
                      className="flex h-full items-center rounded-sm transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.max(barWidth, topic.total > 0 ? 3 : 0)}%`,
                        background: `linear-gradient(to right, ${color}, ${color}bb)`,
                      }}
                    />
                  </div>

                  {/* Top 3 sub-topics mini-bars */}
                  {topic.topSubs.some((s) => s.count > 0) && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-[#1a3eaf]/10 pl-3">
                      {topic.topSubs
                        .filter((s) => s.count > 0)
                        .map((sub, j, arr) => {
                          const isLast = j === arr.length - 1;
                          const subBarPct =
                            maxTopSub > 0 ? (sub.count / maxTopSub) * 100 : 0;
                          return (
                            <div key={sub.label} className="flex items-center gap-2">
                              <span className="flex-shrink-0 font-mono text-[0.6rem] leading-none text-[#6b6b7b]/50">
                                {isLast ? "└" : "├"}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="mb-0.5 flex items-center justify-between gap-2">
                                  <span className="truncate text-[0.65rem] text-[#6b6b7b]">
                                    {sub.label}
                                  </span>
                                  <span className="flex-shrink-0 text-[0.6rem] tabular-nums text-[#6b6b7b]/60">
                                    {sub.count}
                                  </span>
                                </div>
                                <div className="h-1.5 overflow-hidden rounded-sm bg-[#1a3eaf]/[0.06]">
                                  <div
                                    className="h-full rounded-sm bg-gradient-to-r from-[#4a7fd4] to-[#6a9be0] transition-all duration-700 ease-out"
                                    style={{
                                      width: `${Math.max(subBarPct, sub.count > 0 ? 5 : 0)}%`,
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
        )}

          {/* Ergebnisse zuklappen */}
          <button
            onClick={() => setShowResults(false)}
            className="mb-4 w-full rounded-sm border border-black/10 py-2 text-xs font-semibold text-[#6b6b7b] transition-colors hover:bg-black/5"
          >
            Ergebnisse zuklappen
          </button>
        </>
        )}

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[0.68rem] text-[#6b6b7b]/40">
          Unverbindliche Themen-Umfrage · Keine offizielle Wahl · Ergebnisse
          zeigen Tendenzen, was den Lüneburger:innen am wichtigsten ist
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
