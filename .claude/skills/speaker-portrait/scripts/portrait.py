"""Render a speaker portrait and avatar in the site standard.

Portrait 960x1200: eyes centred horizontally, eye line at 38% of the height,
face (forehead to chin) at 36% of the height. Avatar: the 696x696 square at
(132, 164) of the portrait, scaled to 280x280. Both JPEG sRGB, quality 88, 4:4:4.

Usage:
  python3 portrait.py SRC OUT_DIR SLUG --eyes X1,Y1,X2,Y2 --face TOP,BOTTOM
Landmarks are in pixels of the upright source (after its EXIF rotation).
"""
import argparse
import io
import os
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageCms, ImageFilter, ImageOps

W, H = 960, 1200
EYE_LINE = 0.38
FACE_SHARE = 0.36
AVATAR_BOX = (132, 164, 828, 860)
AVATAR_SIZE = 280
JPEG = dict(quality=88, subsampling=0, optimize=True, progressive=False)
SPEAKERS_DIR = Path(__file__).resolve().parents[4] / 'img' / 'speakers'


def load_upright_srgb(path):
    image = ImageOps.exif_transpose(Image.open(path))
    icc = image.info.get('icc_profile')
    if icc:
        source = ImageCms.ImageCmsProfile(io.BytesIO(icc))
        image = ImageCms.profileToProfile(image, source, ImageCms.createProfile('sRGB'), outputMode='RGB')
    return image.convert('RGB')


def site_icc_profile():
    # Reuse the profile of the existing portraits so every file embeds identical bytes
    for path in sorted(SPEAKERS_DIR.glob('*.jpg')):
        icc = Image.open(path).info.get('icc_profile')
        if icc:
            return icc
    return ImageCms.ImageCmsProfile(ImageCms.createProfile('sRGB')).tobytes()


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('src')
    parser.add_argument('out_dir')
    parser.add_argument('slug')
    parser.add_argument('--eyes', required=True, help='pupils X1,Y1,X2,Y2')
    parser.add_argument('--face', required=True, help='hairline and chin TOP,BOTTOM')
    parser.add_argument('--eye-line', type=float, default=EYE_LINE,
                        help='share of the height; 0.35 raises a face that sits low in the card')
    parser.add_argument('--avatar-top', type=int, default=AVATAR_BOX[1],
                        help='top of the avatar square in the portrait; a smaller value puts the face lower in the circle')
    parser.add_argument('--sharpen', action='store_true', help='mild unsharp mask for upscaled sources')
    parser.add_argument('--icc-from', help='JPEG whose ICC profile to embed; defaults to an existing portrait')
    args = parser.parse_args()

    x1, y1, x2, y2 = map(float, args.eyes.split(','))
    face_top, face_bottom = map(float, args.face.split(','))
    eye_x, eye_y = (x1 + x2) / 2, (y1 + y2) / 2
    rgb = np.asarray(load_upright_srgb(args.src))

    scale = FACE_SHARE * H / (face_bottom - face_top)
    crop_w, crop_h = W / scale, H / scale
    left = eye_x - crop_w / 2
    top = eye_y - args.eye_line * crop_h

    # Background missing at an edge is mirrored, so it keeps its grain and folds
    pad = [max(0, int(np.ceil(v))) for v in (-top, -left, left + crop_w - rgb.shape[1], top + crop_h - rgb.shape[0])]
    padded = cv2.copyMakeBorder(rgb, pad[0], pad[3], pad[1], pad[2], cv2.BORDER_REFLECT)
    print(f'scale {scale:.4f}, crop {crop_w:.1f}x{crop_h:.1f} at ({left:.1f}, {top:.1f}), padding t/l/r/b {pad}')

    box = (left + pad[1], top + pad[0], left + pad[1] + crop_w, top + pad[0] + crop_h)
    portrait = Image.fromarray(padded).resize((W, H), Image.LANCZOS, box=box)
    if args.sharpen:
        portrait = portrait.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))

    side = AVATAR_BOX[2] - AVATAR_BOX[0]
    avatar_box = (AVATAR_BOX[0], args.avatar_top, AVATAR_BOX[2], args.avatar_top + side)
    avatar = portrait.crop(avatar_box).resize((AVATAR_SIZE, AVATAR_SIZE), Image.LANCZOS)

    icc = Image.open(args.icc_from).info['icc_profile'] if args.icc_from else site_icc_profile()
    os.makedirs(args.out_dir, exist_ok=True)
    portrait.save(os.path.join(args.out_dir, f'{args.slug}.jpg'), 'JPEG', icc_profile=icc, **JPEG)
    avatar.save(os.path.join(args.out_dir, f'{args.slug}-avatar.jpg'), 'JPEG', icc_profile=icc, **JPEG)

    out_eye = (eye_y - top) * scale
    out_top, out_bottom = ((v - top) * scale for v in (face_top, face_bottom))
    print(f'eye line {out_eye:.0f} = {out_eye / H:.1%}; face {out_top:.0f}-{out_bottom:.0f} = {(out_bottom - out_top) / H:.1%}')
    if scale > 1.5 and not args.sharpen:
        print('note: the source is upscaled more than 1.5x; consider --sharpen or a larger original')


if __name__ == '__main__':
    main()
