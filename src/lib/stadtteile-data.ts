// Content per Lüneburg district. Geometry comes from stadtteile-map.json
// (generated from OpenStreetMap admin_level=10 boundaries).

export type DistrictContent = {
  slug: string;
  name: string;
  inhabitants?: string;
  character: string;
  problems: string[];
  solutions: string[];
  quote?: string;
};

export const districtContent: Record<string, DistrictContent> = {
  altstadt: {
    slug: "altstadt",
    name: "Altstadt",
    inhabitants: "~6.500",
    character:
      "Das historische Herz Lüneburgs. Hansestadt-Charme, Einzelhandel, Gastronomie – und der Brennpunkt Am Sande.",
    problems: [
      "Sicherheit Am Sande und Am Berge: Drogenkonsum, Kleinkriminalität",
      "Leerstand in Seitenstraßen nimmt zu",
      "Konflikte zwischen Anwohnern, Gastronomen und Besuchern",
      "+70 % Ladendiebstähle 2022–2023",
    ],
    solutions: [
      "Sicherheits-Partnerschaft Am Sande: Polizei, KOD, Streetwork und LCM an einen Tisch",
      "Leerstand-Lotse im Rathaus, aktiver Kontakt zu Eigentümern",
      "Kaufhaus Lüneburg stärken – 20 Jahre LCM-Netzwerk nutzen",
      "Mehr aufsuchende Sozialarbeit statt Verdrängung",
    ],
    quote:
      "Die Altstadt ist unser Wohnzimmer. Wir dürfen uns nicht daran gewöhnen, dass hier Menschen Angst haben.",
  },
  kaltenmoor: {
    slug: "kaltenmoor",
    name: "Kaltenmoor",
    inhabitants: "~9.800",
    character:
      "Großer, dichter Stadtteil im Osten. Hochhausbebauung der 70er, viele Familien, hoher Migrationsanteil.",
    problems: [
      "Sanierungsstau an Wohnblöcken",
      "Fehlende Treffpunkte für Jugendliche",
      "Soziale Spannungen und Integrationsbedarf",
      "Vereinsamung älterer Bewohner",
    ],
    solutions: [
      "Bürgercafé als Treffpunkt für alle Generationen",
      "Quartiersmanagement ausbauen, Streetwork-Team verstärken",
      "Kaltenmoor-Zentrum als Anlaufstelle modernisieren",
      "Sportvereine vor Ort gezielt fördern",
    ],
    quote:
      "Kaltenmoor verdient einen OB, der sich traut, hinzufahren. Hier müssen Entscheidungen fallen.",
  },
  weststadt: {
    slug: "weststadt",
    name: "Weststadt",
    inhabitants: "~8.200",
    character:
      "Wachsender Stadtteil im Westen, Nähe zum Hauptbahnhof. Mischung aus Alt- und Neubau, viele Pendler.",
    problems: [
      "Lärm und Durchgangsverkehr",
      "Hoher Parkdruck",
      "Baustellenchaos (Soltauer Straße, Bahnbrücke)",
      "Fehlende Nahversorgung in Teilbereichen",
    ],
    solutions: [
      "Baustellen-Koordinator im Rathaus schaffen",
      "Park-and-Ride-Konzept für die Weststadt",
      "Verkehrsberuhigung in Wohnstraßen",
      "Kleine Nahversorger gezielt ansiedeln – Leerstand-Offensive",
    ],
    quote:
      "Die Weststadt darf nicht im Baustellenchaos untergehen. Wer hier lebt, verdient funktionierende Straßen und kurze Wege.",
  },
  rotes_feld: {
    slug: "rotes-feld",
    name: "Rotes Feld",
    inhabitants: "~4.200",
    character:
      "Beliebtes, gewachsenes Wohnviertel zentrumsnah. Gründerzeit-Bebauung, hohe Wohnqualität, teurer Wohnraum.",
    problems: [
      "Explodierende Mieten, kaum Neuvermietungen",
      "Kaum bezahlbarer Wohnraum für junge Familien",
      "Radverkehr und Parken konkurrieren",
    ],
    solutions: [
      "Leerstand über Geschäften aktivieren – neuer Wohnraum ohne Neubau",
      "Sozial verträglicher Milieuschutz prüfen",
      "Verkehrskonzept, das Rad und Auto versöhnt",
    ],
    quote:
      "Das Rote Feld ist eines der beliebtesten Viertel Lüneburgs. Es muss auch für junge Familien bezahlbar bleiben.",
  },
  mittelfeld: {
    slug: "mittelfeld",
    name: "Mittelfeld",
    inhabitants: "~4.800",
    character:
      "Ruhiger Stadtteil mit Einfamilienhäusern und älteren Mehrfamilienhäusern. Viele Senioren.",
    problems: [
      "Ärztliche Versorgung wird dünner",
      "ÖPNV-Anbindung nicht überall ausreichend",
      "Bedarf an altersgerechten Begegnungsorten",
    ],
    solutions: [
      "Ärztezentren mit der KV und dem Landkreis aktiv anbahnen",
      "ÖPNV-Taktung prüfen, Bürgerbusse als Ergänzung",
      "Bürgercafé als Treffpunkt – auch im Alter nicht allein",
    ],
    quote:
      "Unsere älteren Mitbürger im Mittelfeld haben ein Recht darauf, gut versorgt zu sein – ärztlich und menschlich.",
  },
  kreideberg: {
    slug: "kreideberg",
    name: "Kreideberg",
    inhabitants: "~4.500",
    character:
      "Stadtteil mit Mix aus Zeilenbauten und Reihenhäusern. Viele Familien, aktive Nachbarschaft.",
    problems: [
      "Schulen und Kitas am Kapazitätslimit",
      "Spielplätze teilweise sanierungsbedürftig",
      "Fehlende Angebote für Jugendliche",
    ],
    solutions: [
      "Ganztagsschul-Ausbau priorisiert angehen",
      "Kita-Plätze schneller schaffen, Bürokratie abbauen",
      "Jugendtreffs und Sportangebote stärken",
    ],
    quote:
      "Am Kreideberg wachsen Familien auf. Schulen und Kitas müssen mitwachsen – nicht hinterherhinken.",
  },
  bockelsberg: {
    slug: "bockelsberg",
    name: "Bockelsberg",
    inhabitants: "~3.200",
    character:
      "Ländlich geprägter Stadtteil im Süden. Mix aus Wohnen und Natur.",
    problems: [
      "Verkehrsanbindung zur Innenstadt",
      "Wenige Begegnungsorte",
      "Infrastruktur wird vernachlässigt",
    ],
    solutions: [
      "ÖPNV-Verbindung zur Innenstadt verbessern",
      "Dorfgemeinschaftshaus oder Bürgercafé als Treffpunkt",
      "Pflege von Wegen und Grünflächen konsequenter angehen",
    ],
    quote:
      "Bockelsberg ist Lüneburg, auch wenn es sich manchmal nicht so anfühlt. Das ändern wir.",
  },
  haecklingen: {
    slug: "haecklingen",
    name: "Häcklingen",
    inhabitants: "~2.900",
    character:
      "Ruhiger Wohnstadtteil im Süden. Gewachsene Gemeinschaft, viele Vereine.",
    problems: [
      "Anbindung und Nahverkehr",
      "Grundversorgung vor Ort",
      "Wenig Angebote für Jugendliche",
    ],
    solutions: [
      "Bürgerbus-Konzept prüfen",
      "Mobilen Nahversorger und Wochenmarkt stärken",
      "Vereinsstrukturen vor Ort mit Rathaus direkter vernetzen",
    ],
    quote:
      "Häcklingen lebt vom Vereinsleben. Dieses Engagement verdient einen direkten Draht ins Rathaus.",
  },
  rettmer: {
    slug: "rettmer",
    name: "Rettmer",
    inhabitants: "~1.800",
    character: "Kleiner Stadtteil am Stadtrand. Dorfcharakter, viele Pendler.",
    problems: [
      "ÖPNV-Anbindung schwach",
      "Identität droht im Stadtgebiet unterzugehen",
      "Wenig Begegnungsorte",
    ],
    solutions: [
      "Bürgerbus und bedarfsgerechten ÖPNV einführen",
      "Ortsteil-Identität stärken, Feste und Vereine fördern",
      "Regelmäßige OB-Sprechstunden auch in kleinen Stadtteilen",
    ],
    quote:
      "Auch die kleinsten Stadtteile haben große Themen. Rettmer verdient einen OB, der zuhört.",
  },
  wilschenbruch: {
    slug: "wilschenbruch",
    name: "Wilschenbruch",
    inhabitants: "~2.400",
    character: "Wohnstadtteil mit viel Grün, nah am Tiergarten.",
    problems: [
      "Verkehr und Parkdruck",
      "Mangelnde Infrastruktur für Familien",
      "Wünsche nach besserer Schul- und Kitaanbindung",
    ],
    solutions: [
      "Verkehrskonzept, das Wohnqualität schützt",
      "Kita- und Schulkapazitäten prüfen und ausbauen",
      "Familien-Infrastruktur (Spielplätze, Sport) stärken",
    ],
    quote:
      "Wilschenbruch ist grün und familienfreundlich. Das muss so bleiben – mit Kitas und Schulen, die Schritt halten.",
  },
  goseburg_zeltberg: {
    slug: "goseburg-zeltberg",
    name: "Goseburg-Zeltberg",
    inhabitants: "~3.100",
    character: "Gemischter Stadtteil nördlich der Altstadt.",
    problems: [
      "Verkehrsbelastung auf Hauptstraßen",
      "Lärmschutz fehlt an einigen Stellen",
      "Nahversorgung verbesserungsfähig",
    ],
    solutions: [
      "Lärmschutz priorisieren",
      "Nahversorgung stärken, Leerstand für Dienstleister öffnen",
      "Fahrradinfrastruktur ausbauen",
    ],
    quote:
      "Goseburg-Zeltberg braucht Lärmschutz und eine bessere Nahversorgung. Beides ist machbar.",
  },
  ebensberg: {
    slug: "ebensberg",
    name: "Ebensberg",
    inhabitants: "~2.800",
    character: "Ruhiger Stadtteil im Norden. Überwiegend Wohnen.",
    problems: [
      "Anbindung an die Innenstadt",
      "Ärztliche Versorgung dünn",
      "Wenig kulturelle Angebote",
    ],
    solutions: [
      "ÖPNV zur Altstadt verbessern",
      "Ärztezentren gezielt anbahnen",
      "Kultur-Pop-ups und mobile Angebote fördern",
    ],
    quote:
      "Ebensberg liegt ruhig, aber die Anbindung und Versorgung müssen besser werden. Das ist keine Bitte, das ist eine Aufgabe.",
  },
  luene_moorfeld: {
    slug: "luene-moorfeld",
    name: "Lüne-Moorfeld",
    inhabitants: "~4.600",
    character: "Historischer Stadtteil mit Kloster Lüne. Mischung aus Alt und Neu.",
    problems: [
      "Verkehrssituation rund um Hauptverkehrsstraßen",
      "Pflegedruck auf historische Substanz",
      "Angebote für Jugendliche",
    ],
    solutions: [
      "Verkehrskonzept mit dem Landkreis abstimmen",
      "Denkmalpflege und Tourismus stärker zusammen denken",
      "Jugendtreffs und Sportvereine fördern",
    ],
    quote:
      "Lüne-Moorfeld vereint Geschichte und Gegenwart. Das Kloster Lüne ist ein Schatz – der Stadtteil drumherum verdient die gleiche Aufmerksamkeit.",
  },
  schuetzenplatz: {
    slug: "schuetzenplatz",
    name: "Schützenplatz",
    inhabitants: "~3.400",
    character:
      "Stadtteil mit viel Veranstaltungspotenzial, nah an Innenstadt und Sportanlagen.",
    problems: [
      "Lärm bei Großveranstaltungen",
      "Parkdruck an Event-Tagen",
      "Sportstätten-Sanierungsstau",
    ],
    solutions: [
      "Sportstätten-Offensive: Sanierungsplan mit Vereinen entwickeln",
      "Parkleitsystem bei Events",
      "Mehrfachnutzung von Hallen durch Online-Belegungssystem",
    ],
    quote:
      "Am Schützenplatz wird gefeiert und Sport gemacht. Beides braucht Infrastruktur, die funktioniert – nicht bröckelt.",
  },
  neu_hagen: {
    slug: "neu-hagen",
    name: "Neu Hagen",
    inhabitants: "~2.300",
    character: "Wachsender, jüngerer Stadtteil am Rand der Stadt.",
    problems: [
      "Infrastruktur hängt dem Wachstum hinterher",
      "ÖPNV und Radanbindung ausbaufähig",
      "Bedarf an Kita- und Schulplätzen",
    ],
    solutions: [
      "Infrastruktur dem Wachstum anpassen – vorausschauend planen",
      "Rad- und ÖPNV-Verbindungen priorisieren",
      "Kita- und Schulplätze schneller schaffen",
    ],
    quote:
      "Neu Hagen wächst – und die Infrastruktur muss mitwachsen. Nicht hinterher, sondern voraus.",
  },
};
