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

function topicKey(slug: string) {
  return `heiko-topic:${slug}`;
}

export async function GET() {
  try {
    const results: Record<string, number> = {};
    for (const slug of TOPICS) {
      results[slug] = (await kv.get<number>(topicKey(slug))) ?? 0;
    }
    return NextResponse.json({ results });
  } catch {
    const results: Record<string, number> = {};
    for (const slug of TOPICS) {
      results[slug] = 0;
    }
    return NextResponse.json({ results });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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

    // Record votes
    const results: Record<string, number> = {};
    for (const slug of TOPICS) {
      const addVotes = votes[slug] ?? 0;
      if (addVotes > 0) {
        results[slug] = await kv.incrby(topicKey(slug), addVotes);
      } else {
        results[slug] = (await kv.get<number>(topicKey(slug))) ?? 0;
      }
    }

    return NextResponse.json({ results, success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
