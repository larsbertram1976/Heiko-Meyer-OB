import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrevoteFloat } from "@/components/prevote-section";

export const metadata: Metadata = {
  title: "Heiko Meyer für Lüneburg | Unabhängig für ein Miteinander",
  description:
    "Heiko Meyer – Ihr unabhängiger Oberbürgermeister-Kandidat für Lüneburg. Zukunft gestalten, Wirtschaft stärken und unsere Heimat lebenswert erhalten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <PrevoteFloat />
      </body>
    </html>
  );
}
