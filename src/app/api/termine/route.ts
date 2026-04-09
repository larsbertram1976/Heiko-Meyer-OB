import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

function attendKey(terminId: string) {
  return `heiko-termin:${terminId}`;
}

export async function GET() {
  try {
    const keys = await kv.keys("heiko-termin:*");
    const counts: Record<string, number> = {};
    for (const key of keys) {
      const id = key.replace("heiko-termin:", "");
      counts[id] = (await kv.get<number>(key)) ?? 0;
    }
    return NextResponse.json({ counts });
  } catch {
    return NextResponse.json({ counts: {} });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { terminId } = await request.json();
    if (!terminId || typeof terminId !== "string") {
      return NextResponse.json({ error: "Invalid terminId" }, { status: 400 });
    }

    const count = await kv.incr(attendKey(terminId));
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
