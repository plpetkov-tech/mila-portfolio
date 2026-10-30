import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { optimized } from "./image";

// Collections live in /content/<collection>/*.md (edited via Decap CMS at /admin)
export const COLLECTIONS = ["projects", "arts"];

const collectionDir = (collection) =>
  join(process.cwd(), "content", collection);

export function getSlugs(collection) {
  return fs
    .readdirSync(collectionDir(collection))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getEntryBySlug(collection, slug) {
  const fullPath = join(collectionDir(collection), `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

  return {
    slug,
    collection,
    title: data.title || slug,
    // gray-matter parses YAML dates into Date objects, which aren't serializable
    date: data.date ? new Date(data.date).toISOString() : null,
    image: data.featuredimage || null,
    description: data.description || "",
    category: data.categories?.[0] || "Uncategorized",
    // Optional list of images shown as a lookbook grid on the entry page
    gallery: Array.isArray(data.gallery) ? data.gallery : [],
    // A folder lists other entries of the same collection by slug
    items: Array.isArray(data.items) ? data.items : [],
    frameCrop: Boolean(data.frameCrop),
    content,
  };
}

export function getAllEntries(collection) {
  return getSlugs(collection)
    .map((slug) => {
      // eslint-disable-next-line no-unused-vars
      const { content, ...entry } = getEntryBySlug(collection, slug);
      return entry;
    })
    .filter((entry) => entry.date)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export const isFolder = (entry) => entry.items.length > 0;

// Entries shown on their own: not folders, and not already inside a folder
export function getStandaloneEntries(collection) {
  const all = getAllEntries(collection);
  const inFolder = new Set(all.filter(isFolder).flatMap((e) => e.items));
  return all.filter((e) => !isFolder(e) && !inFolder.has(e.slug));
}

// Group entries by category, ordered by `order` first, then alphabetically
export function groupByCategory(entries, order = []) {
  const grouped = {};
  entries.forEach((entry) => {
    (grouped[entry.category] ||= []).push(entry);
  });

  const rank = (category) => {
    const index = order.indexOf(category);
    return index === -1 ? order.length : index;
  };

  return Object.entries(grouped)
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
    .map(([category, items]) => ({ category, items }));
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  // Serve resized WebP copies and lazy-load everything below the fold
  return result
    .toString()
    .replace(
      /<img src="([^"]+)"/g,
      (_, src) =>
        `<img loading="lazy" decoding="async" src="${optimized(src)}"`,
    );
}
