"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const CONSENT_KEY = "heiko-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === "accepted") {
      setAnalyticsAllowed(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setAnalyticsAllowed(true);
    setVisible(false);
  }

  function necessary() {
    localStorage.setItem(CONSENT_KEY, "necessary");
    setAnalyticsAllowed(false);
    setVisible(false);
  }

  return (
    <>
      {analyticsAllowed && <Analytics />}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 md:px-8">
            <p className="flex-1 text-sm text-[#4a4a5a]">
              Diese Website nutzt Vercel Web Analytics zur Verbesserung unseres
              Angebots. Dabei werden anonymisierte Nutzungsdaten erhoben.{" "}
              <Link
                href="/datenschutz"
                className="font-medium text-[#1a3eaf] underline underline-offset-2 hover:text-[#1530a0]"
              >
                Mehr erfahren
              </Link>
            </p>
            <div className="flex flex-shrink-0 gap-3">
              <button
                onClick={necessary}
                className="rounded-sm border border-[#1a3eaf] px-4 py-2 text-sm font-semibold text-[#1a3eaf] transition-colors hover:bg-[#1a3eaf]/5"
              >
                Nur notwendige
              </button>
              <button
                onClick={accept}
                className="rounded-sm bg-[#58b046] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4e9e3f]"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
