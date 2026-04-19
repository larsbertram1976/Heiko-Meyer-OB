import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programTopics } from "@/lib/program-data";
import { NewsletterBanner } from "@/components/newsletter-banner";
import { ShareButtons } from "@/components/share-buttons";
import { SPRACHAGENT_ENABLED } from "@/lib/feature-flags";

export function generateStaticParams() {
  return programTopics.map((topic) => ({ slug: topic.slug }));
}

const BASE_URL = "https://meyer-lueneburg.de";

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const topic = programTopics.find((t) => t.slug === slug);
    if (!topic) return { title: "Nicht gefunden" };
    const url = `${BASE_URL}/wahlprogramm/${topic.slug}`;
    return {
      title: `${topic.title} | Heiko Meyer Lüneburg`,
      description: `${topic.subtitle} – Wahlprogramm Punkt ${topic.number} von Heiko Meyer, parteiloser OB-Kandidat für Lüneburg. OB-Wahl 14. September 2026.`,
      keywords: [
        topic.title,
        "Lüneburg",
        "Heiko Meyer",
        "Wahlprogramm Lüneburg",
        "OB-Wahl Lüneburg 2026",
        "Oberbürgermeister Lüneburg",
        "parteilos Lüneburg",
      ],
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${topic.title} | Heiko Meyer Lüneburg`,
        description: `${topic.subtitle} – Wahlprogramm Punkt ${topic.number} von Heiko Meyer, parteiloser OB-Kandidat für Lüneburg.`,
        url,
        images: [{ url: topic.image, alt: topic.title }],
      },
    };
  });
}

export default async function ProgramTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = programTopics.find((t) => t.slug === slug);

  if (!topic) notFound();

  const currentIndex = programTopics.findIndex((t) => t.slug === slug);
  const prevTopic = currentIndex > 0 ? programTopics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < programTopics.length - 1
      ? programTopics[currentIndex + 1]
      : null;

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a3eaf]">
        <div className="absolute inset-0">
          <Image
            src={topic.image}
            alt={topic.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3eaf] via-[#1a3eaf]/90 to-[#1a3eaf]/70" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
          <Link
            href="/wahlprogramm"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
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
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Zurück zum Wahlprogramm
          </Link>

          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center border-2 text-2xl font-black italic text-white" style={{ borderColor: topic.color, backgroundColor: topic.color + "33" }}>
              {topic.number}
            </span>
            <div>
              <h1 className="text-2xl font-black uppercase text-white md:text-4xl">
                {topic.title}
              </h1>
              <p className="mt-1 text-base text-white/60 md:text-lg">
                {topic.subtitle}
              </p>
            </div>
          </div>

          {/* Hero Quote */}
          <blockquote className="mt-8 border-l-4 border-[#58b046] pl-4 text-lg font-medium italic text-white/90 md:text-xl">
            &bdquo;{topic.heroQuote}&ldquo;
            <footer className="mt-2 text-sm font-normal text-white/50">
              &mdash; Heiko Meyer
            </footer>
          </blockquote>

          {/* Share Buttons */}
          <div className="mt-6">
            <ShareButtons title={topic.title} />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="border-l-4 pl-4" style={{ borderColor: topic.color }}>
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: topic.color }}>
              Die Herausforderung
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#1a1a2e] md:text-3xl">
              {topic.problem.headline}
            </h2>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#6b6b7b] md:text-lg">
            {topic.problem.text}
          </p>

          {/* Facts */}
          {topic.problem.facts && (
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {topic.problem.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-l-4 border-[#58b046] bg-[#f8f8fa] p-6"
                >
                  <p className="text-3xl font-black text-[#1a3eaf]">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm text-[#6b6b7b]">{fact.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Positions / Solutions Section */}
      <section className="bg-[#f8f8fa] py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="border-l-4 border-[#58b046] pl-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#58b046]">
              Heikos Lösungen
            </p>
            <h2 className="mt-1 text-2xl font-black text-[#1a1a2e] md:text-3xl">
              {topic.positions.headline}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {topic.positions.items.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-sm border-l-4 bg-white p-6 shadow-sm"
                style={{ borderColor: topic.color }}
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: topic.color }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1a1a2e]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6b6b7b]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete Example */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="rounded-sm border-2 border-[#58b046] bg-[#58b046]/5 p-8 md:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#58b046] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              So geht&apos;s konkret
            </div>
            <h2 className="text-xl font-black text-[#1a1a2e] md:text-2xl">
              {topic.concreteExample.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#2c2c3a] md:text-lg">
              {topic.concreteExample.text}
            </p>
          </div>
        </div>
      </section>

      {/* Themenpuls CTA – prominent, contextual */}
      <section className="bg-[#58b046] py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-white"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                Ihre Meinung zu diesem Thema
              </p>
              <p className="mt-1 text-xl font-black text-white md:text-2xl">
                Was davon ist Ihnen am wichtigsten?
              </p>
              <p className="mt-2 text-sm text-white/70">
                Sie haben gerade &uuml;ber {topic.title} gelesen. 42 Vorhaben,
                8 Jahre &ndash; helfen Sie Heiko, die richtigen Schwerpunkte zu setzen.
              </p>
            </div>
            <Link
              href="/themenprioritaeten"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-sm bg-white px-8 py-4 font-bold text-[#58b046] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Jetzt Ihre Top 10 w&auml;hlen
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
                <path d="m12 19 7-7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a3eaf] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="text-2xl font-black text-white md:text-3xl">
            {topic.cta}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {SPRACHAGENT_ENABLED && (
              <Link
                href="/sprachagent"
                className="inline-flex items-center gap-2 rounded-sm bg-[#58b046] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#4e9e3f]"
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
                Fragen? Sprich mit Heiko
              </Link>
            )}
            <Link
              href="/wahlprogramm"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Alle 9 Punkte ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <NewsletterBanner />

      {/* Prev/Next Navigation */}
      <section className="border-t bg-white py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 md:px-8">
          {prevTopic ? (
            <Link
              href={`/wahlprogramm/${prevTopic.slug}`}
              className="group flex items-center gap-2 text-sm text-[#6b6b7b] transition-colors hover:text-[#1a3eaf]"
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
                <path d="m12 19-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">{prevTopic.number}.</span>{" "}
              {prevTopic.title.length > 30
                ? prevTopic.title.slice(0, 30) + "\u2026"
                : prevTopic.title}
            </Link>
          ) : (
            <span />
          )}
          {nextTopic ? (
            <Link
              href={`/wahlprogramm/${nextTopic.slug}`}
              className="group flex items-center gap-2 text-sm text-[#6b6b7b] transition-colors hover:text-[#1a3eaf]"
            >
              <span className="hidden sm:inline">{nextTopic.number}.</span>{" "}
              {nextTopic.title.length > 30
                ? nextTopic.title.slice(0, 30) + "\u2026"
                : nextTopic.title}
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
                <path d="m12 19 7-7-7-7" />
              </svg>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </article>
  );
}
