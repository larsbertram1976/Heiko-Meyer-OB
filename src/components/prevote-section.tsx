"use client";

import { useCallback, useEffect, useState } from "react";

export function PrevoteSection() {
  const [count, setCount] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [justVoted, setJustVoted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check localStorage + fetch count
  useEffect(() => {
    const voted = localStorage.getItem("heiko-prevote") === "true";
    if (voted) setHasVoted(true);

    fetch("/api/vote")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(0));
  }, []);

  const handleVote = useCallback(async () => {
    if (hasVoted || loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/vote", { method: "POST" });
      const data = await res.json();

      setCount(data.count);
      setHasVoted(true);
      setJustVoted(true);
      localStorage.setItem("heiko-prevote", "true");
    } catch {
      // Fallback: local only
      setCount((c) => (c ?? 0) + 1);
      setHasVoted(true);
      setJustVoted(true);
      localStorage.setItem("heiko-prevote", "true");
    } finally {
      setLoading(false);
    }
  }, [hasVoted, loading]);

  const formattedCount = count !== null
    ? count.toLocaleString("de-DE")
    : "...";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1d5e] via-[#1a3eaf] to-[#2551c7] py-16 md:py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-8">
        {/* Pre-vote badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
          Digitale Vorabstimmung
        </div>

        <h2 className="text-3xl font-black text-white md:text-5xl">
          {justVoted ? (
            <>
              Danke für Ihre
              <br />
              <span className="text-[#58b046]">Unterstützung!</span>
            </>
          ) : hasVoted ? (
            <>
              Sie unterstützen
              <br />
              <span className="text-[#58b046]">Heiko Meyer</span>
            </>
          ) : (
            <>
              Unterstützen Sie
              <br />
              <span className="text-[#58b046]">Heiko Meyer!</span>
            </>
          )}
        </h2>

        {/* Counter */}
        <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.06] px-10 py-6 backdrop-blur-sm">
          <p className={`text-5xl font-black tabular-nums text-white md:text-7xl ${justVoted ? "animate-bounce" : ""}`}>
            {formattedCount}
          </p>
          <p className="mt-2 text-sm text-white/50">
            Lüneburger unterstützen Heiko bereits
          </p>
        </div>

        {/* Vote Button or Thank You */}
        <div className="mt-8">
          {!hasVoted ? (
            <button
              onClick={handleVote}
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-2xl bg-[#58b046] px-10 py-5 text-lg font-bold text-white shadow-lg shadow-[#58b046]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58b046]/35 active:translate-y-0 disabled:opacity-70"
            >
              {loading ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6 animate-spin fill-current">
                  <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" />
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
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
              Ich unterstütze Heiko!
            </button>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#58b046]/20 px-6 py-3 text-sm font-semibold text-[#58b046]">
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
                  <path d="M5 12l5 5L20 7" />
                </svg>
                Ihre Stimme zählt!
              </div>

              {/* Share hint */}
              <p className="text-sm text-white/40">
                Teilen Sie Ihre Unterstützung – erzählen Sie es weiter!
              </p>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-[0.68rem] text-white/20">
          Dies ist keine offizielle Wahl oder Abstimmung. Die digitale
          Vorabstimmung dient als Sympathie-Bekundung und ist unverbindlich.
          <br />
          Offizieller Wahltag: 14. September 2026.
        </p>
      </div>
    </section>
  );
}
