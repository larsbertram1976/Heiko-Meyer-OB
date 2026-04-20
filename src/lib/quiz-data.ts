export type QuizQuestion = {
  question: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
};

// ─── Quiz 1: Heiko persönlich ─────────────────────────────────
export const heikoQuestions: QuizQuestion[] = [
  {
    question: "Wie alt ist Heiko Meyer?",
    answers: ["53", "57", "61"],
    correctIndex: 1,
    explanation:
      "Heiko ist 57 Jahre alt – mitten im Leben und voller Erfahrung für Lüneburg.",
  },
  {
    question: "Welcher Partei gehört Heiko an?",
    answers: ["CDU", "SPD", "Keiner – er ist parteilos"],
    correctIndex: 2,
    explanation:
      "Heiko tritt bewusst als unabhängiger Kandidat an. So kann er für alle Lüneburger:innen entscheiden, ohne Parteiverpflichtungen.",
  },
  {
    question: "Wie viele Jahre leitet Heiko bereits den LCM (Lüneburger City Management)?",
    answers: ["10 Jahre", "15 Jahre", "20 Jahre"],
    correctIndex: 2,
    explanation:
      "Stolze 20 Jahre Vorsitz – damit kennt Heiko jeden Hauseigentümer in der Innenstadt persönlich.",
  },
  {
    question: "Auf wie viele Mitglieder hat Heiko das LCM aufgebaut?",
    answers: ["80", "170", "350"],
    correctIndex: 1,
    explanation:
      "Heiko hat das LCM von 80 auf 170 Mitglieder mehr als verdoppelt – die stärkste Stimme der Lüneburger Innenstadt.",
  },
  {
    question: "Welches Ergebnis erzielte Heiko bei der OB-Wahl 2021?",
    answers: [
      "Sieger im 1. Wahlgang",
      "45% in der Stichwahl",
      "3. Platz im 1. Wahlgang",
    ],
    correctIndex: 1,
    explanation:
      "Heiko schaffte es 2021 als Parteiloser in die Stichwahl und holte dort 45% – ein starkes Signal für unabhängige Politik.",
  },
  {
    question: "Wo befindet sich Heikos Wahlkampfbüro?",
    answers: ["Am Sande", "Friedenstraße 17", "Bardowicker Straße"],
    correctIndex: 1,
    explanation:
      "Mitten in Lüneburg – Friedenstraße 17. Vorbeischauen erlaubt!",
  },
  {
    question: "Was macht Heikos Unternehmen HM Objekteinrichtungen?",
    answers: [
      "Es baut Möbel und Inneneinrichtungen",
      "Es verkauft Kaffee und Kuchen",
      "Es programmiert Werkzeugmaschinen",
    ],
    correctIndex: 0,
    explanation:
      "Heiko ist Geschäftsführer eines mittelständischen Möbel- und Inneneinrichtungs-Unternehmens. Als Unternehmer weiß er, was Bürokratie für kleine Betriebe bedeutet.",
  },
  {
    question: "Welche Haustiere hat Heiko zuhause?",
    // ⚠️ HINWEIS FÜR LARS: Bitte mit Heiko verifizieren – falls Hund oder
    // Goldfische korrekt sind, einfach correctIndex ändern (0 = Hund,
    // 1 = Hühner, 2 = Goldfische)
    answers: ["Einen Hund", "Hühner", "Goldfische"],
    correctIndex: 1,
    explanation:
      "Hühner! Frischere Eier zum Frühstück gibt es kaum. Heiko hat ein Faible für das Bodenständige.",
  },
  {
    question: "Wie viele Jahre sitzt Heiko bereits im Bauausschuss?",
    answers: ["10 Jahre", "20 Jahre", "25 Jahre"],
    correctIndex: 1,
    explanation:
      "20 Jahre Bauausschuss – Heiko kennt jede wichtige Verkehrs- und Bauentscheidung in Lüneburg aus erster Hand.",
  },
  {
    question: "Wie viele konkrete Vorhaben enthält Heikos Wahlprogramm?",
    answers: ["25", "42", "80"],
    correctIndex: 1,
    explanation:
      "42 konkrete Vorhaben – verteilt auf 9 Themenblöcke. Im Themenpuls können Sie selbst Ihre Top 10 wählen.",
  },
  {
    question: "Wann ist die OB-Wahl in Lüneburg?",
    answers: [
      "6. September 2026",
      "13. September 2026",
      "14. September 2026",
    ],
    correctIndex: 1,
    explanation:
      "Sonntag, 13. September 2026. Schon eingetragen im Kalender?",
  },
];

