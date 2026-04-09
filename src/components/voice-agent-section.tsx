import Image from "next/image";
import Link from "next/link";

export function VoiceAgentTeaser() {
  return (
    <section id="sprachagent" className="bg-[#1a3eaf] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Avatar */}
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#58b046] bg-white">
            <Image
              src="/logo-AIP8sSah.webp"
              alt="KI-Assistent von Heiko Meyer"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-black uppercase text-white md:text-5xl">
              Fragen? Sprechen Sie mit mir!
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Mein KI-Assistent kennt mein Wahlprogramm und beantwortet Ihre
              Fragen – per Sprache oder Text. Probieren Sie es aus!
            </p>
          </div>

          <Link
            href="/sprachagent"
            className="inline-flex items-center gap-3 rounded-sm bg-[#58b046] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#4e9e3f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
            Jetzt mit Heiko sprechen
          </Link>
        </div>
      </div>
    </section>
  );
}
