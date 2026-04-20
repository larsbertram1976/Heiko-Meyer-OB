import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ─── Hauptseiten ───────────────────────────────────────
      { source: "/ueber-mich", destination: "/warum-heiko", permanent: true },
      { source: "/ueber-mich/", destination: "/warum-heiko", permanent: true },
      { source: "/programm", destination: "/wahlprogramm", permanent: true },
      { source: "/programm/", destination: "/wahlprogramm", permanent: true },
      { source: "/unterstuetzung", destination: "/mitmachen", permanent: true },
      { source: "/unterstuetzung/", destination: "/mitmachen", permanent: true },

      // ─── Häufig extern verlinkte WordPress-Pfade ───────────
      { source: "/kontakt", destination: "/mitmachen", permanent: true },
      { source: "/kontakt/", destination: "/mitmachen", permanent: true },
      { source: "/aktuelles", destination: "/", permanent: true },
      { source: "/aktuelles/", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/", destination: "/", permanent: true },
      { source: "/news", destination: "/", permanent: true },
      { source: "/news/", destination: "/", permanent: true },

      // ─── Alter Blog-Post (noch im Google-Index) ────────────
      { source: "/aktuelle-situation-am-stint", destination: "/", permanent: true },
      { source: "/aktuelle-situation-am-stint/", destination: "/", permanent: true },

      // ─── WordPress-Systempfade ─────────────────────────────
      // wp-admin als 307 (temporär), damit Bots die URL aus dem Index entfernen,
      // statt sie permanent mit der Startseite zu assoziieren
      { source: "/wp-admin", destination: "/", permanent: false },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/", destination: "/", permanent: true },

      // RSS-Feed via Query-Parameter (?feed=rss2)
      {
        source: "/",
        has: [{ type: "query", key: "feed", value: "rss2" }],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
