import {
  getAllEntries,
  getEntryBySlug,
  getSlugs,
  isFolder,
  markdownToHtml,
} from "./api";

const squash = (text) => text.replace(/\s+/g, " ").trim();

// Shared getStaticProps/getStaticPaths for /projects/[slug] and /arts/[slug]
export const makeStaticProps =
  (collection) =>
  async ({ params }) => {
    const { content, ...entry } = getEntryBySlug(collection, params.slug);
    // Folders aren't part of the previous/next chain
    const all = getAllEntries(collection).filter((item) => !isFolder(item));
    const index = all.findIndex((item) => item.slug === params.slug);
    const link = (item) =>
      item && index !== -1 ? { slug: item.slug, title: item.title } : null;
    const children = entry.items
      .map((slug) => all.find((item) => item.slug === slug))
      .filter(Boolean);

    return {
      props: {
        entry: {
          ...entry,
          html: await markdownToHtml(content),
          // Many art bodies repeat the description; don't show it twice
          showDescription:
            Boolean(entry.description) &&
            !squash(content).includes(squash(entry.description).slice(0, 60)),
        },
        // Newer entry first in the list, so "previous" is the older one
        previous: link(all[index + 1]),
        next: link(all[index - 1]),
        children,
      },
    };
  };

export const makeStaticPaths = (collection) => async () => ({
  paths: getSlugs(collection).map((slug) => ({ params: { slug } })),
  fallback: false,
});
