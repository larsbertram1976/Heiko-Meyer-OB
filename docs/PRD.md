# Product Requirements Document

## Vision
Neuaufbau der Kampagnen-Website für Heiko Meyer, unabhängiger Oberbürgermeister-Kandidat für Lüneburg. Die bestehende Website (meyer-lueneburg.de) wird als Next.js-Anwendung im gleichen Look & Feel neu erstellt und um einen KI-Sprachagenten (ElevenLabs) erweitert, der Bürgerfragen zum Wahlprogramm beantworten kann.

## Target Users
**Bürgerinnen und Bürger von Lüneburg**, die sich über den OB-Kandidaten Heiko Meyer und sein Wahlprogramm informieren möchten. Sie suchen nach:
- Informationen zur Person und Qualifikation
- Dem 9-Punkte-Wahlprogramm
- Einer einfachen Möglichkeit, Fragen zu stellen (Sprachagent)
- Kontaktmöglichkeiten

## Core Features (Roadmap)

| Priority | Feature | Status |
|----------|---------|--------|
| P0 (MVP) | PROJ-1: Kampagnen-Website (Header, Hero, Über Mich, Wahlprogramm, Footer) | Planned |
| P0 (MVP) | PROJ-2: Rechtliche Seiten (Impressum & Datenschutz) | Planned |
| P1 | PROJ-3: ElevenLabs Sprachagent | Planned |

## Success Metrics
- Website ist live und erreichbar unter neuer Domain/Vercel
- Alle Inhalte der bestehenden Seite sind vollständig übernommen
- Sprachagent ist funktional und beantwortet Fragen zum Wahlprogramm
- Ladezeit < 3 Sekunden (Lighthouse Score > 90)

## Constraints
- Design muss dem bestehenden Look & Feel von meyer-lueneburg.de entsprechen
- Farbschema: Dunkelblau (Primary), Grün (Accent), Weiß (Background)
- Alle Bilder und Assets liegen bereits vor
- Kein Backend/Datenbank nötig (statische Seite + ElevenLabs Widget)
- Tech Stack: Next.js, Tailwind CSS, shadcn/ui

## Non-Goals
- Kein CMS oder Admin-Bereich
- Kein Kontaktformular (nur Kontaktdaten anzeigen)
- Keine Terminbuchung
- Kein Blog oder News-Bereich
- Keine Social-Media-Feed-Integration
