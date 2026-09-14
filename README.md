# Motorola 1 Week Project — Room Monitoring Dashboard

A static front-end prototype for a multi-camera monitoring dashboard, built as a one-week project. It presents a grid of live "camera" feeds for a set of rooms, flags rooms that need attention, and includes a settings page for camera and system preferences.

## What it does

- **Dashboard** (`main.html`) — A 3-column grid of camera cards. Each card shows a live video feed, the occupant's name, a location code (e.g. `L1`–`L9`), a timestamp, and an occupancy status. Cards flagged as noteworthy use an `alert` style to stand out from normal cards.
- **Alerts** (`pages/alerts.html`) — The same card layout, filtered to just the rooms currently in an alert state.
- **Settings** (`pages/settings.html`) — Controls for camera appearance (font size, resolution, frame rate), system preferences (logging/reporting, recording intervals), network/connectivity, and user access/permissions.
- **Live video** — Each `<video>` element is wired up to `navigator.mediaDevices.getUserMedia`, so every "camera" card in this prototype streams your own local webcam rather than a real remote camera feed.

## Tech stack

- Plain HTML5 / CSS3 — a small custom design system (CSS variables for color/spacing) with a reusable component library
- Vanilla JavaScript — no build step, no framework
- Browser MediaDevices API for webcam access

## Project structure

```
.
├── main.html            # Dashboard page
├── pages/
│   ├── alerts.html       # Alerts page
│   └── settings.html     # Settings page
├── components/           # Reference markup for individual UI components
│                          # (navbar, cards, buttons, badges, forms, etc.)
├── CSS/
│   ├── normalize.css     # CSS reset
│   └── styles.css        # Design tokens + component/page styling
├── JS/
│   └── index.js          # Wires the <video> element to the webcam
└── images/                # Logo, sample camera imagery, alert icon
```

## Running it

This is a static demonstration site with no dependencies or build step.

1. Serve the folder with any local web server. Opening `main.html` directly as a `file://` URL works for layout, but browsers block webcam access on `file://`, so a local server is recommended:
   ```bash
   npx serve .
   # or
   python3 -m http.server
   ```
2. Open `main.html` (or `pages/alerts.html`, `pages/settings.html`) in your browser and allow camera access when prompted.

## Notes

- Occupant names, timestamps, and occupancy statuses on the dashboard are hardcoded sample data for demo purposes — there's no backend or real camera integration yet.
- `components/` is a living style guide: each file is a standalone snippet showing one UI component in isolation, useful as a reference when building new pages.
