"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Start", href: "/#start" },
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Wahlprogramm", href: "/wahlprogramm" },
  { label: "Frag Heiko", href: "/sprachagent" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-AIP8sSah.webp"
            alt="Heiko Meyer Logo"
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <div className="hidden sm:block">
            <span className="text-sm font-medium text-muted-foreground">
              HEIKO MEYER
            </span>
            <p className="text-xs font-bold uppercase tracking-wide text-[#1a3eaf] md:text-sm">
              Ihr Oberbürgermeister-Kandidat
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-[#58b046]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="Menü öffnen"
              className="rounded-md p-2 text-foreground hover:bg-secondary"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-[#58b046]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
