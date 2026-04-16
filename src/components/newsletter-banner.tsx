"use client";

import { useState, useEffect } from "react";

export function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/newsletter")
      .then((r) => r.json())
      .then((data) => setCount(data.count ?? null))
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.alreadySubscribed) {
        setAlreadySubscribed(true);
        setSuccess(true);
      } else if (data.success) {
        setSuccess(true);
        if (data.count) setCount(data.count);
      }
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#1a3eaf] py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <div className="mb-1 text-sm font-semibold uppercase tracking-wider text-white/60">
          Heiko Meyer für Lüneburg
        </div>
        <h2 className="text-2xl font-black uppercase text-white md:text-3xl">
          Bleiben Sie informiert
        </h2>
        <p className="mt-3 text-base text-white/70">
          Erhalten Sie Updates zum Wahlkampf direkt in Ihr Postfach.
        </p>

        {success ? (
          <div className="mt-8 inline-flex items-center gap-2 rounded-sm border border-[#58b046] bg-[#58b046]/20 px-6 py-3 text-sm font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-shrink-0"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {alreadySubscribed
              ? "Diese E-Mail ist bereits angemeldet – danke für Ihr Interesse!"
              : "Vielen Dank! Sie sind jetzt dabei."}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ihre E-Mail-Adresse"
              required
              className="w-full rounded-sm border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/60 focus:bg-white/15 sm:w-80"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-sm bg-[#58b046] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4e9e3f] disabled:opacity-60"
            >
              {loading ? "Wird angemeldet..." : "Jetzt anmelden"}
            </button>
          </form>
        )}

        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/50">
          {count !== null && count > 0 && (
            <span>
              {count} {count === 1 ? "Person ist" : "Lüneburger:innen sind"} bereits dabei
            </span>
          )}
          <span>Kein Spam &ndash; jederzeit abmeldbar.</span>
        </div>
      </div>
    </section>
  );
}
