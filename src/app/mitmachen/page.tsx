"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const SHARE_URL = "https://meyer-lueneburg.de";
const SHARE_TEXT =
  "Heiko Meyer f\u00FCr L\u00FCneburg \u2013 unabh\u00E4ngig f\u00FCr ein Miteinander";

const INTEREST_OPTIONS = [
  { id: "flyer", label: "Flyer verteilen" },
  { id: "infostand", label: "Infostand betreuen" },
  { id: "social", label: "Social Media teilen" },
  { id: "informiert", label: "Einfach informiert bleiben" },
];

export default function MitmachenPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/newsletter")
      .then((r) => r.json())
      .then((data) => setCount(data.count ?? null))
      .catch(() => {});
  }, []);

  function toggleInterest(id: string) {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, interests }),
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

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a3eaf]">
        {/* Dotted background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-24">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
            OB-Wahl 14. September 2026
          </div>
          <h1 className="mt-4 text-3xl font-black uppercase text-white md:text-5xl">
            Gemeinsam für Lüneburg
          </h1>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            So können Sie Heiko unterstützen
          </p>
        </div>
      </section>

      {/* 3 Action Cards */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col gap-4 rounded-sm border-l-4 border-[#1a3eaf] bg-[#f8f8fa] p-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#1a3eaf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h2 className="text-lg font-black uppercase text-[#1a1a2e]">
                Stimme abgeben
              </h2>
              <p className="flex-1 text-sm leading-relaxed text-[#6b6b7b]">
                Am 14. September 2026 zur Wahl gehen und Heiko Meyer als
                unabhängigen Oberbürgermeister für Lüneburg wählen.
              </p>
              <Link
                href="/wahlprogramm"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3eaf] transition-colors hover:text-[#58b046]"
              >
                Wahlprogramm lesen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 rounded-sm border-l-4 border-[#58b046] bg-[#f8f8fa] p-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#58b046]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
              </div>
              <h2 className="text-lg font-black uppercase text-[#1a1a2e]">
                Verbreiten
              </h2>
              <p className="flex-1 text-sm leading-relaxed text-[#6b6b7b]">
                Teilen Sie Heikos Botschaft mit Freunden, Familie und
                Bekannten. Jede Stimme zählt!
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#25d366] px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#1877f2] px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Facebook
                </a>
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#1a3eaf] px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {copied ? "Kopiert!" : "Link kopieren"}
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 rounded-sm border-l-4 border-[#1a3eaf] bg-[#f8f8fa] p-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#1a3eaf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className="text-lg font-black uppercase text-[#1a1a2e]">
                Vor Ort helfen
              </h2>
              <p className="flex-1 text-sm leading-relaxed text-[#6b6b7b]">
                Helfen Sie beim Flyer verteilen oder Infostand betreuen.
                Gemeinsam erreichen wir mehr Lüneburger:innen.
              </p>
              <Link
                href="/termine"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a3eaf] transition-colors hover:text-[#58b046]"
              >
                Termine ansehen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>

            {/* Card 4: Themenpuls */}
            <div className="flex flex-col gap-4 rounded-sm border-l-4 border-[#58b046] bg-[#f8f8fa] p-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#58b046]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <h2 className="text-lg font-black uppercase text-[#1a1a2e]">
                Themen priorisieren
              </h2>
              <p className="flex-1 text-sm leading-relaxed text-[#6b6b7b]">
                45 Vorhaben f&uuml;r 8 Jahre &ndash; w&auml;hlen Sie Ihre Top 10 und
                helfen Sie Heiko, die richtigen Schwerpunkte zu setzen.
              </p>
              <Link
                href="/themenprioritaeten"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#58b046] transition-colors hover:text-[#1a3eaf]"
              >
                Zum Themenpuls
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Spenden-Banner */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-sm bg-[#1a3eaf] p-6 sm:flex-row sm:justify-between md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-white">
                  Wahlkampf mit einer Spende unterstützen
                </p>
                <p className="mt-0.5 text-xs text-white/60">
                  Jeder Betrag hilft – für Plakate, Veranstaltungen und Materialien
                </p>
              </div>
            </div>
            <Link
              href="/spenden"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-sm bg-[#58b046] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#4e9e3f]"
            >
              Jetzt spenden
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Full Signup Form */}
      <section className="bg-[#f8f8fa] py-12 md:py-20">
        <div className="mx-auto max-w-2xl px-4 md:px-8">
          <div className="border-l-4 border-[#1a3eaf] pl-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a3eaf]">
              Jetzt registrieren
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#1a1a2e] md:text-3xl">
              Ich mache mit!
            </h2>
          </div>

          {success ? (
            <div className="mt-8 rounded-sm border border-[#58b046] bg-[#58b046]/10 p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#58b046]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p className="text-lg font-bold text-[#1a1a2e]">
                {alreadySubscribed
                  ? "Sie sind bereits angemeldet!"
                  : "Vielen Dank, Sie sind dabei!"}
              </p>
              <p className="mt-2 text-sm text-[#6b6b7b]">
                {alreadySubscribed
                  ? "Diese E-Mail-Adresse ist bereits in unserem Verteiler. Danke für Ihr Engagement!"
                  : "Wir freuen uns über Ihre Unterstützung und melden uns bei Ihnen."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#1a1a2e]"
                >
                  Name <span className="text-[#6b6b7b]">(optional)</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ihr Vor- und Nachname"
                  className="rounded-sm border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1a3eaf] focus:ring-1 focus:ring-[#1a3eaf]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#1a1a2e]"
                >
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  required
                  className="rounded-sm border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1a3eaf] focus:ring-1 focus:ring-[#1a3eaf]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-[#1a1a2e]">
                  Wie möchten Sie helfen?
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {INTEREST_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className="flex cursor-pointer items-center gap-2.5 rounded-sm border border-gray-200 bg-white px-3 py-2.5 text-sm transition-colors hover:border-[#1a3eaf]"
                    >
                      <input
                        type="checkbox"
                        checked={interests.includes(opt.id)}
                        onChange={() => toggleInterest(opt.id)}
                        className="h-4 w-4 accent-[#1a3eaf]"
                      />
                      <span className="text-[#1a1a2e]">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 rounded-sm bg-[#58b046] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#4e9e3f] disabled:opacity-60"
              >
                {loading ? "Wird angemeldet..." : "Jetzt mitmachen!"}
              </button>

              {count !== null && count > 0 && (
                <p className="text-center text-sm text-[#6b6b7b]">
                  <span className="font-semibold text-[#1a3eaf]">{count}</span>{" "}
                  {count === 1 ? "Person ist" : "Lüneburger:innen sind"} schon dabei
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Social Sharing Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <div className="border-l-4 border-[#58b046] pl-4 text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#58b046]">
              Weitere Unterstützung
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#1a1a2e] md:text-3xl">
              Teilen Sie Heikos Botschaft
            </h2>
          </div>
          <p className="mt-4 text-left text-sm leading-relaxed text-[#6b6b7b] md:text-base">
            Jeder geteilte Link hilft. Empfehlen Sie Heiko Meyer in Ihrem
            Netzwerk und machen Sie andere Lüneburger:innen auf
            seinen Wahlkampf aufmerksam.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#25d366] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1877f2] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>

            <button
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a3eaf] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              {copied ? "Link kopiert!" : "Link kopieren"}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f8f8fa] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="border-l-4 border-[#1a3eaf] pl-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1a3eaf]">
              Direkt erreichen
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#1a1a2e] md:text-3xl">
              Persönlicher Kontakt
            </h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#6b6b7b] md:text-base">
            Sie möchten Heiko direkt ansprechen oder haben Fragen zum
            Mitmachen? Melden Sie sich gerne.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:heiko@meyer-lueneburg.de"
              className="flex items-center gap-3 rounded-sm border-l-4 border-[#58b046] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[#58b046]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6b6b7b]">
                  E-Mail
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#1a3eaf]">
                  heiko@meyer-lueneburg.de
                </p>
              </div>
            </a>

            <a
              href="tel:+4916074717 00"
              className="flex items-center gap-3 rounded-sm border-l-4 border-[#1a3eaf] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[#1a3eaf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6b6b7b]">
                  Telefon
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#1a3eaf]">
                  +49 160 747 17 00
                </p>
              </div>
            </a>
          </div>

          <div className="mt-6">
            <Link
              href="/termine"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a3eaf] transition-colors hover:text-[#58b046]"
            >
              Alle Termine und Veranstaltungen ansehen
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t bg-white py-6">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-xs text-[#aaa]">
            Mit der Anmeldung stimmen Sie der Speicherung Ihrer E-Mail-Adresse
            zum Zweck der Wahlkampfkommunikation zu (Art. 6 Abs. 1 lit. a
            DSGVO). Eine Abmeldung ist jederzeit per E-Mail an{" "}
            <a
              href="mailto:heiko@meyer-lueneburg.de"
              className="text-[#1a3eaf] hover:underline"
            >
              heiko@meyer-lueneburg.de
            </a>{" "}
            möglich. Weitere Informationen finden Sie in unserer{" "}
            <Link
              href="/datenschutz"
              className="text-[#1a3eaf] hover:underline"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
