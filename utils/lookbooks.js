// Server-only (uses fs via utils/api): import from getStaticProps only.
import path from "path";
import sharp from "sharp";
import { getAllEntries, isFolder } from "./api";

// Height/width of each home card picture, for layouts that keep proportions
const withRatios = async (book) => {
  const list = book.frameImages.length ? book.frameImages : book.gallery;
  const frameRatios = await Promise.all(
    list.map(async (src) => {
      try {
        const { width, height } = await sharp(
          path.join(process.cwd(), "public", src),
        ).metadata();
        return height / width;
      } catch {
        return 1;
      }
    }),
  );
  return { ...book, frameRatios };
};

// Every folder that has pictures for its card, newest first. Used by both the
// home page and the Work page so they always show the same folders.
export async function getLookbooks() {
  return Promise.all(
    [
      ...getAllEntries("arts").filter((entry) => entry.gallery.length),
      ...getAllEntries("projects").filter(
        (entry) => isFolder(entry) && entry.gallery.length,
      ),
    ]
      .sort((a, b) => (a.date > b.date ? -1 : 1))
      .map(withRatios),
  );
}
