export type ProgramTopic = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
  heroQuote: string;
  problem: {
    headline: string;
    text: string;
    facts?: { value: string; label: string }[];
  };
  positions: {
    headline: string;
    items: { title: string; text: string }[];
  };
  concreteExample: {
    headline: string;
    text: string;
  };
  cta: string;
};

export const programTopics: ProgramTopic[] = [
  {
    slug: "miteinander",
    number: "01",
    title: "Miteinander für Lüneburg: #TeamLueneburg",
    subtitle: "Bürgerbeteiligung, Transparenz und eine Verwaltung, die zuhört",
    image: "/programmpunkt_1.webp",
    highlights: ["Bürger-Kompetenzteams einführen", "Verwaltung digitalisieren", "Steuerverschwendung beenden"],
    heroQuote:
      "Es geht mir um das Miteinander innerhalb der Gesellschaft und nicht um Dinge, die die Gesellschaft spalten.",
    problem: {
      headline: "Warum sich viele Lüneburger nicht gehört fühlen",
      text: "Entscheidungen fallen hinter verschlossenen Türen. Bürger erfahren erst von Projekten, wenn alles beschlossen ist. Die Verwaltung arbeitet mit veralteten Methoden und ist für viele schwer erreichbar. Gleichzeitig wächst der Frust: Steuergeld wird für fragwürdige Projekte wie die ARENA ausgegeben, ohne dass Bürger mitentscheiden können.",
      facts: [
        { value: "78.000", label: "Einwohner verdienen eine Stimme" },
        { value: "20+", label: "Jahre Erfahrung mit der Verwaltung" },
        { value: "250+", label: "LCM-Mitglieder vertrauen Heiko" },
      ],
    },
    positions: {
      headline: "So bringt Heiko das Miteinander zurück",
      items: [
        {
          title: "Bürgerbeteiligung fördern",
          text: "Lüneburger werden in Projekte und Kompetenzteams eingebunden. Mehr reden, mehr zuhören, schneller lösen. Heiko will für jeden Bürger ansprechbar sein.",
        },
        {
          title: "Verwaltung neuorganisieren",
          text: "Schluss mit althergebrachten Verwaltungsmethoden. Agile Steuerung, schnellere Entscheidungsprozesse, ein Rathaus das funktioniert – nicht blockiert.",
        },
        {
          title: "Steuerverschwendung beenden",
          text: "Sorgsamer Umgang mit dem Geld der Bürger. Keine fragwürdigen Großprojekte ohne transparente Kosten-Nutzen-Analyse.",
        },
        {
          title: "Transparenz stärken",
          text: "Offene Informationsflüsse: Bürger sollen nachvollziehen können, welche Entscheidungen getroffen werden und warum.",
        },
        {
          title: "Begegnungsräume schaffen",
          text: "Lüneburg braucht mehr Orte, an denen sich Menschen treffen und austauschen können. Begegnungsräume stärken den Zusammenhalt.",
        },
        {
          title: "Digitalisierung der Verwaltung",
          text: "Alle behördlichen Dienstleistungen digital verfügbar machen. Das Rathaus muss ins 21. Jahrhundert kommen.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Bürger-Kompetenzteams für jedes Großprojekt",
      text: "Bevor die Stadt ein Projekt wie den Umbau des Marktplatzes oder eine neue Verkehrsführung beschließt, wird ein Bürger-Kompetenzteam aus Anwohnern, Gewerbetreibenden und Fachleuten gebildet. Das Team wird frühzeitig eingebunden – nicht erst, wenn alles beschlossen ist. So wäre es beim ARENA-Projekt nie so weit gekommen: Bürger hätten früh die Kosten hinterfragt. Heiko hat dieses Modell 20 Jahre lang im LCM praktiziert – 250 Mitglieder, die gemeinsam Entscheidungen treffen.",
    },
    cta: "Gestalten statt verwalten – mit Heiko Meyer.",
  },
  {
    slug: "sicherheit",
    number: "02",
    title: "Für ein sicheres Lüneburg",
    subtitle: "Konsequent handeln, ohne die sozialen Ursachen zu ignorieren",
    image: "/programmpunkt_2.webp",
    highlights: ["+70% Ladendiebstähle in einem Jahr", "Kommunaler Ordnungsdienst – sofort", "Sicherheits-Partnerschaft Am Sande"],
    heroQuote: "Es ist fünf nach Zwölf. An der Lage muss sich schnell etwas ändern.",
    problem: {
      headline: "Die Situation am Sande ist unhaltbar",
      text: "Der Platz Am Sande – einer der schönsten Plätze Norddeutschlands – ist zum Brennpunkt für Drogenkonsum, Kleinkriminalität und störendes Verhalten geworden. Was früher im Clamartpark lief, findet jetzt mitten in der Innenstadt statt. Bewohner, Besucher und Einzelhändler leiden gleichermaßen.",
      facts: [
        { value: "+28%", label: "Diebstähle 2022–2023" },
        { value: "+70%", label: "Ladendiebstähle in einem Jahr" },
        { value: "5.574", label: "Diebstahls-Taten in 2023" },
      ],
    },
    positions: {
      headline: "Heikos Plan für ein sicheres Lüneburg",
      items: [
        {
          title: "Mehr Polizeipräsenz in der Innenstadt",
          text: "Darin sind sich alle einig – vom LCM über die Gastronomen bis zur Stadtverwaltung. Sichtbare Präsenz schreckt ab und gibt Sicherheit.",
        },
        {
          title: "Kommunaler Ordnungsdienst – jetzt",
          text: "Die Stadtverwaltung plant sechs Stellen. Heiko will, dass es schneller geht. Kein jahrelanges Warten, sondern zügige Umsetzung.",
        },
        {
          title: "Aufsuchende Sozialarbeit stärken",
          text: "Sicherheit und soziale Arbeit müssen Hand in Hand gehen. Die Ursachen bekämpfen, nicht nur die Symptome.",
        },
        {
          title: "Klare Regeln für öffentliche Plätze",
          text: "Am Sande und Am Berge brauchen klare Regelungen. Kein Wegschauen, kein Verdrängen – pragmatisches Handeln.",
        },
        {
          title: "Zusammenarbeit aller Akteure",
          text: "Polizei, Ordnungsdienst, Sozialarbeiter und Anwohner müssen zusammenarbeiten. Nur gemeinsam wird die Innenstadt wieder sicher.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Sicherheits-Partnerschaft Am Sande",
      text: "In den ersten 100 Tagen als OB wird Heiko eine Sicherheits-Partnerschaft Am Sande gründen: Ein fester runder Tisch aus Polizeiinspektion, Kommunalem Ordnungsdienst, Streetworkern, LCM-Vertretern und Anwohnern. Monatliche Treffen, klare Zuständigkeiten, messbare Ziele. Vorbild: Das LCM-Modell, bei dem Heiko seit 20 Jahren Kaufleute, Verwaltung und Politik an einen Tisch bringt. Die Ladendiebstähle sind 2023 um 70% gestiegen – das erfordert koordiniertes Handeln, nicht Einzelmaßnahmen.",
    },
    cta: "Sicherheit ist kein Luxus – sie ist ein Grundrecht.",
  },
  {
    slug: "wohnraum",
    number: "03",
    title: "Für mehr bezahlbaren Wohnraum",
    subtitle: "Pragmatische Lösungen statt leerer Versprechen",
    image: "/programmpunkt_3.webp",
    highlights: ["Leerstand über Geschäften aktivieren", "Neubau-Genehmigungen beschleunigen", "Bürokratie beim Bauen abbauen"],
    heroQuote:
      "Wir brauchen bezahlbare Wohnungen für die Menschen in Lüneburg. Für die Menschen, die hier bereits wohnen.",
    problem: {
      headline: "Wohnen in Lüneburg wird zum Luxus",
      text: "Lüneburg wächst – aber der Wohnungsmarkt hält nicht mit. Mieten steigen, Neubau kommt zu langsam, Bürokratie bremst Bauprojekte. Gleichzeitig steht über vielen Geschäften in der Innenstadt ungenutzter Wohnraum leer. Das ist nicht hinnehmbar.",
    },
    positions: {
      headline: "Heikos Wohnraum-Offensive",
      items: [
        {
          title: "Wohnraum über Geschäften aktivieren",
          text: "Über vielen Geschäften in der Innenstadt liegt ungenutzter Wohnraum. Heiko geht direkt auf Hauseigentümer zu. Das schafft Wohnungen ohne Neubau – und belebt die Innenstadt.",
        },
        {
          title: "Neubau beschleunigen",
          text: "Lüneburg braucht neue Wohnungen. Bauprojekte müssen schneller genehmigt und umgesetzt werden. Die Verwaltung muss hier Tempo machen.",
        },
        {
          title: "Bürokratie beim Bauen abbauen",
          text: "Zu viele Vorschriften, zu lange Genehmigungsverfahren. Heiko will die Verwaltung so organisieren, dass Bauprojekte schneller vorankommen.",
        },
        {
          title: "Sozial und fair",
          text: "Bezahlbarer Wohnraum ist eine Grundvoraussetzung für ein soziales Lüneburg, in dem jeder die gleichen Chancen hat.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Leerstand-Offensive in der Innenstadt",
      text: "Als LCM-Vorsitzender kennt Heiko jeden Hausbesitzer in der Innenstadt persönlich. Sein Plan: Innerhalb von sechs Monaten jede leerstehende Wohnung über Geschäften in der Bardowicker Straße und am Sande erfassen. Dann direkte Gespräche mit den Eigentümern: Was brauchen Sie, damit die Wohnung wieder vermietet wird? Sanierungszuschüsse vermitteln, Genehmigungsverfahren beschleunigen, Nöte ernst nehmen. Ergebnis: Neue Wohnungen ohne einen Quadratmeter Neubaufläche – und eine belebtere Innenstadt.",
    },
    cta: "Wohnraum schaffen, nicht verwalten.",
  },
  {
    slug: "wirtschaft",
    number: "04",
    title: "Für einen starken und attraktiven Wirtschaftsstandort",
    subtitle: "20 Jahre Erfahrung für das \u201EKaufhaus L\u00FCneburg\u201C",
    image: "/programmpunkt_4.webp",
    highlights: ["Leerstand-Lotse im Rathaus", "250+ LCM-Mitglieder als Netzwerk", "Innenstadt als Einkaufserlebnis"],
    heroQuote:
      "Ich kenne die Herausforderungen der Händler und Gastronomen – von steigenden Kosten bis zum Online-Handel.",
    problem: {
      headline: "Die Innenstadt kämpft",
      text: "Leerstand, steigende Kosten, Konkurrenz durch den Online-Handel und bürokratische Hürden – die Lüneburger Innenstadt steht unter Druck. Lüneburgs historische Altstadt mit ihrem einzigartigen Branchenmix aus inhabergeführtem Handel und attraktiven Filialisten ist ein Schatz, den es zu schützen gilt.",
      facts: [
        { value: "250+", label: "LCM-Mitglieder" },
        { value: "20", label: "Jahre LCM-Vorsitz" },
        { value: "50+", label: "Jahre LCM-Geschichte" },
      ],
    },
    positions: {
      headline: "Heikos Plan für die Wirtschaft",
      items: [
        {
          title: "Leerstand aktiv bekämpfen",
          text: "Direkte Gespräche mit Hausbesitzern, um leerstehende Geschäfte wieder zu füllen. Nicht abwarten, sondern aktiv auf Eigentümer zugehen und Lösungen finden.",
        },
        {
          title: "Wirtschafts-Perspektive ins Rathaus",
          text: "Als Unternehmer und LCM-Vorsitzender bringt Heiko die Perspektive der Wirtschaft direkt ins Rathaus. Er versteht, was Händler und Gastronomen brauchen.",
        },
        {
          title: "Das \u201EKaufhaus L\u00FCneburg\u201C stärken",
          text: "Die Innenstadt als Einkaufsstandort attraktiv halten: Kunden aus Lüneburg, dem Umland und sogar Hamburg sollen gerne wiederkommen.",
        },
        {
          title: "Wohnraum über Geschäften",
          text: "Doppeleffekt: Neuer Wohnraum entsteht und die Innenstadt wird belebter – mehr Bewohner bedeuten mehr Kunden für den Einzelhandel.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Leerstand-Lotse im Rathaus",
      text: "Heiko wird eine Leerstand-Lotsen-Stelle in der Verwaltung schaffen – eine zentrale Ansprechperson, die leerstehende Gewerbeflächen erfasst, aktiv auf Eigentümer zugeht und potenzielle Mieter vermittelt. Kein Warten, bis sich jemand meldet – sondern aktive Vermarktung. Der LCM hat mit über 250 Mitgliedern bereits ein Netzwerk aus Händlern, Gastronomen und Dienstleistern. Diese Kontakte werden genutzt, um jede leere Fläche möglichst schnell wieder zu füllen.",
    },
    cta: "Wer die Wirtschaft versteht, kann die Stadt gestalten.",
  },
  {
    slug: "bildung",
    number: "05",
    title: "Für eine attraktive Bildungs- und Universitätsstadt",
    subtitle: "Bildung als Fundament für Lüneburgs Zukunft",
    image: "/programmpunkt_5.webp",
    highlights: ["Gründer-Stipendium mit der Leuphana", "Ganztagsschulen ausbauen", "Fachkräfte in der Region halten"],
    heroQuote:
      "Die Leuphana ist ein Gewinn für Lüneburg – als Wirtschaftsfaktor, Innovationstreiber und für das Stadtleben.",
    problem: {
      headline: "Bildung entscheidet über Lüneburgs Zukunft",
      text: "Lüneburg ist Universitätsstadt – die Leuphana prägt das Stadtbild und bringt junge Menschen, Ideen und Wirtschaftskraft. Gleichzeitig stehen Schulen vor dem Ganztagsausbau, und der Bildungspakt 2040 muss mit Leben gefüllt werden. Bildung ist kein Kostenfaktor – sie ist eine Investition in unsere Zukunft.",
    },
    positions: {
      headline: "Heikos Bildungsagenda",
      items: [
        {
          title: "Zusammenarbeit mit der Leuphana stärken",
          text: "Die Brücke zwischen Stadt und Universität ausbauen. Studierende sind Lüneburger – sie sollen hier bleiben und gründen wollen.",
        },
        {
          title: "Ganztagsschulen ausbauen",
          text: "Familien brauchen verlässliche Betreuung. Der Ganztagsausbau muss Priorität haben – mit guter Qualität, nicht nur Verwahrung.",
        },
        {
          title: "Bildungspakt 2040 umsetzen",
          text: "Lüneburg braucht moderne Schulen mit guter Ausstattung. Digitale Infrastruktur, sanierte Gebäude, attraktive Lernumgebungen.",
        },
        {
          title: "Fachkräfte für Lüneburg",
          text: "Bildung und Wirtschaft zusammendenken: Ausbildungsplätze fördern, junge Menschen in der Region halten, Fachkräftemangel bekämpfen.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Gründer-Stipendium mit der Leuphana",
      text: "Gemeinsam mit der Leuphana Universität richtet Heiko ein Lüneburger Gründer-Stipendium ein: Absolventinnen und Absolventen, die ihr Unternehmen in Lüneburg gründen, erhalten für 12 Monate vergünstigte Büroflächen in leerstehenden Gewerbeeinheiten der Innenstadt plus Mentoring durch das Lüneburger Unternehmernetzwerk. So bleiben kluge Köpfe in der Stadt, Leerstand wird sinnvoll genutzt und der Wirtschaftsstandort profitiert. Eine Maßnahme, drei Fliegen mit einer Klappe.",
    },
    cta: "Wer in Bildung investiert, investiert in Lüneburgs Zukunft.",
  },
  {
    slug: "soziales",
    number: "06",
    title: "Für ein soziales Lüneburg",
    subtitle: "Eine Stadt, in der jeder die gleichen Chancen hat",
    image: "/programmpunkt_6.webp",
    highlights: ["Bürgercafés in jedem Stadtteil", "Sozialarbeit ausbauen", "Chancengleichheit für alle Kinder"],
    heroQuote:
      "Ich bin für alle Lüneburger da. Und das kann nur einer, der keiner Partei angehört.",
    problem: {
      headline: "Zusammenhalt braucht konkrete Taten",
      text: "In einer wachsenden Stadt darf niemand zurückbleiben. Steigende Mieten, Armut im Alter, fehlende Begegnungsräume – der soziale Zusammenhalt in Lüneburg steht unter Druck. Es reicht nicht, gute Absätze zu schreiben. Es braucht jemanden, der anpackt.",
    },
    positions: {
      headline: "Heikos sozialer Kompass",
      items: [
        {
          title: "Bezahlbarer Wohnraum als Grundrecht",
          text: "Wohnen darf kein Luxus sein. Heiko kämpft für mehr bezahlbaren Wohnraum – durch Aktivierung von Leerstand und schnelleren Neubau.",
        },
        {
          title: "Sozialarbeit stärken",
          text: "Aufsuchende Sozialarbeit muss ausgebaut werden. Wer Hilfe braucht, muss Hilfe bekommen – niedrigschwellig und ohne bürokratische Hürden.",
        },
        {
          title: "Begegnungsräume für alle",
          text: "Lüneburg braucht Orte, an denen sich Menschen treffen – generationenübergreifend, barrierefrei, in jedem Stadtteil.",
        },
        {
          title: "Chancengleichheit",
          text: "Jedes Kind in Lüneburg verdient die gleiche Chance – unabhängig vom Geldbeutel der Eltern. Bildung, Sport und Kultur müssen für alle zugänglich sein.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Stadtteil-Treffpunkte mit Bürgercafés",
      text: "In jedem Lüneburger Stadtteil soll ein Bürgercafé entstehen – ein offener Treffpunkt, der von der Stadt gefördert und von Ehrenamtlichen betrieben wird. Hier treffen sich Jung und Alt, es gibt Beratungsangebote, Sprachkurse und Nachhilfe. Die Räume können aus leerstehenden städtischen Immobilien kommen. Heiko kennt als LCM-Chef das Prinzip: Menschen brauchen einen Ort, um sich zu treffen und auszutauschen. Das ist kein Luxus, sondern die Grundlage für Zusammenhalt.",
    },
    cta: "Ein Lüneburg, das zusammenhält.",
  },
  {
    slug: "verkehr",
    number: "07",
    title: "Für ein zukunftsfähiges Umwelt- und Verkehrskonzept",
    subtitle: "Alle Verkehrsteilnehmer miteinander versöhnen",
    image: "/programmpunkt_7.webp",
    highlights: ["Baustellen-Koordinator einsetzen", "Park-and-Ride-System aufbauen", "Verkehrspakt mit dem Landkreis"],
    heroQuote:
      "Nicht gegeneinander, sondern miteinander. Pragmatisch, nicht ideologisch.",
    problem: {
      headline: "Verkehrschaos statt Verkehrskonzept",
      text: "Bleckeder Landstraße, Dahlenburger Landstraße und Soltauer Straße – alle gleichzeitig dicht. Ganze Stadtteile vom Verkehr abgeschnitten. Radwegeausbau auf Kosten anderer Verkehrsteilnehmer. Lüneburg braucht kein ideologisches Gegeneinander von Rad und Auto – sondern ein Konzept, das für alle funktioniert.",
    },
    positions: {
      headline: "Heikos Verkehrskonzept",
      items: [
        {
          title: "Alle Verkehrsteilnehmer berücksichtigen",
          text: "Radfahrer, Autofahrer, Fußgänger und ÖPNV in einem Gesamtkonzept zusammendenken. Keine einseitigen Maßnahmen, die die Stadt spalten.",
        },
        {
          title: "Ausreichend Stellplätze",
          text: "Die Innenstadt muss für alle erreichbar bleiben – auch für Kunden aus dem Umland, die zum Einkaufen nach Lüneburg kommen.",
        },
        {
          title: "Park-and-Ride-System",
          text: "Parken am Stadtrand, weiter mit ÖPNV in die Innenstadt. Eine moderne Lösung, die Verkehr reduziert und die Innenstadt entlastet.",
        },
        {
          title: "Bessere Baustellenkoordination",
          text: "Nie wieder drei Hauptstraßen gleichzeitig dicht. Baustellen müssen intelligent geplant werden – dafür braucht es Zusammenarbeit mit dem Landkreis.",
        },
        {
          title: "Zusammenarbeit mit dem Landkreis",
          text: "Viele Straßen liegen in der Zuständigkeit des Landkreises. Verkehrspolitik geht nur gemeinsam mit dem Landrat.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Baustellen-Koordinator und Landkreis-Pakt",
      text: "Heiko schafft die Stelle eines Baustellen-Koordinators in der Verwaltung, der jede geplante Straßensperrung mit dem Landkreis abstimmt – bevor der erste Bagger rollt. Nie wieder Bleckeder Landstraße, Dahlenburger Landstraße und Soltauer Straße gleichzeitig dicht. Zusätzlich verhandelt Heiko einen Verkehrspakt mit dem Landrat: Gemeinsame Planung, gemeinsame Kommunikation an die Bürger, gemeinsame Umleitungskonzepte. Das kostet wenig, bringt aber enorm viel für den Alltag der Lüneburger.",
    },
    cta: "Ein Verkehrskonzept, das funktioniert – für alle.",
  },
  {
    slug: "kultur",
    number: "08",
    title: "Für ein kulturell reiches Lüneburg",
    subtitle: "Kultur ist der Kitt, der unsere Stadt zusammenhält",
    image: "/programmpunkt_8.webp",
    highlights: ["Pop-up-Galerien in leeren Läden", "Veranstaltungen unbürokratischer", "Stadtgeschichte lebendig halten"],
    heroQuote:
      "Lüneburgs Kultur ist einzigartig. Sie verdient Wertschätzung – und Unterstützung.",
    problem: {
      headline: "Kultur braucht Raum und Förderung",
      text: "Lüneburg hat eine lebendige Kulturszene – von der Musikschule über das Theater bis zu freien Künstlern. Doch steigende Kosten und fehlende Räume setzen der Szene zu. Kultur ist kein Luxus – sie macht unsere Stadt lebenswert und zieht Menschen an.",
    },
    positions: {
      headline: "Heikos Kulturprogramm",
      items: [
        {
          title: "Kulturräume sichern und schaffen",
          text: "Künstler und Kulturschaffende brauchen bezahlbare Räume. Leerstehende Geschäfte können als Zwischennutzung für Kultur geöffnet werden.",
        },
        {
          title: "Veranstaltungen fördern",
          text: "Stadtfeste, Märkte und Events beleben die Innenstadt und stärken den Zusammenhalt. Bürokratische Hürden für Veranstalter abbauen.",
        },
        {
          title: "Kultur für alle",
          text: "Kulturelle Angebote müssen für jeden zugänglich sein – unabhängig vom Einkommen. Besonders Kinder und Jugendliche sollen früh Zugang zu Kultur bekommen.",
        },
        {
          title: "Lüneburgs Geschichte lebendig halten",
          text: "Die historische Salz- und Hansestadt hat eine einzigartige Geschichte. Dieses Erbe zu pflegen und sichtbar zu machen, stärkt die Identität unserer Stadt.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Zwischennutzung leerer Ladenlokale für Kultur",
      text: "Jedes leerstehende Geschäft in der Innenstadt, das länger als drei Monate leer steht, wird für kulturelle Zwischennutzung angeboten – als Pop-up-Galerie, Proberaum oder Werkstatt für Künstler. Die Stadt vermittelt, der Eigentümer trägt keine Kosten, die Nebenkosten übernimmt ein Kulturfonds. Heiko kennt die Eigentümer persönlich aus 20 Jahren LCM-Arbeit. So wird aus Leerstand Leben – und Künstler bekommen bezahlbare Räume direkt in der Altstadt.",
    },
    cta: "Kultur macht Lüneburg lebenswert.",
  },
  {
    slug: "sport",
    number: "09",
    title: "Für ein sportliches Lüneburg",
    subtitle: "Sport verbindet – in jedem Alter, in jedem Stadtteil",
    image: "/programmpunkt_9.webp",
    highlights: ["Sportstätten-Sanierungsplan", "Vereins-Sprechstunde im Rathaus", "Online-Hallenbelegung einführen"],
    heroQuote:
      "Sport ist mehr als Bewegung – er bringt Menschen zusammen.",
    problem: {
      headline: "Sportvereine brauchen Unterstützung",
      text: "Lüneburgs Sportvereine leisten herausragende Arbeit – ehrenamtlich, mit Herzblut und oft trotz schwieriger Bedingungen. Marode Sportstätten, fehlende Hallenzeiten und steigende Kosten machen den Vereinen das Leben schwer. Dabei ist Sport essenziell für Gesundheit, Integration und den Zusammenhalt.",
    },
    positions: {
      headline: "Heikos Sportprogramm",
      items: [
        {
          title: "Sportstätten sanieren und ausbauen",
          text: "Lüneburgs Sporthallen und -plätze müssen in Schuss gebracht werden. Sanierungsstau abbauen, moderne Anlagen für Vereine und Schulen.",
        },
        {
          title: "Vereine stärken",
          text: "Sportvereine sind das Rückgrat des gesellschaftlichen Lebens. Weniger Bürokratie, mehr Förderung, bessere Hallenzeiten.",
        },
        {
          title: "Breitensport fördern",
          text: "Sport muss für alle bezahlbar und zugänglich sein. Besonders Kinder und Jugendliche sollen die Möglichkeit haben, sich in Vereinen zu engagieren.",
        },
        {
          title: "Bewegung im öffentlichen Raum",
          text: "Parks, Laufstrecken und Fitness-Bereiche im Freien machen Sport niedrigschwellig verfügbar – für alle Altersgruppen.",
        },
      ],
    },
    concreteExample: {
      headline: "Konkret: Sportstätten-Offensive und Vereins-Sprechstunde",
      text: "Heiko lädt in den ersten 60 Tagen als OB alle Lüneburger Sportvereine zu einer Vereins-Sprechstunde ins Rathaus ein. Jeder Verein kann seine drängendsten Probleme vortragen – marode Umkleiden, fehlende Hallenzeiten, bürokratische Hürden. Daraus entsteht ein priorisierter Sanierungsplan mit klaren Zeitvorgaben. Zusätzlich: Eine zentrale Online-Plattform für die Hallenbelegung, damit freie Zeiten sofort sichtbar und buchbar sind. Weniger Verwaltung, mehr Sportzeit.",
    },
    cta: "Ein sportliches Lüneburg ist ein starkes Lüneburg.",
  },
];
