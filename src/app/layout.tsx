import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrevoteFloat } from "@/components/prevote-section";
import { SmoothScroll } from "@/components/smooth-scroll";

const BASE_URL = "https://meyer-lueneburg.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Heiko Meyer für Lüneburg | Unabhängig für ein Miteinander",
    template: "%s | Heiko Meyer für Lüneburg",
  },
  description:
    "Heiko Meyer – Ihr unabhängiger Oberbürgermeister-Kandidat für Lüneburg. OB-Wahl 14. September 2026. Parteilos, bürgernah, erfahren. Zukunft gestalten, Wirtschaft stärken und unsere Heimat lebenswert erhalten.",
  keywords: [
    "Oberbürgermeister Lüneburg",
    "OB-Wahl Lüneburg 2026",
    "Heiko Meyer Lüneburg",
    "Oberbürgermeisterwahl Lüneburg",
    "Kommunalwahl Lüneburg 2026",
    "Bürgermeister Lüneburg",
    "OB Kandidat Lüneburg",
    "Heiko Meyer parteilos",
    "Wahl Lüneburg September 2026",
    "Lüneburg Oberbürgermeister Kandidat",
    "parteiloser Kandidat Lüneburg",
    "Wahlprogramm Lüneburg",
    "Stichwahl Lüneburg",
    "Meyer Lüneburg",
    "Hansestadt Lüneburg Wahl",
    "unabhängiger Kandidat Lüneburg",
    "OB-Wahl 2026",
    "Heiko Meyer",
    "Lüneburg Wahl",
  ],
  authors: [{ name: "Heiko Meyer", url: BASE_URL }],
  creator: "Heiko Meyer Wahlkampfbüro",
  publisher: "Heiko Meyer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "de-DE": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Heiko Meyer für Lüneburg",
    title: "Heiko Meyer für Lüneburg | Unabhängig für ein Miteinander",
    description:
      "Heiko Meyer – Ihr unabhängiger Oberbürgermeister-Kandidat für Lüneburg. OB-Wahl 14. September 2026. Parteilos, bürgernah, erfahren.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heiko Meyer – OB-Kandidat für Lüneburg 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heiko Meyer für Lüneburg | Unabhängig für ein Miteinander",
    description:
      "Heiko Meyer – Ihr unabhängiger Oberbürgermeister-Kandidat für Lüneburg. OB-Wahl 14. September 2026.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#heiko-meyer`,
    name: "Heiko Meyer",
    givenName: "Heiko",
    familyName: "Meyer",
    description:
      "Parteiloser Oberbürgermeister-Kandidat für Lüneburg, OB-Wahl 14. September 2026",
    jobTitle: "OB-Kandidat",
    url: BASE_URL,
    image: `${BASE_URL}/portrait.webp`,
    sameAs: [
      "https://www.instagram.com/heikomeyerlg",
      "https://www.facebook.com/heikomeyerlg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Friedenstr. 17",
      postalCode: "21335",
      addressLocality: "Lüneburg",
      addressCountry: "DE",
    },
    knowsAbout: [
      "Kommunalpolitik",
      "Lüneburg",
      "Oberbürgermeisterwahl 2026",
      "Wirtschaft",
      "Stadtentwicklung",
      "Bürgerbeteiligung",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Heiko Meyer für Lüneburg",
    description:
      "Offizielle Wahlkampfwebsite von Heiko Meyer, parteiloser OB-Kandidat für Lüneburg 2026",
    inLanguage: "de-DE",
    publisher: {
      "@id": `${BASE_URL}/#campaign`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/wahlprogramm`,
      },
      "query-input": "Wahlprogramm Heiko Meyer Lüneburg",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#campaign`,
    name: "Heiko Meyer – Wahlkampfbüro Lüneburg 2026",
    alternateName: "Team Heiko Meyer OB-Wahl 2026",
    url: BASE_URL,
    logo: `${BASE_URL}/logo-AIP8sSah.webp`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+49-160-747-17-00",
      email: "heiko@meyer-lueneburg.de",
      contactType: "campaign office",
      availableLanguage: "German",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Friedenstr. 17",
      postalCode: "21335",
      addressLocality: "Lüneburg",
      addressRegion: "Niedersachsen",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "City",
      name: "Lüneburg",
      sameAs: "https://www.wikidata.org/wiki/Q4194",
    },
    founder: {
      "@id": `${BASE_URL}/#heiko-meyer`,
    },
    sameAs: [
      "https://www.instagram.com/heikomeyerlg",
      "https://www.facebook.com/heikomeyerlg",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#local`,
    name: "Heiko Meyer – Wahlkampfbüro",
    description:
      "Wahlkampfbüro von Heiko Meyer, parteilosem OB-Kandidaten für Lüneburg, OB-Wahl September 2026",
    url: BASE_URL,
    telephone: "+49-160-747-17-00",
    email: "heiko@meyer-lueneburg.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Friedenstr. 17",
      postalCode: "21335",
      addressLocality: "Lüneburg",
      addressRegion: "Niedersachsen",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.2486,
      longitude: 10.4143,
    },
    areaServed: "Lüneburg",
    openingHours: "Mo-Fr 09:00-18:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wahlprogramm",
        item: `${BASE_URL}/wahlprogramm`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Warum Heiko",
        item: `${BASE_URL}/warum-heiko`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Termine",
        item: `${BASE_URL}/termine`,
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <PrevoteFloat />
      </body>
    </html>
  );
}
