import Link from "next/link";

export function WhyHeikoTeaser() {
  return (
    <section className="bg-[#f8f8fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 border-l-4 border-[#58b046] pl-4">
          <h2 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-5xl">
            Der richtige Mann für Lüneburg
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Warum Heiko Meyer den Unterschied macht
          </p>
        </div>

        {/* Key Numbers */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
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

        {/* Teaser text + CTA */}
        <div className="rounded-sm bg-[#1a3eaf] p-8 md:p-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <p className="text-xl font-black text-white md:text-2xl">
                Parteilos. 20 Jahre Erfahrung. Unternehmer.
              </p>
              <p className="mt-2 text-sm text-white/60">
                Für jedes Thema die richtige Kompetenz – erfahren Sie, warum
                Heiko der Kandidat ist, dem Lüneburg vertrauen kann.
              </p>
            </div>
            <Link
              href="/warum-heiko"
              className="inline-flex items-center gap-2 rounded-sm bg-[#58b046] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#4e9e3f]"
            >
              Mehr erfahren
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m12 19 7-7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
