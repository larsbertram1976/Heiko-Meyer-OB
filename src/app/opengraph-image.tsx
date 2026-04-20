import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Heiko Meyer – Unabhängig für ein Miteinander – OB-Wahl Lüneburg 13. September 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Portrait als base64 einbetten (vermeidet Netzwerk-Roundtrip & funktioniert
  // auch bevor die Domain serviert wird).
  const portraitBuffer = await readFile(
    join(process.cwd(), "public", "portrait.png")
  );
  const portraitDataUri = `data:image/png;base64,${portraitBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #1a3eaf 0%, #15349a 60%, #0f2780 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Linke Seite: Portrait */}
        <div
          style={{
            width: 480,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitDataUri}
            alt="Heiko Meyer"
            width={420}
            height={560}
            style={{
              objectFit: "cover",
              borderRadius: 8,
              border: "6px solid #ffffff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          />
          {/* Grüner Akzent-Balken */}
          <div
            style={{
              position: "absolute",
              right: 30,
              top: 35,
              width: 12,
              height: 562,
              background: "#58b046",
              borderRadius: 4,
            }}
          />
        </div>

        {/* Rechte Seite: Text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 70px 60px 30px",
          }}
        >
          {/* Top-Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 18,
              fontWeight: 600,
              color: "#58b046",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                display: "flex",
                width: 10,
                height: 10,
                background: "#58b046",
                borderRadius: 999,
              }}
            />
            OB-Wahl Lüneburg · 13. September 2026
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -2,
              marginBottom: 8,
              display: "flex",
            }}
          >
            HEIKO MEYER
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1,
              color: "#58b046",
              marginBottom: 30,
              display: "flex",
            }}
          >
            für Lüneburg
          </div>

          {/* Slogan */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.2,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 40,
              display: "flex",
              borderLeft: "4px solid #58b046",
              paddingLeft: 16,
            }}
          >
            Unabhängig für ein Miteinander
          </div>

          {/* URL Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              fontWeight: 700,
              color: "rgba(255,255,255,0.95)",
              marginTop: "auto",
            }}
          >
            <span
              style={{
                background: "#58b046",
                color: "white",
                padding: "8px 16px",
                borderRadius: 4,
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              PARTEILOS
            </span>
            <span>meyer-lueneburg.de</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
