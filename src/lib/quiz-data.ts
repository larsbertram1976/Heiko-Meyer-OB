export type QuizQuestion = {
  question: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
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
