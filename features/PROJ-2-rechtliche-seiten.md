# PROJ-2: Rechtliche Seiten (Impressum & Datenschutz)

## Status: Planned
**Created:** 2026-04-09
**Last Updated:** 2026-04-09

## Dependencies
- Requires: PROJ-1 (Kampagnen-Website) – für Header, Footer und Layout

## Beschreibung
Impressum und Datenschutzerklärung als eigene Unterseiten (/impressum, /datenschutz), erreichbar über den Footer. Gleiche Gestaltung wie die Hauptseite. Inhalte werden 1:1 von der bestehenden Seite übernommen.

## Inhalte

### Impressum (/impressum)
- Angaben gemäß § 5 DDG
- Heiko Meyer, Wahlkampfbüro, Friedenstr. 17, 21335 Lüneburg
- Telefon: +49 (0) 160 747 17 00
- E-Mail: heiko@meyer-lueneburg.de
- Verantwortlich nach § 18 Abs. 2 MStV
- Verantwortlich im Sinne des Presserechts
- Social Media: Facebook "heikomeyerlg", Instagram "heikomeyerlg"
- Haftungshinweise
- Bildnachweise

### Datenschutz (/datenschutz)
- Vollständige DSGVO-konforme Datenschutzerklärung
- Abschnitte: Datenschutz auf einen Blick, Hosting (netcup GmbH), Allgemeine Hinweise, Plugins und Tools (YouTube)
- Verantwortliche Stelle: Heiko Meyer, Friedenstraße 17, 21335 Lüneburg

## User Stories
- Als Besucher möchte ich das Impressum einsehen können, um die gesetzlich vorgeschriebenen Angaben zu finden.
- Als Besucher möchte ich die Datenschutzerklärung lesen können, um zu wissen, wie meine Daten verarbeitet werden.
- Als Besucher möchte ich von jeder Seite aus zum Impressum und Datenschutz gelangen können.

## Acceptance Criteria
- [ ] /impressum Seite ist erreichbar und zeigt alle Pflichtangaben
- [ ] /datenschutz Seite ist erreichbar und zeigt vollständige DSGVO-Erklärung
- [ ] Beide Seiten sind über Footer-Links erreichbar
- [ ] Gleiches Layout (Header + Footer) wie Hauptseite
- [ ] Texte sind gut lesbar und strukturiert (Überschriften, Absätze)
- [ ] Responsive Design auf allen Geräten

## Edge Cases
- Was passiert bei direktem Aufruf der URL? → Seite lädt korrekt (SSG)
- Was passiert bei Aktualisierung der Rechtstexte? → Texte sind in eigenen Komponenten, leicht editierbar

## Technical Requirements
- Statische Seiten (SSG)
- Wiederverwendung des Layouts von PROJ-1
- Überschriften-Hierarchie für Barrierefreiheit

---
<!-- Sections below are added by subsequent skills -->

## Tech Design (Solution Architect)
_To be added by /architecture_

## QA Test Results
_To be added by /qa_

## Deployment
_To be added by /deploy_
