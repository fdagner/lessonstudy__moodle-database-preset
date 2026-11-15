# Lesson Study

Lesson Study ist eine Vorgabe (Preset) für das Moodle-Aktivitätsmodul **Datenbank**.

## Beschreibung

Schüler:innen können Unterrichtsbeobachtungen erfassen und auswerten:

- **Name** der beobachteten Schülerin / des beobachteten Schülers sowie **Farbe** der Gruppe
- **Beobachtungen** mit Uhrzeit, Engagement (0–100 %) und optionale Notiz – über ein Modal-Fenster erfassbar
- **Engagement-Diagramm** in der Gruppenfarbe: Punkte, gestrichelte Verbindungslinien, gleichzeitige Beobachtungen werden als Cluster mit Anzahl zusammengefasst (Klick zum Ausklappen)
- **Listenansicht** mit kombiniertem Diagramm über alle Einträge inkl. Legende
- **SVG-Export** des Diagramms (Einzelansicht und Listenansicht)
- **Reflexion / Fazit** als Textfeld unter dem Diagramm

## Automatisches Zwischenspeichern & Session-Schutz

- Änderungen werden laufend im Browser (`localStorage`) zwischengespeichert. Nach einem Session-Timeout oder Browser-Absturz werden nicht gespeicherte Änderungen beim nächsten Öffnen **automatisch wiederhergestellt** (mit Rückgängig-Möglichkeit).
- Ein **Keep-Alive** ruft alle 4 Minuten `core_session_touch` auf (Moodle 4.1+), solange die Seite sichtbar ist – so wird der Nutzer beim längeren Bearbeiten nicht automatisch abgemeldet.

## Installation

**Als Plugin (empfohlen):** Release-ZIP von der [Releases-Seite](https://github.com/fdagner/lessonstudy__moodle-database-preset/releases) herunterladen, entpacken und den Ordner `lessonstudy` nach `moodle/mod/data/preset/` kopieren. Danach beim Anlegen einer Datenbank-Aktivität die Vorgabe „Lesson Study" auswählen.

**Als Vorgabe importieren:** Alternativ kann die ZIP-Datei direkt in Moodle hochgeladen werden: Datenbank-Aktivität → **Vorgaben (Presets) → Vorgabe importieren**.

## Sprachunterstützung

Die Vorgabe ist auf Deutsch. Die Templates lassen sich leicht anpassen und übersetzen.
