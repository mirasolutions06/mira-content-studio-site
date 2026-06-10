#!/usr/bin/env bash
# Generate display derivatives for the work-grid tiles.
#
# The static export ships images unoptimized (next.config: output 'export',
# images.unoptimized), so the grid must not point at the full-res campaign
# frames (2–7MB each). This emits ~720px-wide JPEGs (~2x the largest tile
# render) into public/studio/tiles/. Re-run after adding or replacing any
# /studio/*.jpg. Requires ffmpeg.
set -euo pipefail
cd "$(dirname "$0")/../public/studio"
mkdir -p tiles
for f in *.jpg; do
  ffmpeg -y -loglevel error -i "$f" -vf "scale=720:-2" -q:v 5 "tiles/$f"
  echo "tiles/$f  $(du -h "tiles/$f" | cut -f1)"
done
