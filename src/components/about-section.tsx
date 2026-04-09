import Image from "next/image";

const milestones = [
  { years: "20+", label: "Jahre LCM-Vorsitzender", detail: "250+ Mitglieder aufgebaut" },
  { years: "20+", label: "Jahre im Bauausschuss", detail: "Lüneburg mitgestaltet" },
  { years: "16", label: "Jahre im Aufsichtsrat LMG", detail: "Stadtmarketing begleitet" },
  { years: "5", label: "Jahre im Stadtrat", detail: "Parteilos für alle Bürger" },
];

const priorities = [
  "Miteinander der Menschen",
  "Sicherheit auf unseren Straßen",
  "Bezahlbarer Wohnraum",
  "Starker Wirtschaftsstandort",
  "Bildung & Universität",
  "Verkehr, der alle versöhnt",
];

export function AboutSection() {
  return (
    <section id="ueber-mich" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-[#58b046] pl-4">
          <h2 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-5xl">
            Über Mich
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Lüneburg und ich – wir gehören zusammen.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column: Photo + Steckbrief */}
          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-sm border-4 border-[#1a3eaf]">
              <div className="absolute inset-y-0 right-0 w-2 bg-[#58b046]" />
              <Image
                src="/aboutme.jpg"
                alt="Heiko Meyer privat in Lüneburg"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Steckbrief als Karten */}
            <div>
              <h3 className="mb-4 border-l-4 border-[#1a3eaf] pl-4 text-xl font-black uppercase text-[#1a3eaf]">
                Kurz & Knapp
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f8f8fa] p-4">
                  <p className="text-2xl font-black text-[#1a3eaf]">57</p>
                  <p className="text-xs text-[#6b6b7b]">Jahre, Familienmensch</p>
                </div>
                <div className="bg-[#f8f8fa] p-4">
                  <p className="text-2xl font-black text-[#1a3eaf]">2</p>
                  <p className="text-xs text-[#6b6b7b]">Ausbildungen absolviert</p>
                </div>
                <div className="bg-[#f8f8fa] p-4">
                  <p className="text-2xl font-black text-[#58b046]">250+</p>
                  <p className="text-xs text-[#6b6b7b]">LCM-Mitglieder</p>
                </div>
                <div className="bg-[#f8f8fa] p-4">
                  <p className="text-2xl font-black text-[#58b046]">45%</p>
                  <p className="text-xs text-[#6b6b7b]">Stichwahl 2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote + Text + Signature */}
          <div className="flex flex-col gap-6">
            {/* Quote Box */}
            <blockquote className="border-l-4 border-[#58b046] bg-[#1a3eaf] p-6 text-lg font-semibold italic text-white md:text-xl">
              Hier bin ich aufgewachsen und verwurzelt. Hier bin ich nicht nur
              vernetzt, sondern auch geerdet.
            </blockquote>

            {/* Anrede */}
            <p className="text-lg leading-relaxed text-[#2c2c3a]">
              Liebe Lüneburgerinnen und Lüneburger,
            </p>
            <p className="text-base leading-relaxed text-[#6b6b7b]">
              ich lebe mit meiner Familie seit Jahrzehnten in unserer
              wunderschönen Hansestadt und ich arbeite hier auch.
            </p>

            {/* Erfahrungs-Timeline */}
            <div className="rounded-sm bg-[#f8f8fa] p-6">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#1a3eaf]">
                Meine Erfahrung für Lüneburg
              </h4>
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div key={m.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-14 flex-shrink-0 items-center justify-center bg-[#1a3eaf] text-sm font-black text-white">
                      {m.years}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a2e]">{m.label}</p>
                      <p className="text-xs text-[#6b6b7b]">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight-Zitat */}
            <p className="border-l-4 border-[#58b046] pl-4 text-base font-semibold leading-relaxed text-[#1a1a2e]">
              Ich weiß genau, wo der Schuh drückt – und wo wir als Stadt
              dringend neue, auch mutige Wege gehen müssen.
            </p>

            {/* Aufgaben als Tags */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#1a3eaf]">
                Mein Antrieb – die großen Aufgaben:
              </p>
              <div className="flex flex-wrap gap-2">
                {priorities.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-[#1a3eaf]/20 bg-[#1a3eaf]/5 px-4 py-2 text-sm font-medium text-[#1a3eaf]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Abschluss */}
            <div className="rounded-sm border-2 border-[#58b046]/30 bg-[#58b046]/5 p-6">
              <p className="text-base leading-relaxed text-[#2c2c3a]">
                <span className="font-bold">Dafür trete ich an:</span> Unabhängig,
                überparteilich und mit dem klaren Ziel, die Bürgerinteressen in
                den Mittelpunkt zu stellen. Es ist an der Zeit, dass wir
                Entscheidungen <span className="font-bold text-[#1a3eaf]">pragmatisch, transparent und
                gemeinsam</span> treffen.
              </p>
            </div>

            {/* Signature */}
            <div className="flex flex-col items-start gap-2">
              <Image
                src="/signature.png"
                alt="Unterschrift von Heiko Meyer"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
              <p className="text-lg font-semibold text-[#1a3eaf]">
                Ihr Heiko Meyer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
