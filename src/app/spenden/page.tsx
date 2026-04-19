import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spenden | Heiko Meyer für Lüneburg",
  description:
    "Unterstützen Sie Heiko Meyers Wahlkampf mit einer Spende. Parteiloser OB-Kandidat für Lüneburg, OB-Wahl 13. September 2026.",
  alternates: {
    canonical: "https://meyer-lueneburg.de/spenden",
  },
};

export default function SpendenPage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a3eaf] py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-wider text-white/50">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            Jeder Beitrag z&auml;hlt
          </div>
          <h1 className="text-3xl font-black uppercase text-white md:text-5xl">
            Wahlkampf unterst&uuml;tzen
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            Eine Kampagne kostet Geld &ndash; f&uuml;r Plakate, Veranstaltungen
            und Materialien. Mit Ihrer Spende helfen Sie, L&uuml;neburg
            voranzubringen.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left: Bank details + info */}
          <div>
            {/* Bank details card */}
            <div className="rounded-sm border-l-4 border-[#58b046] bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-black uppercase text-[#1a3eaf]">
                Spende per &Uuml;berweisung
              </h2>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6b6b7b]">
                    Kontoinhaber
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#1a1a2e]">
                    Heiko Meyer
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6b6b7b]">
                    IBAN
                  </p>
                  <p className="mt-1 select-all font-mono text-base font-semibold text-[#1a1a2e]">
                    DE25 2406 0300 0713 5122 00
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6b6b7b]">
                    BIC
                  </p>
                  <p className="mt-1 font-mono text-base font-semibold text-[#1a1a2e]">
                    GENODEF1NBU
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#6b6b7b]">
                    Bank
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#1a1a2e]">
                    Volksbank L&uuml;neburger Heide eG
                  </p>
                </div>
                <div className="rounded-sm bg-[#1a3eaf]/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1a3eaf]">
                    Verwendungszweck
                  </p>
                  <p className="mt-1 font-mono text-base font-bold text-[#1a3eaf]">
                    Spende OB-Wahlkampf Heiko Meyer
                  </p>
                </div>
              </div>
            </div>

            {/* Why donate */}
            <div className="mt-8 rounded-sm bg-[#f8f8fa] p-6 md:p-8">
              <h3 className="text-lg font-black uppercase text-[#1a3eaf]">
                Wof&uuml;r wird Ihre Spende eingesetzt?
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Plakate und Wahlkampfmaterialien",
                  "Veranstaltungen und B&uuml;rgerdialoge",
                  "Website und digitale Kommunikation",
                  "Infostand-Ausstattung und Flyer",
                  "Organisation und Logistik",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#2c2c3a]"
                    dangerouslySetInnerHTML={{
                      __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 h-4 w-4 flex-shrink-0 text-[#58b046]"><path d="M5 12l5 5L20 7"/></svg>${item}`,
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Legal info */}
          <div className="space-y-6">
            {/* Important notice for independent candidate */}
            <div className="rounded-sm border-2 border-[#1a3eaf]/20 bg-[#1a3eaf]/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#1a3eaf]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <p className="text-sm font-bold text-[#1a3eaf]">
                  Wichtiger Hinweis
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[#2c2c3a]">
                Heiko Meyer tritt als <strong>parteiloser Einzelbewerber</strong>{" "}
                an. Spenden an parteilose Kandidat:innen sind{" "}
                <strong>nicht steuerlich absetzbar</strong> &ndash; im Unterschied
                zu Spenden an Parteien. Es kann keine Spendenquittung
                f&uuml;r die Steuererkl&auml;rung ausgestellt werden.
              </p>
            </div>

            {/* Transparency */}
            <div className="rounded-sm bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#1a3eaf]">
                Transparenz &amp; Rechtsgrundlagen
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-[#6b6b7b]">
                <p>
                  <strong className="text-[#1a1a2e]">Anonyme Spenden:</strong>{" "}
                  Spenden &uuml;ber 500&thinsp;&euro; d&uuml;rfen nicht anonym
                  entgegengenommen werden.
                </p>
                <p>
                  <strong className="text-[#1a1a2e]">Anzeigepflicht:</strong>{" "}
                  Einzelspenden &uuml;ber 1.000&thinsp;&euro; werden dem
                  Wahlleiter angezeigt, wie es das Nds. Kommunalwahlgesetz
                  vorsieht.
                </p>
                <p>
                  <strong className="text-[#1a1a2e]">
                    Rechenschaftsbericht:
                  </strong>{" "}
                  Nach der Wahl legt Heiko Meyer als Einzelbewerber einen
                  Rechenschaftsbericht &uuml;ber Einnahmen und Ausgaben des
                  Wahlkampfs vor.
                </p>
                <p>
                  <strong className="text-[#1a1a2e]">
                    Unternehmensspenden:
                  </strong>{" "}
                  Spenden von juristischen Personen (GmbH, AG) und
                  Personengesellschaften sind grunds&auml;tzlich m&ouml;glich,
                  aber <strong>nicht steuerlich absetzbar</strong>.
                </p>
              </div>
            </div>

            {/* Thank you */}
            <div className="rounded-sm border-l-4 border-[#58b046] bg-[#58b046]/5 p-5">
              <p className="text-sm font-semibold text-[#1a1a2e]">
                Herzlichen Dank!
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6b6b7b]">
                Jeder Betrag hilft &ndash; ob 5&thinsp;&euro; oder
                500&thinsp;&euro;. Als parteiloser Kandidat ist Heiko auf die
                Unterst&uuml;tzung der L&uuml;neburger:innen angewiesen. Kein
                Parteiapparat, kein gro&szlig;es Budget &ndash; daf&uuml;r umso
                mehr Herzblut.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-sm bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-[#6b6b7b]">
                Fragen zu Spenden?
              </p>
              <p className="mt-2 text-sm text-[#2c2c3a]">
                <a
                  href="mailto:heiko@meyer-lueneburg.de"
                  className="font-semibold text-[#1a3eaf] hover:underline"
                >
                  heiko@meyer-lueneburg.de
                </a>
                <br />
                +49 160 747 17 00
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/mitmachen"
            className="text-sm text-[#6b6b7b] hover:text-[#1a3eaf]"
          >
            &larr; Zur&uuml;ck zu Mitmachen
          </Link>
          <Link
            href="/"
            className="text-sm text-[#6b6b7b] hover:text-[#1a3eaf]"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </article>
  );
}
