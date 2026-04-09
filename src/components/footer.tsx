import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a3eaf] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 md:flex-row md:justify-between md:px-8">
        {/* Logo */}
        <Image
          src="/logo-AIP8sSah.webp"
          alt="Meyer Lüneburg Logo"
          width={48}
          height={48}
          className="h-10 w-10"
        />

        {/* Links */}
        <div className="flex gap-6">
          <Link
            href="/impressum"
            className="text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-[#58b046]"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-[#58b046]"
          >
            Datenschutz
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/60">
          &copy; 2026 Heiko Meyer. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
