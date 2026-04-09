import Link from "next/link";

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Parteilos – nur Ihnen verpflichtet",
    text: "Kein Parteivorstand bestimmt, was ich tue. Meine einzige Verpflichtung gilt den Lüneburgerinnen und Lüneburgern. Nicht die Partei geht vor, sondern der Mensch.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
    title: "20 Jahre Erfahrung – kein Neuling",
    text: "Als LCM-Vorsitzender kenne ich jeden Winkel der Verwaltung, jeden Händler in der Innenstadt und die Herausforderungen unserer Stadt aus erster Hand.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
    title: "45% in der Stichwahl 2021",
    text: "Fast die Hälfte der Lüneburger hat mir 2021 ihr Vertrauen geschenkt – mehr als den Kandidaten von SPD und CDU. Dieses Mal will ich es über die Ziellinie schaffen.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      </svg>
    ),
    title: "Unternehmer – kein Berufspolitiker",
    text: "Ich weiß, was es heißt, Verantwortung zu tragen, Mitarbeiter zu führen und Ergebnisse zu liefern. Diesen Macher-Blick bringe ich ins Rathaus.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Pragmatisch statt ideologisch",
    text: "Mich interessiert nicht, ob eine Idee links oder rechts ist – mich interessiert, ob sie gut für Lüneburg ist. Entscheidungen treffen wir pragmatisch, transparent und gemeinsam.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    title: "Ur-Lüneburger mit Herzblut",
    text: "57 Jahre in dieser Stadt. Hier aufgewachsen, hier verwurzelt, hier geerdet. Ich liebe Lüneburg – und ich will, dass es unserer Hansestadt gut geht.",
  },
];

export function WhyHeikoSection() {
  return (
    <section className="bg-[#f8f8fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 border-l-4 border-[#58b046] pl-4">
          <h2 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-5xl">
            Warum Heiko Meyer?
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            6 Gründe, mir Ihre Stimme zu geben
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group rounded-sm border-l-4 border-[#1a3eaf] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#1a3eaf]/10 text-[#1a3eaf] transition-colors group-hover:bg-[#1a3eaf] group-hover:text-white">
                {r.icon}
              </div>
              <h3 className="text-base font-bold text-[#1a1a2e]">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b6b7b]">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div className="mt-12 rounded-sm bg-[#1a3eaf] p-8 md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <blockquote className="text-lg font-semibold italic text-white md:text-xl">
                &bdquo;Ich trete an, um Oberbürgermeister der wunderschönen
                Hansestadt Lüneburg zu werden – bürgernah und unabhängig.&ldquo;
              </blockquote>
              <p className="mt-3 text-sm text-white/50">
                Heiko Meyer · Unabhängiger OB-Kandidat · 14. September 2026
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
