import {
  getAllEntries,
  getEntryBySlug,
  getSlugs,
  markdownToHtml,
} from "./api";

// Shared getStaticProps/getStaticPaths for /projects/[slug] and /arts/[slug]
export const makeStaticProps =
  (collection) =>
  async ({ params }) => {
    const { content, ...entry } = getEntryBySlug(collection, params.slug);
    const all = getAllEntries(collection);
    const index = all.findIndex((item) => item.slug === params.slug);
    const link = (item) => (item ? { slug: item.slug, title: item.title } : null);

    return {
      props: {
        entry: { ...entry, html: await markdownToHtml(content) },
        // Newer entry first in the list, so "previous" is the older one
        previous: link(all[index + 1]),
        next: link(all[index - 1]),
      },
    };
  };

export const makeStaticPaths = (collection) => async () => ({
  paths: getSlugs(collection).map((slug) => ({ params: { slug } })),
  fallback: false,
});
