# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `gatsby develop` - Start development server at http://localhost:8000
- `gatsby build` - Build production site
- `gatsby serve` - Serve built site locally
- `gatsby clean` - Clear Gatsby cache and public directory
- `npm run start` - Alias for gatsby develop

### Code Quality
- `prettier --write "**/*.{js,jsx,ts,tsx,json,md}"` - Format all files
- `npm run format` - Run prettier formatting

### Testing
- `npm test` - Currently shows reminder to write tests (placeholder command)

## Project Architecture

### Tech Stack
- **Gatsby 5.14.1** - React-based static site generator
- **React 18.3.1** - UI framework
- **TailwindCSS 3.4.14** - Utility-first CSS framework
- **Decap CMS 3.3.3** - Git-based headless CMS (formerly Netlify CMS)
- **Styled Components 6.1.13** - CSS-in-JS for complex styling
- **React Reveal 1.2.2** - Animation library for fade effects

### Directory Structure
```
src/
├── components/          # React components organized by feature
│   ├── Atoms/          # Basic UI elements (button, input)
│   ├── Home/           # Homepage components
│   ├── Blog/           # Arts/projects display components
│   └── about/          # About page components
├── pages/              # Static route pages
├── templates/          # Gatsby dynamic page templates
├── arts/               # Markdown files for portfolio art pieces
├── projects/           # Markdown files for project case studies
├── images/             # Source images for Gatsby Image processing
└── styles/             # Global CSS and TailwindCSS
```

### Content Management
- **Content Types**: Arts (digital art, illustrations) and Projects (UI/UX case studies)
- **Format**: Markdown files with frontmatter (title, date, featuredimage, description)
- **CMS Access**: `/admin/` for content editing via Decap CMS
- **Images**: Store in `/static/img/` with project-specific subfolders

### Styling Approach
- **Primary**: TailwindCSS utility classes for most styling
- **Secondary**: Styled Components for complex component-specific styles
- **Global**: Custom CSS in `src/styles/global.css`
- **Fonts**: Montserrat (headings), Comfortaa (body text), Noto Serif (serif text)

### Key Configuration Files
- `gatsby-config.js` - Plugin configuration, site metadata, filesystem sources
- `gatsby-node.js` - Dynamic page creation from markdown files
- `tailwind.config.js` - Custom colors, fonts, breakpoints
- `static/admin/config.yml` - Decap CMS configuration

### Component Patterns
- Use `Layout` component wrapper for consistent page structure
- Include `SEO` component for meta tags
- Wrap animations in `Fade` from react-reveal
- Use Gatsby Image for optimized image loading
- GraphQL queries for markdown content and images

### Content Creation
- Add new art pieces to `src/arts/` as markdown files
- Add new projects to `src/projects/` as markdown files
- Use `templateKey: blog-post` in frontmatter for proper rendering
- Images go in `/static/img/` with descriptive folder names

### Development Notes
- Site runs on port 8000 by default
- Gatsby cache issues can be resolved with `gatsby clean`
- Hot reload enabled for development
- Build outputs to `public/` directory
- Uses GraphQL for data queries - accessible at http://localhost:8000/___graphql during development