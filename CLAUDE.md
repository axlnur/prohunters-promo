# CLAUDE.md

Landing page for the invitation-only ProHunters 2026 event: December 11, 2026, 09:15–13:30, Holiday Inn Almaty. Site copy is in Russian. See `README.md` for setup and the project layout.

## Deployment

GitHub Pages publishes the repository root of `main` directly, so `index.html`, `css/`, and `js/app.js` ship as written and `dist/` stays out of the release path. Merging to `main` updates the live site.

The repository and every published file are public. Keep secrets in the Apps Script project's Script Properties.

## Local preview

The Content Security Policy in `index.html` blocks the dev server's WebSocket, so `npm start` serves the page without live reload. Refresh manually.

There is no test suite. Verify changes in a browser at widths from 320 to 1440 px, including the speaker dialogs.

## Content that lives in several places

Update every location when a fact changes:

- **Event date, time, venue:** `index.html` (body and meta tags), `prohunters.ics`, `llms.txt`
- **Program:** `index.html`, `llms.txt`
- **Speaker name or role:** cards and program in `index.html`, `speakersData` in `js/app.js`, `llms.txt`
- **Speaker bio or topic:** `speakersData` in `js/app.js`
- **Speaker added or removed:** also the avatar list in `.bento-avatars__track` in `index.html`

The `speakersData` key also forms the shareable dialog link (`#zaura_karakozhaeva`), so renaming a key breaks links people have already sent.

`prohunters.ics` needs CRLF line endings and lines folded at 75 octets (RFC 5545).

## Russian typography

Line breaks are controlled by hand:

- Bind short prepositions and conjunctions, dates, numbers, brand names, and the `·` separator to the neighbouring word with `&nbsp;` in HTML and `\u00A0` in `js/app.js`.
- Wrap hyphenated words in `<span class="nowrap">`.
- `topic` values and form messages render through `textContent`, so they use `\u00A0` only.

## Speaker portraits

Files live in `img/speakers/` and use the speaker's `data-speaker` slug: `<slug>.jpg` (960×1200) and `<slug>-avatar.jpg` (280×280), both JPEG sRGB. In the full portrait, centre the eyes horizontally, place the eye line at 38% of the height, and make the face (forehead to chin) 36% of the height, so cards, dialogs, and avatars line up. When a tilted head or a hand near the chin makes the face sit low, raise the eye line to about 35%, as for Zaura, Asel, and Moldir. The avatar is the 696×696 square at (132, 164) of the full portrait, scaled down. Save both at JPEG quality 88 with 4:4:4 chroma and an embedded sRGB profile.

## Registration

- `apps-script/Code.gs` is a copy of the deployed back end. Changes reach production only after a new Apps Script deployment version.
- The form reads its endpoint and Turnstile site key from `data-*` attributes on `#registration-form`.
- Requests use `Content-Type: text/plain` because Apps Script cannot answer a CORS preflight.
- Any new external origin must be added to the Content Security Policy meta tag in `index.html`.

## CSS

- `--winter-effects-display` in `css/style.css` switches snow and the starry sky together (`none` or `block`).
- Bento cards use `animation-timeline: view()`. Use `overflow: clip` on their ancestors, because `overflow: hidden` creates a scroll container and stalls the animation.
- Glass elements use `backdrop-filter`. Keep `filter` and lasting `opacity` off their ancestors so the backdrop stays visible.
