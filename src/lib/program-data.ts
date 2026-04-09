export type ProgramTopic = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
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
  cta: string;
};

export const programTopics: ProgramTopic[] = [
  {
    slug: "miteinander",
    number: "01",
    title: "Miteinander f\u00fcr L\u00fcneburg: #TeamLueneburg",
    subtitle: "B\u00fcrgerbeteiligung, Transparenz und eine Verwaltung, die zuh\u00f6rt",
    image: "/programmpunkt_1.webp",
    heroQuote:
      "Es geht mir um das Miteinander innerhalb der Gesellschaft und nicht um Dinge, die die Gesellschaft spalten.",
    problem: {
      headline: "Warum sich viele L\u00fcneburger nicht geh\u00f6rt f\u00fchlen",
      text: "Entscheidungen fallen hinter verschlossenen T\u00fcren. B\u00fcrger erfahren erst von Projekten, wenn alles beschlossen ist. Die Verwaltung arbeitet mit veralteten Methoden und ist f\u00fcr viele schwer erreichbar. Gleichzeitig w\u00e4chst der Frust: Steuergeld wird f\u00fcr fragw\u00fcrdige Projekte wie die ARENA ausgegeben, ohne dass B\u00fcrger mitentscheiden k\u00f6nnen.",
      facts: [
        { value: "78.000", label: "Einwohner verdienen eine Stimme" },
        { value: "20+", label: "Jahre Erfahrung mit der Verwaltung" },
        { value: "250+", label: "LCM-Mitglieder vertrauen Heiko" },
      ],
    },
    positions: {
      headline: "So bringt Heiko das Miteinander zur\u00fcck",
      items: [
        {
          title: "B\u00fcrgerbeteiligung f\u00f6rdern",
          text: "L\u00fcneburger werden in Projekte und Kompetenzteams eingebunden. Mehr reden, mehr zuh\u00f6ren, schneller l\u00f6sen. Heiko will f\u00fcr jeden B\u00fcrger ansprechbar sein.",
        },
        {
          title: "Verwaltung neuorganisieren",
          text: "Schluss mit althergebrachten Verwaltungsmethoden. Agile Steuerung, schnellere Entscheidungsprozesse, ein Rathaus das funktioniert \u2013 nicht blockiert.",
        },
        {
          title: "Steuerverschwendung beenden",
          text: "Sorgsamer Umgang mit dem Geld der B\u00fcrger. Keine fragw\u00fcrdigen Gro\u00dfprojekte ohne transparente Kosten-Nutzen-Analyse.",
        },
        {
          title: "Transparenz st\u00e4rken",
          text: "Offene Informationsfl\u00fcsse: B\u00fcrger sollen nachvollziehen k\u00f6nnen, welche Entscheidungen getroffen werden und warum.",
        },
        {
          title: "Begegnungsr\u00e4ume schaffen",
          text: "L\u00fcneburg braucht mehr Orte, an denen sich Menschen treffen und austauschen k\u00f6nnen. Begegnungsr\u00e4ume st\u00e4rken den Zusammenhalt.",
        },
        {
          title: "Digitalisierung der Verwaltung",
          text: "Alle beh\u00f6rdlichen Dienstleistungen digital verf\u00fcgbar machen. Das Rathaus muss ins 21. Jahrhundert kommen.",
        },
      ],
    },
    cta: "Gestalten statt verwalten \u2013 mit Heiko Meyer.",
  },
  {
    slug: "sicherheit",
    number: "02",
    title: "F\u00fcr ein sicheres L\u00fcneburg",
    subtitle: "Konsequent handeln, ohne die sozialen Ursachen zu ignorieren",
    image: "/programmpunkt_2.webp",
    heroQuote: "Es ist f\u00fcnf nach Zw\u00f6lf. An der Lage muss sich schnell etwas \u00e4ndern.",
    problem: {
      headline: "Die Situation am Sande ist unhaltbar",
      text: "Der Platz Am Sande \u2013 einer der sch\u00f6nsten Pl\u00e4tze Norddeutschlands \u2013 ist zum Brennpunkt f\u00fcr Drogenkonsum, Kleinkriminalit\u00e4t und st\u00f6rendes Verhalten geworden. Was fr\u00fcher im Clamartpark lief, findet jetzt mitten in der Innenstadt statt. Bewohner, Besucher und Einzelh\u00e4ndler leiden gleicherma\u00dfen.",
      facts: [
        { value: "+28%", label: "Diebst\u00e4hle 2022\u20132023" },
        { value: "+70%", label: "Ladendiebst\u00e4hle in einem Jahr" },
        { value: "5.574", label: "Diebstahls-Taten in 2023" },
      ],
    },
    positions: {
      headline: "Heikos Plan f\u00fcr ein sicheres L\u00fcneburg",
      items: [
        {
          title: "Mehr Polizeipr\u00e4senz in der Innenstadt",
          text: "Darin sind sich alle einig \u2013 vom LCM \u00fcber die Gastronomen bis zur Stadtverwaltung. Sichtbare Pr\u00e4senz schreckt ab und gibt Sicherheit.",
        },
        {
          title: "Kommunaler Ordnungsdienst \u2013 jetzt",
          text: "Die Stadtverwaltung plant sechs Stellen. Heiko will, dass es schneller geht. Kein jahrelanges Warten, sondern z\u00fcgige Umsetzung.",
        },
        {
          title: "Aufsuchende Sozialarbeit st\u00e4rken",
          text: "Sicherheit und soziale Arbeit m\u00fcssen Hand in Hand gehen. Die Ursachen bek\u00e4mpfen, nicht nur die Symptome.",
        },
        {
          title: "Klare Regeln f\u00fcr \u00f6ffentliche Pl\u00e4tze",
          text: "Am Sande und Am Berge brauchen klare Regelungen. Kein Wegschauen, kein Verdr\u00e4ngen \u2013 pragmatisches Handeln.",
        },
        {
          title: "Zusammenarbeit aller Akteure",
          text: "Polizei, Ordnungsdienst, Sozialarbeiter und Anwohner m\u00fcssen zusammenarbeiten. Nur gemeinsam wird die Innenstadt wieder sicher.",
        },
      ],
    },
    cta: "Sicherheit ist kein Luxus \u2013 sie ist ein Grundrecht.",
  },
  {
    slug: "wohnraum",
    number: "03",
    title: "F\u00fcr mehr bezahlbaren Wohnraum",
    subtitle: "Pragmatische L\u00f6sungen statt leerer Versprechen",
    image: "/programmpunkt_3.webp",
    heroQuote:
      "Wir brauchen bezahlbare Wohnungen f\u00fcr die Menschen in L\u00fcneburg. F\u00fcr die Menschen, die hier bereits wohnen.",
    problem: {
      headline: "Wohnen in L\u00fcneburg wird zum Luxus",
      text: "L\u00fcneburg w\u00e4chst \u2013 aber der Wohnungsmarkt h\u00e4lt nicht mit. Mieten steigen, Neubau kommt zu langsam, B\u00fcrokratie bremst Bauprojekte. Gleichzeitig steht \u00fcber vielen Gesch\u00e4ften in der Innenstadt ungenutzter Wohnraum leer. Das ist nicht hinnehmbar.",
    },
    positions: {
      headline: "Heikos Wohnraum-Offensive",
      items: [
        {
          title: "Wohnraum \u00fcber Gesch\u00e4ften aktivieren",
          text: "\u00dcber vielen Gesch\u00e4ften in der Innenstadt liegt ungenutzter Wohnraum. Heiko geht direkt auf Hauseigent\u00fcmer zu. Das schafft Wohnungen ohne Neubau \u2013 und belebt die Innenstadt.",
        },
        {
          title: "Neubau beschleunigen",
          text: "L\u00fcneburg braucht neue Wohnungen. Bauprojekte m\u00fcssen schneller genehmigt und umgesetzt werden. Die Verwaltung muss hier Tempo machen.",
        },
        {
          title: "B\u00fcrokratie beim Bauen abbauen",
          text: "Zu viele Vorschriften, zu lange Genehmigungsverfahren. Heiko will die Verwaltung so organisieren, dass Bauprojekte schneller vorankommen.",
        },
        {
          title: "Sozial und fair",
          text: "Bezahlbarer Wohnraum ist eine Grundvoraussetzung f\u00fcr ein soziales L\u00fcneburg, in dem jeder die gleichen Chancen hat.",
        },
      ],
    },
    cta: "Wohnraum schaffen, nicht verwalten.",
  },
  {
    slug: "wirtschaft",
    number: "04",
    title: "F\u00fcr einen starken und attraktiven Wirtschaftsstandort",
    subtitle: "20 Jahre Erfahrung f\u00fcr das \u201EKaufhaus L\u00fcneburg\u201C",
    image: "/programmpunkt_4.webp",
    heroQuote:
      "Ich kenne die Herausforderungen der H\u00e4ndler und Gastronomen \u2013 von steigenden Kosten bis zum Online-Handel.",
    problem: {
      headline: "Die Innenstadt k\u00e4mpft",
      text: "Leerstand, steigende Kosten, Konkurrenz durch den Online-Handel und b\u00fcrokratische H\u00fcrden \u2013 die L\u00fcneburger Innenstadt steht unter Druck. L\u00fcneburgs historische Altstadt mit ihrem einzigartigen Branchenmix aus inhabergef\u00fchrtem Handel und attraktiven Filialisten ist ein Schatz, den es zu sch\u00fctzen gilt.",
      facts: [
        { value: "250+", label: "LCM-Mitglieder" },
        { value: "20", label: "Jahre LCM-Vorsitz" },
        { value: "50+", label: "Jahre LCM-Geschichte" },
      ],
    },
    positions: {
      headline: "Heikos Plan f\u00fcr die Wirtschaft",
      items: [
        {
          title: "Leerstand aktiv bek\u00e4mpfen",
          text: "Direkte Gespr\u00e4che mit Hausbesitzern, um leerstehende Gesch\u00e4fte wieder zu f\u00fcllen. Nicht abwarten, sondern aktiv auf Eigent\u00fcmer zugehen und L\u00f6sungen finden.",
        },
        {
          title: "Wirtschafts-Perspektive ins Rathaus",
          text: "Als Unternehmer und LCM-Vorsitzender bringt Heiko die Perspektive der Wirtschaft direkt ins Rathaus. Er versteht, was H\u00e4ndler und Gastronomen brauchen.",
        },
        {
          title: "Das \u201EKaufhaus L\u00fcneburg\u201C st\u00e4rken",
          text: "Die Innenstadt als Einkaufsstandort attraktiv halten: Kunden aus L\u00fcneburg, dem Umland und sogar Hamburg sollen gerne wiederkommen.",
        },
        {
          title: "Wohnraum \u00fcber Gesch\u00e4ften",
          text: "Doppeleffekt: Neuer Wohnraum entsteht und die Innenstadt wird belebter \u2013 mehr Bewohner bedeuten mehr Kunden f\u00fcr den Einzelhandel.",
        },
      ],
    },
    cta: "Wer die Wirtschaft versteht, kann die Stadt gestalten.",
  },
  {
    slug: "bildung",
    number: "05",
    title: "F\u00fcr eine attraktive Bildungs- und Universit\u00e4tsstadt",
    subtitle: "Bildung als Fundament f\u00fcr L\u00fcneburgs Zukunft",
    image: "/programmpunkt_5.webp",
    heroQuote:
      "Die Leuphana ist ein Gewinn f\u00fcr L\u00fcneburg \u2013 als Wirtschaftsfaktor, Innovationstreiber und f\u00fcr das Stadtleben.",
    problem: {
      headline: "Bildung entscheidet \u00fcber L\u00fcneburgs Zukunft",
      text: "L\u00fcneburg ist Universit\u00e4tsstadt \u2013 die Leuphana pr\u00e4gt das Stadtbild und bringt junge Menschen, Ideen und Wirtschaftskraft. Gleichzeitig stehen Schulen vor dem Ganztagsausbau, und der Bildungspakt 2040 muss mit Leben gef\u00fcllt werden. Bildung ist kein Kostenfaktor \u2013 sie ist eine Investition in unsere Zukunft.",
    },
    positions: {
      headline: "Heikos Bildungsagenda",
      items: [
        {
          title: "Zusammenarbeit mit der Leuphana st\u00e4rken",
          text: "Die Br\u00fccke zwischen Stadt und Universit\u00e4t ausbauen. Studierende sind L\u00fcneburger \u2013 sie sollen hier bleiben und gr\u00fcnden wollen.",
        },
        {
          title: "Ganztagsschulen ausbauen",
          text: "Familien brauchen verl\u00e4ssliche Betreuung. Der Ganztagsausbau muss Priorit\u00e4t haben \u2013 mit guter Qualit\u00e4t, nicht nur Verwahrung.",
        },
        {
          title: "Bildungspakt 2040 umsetzen",
          text: "L\u00fcneburg braucht moderne Schulen mit guter Ausstattung. Digitale Infrastruktur, sanierte Geb\u00e4ude, attraktive Lernumgebungen.",
        },
        {
          title: "Fachkr\u00e4fte f\u00fcr L\u00fcneburg",
          text: "Bildung und Wirtschaft zusammendenken: Ausbildungspl\u00e4tze f\u00f6rdern, junge Menschen in der Region halten, Fachkr\u00e4ftemangel bek\u00e4mpfen.",
        },
      ],
    },
    cta: "Wer in Bildung investiert, investiert in L\u00fcneburgs Zukunft.",
  },
  {
    slug: "soziales",
    number: "06",
    title: "F\u00fcr ein soziales L\u00fcneburg",
    subtitle: "Eine Stadt, in der jeder die gleichen Chancen hat",
    image: "/programmpunkt_6.webp",
    heroQuote:
      "Ich bin f\u00fcr alle L\u00fcneburger da. Und das kann nur einer, der keiner Partei angeh\u00f6rt.",
    problem: {
      headline: "Zusammenhalt braucht konkrete Taten",
      text: "In einer wachsenden Stadt darf niemand zur\u00fcckbleiben. Steigende Mieten, Armut im Alter, fehlende Begegnungsr\u00e4ume \u2013 der soziale Zusammenhalt in L\u00fcneburg steht unter Druck. Es reicht nicht, gute Abs\u00e4tze zu schreiben. Es braucht jemanden, der anpackt.",
    },
    positions: {
      headline: "Heikos sozialer Kompass",
      items: [
        {
          title: "Bezahlbarer Wohnraum als Grundrecht",
          text: "Wohnen darf kein Luxus sein. Heiko k\u00e4mpft f\u00fcr mehr bezahlbaren Wohnraum \u2013 durch Aktivierung von Leerstand und schnelleren Neubau.",
        },
        {
          title: "Sozialarbeit st\u00e4rken",
          text: "Aufsuchende Sozialarbeit muss ausgebaut werden. Wer Hilfe braucht, muss Hilfe bekommen \u2013 niedrigschwellig und ohne b\u00fcrokratische H\u00fcrden.",
        },
        {
          title: "Begegnungsr\u00e4ume f\u00fcr alle",
          text: "L\u00fcneburg braucht Orte, an denen sich Menschen treffen \u2013 generationen\u00fcbergreifend, barrierefrei, in jedem Stadtteil.",
        },
        {
          title: "Chancengleichheit",
          text: "Jedes Kind in L\u00fcneburg verdient die gleiche Chance \u2013 unabh\u00e4ngig vom Geldbeutel der Eltern. Bildung, Sport und Kultur m\u00fcssen f\u00fcr alle zug\u00e4nglich sein.",
        },
      ],
    },
    cta: "Ein L\u00fcneburg, das zusammenh\u00e4lt.",
  },
  {
    slug: "verkehr",
    number: "07",
    title: "F\u00fcr ein zukunftsf\u00e4higes Umwelt- und Verkehrskonzept",
    subtitle: "Alle Verkehrsteilnehmer miteinander vers\u00f6hnen",
    image: "/programmpunkt_7.webp",
    heroQuote:
      "Nicht gegeneinander, sondern miteinander. Pragmatisch, nicht ideologisch.",
    problem: {
      headline: "Verkehrschaos statt Verkehrskonzept",
      text: "Bleckeder Landstra\u00dfe, Dahlenburger Landstra\u00dfe und Soltauer Stra\u00dfe \u2013 alle gleichzeitig dicht. Ganze Stadtteile vom Verkehr abgeschnitten. Radwegeausbau auf Kosten anderer Verkehrsteilnehmer. L\u00fcneburg braucht kein ideologisches Gegeneinander von Rad und Auto \u2013 sondern ein Konzept, das f\u00fcr alle funktioniert.",
    },
    positions: {
      headline: "Heikos Verkehrskonzept",
      items: [
        {
          title: "Alle Verkehrsteilnehmer ber\u00fccksichtigen",
          text: "Radfahrer, Autofahrer, Fu\u00dfg\u00e4nger und \u00d6PNV in einem Gesamtkonzept zusammendenken. Keine einseitigen Ma\u00dfnahmen, die die Stadt spalten.",
        },
        {
          title: "Ausreichend Stellpl\u00e4tze",
          text: "Die Innenstadt muss f\u00fcr alle erreichbar bleiben \u2013 auch f\u00fcr Kunden aus dem Umland, die zum Einkaufen nach L\u00fcneburg kommen.",
        },
        {
          title: "Park-and-Ride-System",
          text: "Parken am Stadtrand, weiter mit \u00d6PNV in die Innenstadt. Eine moderne L\u00f6sung, die Verkehr reduziert und die Innenstadt entlastet.",
        },
        {
          title: "Bessere Baustellenkoordination",
          text: "Nie wieder drei Hauptstra\u00dfen gleichzeitig dicht. Baustellen m\u00fcssen intelligent geplant werden \u2013 daf\u00fcr braucht es Zusammenarbeit mit dem Landkreis.",
        },
        {
          title: "Zusammenarbeit mit dem Landkreis",
          text: "Viele Stra\u00dfen liegen in der Zust\u00e4ndigkeit des Landkreises. Verkehrspolitik geht nur gemeinsam mit dem Landrat.",
        },
      ],
    },
    cta: "Ein Verkehrskonzept, das funktioniert \u2013 f\u00fcr alle.",
  },
  {
    slug: "kultur",
    number: "08",
    title: "F\u00fcr ein kulturell reiches L\u00fcneburg",
    subtitle: "Kultur ist der Kitt, der unsere Stadt zusammenh\u00e4lt",
    image: "/programmpunkt_8.webp",
    heroQuote:
      "L\u00fcneburgs Kultur ist einzigartig. Sie verdient Wertsch\u00e4tzung \u2013 und Unterst\u00fctzung.",
    problem: {
      headline: "Kultur braucht Raum und F\u00f6rderung",
      text: "L\u00fcneburg hat eine lebendige Kulturszene \u2013 von der Musikschule \u00fcber das Theater bis zu freien K\u00fcnstlern. Doch steigende Kosten und fehlende R\u00e4ume setzen der Szene zu. Kultur ist kein Luxus \u2013 sie macht unsere Stadt lebenswert und zieht Menschen an.",
    },
    positions: {
      headline: "Heikos Kulturprogramm",
      items: [
        {
          title: "Kulturr\u00e4ume sichern und schaffen",
          text: "K\u00fcnstler und Kulturschaffende brauchen bezahlbare R\u00e4ume. Leerstehende Gesch\u00e4fte k\u00f6nnen als Zwischennutzung f\u00fcr Kultur ge\u00f6ffnet werden.",
        },
        {
          title: "Veranstaltungen f\u00f6rdern",
          text: "Stadtfeste, M\u00e4rkte und Events beleben die Innenstadt und st\u00e4rken den Zusammenhalt. B\u00fcrokratische H\u00fcrden f\u00fcr Veranstalter abbauen.",
        },
        {
          title: "Kultur f\u00fcr alle",
          text: "Kulturelle Angebote m\u00fcssen f\u00fcr jeden zug\u00e4nglich sein \u2013 unabh\u00e4ngig vom Einkommen. Besonders Kinder und Jugendliche sollen fr\u00fch Zugang zu Kultur bekommen.",
        },
        {
          title: "L\u00fcneburgs Geschichte lebendig halten",
          text: "Die historische Salz- und Hansestadt hat eine einzigartige Geschichte. Dieses Erbe zu pflegen und sichtbar zu machen, st\u00e4rkt die Identit\u00e4t unserer Stadt.",
        },
      ],
    },
    cta: "Kultur macht L\u00fcneburg lebenswert.",
  },
  {
    slug: "sport",
    number: "09",
    title: "F\u00fcr ein sportliches L\u00fcneburg",
    subtitle: "Sport verbindet \u2013 in jedem Alter, in jedem Stadtteil",
    image: "/programmpunkt_9.webp",
    heroQuote:
      "Sport ist mehr als Bewegung \u2013 er bringt Menschen zusammen.",
    problem: {
      headline: "Sportvereine brauchen Unterst\u00fctzung",
      text: "L\u00fcneburgs Sportvereine leisten herausragende Arbeit \u2013 ehrenamtlich, mit Herzblut und oft trotz schwieriger Bedingungen. Marode Sportst\u00e4tten, fehlende Hallenzeiten und steigende Kosten machen den Vereinen das Leben schwer. Dabei ist Sport essenziell f\u00fcr Gesundheit, Integration und den Zusammenhalt.",
    },
    positions: {
      headline: "Heikos Sportprogramm",
      items: [
        {
          title: "Sportst\u00e4tten sanieren und ausbauen",
          text: "L\u00fcneburgs Sporthallen und -pl\u00e4tze m\u00fcssen in Schuss gebracht werden. Sanierungsstau abbauen, moderne Anlagen f\u00fcr Vereine und Schulen.",
        },
        {
          title: "Vereine st\u00e4rken",
          text: "Sportvereine sind das R\u00fcckgrat des gesellschaftlichen Lebens. Weniger B\u00fcrokratie, mehr F\u00f6rderung, bessere Hallenzeiten.",
        },
        {
          title: "Breitensport f\u00f6rdern",
          text: "Sport muss f\u00fcr alle bezahlbar und zug\u00e4nglich sein. Besonders Kinder und Jugendliche sollen die M\u00f6glichkeit haben, sich in Vereinen zu engagieren.",
        },
        {
          title: "Bewegung im \u00f6ffentlichen Raum",
          text: "Parks, Laufstrecken und Fitness-Bereiche im Freien machen Sport niedrigschwellig verf\u00fcgbar \u2013 f\u00fcr alle Altersgruppen.",
        },
      ],
    },
    cta: "Ein sportliches L\u00fcneburg ist ein starkes L\u00fcneburg.",
  },
];
