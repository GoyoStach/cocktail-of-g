# Astro Starter Kit: Advanced scaffolding

## Additionnal Libs

This starter kit goal is to give an opiniated idea of additionnal librairies that should be in any new project.

It will resolves arround a few core and production ready librairies:
- Prettier
- Eslint
- Lint Staged
- Husky

You can clone every the repo to start. however if you wish to start from scratch, here are the core libraries that should be installed :

```shell
npm i -D @eslint/js eslint eslint-plugin-astro eslint-plugin-jsx-a11y eslint-plugin-prettier globals husky lint-staged prettier prettier-plugin-astro prettier-plugin-tailwindcss typescript-eslint
```

## VsCode setup

I would argue that unless you are already a proficient and senior dev, it does not make much sense to go for any other code editor. Which is why I will provide a few additionnal tips to setup this tool.

1. Dowload the extension for both ESLint & Prettier.
2. In `setting.json` , add the following lines. You might already have them, if thats the case, simply replace them.
```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.addMissingImports": "always",
    "source.organizeImports": "always"
  },
  "editor.formatOnSave": true, // Format on save
  "editor.defaultFormatter": "dbaeumer.vscode-eslint", //Apply eslint on each save.
  ...
```
3. Depending on your language, you might have to also add to this `settings.json` file config for eslint as follow.
```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "astro", // Enable .astro
    "typescript", // Enable .ts
    "typescriptreact" // Enable .tsx
  ],
  ```

## Important files and customisation

I provided basic examples in the project of how thoses libs are working together. If you want to deep dive into customisation, here is a breakdown of which file is related to each lib.

### Prettier

Prettier should be the first and entry layer of your formatting. **It should only make your code more readeable from a developement standpoint** and never carry any logic. 

Important files : *.prettierignore*, *.prettierrc.mjs* \
Optionnal configuration : I like to use tailwind for every project. If you dont, simply remove it from the dependency.

### Eslint

This is where you can have strong opinions and customize your rules. I provided a few basic ones. Dont forget to make the link to prettier here as I recommand to use ESlint as default formatter. 

Important files : *eslint.config.mjs*
Optional configuration : Uncomment this line `astro.configs["jsx-a11y-recommended"]` to enforce accessibility warning & errors.


### Lint staged & Husky

Thoses two libraries are a double check incase for some reason you or any team members would not have an appropriate environnement setup. On each commit, it will run a few scripts in order to format everything and make sure that there is no blatant errors.

Important files: *package.json*
Optionnal configuration : On my project i have only a pre-commit hook. You can always add more scripts if you want with the differentg provided hooks. *.husky/_/pre-commit*




## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run prepare` | Install husky on machine ( one time thing)                    |
