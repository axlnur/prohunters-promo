<div align="center">

# ProHunters 2026

**Landing page for the invitation-only ProHunters business event in Almaty, Kazakhstan.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat-square)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white&style=flat-square)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)](https://developer.mozilla.org/docs/Web/JavaScript)
[![HTML5 Boilerplate](https://img.shields.io/badge/HTML5_Boilerplate_9-E34F26?logo=html5&logoColor=white&style=flat-square)](https://html5boilerplate.com)
[![Webpack](https://img.shields.io/badge/Webpack_5-8DD6F9?logo=webpack&logoColor=black&style=flat-square)](https://webpack.js.org)

[![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?logo=googleappsscript&logoColor=white&style=flat-square)](https://developers.google.com/apps-script)
[![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?logo=googlesheets&logoColor=white&style=flat-square)](https://workspace.google.com/products/sheets)
[![Cloudflare Turnstile](https://img.shields.io/badge/Cloudflare_Turnstile-F38020?logo=cloudflare&logoColor=white&style=flat-square)](https://www.cloudflare.com/products/turnstile)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white&style=flat-square)](https://pages.github.com)

[![License: MIT](https://img.shields.io/github/license/axlnur/prohunters-promo?style=flat-square)](LICENSE)
[![Author: axlnur](https://img.shields.io/badge/author-axlnur-181717?logo=github&logoColor=white&style=flat-square)](https://github.com/axlnur)

</div>

## Contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Speaker portraits](#speaker-portraits)
- [Registration setup](#registration-setup)
- [Deployment](#deployment)
- [Security](#security)
- [Author](#author)
- [License](#license)

## About

**Strong Career. Real Person.** (*Сильная карьера. Живой человек.*) takes place on **December 11, 2026, from 09:15 to 13:30** at **Holiday Inn Almaty**. ProHunters presents the results of the Employer Ranking of Kazakhstan 2026, hosts a discussion on leadership and ambition, and honors the top employers.

This repository contains the event website. The site content is in Russian.

## Features

- Responsive single-page layout tested from 320 to 1440 px
- Event program, speaker cards, and speaker dialogs with shareable links such as `/#renata-nureyeva`
- Keyboard navigation: Tab moves between sections, Enter steps into one
- Registration form with an email or phone number that saves guests to a private Google Sheet
- Registration closes at the deadline, and a thank-you screen replaces the page after the event
- Downloadable calendar file (`prohunters.ics`)
- Scroll-driven animations that respect `prefers-reduced-motion`
- [`llms.txt`](llms.txt) with an English summary of the event for AI agents

## Tech stack

| Area | Technology |
| --- | --- |
| Front end | HTML5, CSS, vanilla JavaScript, HTML5 Boilerplate |
| Build tooling | Webpack 5, webpack-dev-server |
| Registration back end | Google Apps Script, Google Sheets |
| Bot protection | Cloudflare Turnstile |
| Hosting | GitHub Pages |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 22.15 or later
- npm
- Python 3.10 or later, only for the speaker portrait scripts

### Installation

```bash
git clone https://github.com/axlnur/prohunters-promo.git
cd prohunters-promo
npm ci
```

### Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server and opens the site in a browser |
| `npm run build` | Creates a production build in `dist/` |

> [!NOTE]
> The Content Security Policy in `index.html` blocks the dev server's WebSocket connection, so live reload is unavailable. Refresh the page manually to see your changes.

## Project structure

```text
.
├── .claude/skills/
│   └── speaker-portrait/ # Claude skill and scripts for speaker portraits
├── apps-script/         # Registration back end for Google Apps Script
│   ├── Code.gs
│   └── appsscript.json
├── css/style.css        # Site styles
├── img/
│   ├── logo.png
│   └── speakers/        # Portraits (960×1200) and avatars (280×280)
├── js/app.js            # Speaker data, dialogs, and registration form
├── index.html           # Page markup and Content Security Policy
├── llms.txt             # Event summary for AI agents
├── prohunters.ics       # Calendar file
├── CNAME                # Custom domain for GitHub Pages
└── webpack.*.js         # Webpack configuration
```

## Speaker portraits

All portraits share one framing, so cards, dialogs, and avatar circles line up. To add or replace one, put the source photo in `.tmp/` and ask Claude Code to replace the speaker's photo. The `speaker-portrait` skill measures the face, renders both files, and compares them with the neighbouring speakers.

To run the scripts by hand:

```bash
python3 -m pip install -r .claude/skills/speaker-portrait/requirements.txt
python3 .claude/skills/speaker-portrait/scripts/measure.py .tmp/photo.jpg
python3 .claude/skills/speaker-portrait/scripts/portrait.py .tmp/photo.jpg .tmp/portrait <slug> --eyes X1,Y1,X2,Y2 --face TOP,BOTTOM
python3 .claude/skills/speaker-portrait/scripts/compare.py .tmp/portrait <slug> --neighbours <slug>,<slug>
```

The framing rules and per-speaker exceptions are in [`CLAUDE.md`](CLAUDE.md).

## Registration setup

The form sends guest data to a Google Apps Script web app, which validates each request and adds a row to a private spreadsheet.

1. Create a Google Sheet and open **Extensions → Apps Script**.
2. Copy `apps-script/Code.gs` and `apps-script/appsscript.json` into the project. To edit the manifest, turn on **Show "appsscript.json" manifest file in editor** in **Project Settings**.
3. Create a [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile) widget for your domain.
4. In **Project Settings → Script Properties**, add these values:

   | Property | Required | Description |
   | --- | --- | --- |
   | `TURNSTILE_SECRET` | Yes | Turnstile secret key |
   | `ALLOWED_HOSTNAMES` | No | Comma-separated form domains. Defaults to `2026.prohunters.kz` |

5. Select **Deploy → New deployment → Web app**, run it as yourself, and give access to **Anyone**.
6. Add the web app URL and the Turnstile site key to the form in `index.html`:

   ```html
   <form id="registration-form" data-endpoint="WEB_APP_URL" data-turnstile-sitekey="SITE_KEY">
   ```

After changing `Code.gs`, publish a new deployment version for the update to take effect.

## Deployment

GitHub Pages publishes the root of the `main` branch, so every push to `main` updates the live site. The `CNAME` file sets the custom domain. The `dist/` folder is not used for deployment.

## Security

- The spreadsheet stays private, and the web app accepts new entries without returning stored data.
- Cloudflare Turnstile tokens are verified on the server, including the hostname and action.
- The back end validates all fields, limits request rates, rejects duplicates, and neutralizes spreadsheet formulas.
- Secrets are stored only in Apps Script **Script Properties**.
- A Content Security Policy restricts the sources the page can load.

## Author

<a href="https://github.com/axlnur"><img src="https://github.com/axlnur.png" width="64" height="64" alt="axlnur on GitHub"></a>

Created by [**axlnur**](https://github.com/axlnur).

## License

The source code is available under the [MIT License](LICENSE). Speaker portraits, the ProHunters name, and the ProHunters logo remain the property of their respective owners.
