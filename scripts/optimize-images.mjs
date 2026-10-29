// Generates resized WebP copies of every raster image under public/img and
// public/images into public/_img (gitignored). Runs before `dev` and `build`.
// Paths are mapped by utils/image.js, so originals stay the source of truth.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { WIDTHS } from "../utils/image.js";

const ROOT = path.join(process.cwd(), "public");
const SOURCES = ["img", "images"];
const OUT = path.join(ROOT, "_img");
const RASTER = /\.(png|jpe?g|webp)$/i;

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (RASTER.test(entry.name)) yield full;
  }
}

const isFresh = async (src, dest) => {
  try {
    return (await fs.stat(dest)).mtimeMs >= (await fs.stat(src)).mtimeMs;
  } catch {
    return false;
  }
};

let made = 0;
let skipped = 0;
const jobs = [];

for (const source of SOURCES) {
  for await (const file of walk(path.join(ROOT, source))) {
    const rel = path.relative(ROOT, file);
    for (const width of WIDTHS) {
      const dest = path.join(OUT, `${rel}.w${width}.webp`);
      jobs.push(async () => {
        if (await isFresh(file, dest)) return skipped++;
        await fs.mkdir(path.dirname(dest), { recursive: true });
        await sharp(file)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(dest);
        made++;
      });
    }
  }
}

// Small worker pool keeps memory in check on CI
const queue = [...jobs];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) await queue.shift()();
  }),
);

console.log(`optimize-images: ${made} generated, ${skipped} up to date`);
