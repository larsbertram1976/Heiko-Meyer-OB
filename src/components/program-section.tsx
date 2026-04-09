import Image from "next/image";
import Link from "next/link";
import { programTopics } from "@/lib/program-data";

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
          {programTopics.map((item) => (
            <Link
              key={item.number}
              href={`/wahlprogramm/${item.slug}`}
              className="group relative overflow-hidden rounded-sm"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={`Programmpunkt: ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover overlay with highlights */}
                <div className="absolute inset-0 flex flex-col justify-end bg-[#1a3eaf]/90 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#58b046]">
                      Schwerpunkte
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#58b046]"
                          >
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-white/70">
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
                    </p>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute bottom-14 left-4 flex h-12 w-12 items-center justify-center border-2 border-white bg-white/90 font-black italic text-lg text-[#1a3eaf] transition-opacity duration-300 group-hover:opacity-0">
                  {item.number}
                </div>
              </div>

              {/* Title Bar */}
              <div className="flex items-center justify-between bg-[#58b046] px-4 py-3 transition-colors duration-300 group-hover:bg-[#4e9e3f]">
                <h3 className="text-sm font-bold uppercase text-white md:text-base">
                  {item.title}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 flex-shrink-0 -translate-x-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path d="m12 19 7-7-7-7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
