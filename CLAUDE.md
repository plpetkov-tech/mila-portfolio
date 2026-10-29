# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Static export to `out/` (what Netlify deploys)
- `npm run serve` - Serve the built `out/` folder locally
- `npm run lint` - ESLint (also runs during `build`)
- `npm run format` - Prettier

## Project Architecture

Based on the [react-portfolio-template](https://github.com/chetanverma16/react-portfolio-template) theme, upgraded to Next.js 14 (pages router).

### Tech Stack
- **Next.js 14** with `output: "export"` (fully static, no server)
- **React 18**, **TailwindCSS 3**, **next-themes** (dark mode), **GSAP** (stagger animations)
- **Decap CMS** at `/admin/` (loaded from CDN, config in `public/admin/config.yml`)
- **Netlify Forms** for the contact form (detected from static HTML)

### Directory Structure
```
pages/              # Routes: /, /projects, /projects/[slug], /arts/[slug], /about, /contact, /success, 404
components/         # Theme components (Header, Footer, Button, WorkCard, ServiceCard, Cursor, Layout, EntryPage...)
content/projects/   # UI/UX case studies (markdown)
content/arts/       # Art pieces (markdown)
data/portfolio.json # All site copy: taglines, services, about sections, testimonial, socials, category order
utils/api.js        # Markdown loading (server-only, used in getStaticProps)
utils/entries.js    # Shared getStaticProps/getStaticPaths for detail pages
public/img/         # Content images (Decap media folder, served at /img)
public/images/      # Site images and theme icons
```

### Content
- Frontmatter: `title`, `date`, `featuredimage` (`/img/...`), `categories` (first one is used for grouping), `description`
- Markdown images must use absolute `/img/...` paths
- Category display order lives in `data/portfolio.json` (`projectCategoryOrder`, `artsCategoryOrder`)
- `/arts/` redirects to `/projects/` (netlify.toml)

### Gotchas
- Never import `utils/api.js` from a component; only from `getStaticProps`/`getStaticPaths` in `pages/`, otherwise `fs` leaks into the client bundle.
- Use `trailingSlash` URLs (`/projects/bags-app/`) in links.
