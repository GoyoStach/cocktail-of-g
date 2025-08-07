import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const cocktails = defineCollection({
	// Load Markdown and MDX files in the `src/content/cocktails/` directory.
	loader: glob({ base: './src/content/cocktails', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			heroImage: image().optional(),
			ingredients: z.array(
				z.object({
					name: z.string(),
					quantity: z.string(),
					unit: z.string(),
				}),
			),
		}),
});

export const collections = { cocktails };
