"""Compare a rendered portrait with its neighbours as the site shows them.

Builds one sheet: the speaker-card crop (object-fit: cover, object-position 50% 24%)
and the round avatar for the new files, the current site files, and the neighbours.
Then checks the new files: eye line found by OpenCV, size, sRGB profile, JPEG
quality 88, and 4:4:4 chroma.

Usage:
  python3 compare.py NEW_DIR SLUG [--neighbours SLUG,SLUG] [--out FILE]
"""
import argparse
import io
import os
from pathlib import Path

import cv2
from PIL import Image, ImageCms, ImageDraw, JpegImagePlugin

SPEAKERS_DIR = Path(__file__).resolve().parents[4] / 'img' / 'speakers'
CARD = (360, 280, 0.24)
CIRCLE = 96
QUALITY_88 = [4, 3, 2, 4]


def card(path):
    width, height, position = CARD
    image = Image.open(path).convert('RGB')
    image = image.resize((width, round(image.height * width / image.width)), Image.LANCZOS)
    offset = round((image.height - height) * position)
    return image.crop((0, offset, width, offset + height))


def circle(path):
    image = Image.open(path).convert('RGB').resize((CIRCLE, CIRCLE), Image.LANCZOS)
    mask = Image.new('L', (CIRCLE, CIRCLE), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, CIRCLE - 1, CIRCLE - 1), fill=255)
    tile = Image.new('RGB', (CIRCLE, CIRCLE), 'white')
    tile.paste(image, (0, 0), mask)
    return tile


def check(path):
    image = Image.open(path)
    icc = image.info.get('icc_profile')
    profile = ImageCms.getProfileDescription(ImageCms.ImageCmsProfile(io.BytesIO(icc))).strip() if icc else 'none'
    quality = 'quality 88' if list(image.quantization[0])[:4] == QUALITY_88 else 'quality differs from 88'
    sampling = JpegImagePlugin.get_sampling(image)
    chroma = '4:4:4' if sampling == 0 else f'subsampling {sampling}'
    print(f'{path.name}: {image.size[0]}x{image.size[1]}, profile {profile}, {quality}, {chroma}')


def eye_line(path):
    gray = cv2.equalizeHist(cv2.imread(str(path), cv2.IMREAD_GRAYSCALE))
    faces = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    eyes = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')
    found = faces.detectMultiScale(gray, 1.05, 6, minSize=(150, 150))
    if not len(found):
        print('eye check: no face found')
        return
    x, y, w, h = max(found, key=lambda f: f[2] * f[3])
    centres = [(x + ex + ew / 2, y + ey + eh / 2)
               for ex, ey, ew, eh in eyes.detectMultiScale(gray[y:y + int(h * 0.6), x:x + w], 1.05, 6,
                                                          minSize=(w // 10, w // 10))]
    if centres:
        mx = sum(c[0] for c in centres) / len(centres)
        my = sum(c[1] for c in centres) / len(centres)
        print(f'eye check: centre ({mx:.0f}, {my:.0f}); the standard is about (480, 456), or 420 with --eye-line 0.35')


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('new_dir')
    parser.add_argument('slug')
    parser.add_argument('--neighbours', default='', help='speaker slugs shown next to this one')
    parser.add_argument('--out')
    args = parser.parse_args()

    new = Path(args.new_dir)
    columns = [('new', new / f'{args.slug}.jpg', new / f'{args.slug}-avatar.jpg')]
    if (SPEAKERS_DIR / f'{args.slug}.jpg').exists():
        columns.append(('current', SPEAKERS_DIR / f'{args.slug}.jpg', SPEAKERS_DIR / f'{args.slug}-avatar.jpg'))
    for slug in filter(None, args.neighbours.split(',')):
        columns.append((slug, SPEAKERS_DIR / f'{slug}.jpg', SPEAKERS_DIR / f'{slug}-avatar.jpg'))

    width, height, _ = CARD
    sheet = Image.new('RGB', (len(columns) * (width + 10), height + CIRCLE + 40), 'white')
    draw = ImageDraw.Draw(sheet)
    for i, (label, portrait, avatar) in enumerate(columns):
        left = i * (width + 10)
        sheet.paste(card(portrait), (left, 0))
        sheet.paste(circle(avatar), (left + (width - CIRCLE) // 2, height + 8))
        draw.text((left + 4, height + CIRCLE + 16), label, fill=(0, 0, 0))

    out = args.out or str(new / f'compare-{args.slug}.png')
    os.makedirs(os.path.dirname(out) or '.', exist_ok=True)
    sheet.save(out)
    print(f'sheet {out}')
    check(new / f'{args.slug}.jpg')
    check(new / f'{args.slug}-avatar.jpg')
    eye_line(new / f'{args.slug}.jpg')


if __name__ == '__main__':
    main()
