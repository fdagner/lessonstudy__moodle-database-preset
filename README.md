# Lesson Study

Lesson Study is a preset for the Moodle activity module **Database**.

## Description

Students can record and evaluate classroom observations:

- **Name** of the observed student and **colour** of the group
- **Observations** with time, engagement (0–100 %) and an optional note – recorded via a modal dialog
- **Engagement chart** in the group colour: dots, dashed connection lines; simultaneous observations are grouped as a cluster showing a count (click to expand)
- **List view** with a combined chart across all entries, including a legend
- **SVG export** of the chart (single view and list view)
- **Reflection / summary** as a text field below the chart

## Auto-saving & session protection

- Changes are continuously saved in the browser (`localStorage`). If the session times out or the browser crashes, unsaved changes are **automatically restored** the next time the page is opened (with an undo option).
- A **keep-alive** call invokes `core_session_touch` every 4 minutes (Moodle 4.1+) while the page is visible – so users are not logged out automatically while working on their entry.

## Installation

**As a plugin (recommended):** download the release ZIP from the [releases page](https://github.com/fdagner/lessonstudy__moodle-database-preset/releases), extract it and copy the `lessonstudy` folder to `moodle/mod/data/preset/`. Afterwards, select the "Lesson Study" preset when creating a new Database activity.

**As an imported preset:** alternatively, upload the ZIP file directly in Moodle: Database activity → **Presets → Import preset**.

## Language support

The preset is available in German. The templates can easily be adapted and translated.
