import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const VOTE_KEY = "heiko-prevote-count";

export async function GET() {
  try {
    const count = (await kv.get<number>(VOTE_KEY)) ?? 0;
    return NextResponse.json({ count });
  } catch {
    // Fallback if KV is not configured (local dev)
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Simple IP-based duplicate check
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      ?? request.headers.get("x-real-ip")
      ?? "unknown";

    const ipKey = `heiko-vote-ip:${ip}`;
    const hasVoted = await kv.get<boolean>(ipKey);

    if (hasVoted) {
      const count = (await kv.get<number>(VOTE_KEY)) ?? 0;
      return NextResponse.json({ count, alreadyVoted: true });
    }

    // Record vote
    const count = await kv.incr(VOTE_KEY);

    // Mark IP as voted (expires after 30 days)
    await kv.set(ipKey, true, { ex: 60 * 60 * 24 * 30 });

    return NextResponse.json({ count, alreadyVoted: false });
  } catch {
    return NextResponse.json({ count: 0, alreadyVoted: false, error: true });
  }
}
