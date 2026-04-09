import Image from "next/image";

const programItems = [
  { number: "01", title: "Miteinander für Lüneburg: #TeamLueneburg", image: "/programmpunkt_1.webp" },
  { number: "02", title: "Für ein sicheres Lüneburg", image: "/programmpunkt_2.webp" },
  { number: "03", title: "Für mehr bezahlbaren Wohnraum", image: "/programmpunkt_3.webp" },
  { number: "04", title: "Für einen starken und attraktiven Wirtschaftsstandort", image: "/programmpunkt_4.webp" },
  { number: "05", title: "Für eine attraktive Bildungs- und Universitätsstadt", image: "/programmpunkt_5.webp" },
  { number: "06", title: "Für ein soziales Lüneburg", image: "/programmpunkt_6.webp" },
  { number: "07", title: "Für ein zukunftsfähiges Umwelt- und Verkehrskonzept", image: "/programmpunkt_7.webp" },
  { number: "08", title: "Für ein kulturell reiches Lüneburg", image: "/programmpunkt_8.webp" },
  { number: "09", title: "Für ein sportliches Lüneburg", image: "/programmpunkt_9.webp" },
];

export function ProgramSection() {
  return (
    <section id="wahlprogramm" className="bg-[#1a3eaf] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 border-l-4 border-[#58b046] pl-4">
          <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
            Mein Wahlprogramm
          </h2>
          <p className="mt-2 text-lg text-white/80">
            9 Punkte für ein besseres Lüneburg
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {programItems.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-sm"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={`Programmpunkt: ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Number Badge */}
                <div className="absolute bottom-14 left-4 flex h-12 w-12 items-center justify-center border-2 border-white bg-white/90 font-black italic text-[#1a3eaf] text-lg">
                  {item.number}
                </div>
              </div>
              {/* Title Bar */}
              <div className="bg-[#58b046] px-4 py-3">
                <h3 className="text-sm font-bold uppercase text-white md:text-base">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