// ─── Quiz 2: Wahlprogramm ─────────────────────────────────────
export const programmQuestions: QuizQuestion[] = [
  {
    question:
      "Wie will Heiko Bürger:innen vor Großprojekten verbindlich einbinden?",
    answers: [
      "Mit einer Online-Petition pro Quartal",
      "Mit Bürger-Kompetenzteams für jedes Großprojekt",
      "Mit verpflichtenden Volksabstimmungen",
    ],
    correctIndex: 1,
    explanation:
      "Heiko schlägt Bürger-Kompetenzteams aus Anwohnern, Gewerbetreibenden und Fachleuten vor – frühzeitig eingebunden, bevor Entscheidungen gefallen sind.",
  },
  {
    question: "Welche konkrete Maßnahme will Heiko Am Sande einführen?",
    answers: [
      "Flächendeckende Videoüberwachung",
      "Sicherheits-Partnerschaft: Polizei, Ordnungsdienst, Streetwork und LCM an einen Tisch",
      "Generelles Alkoholverbot auf dem Platz",
    ],
    correctIndex: 1,
    explanation:
      "In den ersten 100 Tagen als OB will Heiko eine Sicherheits-Partnerschaft Am Sande gründen – ein fester runder Tisch mit allen Akteuren.",
  },
  {
    question: "Was steht bei Heikos Wohnraum-Strategie an erster Stelle?",
    answers: [
      "Mietendeckel für ganz Lüneburg",
      "Mehr Bauflächen ausweisen + Wohnungsbau GmbH stärken",
      "Enteignung leerstehender Häuser",
    ],
    correctIndex: 1,
    explanation:
      "Heiko setzt auf zusätzlichen Wohnraum: neue Bauflächen ohne Zersiedelung, Konzeptvergabe an Bauherren mit bezahlbaren Mietpreisen, plus aktivere Wohnungsbau GmbH.",
  },
  {
    question: "Welche neue Stelle will Heiko im Rathaus schaffen?",
    answers: [
      "Eine Leerstand-Lotsen-Stelle",
      "Einen Tourismus-Manager",
      "Einen Kultur-Beauftragten",
    ],
    correctIndex: 0,
    explanation:
      "Eine Leerstand-Lotsen-Stelle erfasst leerstehende Gewerbeflächen, geht aktiv auf Eigentümer zu und vermittelt potenzielle Mieter.",
  },
  {
    question: "Welches Bildungs-Konzept will Heiko in Lüneburg umsetzen?",
    answers: [
      "Schulgeld für Privatschulen abschaffen",
      "Bildungspakt 2040 + Ganztagsschulen ausbauen",
      "Tabletpflicht ab Klasse 1",
    ],
    correctIndex: 1,
    explanation:
      "Heiko will den Bildungspakt 2040 umsetzen und Ganztagsschulen flächendeckend ausbauen – Bildung als Fundament für Lüneburgs Zukunft.",
  },
  {
    question: "Welche Stadtteil-Idee hat Heiko fürs soziale Miteinander?",
    answers: [
      "Einen Wochenmarkt in jedem Stadtteil",
      "Ein Bürgercafé in jedem Stadtteil",
      "Einen Sportplatz pro 1.000 Einwohner",
    ],
    correctIndex: 1,
    explanation:
      "In jedem Lüneburger Stadtteil soll ein Bürgercafé entstehen – ein offener Treffpunkt für Jung und Alt, mit Beratung, Sprachkursen und Nachhilfe.",
  },
  {
    question: "Was ist Heikos zentrale Verkehrs-Idee für Pendler?",
    answers: [
      "Eine Pendler-Maut für die Innenstadt",
      "Vier kostenfreie Park-and-Ride-Plätze",
      "Ein Pendler-Bonus über die Steuer",
    ],
    correctIndex: 1,
    explanation:
      "Heiko will vier kostenfreie Park-and-Ride-Plätze rund um Lüneburg – Pendler:innen parken am Stadtrand und fahren entspannt mit dem ÖPNV in die City.",
  },
  {
    question: "Was ist Heikos Ansatz für die Lüneburger Kultur?",
    answers: [
      "Kulturbetriebe weitgehend privatisieren",
      "Kulturräume sichern, Veranstaltungen fördern, Kultur bezahlbar machen",
      "Eintritt überall freischalten – Stadt zahlt",
    ],
    correctIndex: 1,
    explanation:
      "Heiko sieht Kultur als 'Kitt, der unsere Stadt zusammenhält'. Räume sichern, Festivals fördern und Eintritte für Familien bezahlbar halten.",
  },
  {
    question:
      "Welches konkrete Versprechen macht Heiko für Lüneburger Kinder?",
    answers: [
      "Pflicht-Mitgliedschaft in einem Sportverein",
      "Jedes Kind soll schwimmen lernen können",
      "Tägliche Sportstunde an allen Schulen",
    ],
    correctIndex: 1,
    explanation:
      "Schwimmen lernen und Breitensport gehören zu Heikos Sport-Programm – jedes Kind soll diese grundlegende Fähigkeit erwerben.",
  },
  {
    question: "Was steht NICHT in Heikos Wahlprogramm?",
    answers: [
      "Bürgerbeteiligung vor Großprojekten",
      "Sicherheits-Partnerschaft Am Sande",
      "Verbot von Verbrennungsmotoren in der Innenstadt",
    ],
    correctIndex: 2,
    explanation:
      "Genau – Heiko stellt nicht Auto gegen Rad. Sein Verkehrskonzept versöhnt alle Verkehrsteilnehmer pragmatisch, ohne Verbote.",
  },
];
