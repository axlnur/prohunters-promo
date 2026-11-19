---
name: speaker-portrait
description: Speaker photo processing for the site's cards, dialogs, and avatar circles. Use when adding or replacing a speaker portrait, or when a face sits too high or too low in any of them.
---

# Speaker portrait

Every portrait must line up with its neighbours: same face size, same eye line, in the card, the dialog, and the circle. The standard and the per-speaker exceptions live in the "Speaker portraits" section of `CLAUDE.md`; the numbers live in the constants of `scripts/portrait.py`.

Run the scripts from the repository root with `python3`. If an import fails, install the dependencies: `python3 -m pip install -r .claude/skills/speaker-portrait/requirements.txt`.

The slug is the speaker's `data-speaker` value, for example `maksat-zharasbaev`.

## Steps

1. **Inspect.** Keep the source photo in `.tmp/` (ignored by git) and run `scripts/measure.py .tmp/<photo>`. Done when you know the size, the colour profile, the EXIF orientation, and the detected face and eyes.

   If it warns that the face is small, tell the user the portrait will be upscaled and softer than its neighbours, and ask for the original file.

2. **Measure.** Read the `forehead`, `eyes`, and `chin` grids it saved; their gridlines are labelled in source pixels. Take the centre of each pupil, the hairline at the middle of the forehead, and the bottom of the chin. Where a bound is unclear, render a closer grid with `--box X0,Y0,X1,Y1`.

   Done when you have `--eyes X1,Y1,X2,Y2` and `--face TOP,BOTTOM`.

3. **Render.** Run `scripts/portrait.py .tmp/<photo> .tmp/portrait <slug> --eyes … --face …`. Add `--sharpen` when the printed scale is above 1.5.

4. **Compare.** Run `scripts/compare.py .tmp/portrait <slug> --neighbours <slug>,<slug>` with the speakers shown next to this one: its program block or its row of cards. Read the sheet and re-render until nothing stands out:
   - face low in the card (tilted head, hand near the chin): `--eye-line 0.35`;
   - face high in the circle: a smaller `--avatar-top` (72 for Maksat).

   Done when the face matches its neighbours in height and size in both the card and the circle, and the check lines read sRGB, quality 88, 4:4:4.

5. **Install.** Copy `<slug>.jpg` and `<slug>-avatar.jpg` from `.tmp/portrait/` into `img/speakers/`. On a local server, look at the card, the dialog (`/#<slug>`), and the circles in the program and the carousel, at 1440 and 375 px.

6. **Record.** If you used `--eye-line`, `--avatar-top`, or `--sharpen`, add the speaker and the values to the exceptions in the "Speaker portraits" section of `CLAUDE.md`. A new speaker also needs the edits listed under "Content that lives in several places" in `CLAUDE.md`.
