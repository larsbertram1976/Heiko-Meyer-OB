# PROJ-3: ElevenLabs Sprachagent

## Status: Planned
**Created:** 2026-04-09
**Last Updated:** 2026-04-09

## Dependencies
- Requires: PROJ-1 (Kampagnen-Website) – für Layout und Design-System

## Beschreibung
Integration eines ElevenLabs Conversational AI Sprachagenten als eigene Sektion auf der Startseite. Der Agent ermöglicht Besuchern, per Sprache Fragen zum Wahlprogramm und zur Person Heiko Meyer zu stellen. Der Agent ist bereits bei ElevenLabs konfiguriert (Agent-ID vorhanden).

## User Stories
- Als Bürger möchte ich dem Sprachagenten Fragen zum Wahlprogramm stellen können, damit ich schnell Antworten zu Themen bekomme, die mich interessieren.
- Als Bürger möchte ich den Sprachagenten einfach per Klick starten können, ohne technische Hürden.
- Als Bürger möchte ich verstehen, was der Sprachagent ist und kann, bevor ich ihn nutze.
- Als älterer Bürger möchte ich den Agenten auch ohne technische Vorkenntnisse nutzen können.

## Sektion auf der Startseite
- Position: Zwischen Wahlprogramm und Footer (oder nach Über Mich – noch zu klären in /architecture)
- Überschrift: z.B. "Fragen? Sprechen Sie mit mir!" (o.ä.)
- Kurze Erklärung: Was der Agent kann und wie er funktioniert
- ElevenLabs Widget / Embed
- Passt ins bestehende Farbschema (Dunkelblau/Grün/Weiß)

## Acceptance Criteria
- [ ] ElevenLabs Widget ist sichtbar in einer eigenen Sektion auf der Startseite
- [ ] Agent kann per Klick gestartet werden
- [ ] Agent antwortet auf Spracheingaben
- [ ] Sektion erklärt kurz, was der Agent ist und kann
- [ ] Design passt zum Rest der Seite (Farbschema, Schriften)
- [ ] Widget lädt performant (Lazy Loading)
- [ ] Funktioniert auf Desktop und Mobile
- [ ] Datenschutzhinweis zur Sprachverarbeitung ist vorhanden oder verlinkt

## Edge Cases
- Was passiert ohne Mikrofon-Berechtigung? → Hinweis anzeigen, dass Mikrofon benötigt wird
- Was passiert bei Browser ohne Mikrofon-Support? → Fallback-Hinweis
- Was passiert bei langsamer Verbindung? → Widget wird lazy-loaded, Ladeindikator
- Was passiert wenn ElevenLabs-Service nicht erreichbar ist? → Fehlerhinweis statt leerer Sektion
- Datenschutz: Nutzer muss informiert werden, dass Sprachdaten an ElevenLabs übermittelt werden

## Technical Requirements
- ElevenLabs Conversational AI Widget/SDK einbinden
- Agent-ID wird als Umgebungsvariable oder Konfiguration bereitgestellt
- Lazy Loading des Widgets für Performance
- Datenschutz-Consent vor erster Nutzung (DSGVO)
- Datenschutzerklärung muss um ElevenLabs-Abschnitt ergänzt werden

---
<!-- Sections below are added by subsequent skills -->

## Tech Design (Solution Architect)
_To be added by /architecture_

## QA Test Results
_To be added by /qa_

## Deployment
_To be added by /deploy_
