import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="start" className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 md:flex-row md:gap-12 md:px-8 md:py-20">
        {/* Text Content */}
        <div className="flex flex-1 flex-col gap-6">
          <Badge className="w-fit bg-[#58b046] text-white hover:bg-[#4e9e3f] px-4 py-1.5 text-sm font-semibold uppercase">
            Sie kennen mich!
          </Badge>
          <h1 className="text-4xl font-black leading-tight text-[#1a3eaf] md:text-5xl lg:text-6xl">
            Unabhängig für ein Miteinander
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground md:text-xl">
            Zukunft gestalten, Wirtschaft stärken und unsere Heimat lebenswert
            erhalten. Mit klarer Kante für unsere Stadt.
          </p>
          <a
            href="#wahlprogramm"
            className="inline-flex w-fit items-center justify-center rounded-sm bg-[#1a3eaf] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#15349a]"
          >
            Zum Wahlprogramm
          </a>
        </div>

        {/* Portrait + Slogan Graphic */}
        <div className="relative flex-1">
          <Image
            src="/slogan-EeEYQBf-.webp"
            alt="Unabhängig für ein Miteinander"
            width={280}
            height={180}
            className="absolute -left-8 -top-4 z-10 w-48 md:-left-12 md:-top-8 md:w-64 lg:w-72"
          />
          <div className="relative overflow-hidden rounded-sm border-4 border-[#1a3eaf] shadow-lg">
            <div className="absolute inset-y-0 right-0 w-2 bg-[#58b046]" />
            <Image
              src="/portrait.webp"
              alt="Heiko Meyer, unabhängiger Oberbürgermeister-Kandidat für Lüneburg"
              width={600}
              height={700}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
