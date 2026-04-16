import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const TOPICS = [
  "miteinander",
  "sicherheit",
  "wohnraum",
  "wirtschaft",
  "bildung",
  "soziales",
  "verkehr",
  "kultur",
  "sport",
];

// All valid sub-topic labels per topic slug
const SUBTOPICS: Record<string, string[]> = {
  miteinander: [
    "Bürgerbeteiligung fördern",
    "Verwaltung neuorganisieren",
    "Steuerverschwendung beenden",
    "Transparenz stärken",
    "Begegnungsräume schaffen",
    "Digitalisierung der Verwaltung",
  ],
  sicherheit: [
    "Mehr Polizeipräsenz in der Innenstadt",
    "Kommunaler Ordnungsdienst – jetzt",
    "Aufsuchende Sozialarbeit stärken",
    "Klare Regeln für öffentliche Plätze",
    "Zusammenarbeit aller Akteure",
  ],
  wohnraum: [
    "Wohnraum über Geschäften aktivieren",
    "Digitales Bauamt: Neubau beschleunigen",
    "Bürokratie beim Bauen abbauen",
    "Sozial und fair",
  ],
  wirtschaft: [
    "Leerstand aktiv bekämpfen",
    "Wirtschafts-Perspektive ins Rathaus",
    "Das \"Kaufhaus Lüneburg\" stärken",
    "Wohnraum über Geschäften",
  ],
  bildung: [
    "Zusammenarbeit mit der Leuphana stärken",
    "Ganztagsschulen ausbauen",
    "Bildungspakt 2040 umsetzen",
    "Fachkräfte für Lüneburg",
  ],
  soziales: [
    "Bezahlbarer Wohnraum als Grundrecht",
    "Familien besser unterstützen",
    "Begegnungsräume für alle",
    "Chancengleichheit",
  ],
  verkehr: [
    "Alle Verkehrsteilnehmer berücksichtigen",
    "Ausreichend Stellplätze",
    "Vier kostenfreie Park-and-Ride-Plätze",
    "Bessere Baustellenkoordination",
    "Zusammenarbeit mit dem Landkreis",
    "Umwelt und Klimaschutz",
  ],
  kultur: [
    "Kulturräume sichern und schaffen",
    "Veranstaltungen fördern",
    "Kultur für alle",
    "Lüneburgs Geschichte lebendig halten",
  ],
  sport: [
    "Sportstätten sanieren und ausbauen",
    "Vereine stärken",
    "Schwimmen lernen und Breitensport",
    "Bewegung im öffentlichen Raum",
  ],
};

function topicKey(slug: string) {
  return `heiko-topic:${slug}`;
}

function slugifySubtopic(label: string): string {
  return label
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function subtopicKey(topicSlug: string, subLabel: string) {
  return `heiko-subtopic:${topicSlug}:${slugifySubtopic(subLabel)}`;
}

async function fetchSubResults(): Promise<Record<string, Record<string, number>>> {
  const subResults: Record<string, Record<string, number>> = {};
  for (const [topicSlug, subs] of Object.entries(SUBTOPICS)) {
    subResults[topicSlug] = {};
    for (const sub of subs) {
      const key = slugifySubtopic(sub);
      subResults[topicSlug][key] = (await kv.get<number>(subtopicKey(topicSlug, sub))) ?? 0;
    }
  }
  return subResults;
}

export async function GET() {
  try {
    const results: Record<string, number> = {};
    for (const slug of TOPICS) {
      results[slug] = (await kv.get<number>(topicKey(slug))) ?? 0;
    }
    const subResults = await fetchSubResults();
    return NextResponse.json({ results, subResults });
  } catch {
    const results: Record<string, number> = {};
    for (const slug of TOPICS) {
      results[slug] = 0;
    }
    return NextResponse.json({ results, subResults: {} });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Handle sub-topic votes (standalone, no main votes required)
    if (body.subVotes && !body.votes) {
      const subVotes = body.subVotes as Record<string, string[]>;

      for (const [topicSlug, subLabels] of Object.entries(subVotes)) {
        if (!TOPICS.includes(topicSlug)) continue;
        const validSubs = SUBTOPICS[topicSlug] ?? [];
        for (const label of subLabels) {
          if (!validSubs.includes(label)) continue;
          await kv.incrby(subtopicKey(topicSlug, label), 1);
        }
      }

      const subResults = await fetchSubResults();
      return NextResponse.json({ subResults, success: true });
    }

    // Handle main topic votes
    const votes = body.votes as Record<string, number>;

    if (!votes || typeof votes !== "object") {
      return NextResponse.json({ error: "Invalid votes" }, { status: 400 });
    }

    // Validate: max 9 total votes, only valid topics, no negative
    let total = 0;
    for (const [slug, count] of Object.entries(votes)) {
      if (!TOPICS.includes(slug)) {
        return NextResponse.json({ error: `Invalid topic: ${slug}` }, { status: 400 });
      }
      if (typeof count !== "number" || count < 0 || count > 9) {
        return NextResponse.json({ error: "Invalid vote count" }, { status: 400 });
      }
      total += count;
    }

    if (total > 9 || total < 1) {
      return NextResponse.json({ error: "Must use 1-9 votes" }, { status: 400 });
    }

    // Record main votes
    const results: Record<string, number> = {};
    for (const slug of TOPICS) {
      const addVotes = votes[slug] ?? 0;
      if (addVotes > 0) {
        results[slug] = await kv.incrby(topicKey(slug), addVotes);
      } else {
        results[slug] = (await kv.get<number>(topicKey(slug))) ?? 0;
      }
    }

    // Also handle any subVotes bundled with main votes
    if (body.subVotes) {
      const subVotes = body.subVotes as Record<string, string[]>;
      for (const [topicSlug, subLabels] of Object.entries(subVotes)) {
        if (!TOPICS.includes(topicSlug)) continue;
        const validSubs = SUBTOPICS[topicSlug] ?? [];
        for (const label of subLabels) {
          if (!validSubs.includes(label)) continue;
          await kv.incrby(subtopicKey(topicSlug, label), 1);
        }
      }
    }

    const subResults = await fetchSubResults();
    return NextResponse.json({ results, subResults, success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
