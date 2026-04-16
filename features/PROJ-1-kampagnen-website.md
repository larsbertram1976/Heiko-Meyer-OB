# PROJ-1: Kampagnen-Website

## Status: In Progress
**Created:** 2026-04-09
**Last Updated:** 2026-04-09

## Dependencies
- None

## Beschreibung
Vollständiger Nachbau der bestehenden Website meyer-lueneburg.de als Next.js Single-Page-Anwendung. Alle Sektionen werden im gleichen Look & Feel umgesetzt mit dem bestehenden Farbschema (Dunkelblau, Grün, Weiß) und den vorhandenen Assets.

## Design-Referenz
- **Primärfarbe:** Dunkelblau (Navy) – Header, Wahlprogramm-Hintergrund, Zitat-Boxen
- **Akzentfarbe:** Grün – Buttons, Akzentleisten, Rahmen um Bilder
- **Hintergrund:** Weiß für Content-Bereiche
- **Schrift:** Fett/Bold für Überschriften (Uppercase), serifenlose Schrift
- **Designelemente:** Grüne Seitenleisten bei Überschriften, blaue Hintergrundflächen, Bildrahmen mit blau/grünem Akzent

## Sektionen

### 1. Header/Navigation
- Logo (Karikatur von Heiko Meyer) + "HEIKO MEYER – IHR OBERBÜRGERMEISTER-KANDIDAT"
- Navigation: Start, Über mich, Wahlprogramm
- Responsive: Hamburger-Menü auf Mobile

### 2. Hero Section
- Badge: "SIE KENNEN MICH!"
- Headline: "Unabhängig für ein Miteinander"
- Subtext: "Zukunft gestalten, Wirtschaft stärken und unsere Heimat lebenswert erhalten. Mit klarer Kante für unsere Stadt."
- CTA-Button: "Zum Wahlprogramm" (scrollt zur Wahlprogramm-Sektion)
- Portrait-Foto von Heiko Meyer (rechte Seite)
- Slogan-Grafik: "Unabhängig für ein Miteinander" (schräg, über dem Foto)

### 3. Über Mich Section
- Überschrift: "ÜBER MICH" mit grüner Seitenleiste
- Unterzeile: "Lüneburg und ich - wir gehören zusammen."
- Foto (links): Heiko Meyer privat
- Zitat-Box (blau): "Hier bin ich aufgewachsen und verwurzelt. Hier bin ich nicht nur vernetzt, sondern auch geerdet."
- "Kurz & Knapp" Steckbrief:
  - 57 Jahre, verheiratet, 2 Kinder, Familienmensch
  - Kaufmann & Unternehmer
  - Vorsitzender des Lüneburger City-Managements (LCM) (20 Jahre)
  - Gewähltes Mitglied im Stadtrat Lüneburg (5 Jahre)
  - Bindeglied der Kaufleute in Lüneburg (20 Jahre)
  - Mitglied des Bauausschusses (20 Jahre)
  - Mitglied oder stellvertretendes Mitglied des Mobilitätsausschusses (20 Jahre)
  - Mitglied des Aufsichtsrates der Lüneburger Stadtmarketing (LGM) (20 Jahre)
- Langer Text: Persönliche Ansprache an die Bürger (vorhandener Text übernehmen)
- Unterschrift-Grafik + "Ihr Heiko Meyer"

### 4. Wahlprogramm Section
- Blauer Hintergrund
- Überschrift: "MEIN WAHLPROGRAMM" mit grüner Seitenleiste
- Unterzeile: "9 Punkte für ein besseres Lüneburg"
- 9 Karten im 2-Spalten-Grid:
  1. Miteinander für Lüneburg: #TeamLueneburg
  2. Für ein sicheres Lüneburg
  3. Für mehr bezahlbaren Wohnraum
  4. Für einen starken und attraktiven Wirtschaftsstandort
  5. Für eine attraktive Bildungs- und Universitätsstadt
  6. Für ein soziales Lüneburg
  7. Für ein zukunftsfähiges Umwelt- und Verkehrskonzept
  8. Für ein kulturell reiches Lüneburg
  9. Für ein sportliches Lüneburg
- Jede Karte: Bild + Nummer (01-09) + Titel auf grünem Balken

### 5. Footer
- Logo (Meyer Lüneburg)
- Links: Impressum, Datenschutz
- Copyright: "© 2026 Heiko Meyer. Alle Rechte vorbehalten."

