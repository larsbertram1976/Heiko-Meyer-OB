import Link from "next/link";
import { termine, typeLabels, typeColors } from "@/lib/termine-data";

export function TermineTeaser() {
  // Show next 2 upcoming events
  const upcoming = termine
    .filter((t) => new Date(t.date) >= new Date())
    .slice(0, 2);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 border-l-4 border-[#58b046] pl-4">
          <h2 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-5xl">
            Treffen Sie Heiko
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Persönlich, direkt, vor Ort – die nächsten Termine
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {upcoming.map((t) => (
            <div
              key={t.id}
              className="flex gap-4 rounded-sm border-l-4 border-[#1a3eaf] bg-[#f8f8fa] p-5"
            >
              <div className="flex flex-col items-center justify-center rounded-sm bg-[#1a3eaf] px-4 py-3 text-white">
                <span className="text-2xl font-black">
                  {new Date(t.date).getDate()}.
                </span>
                <span className="text-xs">
                  {new Date(t.date).toLocaleDateString("de-DE", { month: "short" })}
                </span>
              </div>
              <div className="flex-1">
                <span
                  className="mb-1 inline-block rounded-sm px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: typeColors[t.type] }}
                >
                  {typeLabels[t.type]}
                </span>
                <h3 className="text-sm font-bold text-[#1a1a2e]">{t.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-[#6b6b7b]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {t.location} · {t.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/termine"
            className="inline-flex items-center gap-2 rounded-sm bg-[#1a3eaf] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#15349a]"
          >
            Alle Termine ansehen
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m12 19 7-7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
