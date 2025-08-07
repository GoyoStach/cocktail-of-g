# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start local dev server at localhost:4321 |
| `npm run build`   | Build production site to ./dist/         |
| `npm run preview` | Preview build locally                    |
| `npm run prepare` | Install husky (one-time setup)           |

## Code Quality & Formatting

This project uses automated code quality tools:

- **Prettier**: Code formatting (runs via ESLint as default formatter)
- **ESLint**: Linting with TypeScript, Astro, and Prettier integration
- **Husky + lint-staged**: Pre-commit hooks that auto-format and lint on commit

ESLint rules are configured in `eslint.config.mjs`. Prettier formatting is enforced as an ESLint error.

## Architecture

This is an Astro-based cocktail recipe website with the following structure:

### Content Management

- **Content Collections**: Cocktails are managed via Astro's content collections system
- **Schema**: Defined in `src/content.config.ts` with structured frontmatter for:
     - `title`, `description`, `pubDate`
     - `heroImage` (optional)
     - `ingredients` array with `name`, `quantity`, `unit` fields
- **Content Location**: All cocktail recipes in `src/content/cocktails/` as Markdown files

### Page Generation

- **Dynamic Routes**: `src/pages/cocktails/[...slug].astro` generates individual cocktail pages
- **Layout System**: `CocktailLayout.astro` provides consistent recipe presentation
- **Static Generation**: Uses `getStaticPaths()` to build all cocktail pages at build time

### Styling

- **TailwindCSS v4**: Main styling framework via Vite plugin
- **Responsive Design**: Mobile-first approach with max-width containers
- **View Transitions**: Astro view transitions enabled for smooth navigation

### Key Files

- `src/content.config.ts`: Content collection schema and validation
- `src/layouts/CocktailLayout.astro`: Recipe page template with ingredient display
- `src/pages/cocktails/[...slug].astro`: Dynamic route handler for cocktail pages
- `astro.config.mjs`: Astro configuration with MDX, sitemap, and Tailwind integration

When working with cocktails, follow the established frontmatter schema and ensure hero images are placed in `src/assets/cocktail-thumbnail/`.
