import Link from "next/link";
import mapData from "@/lib/stadtteile-map.json";

type District = {
  slug: string;
  name: string;
  d: string;
  cx: number;
  cy: number;
};

export function StadtteilTeaser() {
  const districts = mapData.districts as District[];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text */}
          <div>
            <div className="mb-4 border-l-4 border-[#58b046] pl-4">
              <h2 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-5xl">
                Ihr Stadtteil,
                <br />
                Ihre Themen.
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Was bewegt die Menschen in Kaltenmoor? Was braucht die Weststadt?
                Wie geht es der Altstadt?
              </p>
            </div>

            <p className="mb-6 max-w-lg text-base leading-relaxed text-[#6b6b7b]">
              Heiko Meyer kennt L&uuml;neburg von A bis Z &ndash; vom historischen Kern
              bis zu den Stadtr&auml;ndern. Im <strong>Stadtteil-Check</strong> sehen
              Sie, was Ihren Stadtteil bewegt und wie Heiko die konkreten Probleme
              angehen w&uuml;rde.
            </p>

            {/* Bullet list */}
            <ul className="mb-8 space-y-2 text-sm text-[#2c2c3a]">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#58b046]"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>17 L&uuml;neburger Stadtteile auf einer interaktiven Karte</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#58b046]"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>Konkrete Probleme pro Stadtteil auf einen Blick</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#58b046]"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>Heikos L&ouml;sungen &ndash; pragmatisch und umsetzbar</span>
              </li>
            </ul>

            <Link
              href="/stadtteile"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1a3eaf] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#15349a]"
            >
              Zum Stadtteil-Check
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
                <path d="m12 19 7-7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Mini Map Visual */}
          <Link
            href="/stadtteile"
            className="group relative block overflow-hidden rounded-sm border-2 border-[#1a3eaf]/10 bg-[#f8f8fa] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <svg
              viewBox={mapData.viewBox}
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full"
              role="img"
              aria-label="Lüneburger Stadtteile"
            >
              <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
              {districts.map((d) => (
                <path
                  key={d.slug}
                  d={d.d}
                  fill="#e8ebef"
                  stroke="#c8cdd6"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  className="transition-colors duration-300 group-hover:fill-[#dde4f5]"
                />
              ))}
              {districts.map((d) => (
                <circle
                  key={`${d.slug}-dot`}
                  cx={d.cx}
                  cy={d.cy}
                  r={4}
                  fill="#1a3eaf"
                  className="opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />
              ))}
            </svg>

            {/* Overlay badge */}
            <div className="absolute right-6 top-6 rounded-sm bg-[#58b046] px-3 py-1.5 text-xs font-bold uppercase text-white shadow-lg">
              17 Stadtteile
            </div>

            {/* Hover hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#1a3eaf] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              Jetzt erkunden →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
