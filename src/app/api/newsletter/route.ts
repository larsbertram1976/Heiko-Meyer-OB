import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const COUNT_KEY = "heiko-newsletter-count";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  try {
    const count = (await kv.get<number>(COUNT_KEY)) ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, interests } = body as {
      email: string;
      name?: string;
      interests?: string[];
    };

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
        { status: 400 }
      );
    }

    const entryKey = `heiko-newsletter:${email.toLowerCase().trim()}`;

    // Duplicate check
    const existing = await kv.get(entryKey);
    if (existing) {
      const count = (await kv.get<number>(COUNT_KEY)) ?? 0;
      return NextResponse.json({
        alreadySubscribed: true,
        count,
        message:
          "Diese E-Mail-Adresse ist bereits angemeldet. Vielen Dank für Ihr Interesse!",
      });
    }

    // Store subscriber entry
    await kv.set(entryKey, {
      email: email.toLowerCase().trim(),
      name: name?.trim() ?? null,
      interests: interests ?? [],
      timestamp: new Date().toISOString(),
    });

    // Increment counter
    const count = await kv.incr(COUNT_KEY);

    return NextResponse.json({ success: true, count });
  } catch {
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
