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
            9 Punkte f\u00fcr ein besseres L\u00fcneburg
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {programTopics.map((item) => (
            <Link
              key={item.number}
              href={`/wahlprogramm/${item.slug}`}
              className="group relative overflow-hidden rounded-sm transition-transform hover:-translate-y-1"
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
              <div className="flex items-center justify-between bg-[#58b046] px-4 py-3">
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
                  className="h-5 w-5 flex-shrink-0 text-white opacity-0 transition-opacity group-hover:opacity-100"
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
