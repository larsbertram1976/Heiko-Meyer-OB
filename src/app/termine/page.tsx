"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { termine, typeLabels, typeColors } from "@/lib/termine-data";

export default function TerminePage() {
  const [attendCounts, setAttendCounts] = useState<Record<string, number>>({});
  const [myAttends, setMyAttends] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch("/api/termine")
      .then((res) => res.json())
      .then((data) => setAttendCounts(data.counts))
      .catch(() => {});

    const saved = localStorage.getItem("heiko-termine-attends");
    if (saved) setMyAttends(JSON.parse(saved));
  }, []);

  const handleAttend = useCallback(
    async (terminId: string) => {
      if (myAttends[terminId]) return;

      const newAttends = { ...myAttends, [terminId]: true };
      setMyAttends(newAttends);
      localStorage.setItem("heiko-termine-attends", JSON.stringify(newAttends));

      // Optimistic update
      setAttendCounts((prev) => ({
        ...prev,
        [terminId]: (prev[terminId] ?? 0) + 1,
      }));

      try {
        const res = await fetch("/api/termine", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ terminId }),
        });
        const data = await res.json();
        setAttendCounts((prev) => ({ ...prev, [terminId]: data.count }));
      } catch {
        // Keep optimistic update
      }
    },
    [myAttends]
  );

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

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
            Persönlich. Direkt. Vor Ort.
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Treffen Sie Heiko
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            Kein Wahlkampf aus der Ferne – Heiko Meyer ist regelmäßig in
            Lüneburg unterwegs. Kommen Sie vorbei, stellen Sie Ihre Fragen und
            sagen Sie, was Sie bewegt.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
        {/* Termin-Karten */}
        <div className="space-y-6">
          {termine.map((t) => {
            const attended = myAttends[t.id] ?? false;
            const count = attendCounts[t.id] ?? 0;
            const isPast = new Date(t.date) < new Date();

            return (
              <div
                key={t.id}
                className={`overflow-hidden rounded-sm bg-white shadow-sm transition-all ${
                  isPast ? "opacity-60" : "hover:shadow-md"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Date Column */}
                  <div className="flex flex-row items-center gap-4 border-b border-black/[0.06] bg-[#1a3eaf] p-5 text-white md:w-52 md:flex-shrink-0 md:flex-col md:justify-center md:border-b-0 md:border-r md:text-center">
                    <p className="text-sm font-medium text-white/50 md:text-xs">
                      {t.weekday}
                    </p>
                    <p className="text-2xl font-black md:text-3xl">
                      {new Date(t.date).getDate()}.
                    </p>
                    <p className="text-sm font-medium text-white/70">
                      {new Date(t.date).toLocaleDateString("de-DE", {
                        month: "long",
                      })}
                    </p>
                    <p className="text-xs text-white/40">{t.time}</p>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span
                          className="mb-2 inline-block rounded-sm px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white"
                          style={{ backgroundColor: typeColors[t.type] }}
                        >
                          {typeLabels[t.type]}
                        </span>
                        <h3 className="text-base font-bold text-[#1a1a2e] md:text-lg">
                          {t.title}
                        </h3>
                      </div>
                      {isPast && (
                        <span className="flex-shrink-0 rounded-sm bg-black/5 px-2 py-1 text-[0.65rem] font-medium text-[#6b6b7b]">
                          Vergangen
                        </span>
                      )}
                    </div>

                    {/* Location */}
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-[#6b6b7b]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 flex-shrink-0 text-[#1a3eaf]"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {t.location} · {t.address}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#6b6b7b]">
                      {t.description}
                    </p>

                    {/* Attend Button + Counter */}
                    {!isPast && (
                      <div className="mt-4 flex items-center gap-4 border-t border-black/[0.06] pt-4">
                        {attended ? (
                          <div className="flex items-center gap-2 rounded-sm bg-[#58b046]/10 px-4 py-2 text-sm font-semibold text-[#58b046]">
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
                              <path d="M5 12l5 5L20 7" />
                            </svg>
                            Ich komme vorbei!
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAttend(t.id)}
                            className="flex items-center gap-2 rounded-sm bg-[#1a3eaf] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#15349a] active:scale-95"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <line x1="19" x2="19" y1="8" y2="14" />
                              <line x1="22" x2="16" y1="11" y2="11" />
                            </svg>
                            Ich komme vorbei!
                          </button>
                        )}
                        {count > 0 && (
                          <span className="text-xs text-[#6b6b7b]">
                            <span className="font-bold tabular-nums text-[#1a3eaf]">
                              {count}
                            </span>{" "}
                            {count === 1 ? "Person hat" : "Personen haben"}{" "}
                            zugesagt
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hint */}
        <div className="mt-10 rounded-sm border-2 border-[#58b046]/20 bg-[#58b046]/5 p-6 text-center">
          <p className="text-base font-bold text-[#1a1a2e]">
            Weitere Termine folgen!
          </p>
          <p className="mt-1 text-sm text-[#6b6b7b]">
            Heiko Meyer ist regelmäßig auf dem Lüneburger Marktplatz und in den
            Stadtteilen unterwegs. Schauen Sie hier regelmäßig vorbei oder folgen
            Sie uns auf{" "}
            <a
              href="https://www.instagram.com/heikomeyerlg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1a3eaf] hover:underline"
            >
              Instagram
            </a>{" "}
            und{" "}
            <a
              href="https://www.facebook.com/heiko.meyer.9022"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1a3eaf] hover:underline"
            >
              Facebook
            </a>
            .
          </p>
        </div>

        <p className="mt-6 text-center text-[0.68rem] text-[#6b6b7b]/40">
          Alle Termine unter Vorbehalt. Änderungen werden hier und auf unseren
          Social-Media-Kanälen bekanntgegeben.
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
