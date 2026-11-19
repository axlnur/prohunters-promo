"""Measure a speaker photo before rendering it with portrait.py.

Prints the source metadata and the face and eyes found by OpenCV, then saves
zoomed crops of the forehead, eyes, and chin with gridlines labelled in source
pixels. Read the pupils, the hairline, and the bottom of the chin from them.

Usage:
  python3 measure.py SRC [--out DIR] [--box X0,Y0,X1,Y1]
--box renders one extra grid of any region, for a closer look.
"""
import argparse
import io
import os

import cv2
import numpy as np
from PIL import Image, ImageCms, ImageDraw, ImageOps

GRID_WIDTH = 700


def describe(path):
    raw = Image.open(path)
    icc = raw.info.get('icc_profile')
    profile = ImageCms.getProfileDescription(ImageCms.ImageCmsProfile(io.BytesIO(icc))).strip() if icc else 'none (treated as sRGB)'
    orientation = raw.getexif().get(0x0112) or 1
    image = ImageOps.exif_transpose(raw).convert('RGB')
    print(f'source {raw.size[0]}x{raw.size[1]}, upright {image.size[0]}x{image.size[1]}, '
          f'EXIF orientation {orientation}, profile {profile}, {os.path.getsize(path) // 1024} KB')
    return image


def detect(image):
    gray = cv2.equalizeHist(cv2.cvtColor(np.asarray(image), cv2.COLOR_RGB2GRAY))
    faces = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    eyes = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')
    found = faces.detectMultiScale(gray, 1.05, 5, minSize=(60, 60))
    if not len(found):
        print('no face found: use --box to grid the head region')
        return None
    x, y, w, h = max(found, key=lambda f: f[2] * f[3])
    centres = sorted((int(x + ex + ew / 2), int(y + ey + eh / 2))
                     for ex, ey, ew, eh in eyes.detectMultiScale(gray[y:y + int(h * 0.6), x:x + w], 1.05, 5,
                                                                minSize=(w // 12, w // 12)))
    print(f'face box x {x}, y {y}, {w}x{h}; eyes {centres or "not found"}')
    return int(x), int(y), int(w), int(h)


def grid(image, box, path):
    x0, y0, x1, y1 = (max(0, box[0]), max(0, box[1]), min(image.width, box[2]), min(image.height, box[3]))
    k = GRID_WIDTH / (x1 - x0)
    crop = image.crop((x0, y0, x1, y1)).resize((GRID_WIDTH, round((y1 - y0) * k)), Image.LANCZOS)
    draw = ImageDraw.Draw(crop)
    step = 5 if x1 - x0 <= 200 else 10 if x1 - x0 <= 500 else 20
    for y in range((y0 // step + 1) * step, y1, step):
        major = y % (step * 5) == 0
        yy = (y - y0) * k
        draw.line([(0, yy), (crop.width if major else 18, yy)], fill=(255, 0, 0), width=1)
        if major:
            draw.text((22, yy - 12), str(y), fill=(255, 0, 0))
    for x in range((x0 // (step * 5) + 1) * step * 5, x1, step * 5):
        xx = (x - x0) * k
        draw.line([(xx, 0), (xx, crop.height)], fill=(0, 0, 255), width=1)
        draw.text((xx + 2, 2), str(x), fill=(0, 0, 255))
    crop.save(path)
    print(f'grid {path}: x {x0}-{x1}, y {y0}-{y1}')


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('src')
    parser.add_argument('--out', default='.tmp/portrait/measure')
    parser.add_argument('--box', help='extra grid X0,Y0,X1,Y1 in source pixels')
    args = parser.parse_args()

    os.makedirs(args.out, exist_ok=True)
    image = describe(args.src)
    face = detect(image)
    if face:
        x, y, w, h = face
        if h < 300:
            print(f'note: the face box is {h} px tall; the portrait needs upscaling and will look softer')
        grid(image, (x - w // 10, y - h * 45 // 100, x + w + w // 10, y + h // 4), f'{args.out}/forehead.png')
        grid(image, (x, y + h // 5, x + w, y + h * 3 // 5), f'{args.out}/eyes.png')
        grid(image, (x, y + h * 3 // 4, x + w, y + h * 5 // 4), f'{args.out}/chin.png')
    if args.box:
        grid(image, tuple(map(int, args.box.split(','))), f'{args.out}/box.png')


if __name__ == '__main__':
    main()