## User Stories
- Als Bürger möchte ich auf der Startseite sofort erkennen, wer Heiko Meyer ist und wofür er steht, damit ich mich schnell informieren kann.
- Als Bürger möchte ich das Wahlprogramm übersichtlich sehen, damit ich die 9 Schwerpunkte auf einen Blick erfassen kann.
- Als Bürger möchte ich auf dem Handy die Seite genauso gut nutzen können wie am Desktop.
- Als Bürger möchte ich über die Navigation schnell zu den einzelnen Sektionen springen können.
- Als Bürger möchte ich die Kontaktdaten finden können, um Heiko Meyer zu erreichen.

## Acceptance Criteria
- [ ] Header mit Logo, Name und Navigation ist sichtbar und sticky
- [ ] Hero Section zeigt Slogan, Subtext, CTA-Button und Portrait
- [ ] CTA-Button scrollt smooth zur Wahlprogramm-Sektion
- [ ] Über Mich zeigt Foto, Kurz & Knapp, Zitat und Fließtext
- [ ] Wahlprogramm zeigt alle 9 Punkte als nummerierte Bildkarten
- [ ] Footer zeigt Logo, Links und Copyright
- [ ] Responsive Design: Mobile, Tablet und Desktop
- [ ] Farbschema entspricht der Originalseite (Dunkelblau, Grün, Weiß)
- [ ] Lighthouse Performance Score > 90
- [ ] Alle Bilder sind optimiert (next/image)

## Edge Cases
- Was passiert bei sehr langen Bildschirmen? → Sektionen bleiben zentriert mit max-width
- Was passiert ohne JavaScript? → SSR stellt sicher, dass Inhalte sichtbar sind
- Was passiert bei langsamer Verbindung? → Bilder lazy-loaded, optimierte Assets
- Was passiert bei fehlenden Bildern? → Platzhalter/Alt-Text wird angezeigt
- Was passiert auf sehr kleinen Screens (< 320px)? → Minimum-Width sicherstellen

## Technical Requirements
- Next.js App Router mit SSR/SSG
- Tailwind CSS für Styling
- next/image für optimierte Bilder
- Smooth Scroll für Anchor-Navigation
- Responsive Breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)

---
<!-- Sections below are added by subsequent skills -->

## Tech Design (Solution Architect)
**Designed:** 2026-04-09

### Komponentenstruktur
```
Layout (Header + Footer auf jeder Seite)
├── Header
│   ├── Logo + Kandidaten-Titel
│   ├── Desktop-Navigation (Start, Über mich, Wahlprogramm)
│   └── Mobile Hamburger-Menü (Sheet/Drawer)
├── Startseite (page.tsx)
│   ├── HeroSection
│   │   ├── Badge "SIE KENNEN MICH!"
│   │   ├── Headline + Subtext
│   │   ├── CTA-Button → scrollt zu Wahlprogramm
│   │   └── Portrait-Bild mit Slogan-Grafik
│   ├── AboutSection
│   │   ├── Foto (links) + Zitat-Box (blau)
│   │   ├── "Kurz & Knapp" Steckbrief-Liste
│   │   └── Fließtext + Unterschrift
│   └── ProgramSection
│       ├── Überschrift + Unterzeile
│       └── 9x ProgramCard (2-Spalten-Grid)
└── Footer (Logo, Impressum/Datenschutz-Links, Copyright)
```

### Datenmodell
- Kein Backend, keine Datenbank – rein statische Seite (SSG)
- Wahlprogramm-Punkte: Array mit 9 Einträgen (Nummer, Titel, Bild-Pfad)
- Bilder im `/public/images/` Ordner
- Texte direkt in den Komponenten

### Farbschema
- **Primary (Navy):** ~#003366 – Header, Wahlprogramm-Hintergrund, Zitate
- **Accent (Grün):** ~#4CAF50 – Buttons, Balken, Rahmen
- **Background:** #FFFFFF
- Als Tailwind Custom Colors in tailwind.config definiert

### Tech-Entscheidungen
| Entscheidung | Begründung |
|---|---|
| SSG (Static Site Generation) | Keine dynamischen Daten → schnellste Ladezeit |
| Single Page mit Sektionen | Originalseite ist Single Page → gleiche UX |
| shadcn Sheet für Mobile-Menü | Bereits installiert, bewährtes Pattern |
| shadcn Badge für Hero-Badge | Bereits installiert |
| next/image für Bilder | Automatische Optimierung + Lazy Loading |
| CSS scroll-behavior: smooth | Einfachste Lösung für Anchor-Nav |

### Benötigte Assets (/public/images/)
logo.png, logo-footer.png, hero-portrait.jpg, slogan-graphic.png, about-photo.jpg, signature.png, program-01.jpg bis program-09.jpg

### Abhängigkeiten
Keine neuen Pakete nötig – Next.js, Tailwind, shadcn/ui bereits vorhanden

## QA Test Results
_To be added by /qa_

## Deployment
_To be added by /deploy_
