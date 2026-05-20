#!/usr/bin/env python3
"""Generate the site's Open Graph share card -> site/public/og-image.jpg (1200x630).

Split layout: warm paper with the mira. wordmark + tagline + URL on the left,
a full-height product photo panel (bleeds to the edge) on the right.

Run: python3 site/scripts/build-og-image.py [product.jpg]
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
FONT = ROOT / "social/instagram/launch/src/InterTight-Variable.ttf"
LOGO = ROOT / "brand/02-visual/logo/mira-wordmark.png"
DEFAULT_PHOTO = ROOT / "site/public/studio/objet.jpg"
OUT = ROOT / "site/public/og-image.jpg"

W, H = 1200, 630
PAPER = (251, 250, 246)
INK = (14, 17, 13)
BOTTLE = (31, 77, 52)
PANEL_X = 700  # photo panel left edge


def font(size, weight):
    f = ImageFont.truetype(str(FONT), size)
    f.set_variation_by_axes([weight])
    return f


def cover(img, tw, th):
    sw, sh = img.size
    if sw / sh > tw / th:
        nw = int(sh * tw / th)
        x = (sw - nw) // 2
        img = img.crop((x, 0, x + nw, sh))
    else:
        nh = int(sw * th / tw)
        y = max(0, (sh - nh) // 2 - int(sh * 0.04))
        img = img.crop((0, y, sw, y + nh))
    return img.resize((tw, th), Image.LANCZOS)


def tracked(d, x, y, text, f, fill, tr=0.0):
    cx, tpx = x, f.size * tr
    for c in text:
        d.text((cx, y), c, font=f, fill=fill)
        cx += f.getlength(c) + tpx
    return cx - x


def main():
    photo_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PHOTO
    img = Image.new("RGB", (W, H), PAPER)

    # Right photo panel
    panel = cover(Image.open(photo_path).convert("RGB"), W - PANEL_X, H)
    img.paste(panel, (PANEL_X, 0))

    # Soft shadow on the paper at the panel's left edge (depth, no hard seam)
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    for i in range(60):
        od.line([(PANEL_X - i, 0), (PANEL_X - i, H)], fill=(*INK, int(20 * (1 - i / 60))))
    img = Image.alpha_composite(img.convert("RGBA"), ov).convert("RGB")

    d = ImageDraw.Draw(img)

    # Wordmark
    logo = Image.open(LOGO).convert("RGBA")
    lw = 300
    lh = round(logo.height * lw / logo.width)
    logo = logo.resize((lw, lh), Image.LANCZOS)
    top = 196
    img.paste(logo, (80, top), logo)

    # Tagline
    tf = font(36, 500)
    ty = top + lh + 44
    for line in ["Brand content.", "Without the agency."]:
        tracked(d, 82, ty, line, tf, INK, -0.015)
        ty += 50

    # URL
    tracked(d, 82, H - 96, "miracontent.studio", font(24, 500), BOTTLE)

    img.save(OUT, "JPEG", quality=90, optimize=True)
    print("wrote", OUT.relative_to(ROOT), img.size)


if __name__ == "__main__":
    main()
