#!/usr/bin/env python3
"""Generate the site's Open Graph share card -> site/public/og-image.jpg (1200x630).

Faithful implementation of the Claude Design mock (og-card.html): a 696/504
split — warm paper on the left (eyebrow, mira. wordmark, tagline, URL), a model
photo on the right whose left edge feathers into the paper so the seam vanishes.

Run: python3 site/scripts/build-og-image.py [photo.png]
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
FONT = ROOT / "social/instagram/launch/src/InterTight-Variable.ttf"
LOGO = ROOT / "brand/02-visual/logo/mira-wordmark.png"
DEFAULT_PHOTO = Path(__file__).resolve().parent / "og-card-photo.png"
OUT = ROOT / "site/public/og-image.jpg"

W, H = 1200, 630
PAPER = (251, 250, 246)
INK = (14, 17, 13)
GREEN = (31, 77, 52)
STONE = (133, 124, 107)

SPLIT = 696            # paper panel width; photo panel = W - SPLIT = 504
PAD_L = 80
FEATHER = 140          # px over which the photo's left edge fades into paper
OBJ_X, OBJ_Y = 0.94, 0.28  # object-position of the photo within its panel


def font(size, weight=500):
    f = ImageFont.truetype(str(FONT), size)
    f.set_variation_by_axes([weight])
    return f


def text_w(text, f, tr=0.0):
    tpx = f.size * tr
    return sum(f.getlength(c) + tpx for c in text)


def draw_text(d, x, y_top, text, f, fill, tr=0.0):
    """Draw tracked text whose visual top sits at y_top. Returns width."""
    top = f.getbbox(text)[1]
    cx, tpx = x, f.size * tr
    for c in text:
        d.text((cx, y_top - top), c, font=f, fill=fill)
        cx += f.getlength(c) + tpx
    return cx - x


def cover(img, bw, bh, px, py):
    """object-fit: cover + object-position: px%/py%."""
    iw, ih = img.size
    s = max(bw / iw, bh / ih)
    img = img.resize((int(iw * s), int(ih * s)), Image.LANCZOS)
    sw, sh = img.size
    left = int((sw - bw) * px)
    top = int((sh - bh) * py)
    return img.crop((left, top, left + bw, top + bh))


def main():
    photo_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PHOTO
    card = Image.new("RGB", (W, H), PAPER)

    # ── Right: photo panel, feathered into the paper on its left edge ──
    panel_w = W - SPLIT
    photo = cover(Image.open(photo_path).convert("RGB"), panel_w, H, OBJ_X, OBJ_Y)
    ramp = np.clip(np.arange(panel_w) / FEATHER, 0, 1)
    mask = Image.fromarray((np.tile(ramp, (H, 1)) * 255).astype(np.uint8), "L")
    card.paste(photo, (SPLIT, 0), mask)

    d = ImageDraw.Draw(card)

    # ── Left: paper panel ──
    # Vertically center the eyebrow + wordmark + tagline block within the
    # padded region [72, H-72]; the URL is pinned to the bottom.
    logo = Image.open(LOGO).convert("RGBA")
    lw = 380
    lh = round(logo.height * lw / logo.width)
    logo = logo.resize((lw, lh), Image.LANCZOS)

    eb_f = font(13)
    eb = "CONTENT STUDIO"
    eb_h = 16
    tag_f = font(42)
    tag_lh = round(42 * 1.12)
    tag_lines = ["Brand content.", "Without the agency."]
    tag_h = tag_lh * len(tag_lines)

    block_h = eb_h + 28 + lh + 40 + tag_h
    y = 72 + ((H - 144) - block_h) // 2

    # Eyebrow: green dot + tracked stone label
    dot_r = 4
    cy = y + eb_h // 2
    d.ellipse([PAD_L, cy - dot_r, PAD_L + 2 * dot_r, cy + dot_r], fill=GREEN)
    draw_text(d, PAD_L + 7 + 14, y + 1, eb, eb_f, STONE, 0.18)
    y += eb_h + 28

    # Wordmark (margin-left -8 for optical alignment of the m's stem)
    card.paste(logo, (PAD_L - 8, y), logo)
    y += lh + 40

    # Tagline
    for line in tag_lines:
        draw_text(d, PAD_L, y, line, tag_f, INK, -0.025)
        y += tag_lh

    # Footer URL, pinned ~64px from the bottom
    draw_text(d, PAD_L, H - 64 - 26, "miracontent.studio", font(22), GREEN, -0.005)

    card.save(OUT, "JPEG", quality=92, optimize=True)
    print("wrote", OUT.relative_to(ROOT), card.size)


if __name__ == "__main__":
    main()
