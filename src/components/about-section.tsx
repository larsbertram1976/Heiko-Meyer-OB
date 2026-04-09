import Image from "next/image";

const facts = [
  "57 Jahre, verheiratet, 2 Kinder, Familienmensch",
  "Kaufmann & Unternehmer",
  "Vorsitzender des Lüneburger City-Managements (LCM) (20 Jahre)",
  "Gewähltes Mitglied im Stadtrat Lüneburg (5 Jahre)",
  "Bindeglied der Kaufleute in Lüneburg (20 Jahre)",
  "Mitglied des Bauausschusses (20 Jahre)",
  "Mitglied oder stellvertretendes Mitglied des Mobilitätsausschusses (20 Jahre)",
  "Mitglied des Aufsichtsrates der Lüneburger Stadtmarketing (LGM) (20 Jahre)",
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
            Lüneburg und ich - wir gehören zusammen.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column: Photo + Kurz & Knapp */}
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

            {/* Kurz & Knapp */}
            <div className="border-l-4 border-[#1a3eaf] pl-4">
              <h3 className="mb-4 text-xl font-black uppercase text-[#1a3eaf]">
                Kurz & Knapp
              </h3>
              <ul className="space-y-2">
                {facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-[#1a3eaf]" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Quote + Text + Signature */}
          <div className="flex flex-col gap-8">
            {/* Quote Box */}
            <blockquote className="border-l-4 border-[#58b046] bg-[#1a3eaf] p-6 text-lg font-semibold italic text-white md:text-xl">
              Hier bin ich aufgewachsen und verwurzelt. Hier bin ich nicht nur
              vernetzt, sondern auch geerdet.
            </blockquote>

            {/* Bio Text */}
            <div className="space-y-4 rounded-sm border p-6 text-base leading-relaxed text-foreground">
              <p>Liebe Lüneburgerinnen und Lüneburger,</p>
              <p>
                ich lebe mit meiner Familie seit Jahrzehnten in unserer
                wunderschönen Hansestadt und ich arbeite hier auch.
              </p>
              <p>
                Daher kann ich auf eine lange Geschichte in den
                Verwaltungsgremien zurückblicken: In den Jahren von 2016 bis 2021
                war ich parteiloses Mitglied des Stadtrates. Seit über 20 Jahren
                und bis heute bin ich Mitglied im Bauausschuss und
                stellvertretendes Mitglied im Mobilitätsausschuss der Hansestadt
                Lüneburg. Darüber hinaus bin ich schon seit 16 Jahren Mitglied im
                Aufsichtsrat der Lüneburg Marketing GmbH LMG. Sogar schon 20
                Jahre führe ich als Vorsitzender das Lüneburger City Management
                LCM, die Interessengemeinschaft der Gewerbetreibenden in
                Lüneburg.
              </p>
              <p>
                Meine langjährige Erfahrung auf dem politischen Lüneburger
                Parkett und mit der Lüneburger Verwaltung sind die Basis meiner
                Kandidatur. Ich weiß genau, wo der Schuh drückt – und wo wir als
                Stadt dringend neue, auch mutige Wege gehen müssen.
              </p>
              <p>
                Mein Antrieb ist es, Lüneburg nicht nur zu verwalten, sondern
                aktiv zu gestalten. Wir stehen vor großen Aufgaben: Das
                Miteinander der Menschen in unserer Stadt ist wichtig, die
                Sicherheit auf unseren Straßen, die Schaffung von bezahlbarem
                Wohnraum, die Sicherung unseres Wirtschaftsstandortes, die
                Stärkung unserer Bildungs- und Universitätslandschaft sowie ein
                Verkehrskonzept, das alle Verkehrsteilnehmer miteinander
                versöhnt.
              </p>
              <p>
                Dafür trete ich an: Unabhängig, überparteilich und mit dem klaren
                Ziel, die Bürgerinteressen in den Mittelpunkt zu stellen. Es ist
                an der Zeit, dass wir Entscheidungen pragmatisch, transparent und
                gemeinsam treffen. Ich stehe für Bürgernähe und einen fairen
                Interessenausgleich.
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
