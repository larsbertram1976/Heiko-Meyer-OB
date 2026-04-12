"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PrevoteFloat() {
  const pathname = usePathname();
  const [count, setCount] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [justVoted, setJustVoted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Hide on voice agent page – would overlap chat controls
  if (pathname === "/sprachagent") return null;

  useEffect(() => {
    const voted = localStorage.getItem("heiko-prevote") === "true";
    if (voted) setHasVoted(true);

    fetch("/api/vote")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(0));
  }, []);

  // Auto-open after 5 seconds if user hasn't voted
  useEffect(() => {
    if (hasVoted) return;
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, [hasVoted]);

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

      // Auto-close after 3s
      setTimeout(() => setOpen(false), 3000);
    } catch {
      setCount((c) => (c ?? 0) + 1);
      setHasVoted(true);
      setJustVoted(true);
      localStorage.setItem("heiko-prevote", "true");
      setTimeout(() => setOpen(false), 3000);
    } finally {
      setLoading(false);
    }
  }, [hasVoted, loading]);

  const formattedCount = count !== null ? count.toLocaleString("de-DE") : "...";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Panel */}
      {open && (
        <div className="w-72 animate-[slideUp_0.3s_ease-out] overflow-hidden rounded-2xl border border-white/10 bg-[#1a3eaf] shadow-2xl shadow-[#1a3eaf]/30">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 text-white/40 transition-colors hover:text-white"
            aria-label="Schließen"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div className="p-5">
            {justVoted ? (
              /* Thank you state */
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#58b046]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#58b046]"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <p className="text-base font-bold text-white">
                  Danke für Ihre Unterstützung!
                </p>
                <p className="mt-3 text-3xl font-black tabular-nums text-[#58b046]">
                  {formattedCount}
                </p>
                <p className="text-xs text-white/40">Unterstützer</p>
              </div>
            ) : hasVoted ? (
              /* Already voted state */
              <div className="text-center">
                <p className="text-3xl font-black tabular-nums text-white">
                  {formattedCount}
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Lüneburger unterstützen Heiko
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#58b046]/20 px-3 py-1 text-xs font-semibold text-[#58b046]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Sie sind dabei!
                </div>
              </div>
            ) : (
              /* Vote CTA */
              <>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#58b046]">
                  Digitale Vorabstimmung
                </p>
                <p className="text-base font-bold leading-snug text-white">
                  Unterstützen Sie Heiko Meyer!
                </p>
                <p className="mt-3 text-center text-3xl font-black tabular-nums text-white">
                  {formattedCount}
                </p>
                <p className="text-center text-xs text-white/40">
                  Stimmen bisher
                </p>
                <button
                  onClick={handleVote}
                  disabled={loading}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#58b046] py-3 text-sm font-bold text-white transition-all hover:bg-[#4e9e3f] active:scale-95 disabled:opacity-70"
                >
                  {loading ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 animate-spin fill-current"
                    >
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
                      className="h-4 w-4"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  )}
                  Ich unterstütze Heiko!
                </button>
              </>
            )}
          </div>

          {/* Disclaimer footer */}
          <div className="border-t border-white/5 px-5 py-2">
            <p className="text-center text-[0.6rem] text-white/20">
              Keine offizielle Wahl · Unverbindliche Sympathie-Bekundung
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`group flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${
          hasVoted
            ? "bg-[#58b046] text-white shadow-[#58b046]/25 hover:shadow-[#58b046]/35"
            : "bg-[#1a3eaf] text-white shadow-[#1a3eaf]/25 hover:shadow-[#1a3eaf]/35"
        }`}
      >
        {hasVoted ? (
          <>
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
            <span className="text-sm tabular-nums">{formattedCount}</span>
          </>
        ) : (
          <>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#58b046] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#58b046]" />
            </span>
            <span className="text-sm">Stimme abgeben</span>
          </>
        )}
      </button>
    </div>
  );
}
