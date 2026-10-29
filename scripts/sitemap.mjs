// Writes out/sitemap.xml from the exported pages. Runs after `next build`.
import fs from "node:fs/promises";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");
const { siteUrl } = JSON.parse(
  await fs.readFile(path.join(process.cwd(), "data/portfolio.json"), "utf8"),
);
const EXCLUDE = new Set(["/404/", "/success/", "/admin/"]);

async function* pages(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* pages(full);
    else if (entry.name === "index.html") {
      const route = "/" + path.relative(OUT, dir).split(path.sep).join("/");
      yield route === "/" ? "/" : `${route}/`;
    }
  }
}

const urls = [];
for await (const route of pages(OUT)) if (!EXCLUDE.has(route)) urls.push(route);
urls.sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${siteUrl}${u}</loc></url>`).join("\n")}
</urlset>
`;
await fs.writeFile(path.join(OUT, "sitemap.xml"), xml);
console.log(`sitemap: ${urls.length} urls`);
