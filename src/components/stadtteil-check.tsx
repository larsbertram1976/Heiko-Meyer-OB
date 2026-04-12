"use client";

import { useMemo, useState } from "react";
import mapData from "@/lib/stadtteile-map.json";
import { districtContent } from "@/lib/stadtteile-data";

type District = {
  slug: string;
  name: string;
  d: string;
  cx: number;
  cy: number;
};

// Normalize slugs between map and content (map uses "rotes-feld",
// content uses "rotes_feld" as object key – we match by slug property)
function findContent(slug: string) {
  return Object.values(districtContent).find((c) => c.slug === slug);
}

export function StadtteilCheck() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const districts = mapData.districts as District[];

  const selectedContent = useMemo(
    () => (selected ? findContent(selected) : null),
    [selected]
  );

  return (
    <section className="bg-[#f8f8fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 border-l-4 border-[#58b046] pl-4">
          <h2 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-5xl">
            Stadtteil-Check
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Klicken Sie auf Ihren Stadtteil – was bewegt Sie dort?
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* ===== MAP ===== */}
          <div className="relative overflow-hidden rounded-sm border-2 border-[#1a3eaf]/10 bg-white p-4 shadow-sm">
            <svg
              viewBox={mapData.viewBox}
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full"
              role="img"
              aria-label="Interaktive Karte der Lüneburger Stadtteile"
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background */}
              <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />

              {/* Districts – each in its own <g> with events.
                  A <g> bubbles mouseover from any child path, which means
                  the entire filled area (including multi-subpath polygons)
                  triggers hover reliably across all browsers. */}
              {districts.map((d) => {
                const isSelected = selected === d.slug;
                const isHovered = hovered === d.slug;
                const hasContent = !!findContent(d.slug);
                const fill = isSelected
                  ? "#58b046"
                  : isHovered
                    ? "#1a3eaf"
                    : hasContent
                      ? "#e8ebef"
                      : "#f0f0f0";
                const stroke = isSelected || isHovered ? "#ffffff" : "#c8cdd6";
                return (
                  <g
                    key={d.slug}
                    onClick={hasContent ? () => setSelected(d.slug) : undefined}
                    onMouseOver={hasContent ? () => setHovered(d.slug) : undefined}
                    style={{
                      cursor: hasContent ? "pointer" : "default",
                    }}
                  >
                    <path
                      d={d.d}
                      fill={fill}
                      fillRule="evenodd"
                      stroke={stroke}
                      strokeWidth={isSelected || isHovered ? 2.5 : 1}
                      strokeLinejoin="round"
                      pointerEvents="all"
                      style={{ transition: "fill 0.15s, stroke 0.15s" }}
                    />
                  </g>
                );
              })}

              {/* Labels: only the active one is prominent. All others are
                  small dots; full name appears only for hovered/selected.
                  This prevents overlap and keeps the map clean. */}
              <g pointerEvents="none">
                {districts.map((d) => {
                  const isSelected = selected === d.slug;
                  const isHovered = hovered === d.slug;
                  const active = isSelected || isHovered;
                  return (
                    <g key={`${d.slug}-label`}>
                      {/* Dot marker for non-active districts */}
                      {!active && (
                        <circle
                          cx={d.cx}
                          cy={d.cy}
                          r={3}
                          fill="#1a3eaf"
                          opacity={0.5}
                        />
                      )}
                      {/* Full label only when active */}
                      {active && (
                        <>
                          <rect
                            x={d.cx - d.name.length * 4 - 8}
                            y={d.cy - 12}
                            width={d.name.length * 8 + 16}
                            height={24}
                            rx={4}
                            fill={isSelected ? "#58b046" : "#1a3eaf"}
                          />
                          <text
                            x={d.cx}
                            y={d.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="select-none"
                            fontSize="13"
                            fontWeight="700"
                            fill="#ffffff"
                          >
                            {d.name}
                          </text>
                        </>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Legend / Hint */}
            {!selected && (
              <div className="absolute bottom-4 left-4 right-4 rounded-sm bg-white/90 p-3 text-center text-xs text-[#6b6b7b] backdrop-blur md:hidden">
                <p className="font-semibold text-[#1a3eaf]">
                  Tippen Sie auf einen Stadtteil
                </p>
              </div>
            )}
          </div>

          {/* ===== DETAIL PANEL ===== */}
          <div className="flex flex-col">
            {selectedContent ? (
              <div className="rounded-sm border-l-4 border-[#58b046] bg-white p-6 shadow-sm">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-black uppercase text-[#1a3eaf]">
                      {selectedContent.name}
                    </h3>
                    {selectedContent.inhabitants && (
                      <p className="mt-0.5 text-xs text-[#6b6b7b]">
                        {selectedContent.inhabitants} Einwohner
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-xs text-[#6b6b7b] hover:text-[#1a3eaf]"
                    aria-label="Schließen"
                  >
                    ✕
                  </button>
                </div>

                {/* Character */}
                <p className="mb-5 text-sm italic leading-relaxed text-[#6b6b7b]">
                  {selectedContent.character}
                </p>

                {/* Problems */}
                <div className="mb-5 rounded-sm border-l-2 border-red-400 bg-red-50/50 p-3">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">
                    Das bewegt den Stadtteil
                  </p>
                  <ul className="space-y-1.5">
                    {selectedContent.problems.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-[#2c2c3a]"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-5 rounded-sm border-l-2 border-[#58b046] bg-[#58b046]/5 p-3">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#58b046]">
                    Heikos Lösungen
                  </p>
                  <ul className="space-y-1.5">
                    {selectedContent.solutions.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-sm text-[#2c2c3a]"
                      >
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
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                {selectedContent.quote && (
                  <blockquote className="border-l-4 border-[#1a3eaf] pl-3 text-sm italic text-[#1a1a2e]">
                    &bdquo;{selectedContent.quote}&ldquo;
                  </blockquote>
                )}
              </div>
            ) : (
              <div className="rounded-sm border border-dashed border-[#1a3eaf]/20 bg-white p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a3eaf]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#1a3eaf]"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-[#1a1a2e]">
                  Wählen Sie Ihren Stadtteil
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#6b6b7b]">
                  Klicken Sie auf einen Stadtteil in der Karte, um zu sehen, was
                  die Menschen dort bewegt – und wie Heiko Meyer die Probleme
                  angehen würde.
                </p>
                <div className="mt-4 flex items-center justify-center gap-4 text-[0.65rem] text-[#6b6b7b]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-[#dde4f5]" />
                    Stadtteil
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-[#1a3eaf]" />
                    Hover
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-[#58b046]" />
                    Ausgewählt
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-[0.65rem] text-[#6b6b7b]/50">
          Karten-Geometrie: © OpenStreetMap-Mitwirkende · Stadtteilgrenzen nach
          offizieller Gliederung der Hansestadt Lüneburg
        </p>
      </div>
    </section>
  );
}
