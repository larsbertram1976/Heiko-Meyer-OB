export type Termin = {
  id: string;
  date: string;       // "2026-05-10"
  time: string;       // "10:00 – 13:00"
  weekday: string;    // "Samstag"
  title: string;
  location: string;
  address: string;
  description: string;
  type: "dialog" | "infostand" | "veranstaltung";
};

export const termine: Termin[] = [
  {
    id: "t1",
    date: "2026-05-10",
    time: "10:00 – 13:00 Uhr",
    weekday: "Samstag",
    title: "Bürgerdialog auf dem Marktplatz",
    location: "Marktplatz Lüneburg",
    address: "Am Markt, 21335 Lüneburg",
    description:
      "Kommen Sie vorbei und sprechen Sie mit Heiko Meyer persönlich. Was bewegt Sie? Was soll sich ändern? Heiko hört zu.",
    type: "dialog",
  },
  {
    id: "t2",
    date: "2026-05-17",
    time: "10:00 – 13:00 Uhr",
    weekday: "Samstag",
    title: "Bürgerdialog auf dem Marktplatz",
    location: "Marktplatz Lüneburg",
    address: "Am Markt, 21335 Lüneburg",
    description:
      "Jeden Samstag: Heiko Meyer auf dem Marktplatz. Fragen, Anregungen, Kritik – alles willkommen.",
    type: "dialog",
  },
  {
    id: "t3",
    date: "2026-05-24",
    time: "10:00 – 13:00 Uhr",
    weekday: "Samstag",
    title: "Bürgerdialog auf dem Marktplatz",
    location: "Marktplatz Lüneburg",
    address: "Am Markt, 21335 Lüneburg",
    description:
      "Persönlich, direkt, parteilos – Heiko Meyer im Gespräch mit den Lüneburger:innen.",
    type: "dialog",
  },
  {
    id: "t4",
    date: "2026-06-07",
    time: "15:00 – 18:00 Uhr",
    weekday: "Samstag",
    title: "Infostand Am Sande",
    location: "Am Sande",
    address: "Am Sande, 21335 Lüneburg",
    description:
      "Wahlprogramm, Flyer und persönliche Gespräche – Heiko Meyer und sein Team informieren über die 9 Punkte für ein besseres Lüneburg.",
    type: "infostand",
  },
  {
    id: "t5",
    date: "2026-07-04",
    time: "19:00 – 21:00 Uhr",
    weekday: "Samstag",
    title: "Bürgerversammlung: Sicherheit in der Innenstadt",
    location: "Wird noch bekanntgegeben",
    address: "Lüneburg",
    description:
      "Schwerpunktthema Sicherheit: Was muss passieren, damit sich alle in der Innenstadt wieder sicher fühlen? Diskutieren Sie mit.",
    type: "veranstaltung",
  },
];

export const typeLabels: Record<Termin["type"], string> = {
  dialog: "Bürgerdialog",
  infostand: "Infostand",
  veranstaltung: "Veranstaltung",
};

export const typeColors: Record<Termin["type"], string> = {
  dialog: "#58b046",
  infostand: "#1a3eaf",
  veranstaltung: "#e67e22",
};
