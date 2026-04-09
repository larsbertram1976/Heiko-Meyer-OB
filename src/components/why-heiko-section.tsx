import Link from "next/link";

const competenceMatches = [
  {
    theme: "Sicherheit & Ordnung",
    competence: "20 Jahre Brücke zwischen Kaufleuten und Rathaus",
    fact: "Als LCM-Vorsitzender hat Heiko das Sicherheitsproblem Am Sande seit Jahren auf die politische Agenda gebracht – lange bevor es Wahlkampfthema wurde.",
    emotion: "Er spricht nicht über Probleme. Er kennt die Menschen, die darunter leiden – Händler, Anwohner, Familien.",
  },
  {
    theme: "Wirtschaft & Innenstadt",
    competence: "250+ Mitglieder im LCM aufgebaut",
    fact: "Von 80 auf über 250 Mitglieder: Heiko hat das Lüneburger City Management zur stärksten Stimme der Innenstadt gemacht. Er kennt jeden Eigentümer persönlich.",
    emotion: "Wenn ein Laden schließt, ist das für ihn nicht nur eine Statistik – es sind Menschen, deren Lebenswerk auf dem Spiel steht.",
  },
  {
    theme: "Verwaltung & Bürgernähe",
    competence: "5 Jahre Stadtrat + 20 Jahre Bauausschuss",
    fact: "Heiko kennt die Verwaltung von innen. Er weiß, wo Prozesse haken, welche Entscheidungswege zu lang sind und wo Steuergelder besser eingesetzt werden könnten.",
    emotion: "Sein Versprechen: Ein Oberbürgermeister, den man ansprechen kann. Nicht abgehoben, sondern mittendrin.",
  },
  {
    theme: "Wohnraum & Soziales",
    competence: "Unternehmer mit Praxisblick",
    fact: "Als Geschäftsführer von HM Objekteinrichtungen weiß Heiko, was Bürokratie bedeutet. Sein Ansatz: Leerstand aktivieren statt jahrelang auf Neubau warten.",
    emotion: "Wohnen ist ein Grundbedürfnis. Heiko kämpft dafür, dass Lüneburg eine Stadt für alle bleibt – nicht nur für die, die es sich leisten können.",
  },
  {
    theme: "Verkehr & Mobilität",
    competence: "20 Jahre im Mobilitätsausschuss",
    fact: "Heiko sitzt seit zwei Jahrzehnten im Bauausschuss und kennt jede Baustelle, jede Verkehrsplanung, jeden Engpass. Er weiß, warum drei Hauptstraßen gleichzeitig dicht waren.",
    emotion: "Pragmatisch statt ideologisch: Nicht Auto gegen Rad, sondern ein Konzept, das für alle funktioniert.",
  },
];

export function WhyHeikoSection() {
  return (
    <section className="bg-[#f8f8fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-6 border-l-4 border-[#58b046] pl-4">
          <h2 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-5xl">
            Der richtige Mann für Lüneburg
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Warum Heiko Meyer den Unterschied macht
          </p>
        </div>

        {/* Intro */}
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-[#6b6b7b]">
          Lüneburg braucht keinen Berufspolitiker, der verwaltet. Lüneburg
          braucht jemanden, der diese Stadt lebt, ihre Menschen kennt und den Mut
          hat, Dinge anders zu machen. Heiko Meyer bringt etwas mit, das kein
          anderer Kandidat hat: <span className="font-bold text-[#1a1a2e]">20 Jahre Erfahrung an der Schnittstelle
          zwischen Bürgern, Wirtschaft und Verwaltung</span> – ohne Parteibrille.
        </p>

        {/* Key Numbers */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-sm bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-[#1a3eaf]">57</p>
            <p className="mt-1 text-xs text-[#6b6b7b]">Jahre Lüneburger</p>
          </div>
          <div className="rounded-sm bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-[#1a3eaf]">20+</p>
            <p className="mt-1 text-xs text-[#6b6b7b]">Jahre für die Stadt aktiv</p>
          </div>
          <div className="rounded-sm bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-[#58b046]">45%</p>
            <p className="mt-1 text-xs text-[#6b6b7b]">Stichwahl 2021</p>
          </div>
          <div className="rounded-sm bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-[#58b046]">0</p>
            <p className="mt-1 text-xs text-[#6b6b7b]">Parteiverpflichtungen</p>
          </div>
        </div>

        {/* Competence Matching */}
        <div className="mb-4 border-l-4 border-[#1a3eaf] pl-4">
          <h3 className="text-xl font-black uppercase text-[#1a3eaf] md:text-2xl">
            Kompetenz trifft Thema
          </h3>
          <p className="mt-1 text-sm text-[#6b6b7b]">
            Für jedes Thema die richtige Erfahrung
          </p>
        </div>

        <div className="mb-12 space-y-4">
          {competenceMatches.map((m) => (
            <div
              key={m.theme}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Theme + Competence */}
                <div className="flex items-center gap-4 border-b border-black/[0.06] bg-[#1a3eaf]/[0.03] p-5 md:w-72 md:flex-shrink-0 md:border-b-0 md:border-r">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1a3eaf]">
                      {m.theme}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#1a1a2e]">
                      {m.competence}
                    </p>
                  </div>
                </div>
                {/* Right: Fact + Emotion */}
                <div className="flex-1 p-5">
                  <p className="text-sm leading-relaxed text-[#2c2c3a]">
                    {m.fact}
                  </p>
                  <p className="mt-3 border-l-2 border-[#58b046] pl-3 text-sm italic text-[#6b6b7b]">
                    {m.emotion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="rounded-sm bg-[#1a3eaf] p-8 md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <p className="text-2xl font-black text-white md:text-3xl">
                Nicht die Partei geht vor –<br />
                <span className="text-[#58b046]">sondern der Mensch.</span>
              </p>
              <p className="mt-3 text-sm text-white/50">
                14. September 2026 · Ihre Stimme für ein Lüneburg, das gestaltet statt verwaltet.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sprachagent"
                className="inline-flex items-center gap-2 rounded-sm bg-[#58b046] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#4e9e3f]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
                </svg>
                Mit Heiko sprechen
              </Link>
              <Link
                href="/wahlprogramm"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Zum Wahlprogramm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
