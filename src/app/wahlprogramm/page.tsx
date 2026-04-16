import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { programTopics } from "@/lib/program-data";

export const metadata: Metadata = {
  title: "Wahlprogramm Lüneburg 2026 | Heiko Meyer",
  description:
    "Das Wahlprogramm von Heiko Meyer: 9 konkrete Punkte für ein besseres Lüneburg. Parteiloser OB-Kandidat für die OB-Wahl am 14. September 2026 in der Hansestadt Lüneburg.",
  keywords: [
    "Wahlprogramm Lüneburg",
    "Heiko Meyer Wahlprogramm",
    "OB-Wahl Lüneburg 2026",
    "Oberbürgermeister Lüneburg Programm",
    "Kommunalwahl Lüneburg",
    "parteilos Lüneburg",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/wahlprogramm",
  },
  openGraph: {
    title: "Wahlprogramm Lüneburg 2026 | Heiko Meyer",
    description:
      "9 konkrete Punkte für ein besseres Lüneburg – parteiloser OB-Kandidat Heiko Meyer, OB-Wahl 14. September 2026.",
    url: "https://meyer-lueneburg.de/wahlprogramm",
  },
};

export default function WahlprogrammPage() {
  return (
    <article>
      {/* Hero */}
      <section className="bg-[#1a3eaf] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            OB-Wahl · 14. September 2026
          </div>
          <h1 className="text-4xl font-black uppercase text-white md:text-6xl">
            Mein Wahlprogramm
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            9 Punkte für ein besseres Lüneburg. Konkret, pragmatisch und
            unabhängig – für alle Lüneburgerinnen und Lüneburger.
          </p>
          <blockquote className="mx-auto mt-8 max-w-xl border-l-4 border-[#58b046] pl-4 text-left text-base italic text-white/80">
            &bdquo;Lüneburg nicht nur verwalten, sondern aktiv gestalten. Dafür
            trete ich an.&ldquo;
            <footer className="mt-2 text-sm font-normal text-white/40">
              &mdash; Heiko Meyer
            </footer>
          </blockquote>
        </div>
      </section>

      {/* All 9 Topics */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="space-y-8">
            {programTopics.map((topic, i) => (
              <Link
                key={topic.slug}
                href={`/wahlprogramm/${topic.slug}`}
                className="group flex flex-col overflow-hidden rounded-sm border border-black/[0.06] transition-all hover:-translate-y-1 hover:shadow-lg md:flex-row"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full flex-shrink-0 md:aspect-auto md:w-72">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border-2 border-white bg-white/90 text-lg font-black italic md:bottom-auto md:left-auto md:right-3 md:top-3" style={{ color: topic.color }}>
                    {topic.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-5 md:p-8">
                  <h2 className="text-lg font-black uppercase md:text-xl" style={{ color: topic.color }}>
                    {topic.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#6b6b7b]">
                    {topic.subtitle}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium"
                        style={{ backgroundColor: topic.color + "14", color: topic.color }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3 text-[#58b046]"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#1a3eaf] opacity-0 transition-opacity group-hover:opacity-100">
                    Mehr erfahren
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <path d="m12 19 7-7-7-7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3eaf] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-2xl font-black text-white md:text-3xl">
            Gestalten statt verwalten.
          </p>
          <p className="mt-2 text-base text-white/60">
            Haben Sie Fragen zu meinem Programm? Sprechen Sie direkt mit mir.
          </p>
          <Link
            href="/sprachagent"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#58b046] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#4e9e3f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
            Mit Heiko sprechen
          </Link>
        </div>
      </section>
    </article>
  );
}
