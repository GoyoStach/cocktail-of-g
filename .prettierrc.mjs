/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 5,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
};
