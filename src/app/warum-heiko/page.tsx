import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SPRACHAGENT_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Warum Heiko Meyer? | OB-Kandidat Lüneburg 2026",
  description:
    "Warum Heiko Meyer der richtige Oberbürgermeister-Kandidat für Lüneburg ist: 20+ Jahre Erfahrung, parteilos und unabhängig, 45% in der Stichwahl 2021. OB-Wahl 14. September 2026 in der Hansestadt Lüneburg.",
  keywords: [
    "Heiko Meyer Lüneburg",
    "Warum Heiko Meyer",
    "OB-Kandidat Lüneburg",
    "parteiloser Kandidat Lüneburg",
    "unabhängiger Kandidat Lüneburg",
    "Oberbürgermeister Lüneburg 2026",
    "Lüneburger City Management",
    "LCM Vorsitzender Lüneburg",
    "OB-Wahl Lüneburg 2026",
  ],
  alternates: {
    canonical: "https://meyer-lueneburg.de/warum-heiko",
  },
  openGraph: {
    title: "Warum Heiko Meyer? | OB-Kandidat Lüneburg 2026",
    description:
      "20+ Jahre Erfahrung, parteilos und unabhängig. Heiko Meyer ist der richtige OB-Kandidat für Lüneburg. OB-Wahl 14. September 2026.",
    url: "https://meyer-lueneburg.de/warum-heiko",
  },
};

const competenceMatches = [
  {
    theme: "Sicherheit & Ordnung",
    competence: "20 Jahre Brücke zwischen Kaufleuten und Rathaus",
    fact: "Als LCM-Vorsitzender hat Heiko das Sicherheitsproblem Am Sande seit Jahren auf die politische Agenda gebracht – lange bevor es Wahlkampfthema wurde. Er hat zusammen mit Gastronomen und Händlern konkrete Forderungen an die Verwaltung formuliert.",
    emotion:
      "Er spricht nicht über Probleme. Er kennt die Menschen, die darunter leiden – die Händlerin, deren Kunden wegbleiben, den Gastronomen, der um seine Terrasse fürchtet, die Familie, die den Sande meidet.",
  },
  {
    theme: "Wirtschaft & Innenstadt",
    competence: "170 Mitglieder im LCM aufgebaut",
    fact: "Von 80 auf 170 Mitglieder in 20 Jahren: Heiko hat das Lüneburger City Management zur stärksten Stimme der Innenstadt gemacht. Er kennt jeden Eigentümer, jeden Laden, jede Herausforderung persönlich.",
    emotion:
      "Wenn ein Laden schließt, ist das für ihn nicht nur eine Statistik – es sind Menschen, deren Lebenswerk auf dem Spiel steht. Jeder leere Laden ist ein Stück Lüneburg, das verloren geht.",
  },
  {
    theme: "Verwaltung & Bürgernähe",
    competence: "5 Jahre Stadtrat + 20 Jahre Bauausschuss",
    fact: "Heiko kennt die Verwaltung von innen. Er weiß, wo Prozesse haken, welche Entscheidungswege zu lang sind und wo Steuergelder besser eingesetzt werden könnten. Er hat erlebt, wie das ARENA-Projekt aus dem Ruder lief.",
    emotion:
      "Sein Versprechen: Ein Oberbürgermeister, den man ansprechen kann. Nicht abgehoben in einem Büro, sondern mittendrin – auf dem Marktplatz, beim Bäcker, am Sande.",
  },
  {
    theme: "Wohnraum & Soziales",
    competence: "Unternehmer mit Praxisblick",
    fact: "Als Geschäftsführer von HM Objekteinrichtungen weiß Heiko, was Bürokratie bedeutet. Sein Wohnraum-Ansatz: zusätzliche Bauflächen ausweisen, die städtische Wohnungsbau GmbH stärker einsetzen UND Leerstand über Geschäften aktivieren – mehr Wohnraum auf allen Wegen, ohne Zersiedelung.",
    emotion:
      "Wohnen ist ein Grundbedürfnis. Heiko kämpft dafür, dass Lüneburg eine Stadt für alle bleibt – für die junge Familie genauso wie für die Rentnerin, die seit 40 Jahren hier lebt.",
  },
  {
    theme: "Verkehr & Mobilität",
    competence: "20 Jahre Bauausschuss & Mobilitätsausschuss",
    fact: "Heiko sitzt seit zwei Jahrzehnten dort, wo Verkehrsentscheidungen fallen. Er hat erlebt, wie Bleckeder Landstraße, Dahlenburger Landstraße und Soltauer Straße gleichzeitig dicht waren – und weiß, warum das nie wieder passieren darf.",
    emotion:
      "Nicht Auto gegen Rad. Nicht Innenstadt gegen Umland. Sondern ein Konzept, das alle mitnimmt – pragmatisch, nicht ideologisch.",
  },
];

