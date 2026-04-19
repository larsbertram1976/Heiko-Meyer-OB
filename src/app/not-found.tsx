import Link from "next/link";
import type { Metadata } from "next";
import { BackButton } from "@/components/back-button";
import { SPRACHAGENT_ENABLED } from "@/lib/feature-flags";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Heiko Meyer für Lüneburg",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-8xl font-black text-[#1a3eaf] md:text-9xl">404</p>
      <h1 className="mt-4 text-2xl font-black text-[#1a1a2e] md:text-3xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-md text-base text-[#6b6b7b]">
        Die gesuchte Seite existiert leider nicht. Möglicherweise wurde sie
        verschoben oder entfernt.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm bg-[#1a3eaf] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1530a0]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Startseite
        </Link>
        <Link
          href="/wahlprogramm"
          className="inline-flex items-center gap-2 rounded-sm border-2 border-[#1a3eaf] px-6 py-3 font-semibold text-[#1a3eaf] transition-colors hover:bg-[#1a3eaf]/5"
        >
          Wahlprogramm
        </Link>
        {SPRACHAGENT_ENABLED && (
        <Link
          href="/sprachagent"
          className="inline-flex items-center gap-2 rounded-sm border-2 border-[#58b046] px-6 py-3 font-semibold text-[#58b046] transition-colors hover:bg-[#58b046]/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
          Mit Heiko sprechen
        </Link>
        )}
      </div>

      <BackButton />
    </div>
  );
}
