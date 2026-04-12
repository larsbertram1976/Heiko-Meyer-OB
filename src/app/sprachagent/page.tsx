"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useConversation } from "@elevenlabs/react";

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? "";

const TOPICS = [
  "Sicherheit",
  "Innenstadt",
  "Wohnen",
  "Verkehr",
  "Verwaltung",
  "Bürgernähe",
];

type ChatMessage = {
  type: "agent" | "user" | "system";
  text: string;
};

type Status = "ready" | "connecting" | "active" | "ended";

export default function SprachagentPage() {
  const [status, setStatus] = useState<Status>("ready");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [textInput, setTextInput] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);
  const vizBarsRef = useRef<HTMLDivElement[]>([]);
  const vizIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = useCallback((type: ChatMessage["type"], text: string) => {
    if (!text?.trim()) return;
    setMessages((prev) => [...prev, { type, text }]);
  }, []);

  const stopVisualization = useCallback(() => {
    if (vizIntervalRef.current) {
      clearInterval(vizIntervalRef.current);
      vizIntervalRef.current = null;
    }
    vizBarsRef.current.forEach((b) => {
      b.style.height = "3px";
    });
  }, []);

  // Use the official @elevenlabs/react hook – same approach as the
  // working KIM project and the official widget. This handles all the
  // audio pipeline setup, connection, and greeting timing correctly.
  const conversation = useConversation({
    onConnect: () => {
      setStatus("active");
      addMessage("system", "Verbunden \u2013 Heiko spricht gleich!");
    },
    onDisconnect: () => {
      setStatus("ended");
      addMessage("system", "Gespr\u00e4ch beendet. Danke f\u00fcr Ihr Interesse!");
      stopVisualization();
    },
    onMessage: (message: { source: string; message: string }) => {
      if (message.source === "ai" || message.source === "agent") {
        addMessage("agent", message.message);
      } else if (message.source === "user") {
        addMessage("user", message.message);
      }
    },
    onError: (error: unknown) => {
      console.error("ElevenLabs error:", error);
      addMessage("system", "Verbindungsfehler. Bitte versuchen Sie es erneut.");
      setStatus("ready");
      stopVisualization();
    },
  });

  const startVisualization = useCallback(() => {
    if (vizIntervalRef.current) return;
    vizIntervalRef.current = setInterval(() => {
      const bars = vizBarsRef.current;
      if (!bars.length) return;

      const volume =
        (conversation as unknown as { getOutputVolume?: () => number })
          .getOutputVolume?.() ?? 0;

      bars.forEach((bar, i) => {
        const t = Date.now() / 300 + i * 0.4;
        const base = volume > 0 ? volume * 35 : 3;
        const h = Math.max(3, base + Math.sin(t) * 5 + Math.random() * 4);
        bar.style.height = `${h}px`;
      });
    }, 80);
  }, [conversation]);

  // Start visualization when status becomes active
  useEffect(() => {
    if (status === "active") {
      startVisualization();
    }
  }, [status, startVisualization]);

  const startConversation = useCallback(async () => {
    try {
      setStatus("connecting");
      setShowChat(true);
      addMessage("system", "Verbindung zu Heiko wird aufgebaut...");

      await conversation.startSession({
        agentId: AGENT_ID,
      });
    } catch (err) {
      console.error("Start error:", err);
      const error = err as Error & { name?: string };

      if (error.name === "NotAllowedError") {
        addMessage(
          "system",
          "Mikrofon-Zugriff verweigert. Bitte erlauben Sie den Zugriff in Ihrem Browser."
        );
      } else {
        addMessage(
          "system",
          "Verbindungsfehler. Bitte versuchen Sie es erneut."
        );
      }
      setStatus("ready");
    }
  }, [addMessage, conversation]);

  const stopConversation = useCallback(async () => {
    try {
      await conversation.endSession();
    } catch {
      /* ignore */
    }
    setStatus("ended");
    stopVisualization();
  }, [conversation, stopVisualization]);

  const handleMainButton = () => {
    if (status === "active") {
      stopConversation();
    } else {
      startConversation();
    }
  };

  const sendTextMessage = useCallback(() => {
    const text = textInput.trim();
    if (!text || status !== "active") return;
    try {
      (conversation as unknown as { sendUserMessage?: (t: string) => void })
        .sendUserMessage?.(text);
      addMessage("user", text);
      setTextInput("");
    } catch (e) {
      console.warn("Could not send text:", e);
    }
  }, [textInput, status, conversation, addMessage]);

  useEffect(() => {
    return () => {
      if (vizIntervalRef.current) {
        clearInterval(vizIntervalRef.current);
      }
    };
  }, []);

  const heroCompact = showChat;

  return (
    <div className="fixed inset-x-0 bottom-0 top-16 flex w-full flex-col overflow-hidden lg:flex-row">
      {/* ===== LEFT PANEL: Hero ===== */}
      <div
        className={`relative flex w-full shrink-0 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1d5e] via-[#1a3eaf] to-[#2551c7] transition-all duration-500 ease-in-out lg:h-full lg:w-auto lg:flex-1 lg:px-10 lg:py-12 ${
          heroCompact ? "px-4 py-2" : "px-6 py-5"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_500px_400px_at_30%_80%,rgba(88,176,70,0.06),transparent),radial-gradient(ellipse_400px_400px_at_70%_20%,rgba(255,255,255,0.04),transparent)]" />

        <div className="relative z-10 w-full max-w-md px-2 text-center lg:px-0 lg:text-left">
          {/* Badge – hidden on mobile when chat active */}
          <div
            className={`items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white/50 lg:mb-8 lg:inline-flex lg:px-4 lg:py-1.5 lg:text-xs ${
              heroCompact ? "hidden lg:inline-flex" : "mb-2 inline-flex"
            }`}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#58b046]" />
            OB-Wahl &middot; 14. September 2026
          </div>

          <h1
            className={`font-bold leading-tight text-white transition-all duration-500 lg:text-5xl ${
              heroCompact ? "text-base lg:text-5xl" : "text-xl"
            }`}
          >
            Heiko Meyer
          </h1>
          <p
            className={`font-light tracking-wide text-[#58b046] transition-all duration-500 lg:mt-2 lg:text-lg ${
              heroCompact ? "mt-0 text-xs lg:text-lg" : "mt-0.5 text-sm"
            }`}
          >
            Gestalten statt verwalten.
          </p>

          {/* Desktop only: full description */}
          <p className="mt-6 hidden text-sm leading-relaxed text-white/45 lg:block">
            Parteilos. Unabh&auml;ngig. B&uuml;rgernah.
            <br />
            Stellen Sie Heiko Ihre Fragen &ndash; direkt per Sprache, rund um die Uhr.
            Heiko Digital antwortet auf Basis seines Wahlprogramms.
          </p>

          {/* Desktop only: topic tags */}
          <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
            {TOPICS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/50 transition-colors hover:border-[#58b046]/20 hover:bg-[#58b046]/10 hover:text-[#58b046]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-10 right-10 z-10 hidden items-end justify-between lg:flex">
          <p className="max-w-[260px] text-[0.65rem] leading-relaxed text-white/20">
            KI-Assistent auf Basis des Wahlprogramms. Keine verbindlichen
            Aussagen. Transparenz gem&auml;&szlig; EU AI Act.
          </p>
          <Link href="/" className="text-[0.65rem] text-white/20 hover:text-white/40">
            &larr; Zur&uuml;ck zur Startseite
          </Link>
        </div>
      </div>

      {/* ===== RIGHT PANEL: Voice Interface ===== */}
      <div className="flex min-h-0 w-full flex-1 flex-col items-center bg-[#f5f0e8] p-4 lg:h-full lg:w-auto lg:max-w-[560px] lg:justify-center lg:p-8">
        <div className="flex w-full min-w-0 max-w-[440px] flex-1 flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-black/[0.06] pb-4">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#1a3eaf]">
              <Image
                src="/logo-AIP8sSah.webp"
                alt="Heiko Meyer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e]">
                Heiko Meyer
              </h3>
              <p className="text-xs text-[#6b6b7b]">
                OB-Kandidat &middot; Heiko Digital
              </p>
            </div>
            <div className="ml-auto">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-medium ${
                  status === "active"
                    ? "bg-red-500/[0.08] text-red-500"
                    : "bg-[#58b046]/[0.08] text-[#58b046]"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-current ${
                    status === "active" ? "animate-pulse" : ""
                  }`}
                />
                {status === "ready" && "Bereit"}
                {status === "connecting" && "Verbinde..."}
                {status === "active" && "Live"}
                {status === "ended" && "Beendet"}
              </span>
            </div>
          </div>

          {/* Welcome State */}
          {!showChat && (
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-5 overflow-y-auto py-8 text-center">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[#1a3eaf] bg-gradient-to-br from-[#0f1d5e] to-[#2551c7] shadow-lg">
                <Image
                  src="/logo-AIP8sSah.webp"
                  alt="Heiko Meyer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e]">
                Moin! Ich bin Heiko.
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-[#6b6b7b]">
                Starten Sie das Gespr&auml;ch und fragen Sie mich, was Ihnen auf dem
                Herzen liegt. Ich antworte Ihnen pers&ouml;nlich &ndash; digital, ehrlich
                und direkt.
              </p>
            </div>
          )}

          {/* Chat Area */}
          {showChat && (
            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.type === "agent"
                      ? "self-start rounded-bl-md bg-[#f0f0f5] text-[#2c2c3a]"
                      : msg.type === "user"
                        ? "self-end rounded-br-md bg-[#1a3eaf] text-white"
                        : "self-center bg-transparent text-center text-xs italic text-[#6b6b7b]"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          )}

          {/* Audio Visualizer */}
          <div
            className={`flex items-center justify-center gap-[3px] transition-all duration-300 ${
              status === "active" ? "h-12 opacity-100" : "h-0 opacity-0"
            }`}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) vizBarsRef.current[i] = el;
                }}
                className="w-[3px] rounded-full bg-[#1a3eaf]"
                style={{ height: "3px", transition: "height 0.1s ease" }}
              />
            ))}
          </div>

          {/* ===== ACTIVE STATE: Compact input + end button ===== */}
          {status === "active" && (
            <div className="flex flex-col gap-1.5 border-t border-black/[0.06] pt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendTextMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Nachricht..."
                  className="min-w-0 flex-1 rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm text-[#2c2c3a] placeholder:text-[#6b6b7b]/50 focus:border-[#1a3eaf] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!textInput.trim()}
                  className="flex flex-shrink-0 items-center justify-center rounded-lg bg-[#1a3eaf] px-3 py-2.5 text-white transition-colors hover:bg-[#15349a] disabled:opacity-40"
                  aria-label="Senden"
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
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </form>
              <button
                type="button"
                onClick={handleMainButton}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-500/10 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-500/20"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                </svg>
                Gespr&auml;ch beenden
              </button>
              <p className="text-center text-[0.6rem] text-[#6b6b7b]/60">
                KI-basiert &middot; Keine verbindlichen Aussagen &middot;{" "}
                <a href="/datenschutz" className="hover:text-[#1a3eaf]">
                  Datenschutz
                </a>
              </p>
            </div>
          )}

          {/* ===== IDLE STATE: Privacy + big start button ===== */}
          {status !== "active" && (
            <div className="flex flex-col items-center gap-2 border-t border-black/[0.06] pt-3">
              <label className="flex cursor-pointer items-center gap-2 text-xs text-[#6b6b7b]">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="h-4 w-4 accent-[#1a3eaf]"
                />
                Ich akzeptiere die{" "}
                <a
                  href="/datenschutz"
                  className="text-[#1a3eaf] no-underline hover:underline"
                >
                  Datenschutzrichtlinie
                </a>
              </label>

              <button
                onClick={handleMainButton}
                disabled={!privacyAccepted || status === "connecting"}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#1a3eaf] to-[#2551c7] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1a3eaf]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1a3eaf]/35 disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none"
              >
                {status === "connecting" ? (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 animate-spin fill-current"
                    >
                      <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" />
                    </svg>
                    Verbinde...
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      style={{ animation: "pulse-mic 1.5s ease-in-out infinite" }}
                    >
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                    {status === "ended" ? "Neues Gespr\u00e4ch" : "Sprich mit Heiko"}
                  </>
                )}
              </button>

              <p className="hidden text-center text-[0.6rem] text-[#6b6b7b]/70 lg:block">
                KI-basiert. Keine verbindlichen Aussagen.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