const quotes = [
  {
    text: "Ich bin für alle Lüneburger:innen da. Und das kann nur einer, der keiner Partei angehört.",
    context: "Über seine Parteilosigkeit",
  },
  {
    text: "Ich weiß, wo der Schuh drückt – und wo wir als Stadt dringend neue, auch mutige Wege gehen müssen.",
    context: "Über seine Motivation",
  },
  {
    text: "Mein Ziel ist die Stichwahl. Und dann das Rathaus.",
    context: "Über seine Kandidatur 2026",
  },
];

export default function WarumHeikoPage() {
  return (
    <article>
      {/* Hero with Portrait */}
      <section className="relative overflow-hidden bg-[#1a3eaf]">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
          {/* Text */}
          <div className="flex flex-1 flex-col justify-center px-6 py-12 md:px-12 md:py-20">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
              OB-Wahl · 14. September 2026
            </div>
            <h1 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
              Der richtige Mann
              <br />
              <span className="text-[#58b046]">für Lüneburg</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Lüneburg braucht keinen Berufspolitiker, der verwaltet. Lüneburg
              braucht jemanden, der diese Stadt lebt, ihre Menschen kennt und den
              Mut hat, Dinge anders zu machen.
            </p>
          </div>
          {/* Portrait */}
          <div className="relative hidden w-96 md:block">
            <Image
              src="/portrait.webp"
              alt="Heiko Meyer – Ihr OB-Kandidat für Lüneburg"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3eaf] via-[#1a3eaf]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="border-b bg-white py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-8">
          <div className="text-center">
            <p className="text-4xl font-black text-[#1a3eaf]">57</p>
            <p className="mt-1 text-sm text-[#6b6b7b]">Jahre Lüneburger</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-[#1a3eaf]">20+</p>
            <p className="mt-1 text-sm text-[#6b6b7b]">Jahre für die Stadt</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-[#58b046]">45%</p>
            <p className="mt-1 text-sm text-[#6b6b7b]">Stichwahl 2021</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-[#58b046]">0</p>
            <p className="mt-1 text-sm text-[#6b6b7b]">Parteiverpflichtungen</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <p className="text-lg leading-relaxed text-[#2c2c3a]">
            Heiko Meyer bringt etwas mit, das kein anderer Kandidat hat:{" "}
            <span className="font-bold text-[#1a3eaf]">
              20 Jahre Erfahrung an der Schnittstelle zwischen Bürger:innen,
              Wirtschaft und Verwaltung
            </span>{" "}
            – ohne Parteibrille. Als LCM-Vorsitzender hat er das
            &bdquo;Kaufhaus Lüneburg&ldquo; von 80 auf 170 Mitglieder
            aufgebaut. Als Stadtrat und Bauausschuss-Mitglied kennt er die
            Verwaltung von innen. Als Unternehmer weiß er, was es heißt,
            Ergebnisse zu liefern.
          </p>

          <div className="mt-8 rounded-sm border-2 border-[#58b046]/30 bg-[#58b046]/5 p-6">
            <p className="text-base font-semibold text-[#1a1a2e]">
              2021 haben 45% der Lüneburger:innen in der Stichwahl für Heiko
              gestimmt – mehr als für die Kandidaten von SPD und CDU. Dieses Mal
              will er es über die Ziellinie schaffen.
            </p>
          </div>
        </div>
      </section>

      {/* Competence Matching */}
      <section className="bg-[#f8f8fa] py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-10 border-l-4 border-[#1a3eaf] pl-4">
            <h2 className="text-2xl font-black uppercase text-[#1a3eaf] md:text-3xl">
              Kompetenz trifft Thema
            </h2>
            <p className="mt-1 text-sm text-[#6b6b7b]">
              Für jedes Thema die richtige Erfahrung – belegt durch Fakten,
              getrieben von Herzblut
            </p>
          </div>

          <div className="space-y-6">
            {competenceMatches.map((m) => (
              <div
                key={m.theme}
                className="overflow-hidden rounded-sm bg-white shadow-sm"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Theme + Competence */}
                  <div className="border-b border-black/[0.06] bg-[#1a3eaf] p-6 lg:w-80 lg:flex-shrink-0 lg:border-b-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Thema
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {m.theme}
                    </p>
                    <div className="mt-4 rounded-sm bg-white/10 px-3 py-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#58b046]">
                        Heikos Kompetenz
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {m.competence}
                      </p>
                    </div>
                  </div>

                  {/* Right: Fact + Emotion */}
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#1a3eaf]">
                        Das hat Heiko gemacht
                      </p>
                      <p className="text-sm leading-relaxed text-[#2c2c3a]">
                        {m.fact}
                      </p>
                    </div>
                    <div className="border-l-4 border-[#58b046] bg-[#58b046]/5 p-4">
                      <p className="text-sm italic leading-relaxed text-[#2c2c3a]">
                        {m.emotion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-10 border-l-4 border-[#58b046] pl-4">
            <h2 className="text-2xl font-black uppercase text-[#1a3eaf] md:text-3xl">
              In seinen Worten
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {quotes.map((q) => (
              <blockquote
                key={q.text}
                className="rounded-sm border-l-4 border-[#1a3eaf] bg-[#f8f8fa] p-6"
              >
                <p className="text-base font-semibold leading-relaxed text-[#1a1a2e]">
                  &bdquo;{q.text}&ldquo;
                </p>
                <footer className="mt-3 text-xs text-[#6b6b7b]">
                  {q.context}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Parteilos-Argument */}
      <section className="bg-[#1a3eaf] py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#58b046]">
            Das Alleinstellungsmerkmal
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Nicht die Partei geht vor –<br />
            sondern der Mensch.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
            Heiko Meyer ist bewusst parteilos. Sein einziger Auftrag kommt von
            den Bürger:innen. Keine Fraktion bestimmt seine Agenda,
            kein Parteitag seine Meinung. Was zählt, ist das, was gut für
            Lüneburg ist – nicht, was eine Partei will.
          </p>
          <p className="mt-6 text-lg font-bold text-white">
            &bdquo;Es geht mir um das, was uns hier in Lüneburg vereint,
            nicht spaltet.&ldquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="text-2xl font-black text-[#1a3eaf] md:text-3xl">
            {SPRACHAGENT_ENABLED
              ? "Überzeugt? Sprechen Sie mit Heiko."
              : "Überzeugt? Lernen Sie Heiko kennen."}
          </p>
          <p className="mt-2 text-base text-[#6b6b7b]">
            {SPRACHAGENT_ENABLED
              ? "Stellen Sie ihm Ihre Fragen – per Sprache oder Text, rund um die Uhr."
              : "Treffen Sie Heiko persönlich auf Veranstaltungen in Lüneburg."}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {SPRACHAGENT_ENABLED ? (
              <Link
                href="/sprachagent"
                className="inline-flex items-center gap-2 rounded-sm bg-[#58b046] px-8 py-4 font-bold text-white transition-colors hover:bg-[#4e9e3f]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
                </svg>
                Mit Heiko sprechen
              </Link>
            ) : (
              <Link
                href="/termine"
                className="inline-flex items-center gap-2 rounded-sm bg-[#58b046] px-8 py-4 font-bold text-white transition-colors hover:bg-[#4e9e3f]"
              >
                Termine ansehen
              </Link>
            )}
            <Link
              href="/wahlprogramm"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a3eaf] px-8 py-4 font-bold text-[#1a3eaf] transition-colors hover:bg-[#1a3eaf] hover:text-white"
            >
              Zum Wahlprogramm
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
