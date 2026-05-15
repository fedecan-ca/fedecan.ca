# Fedecan.ca

This is the repository for the [fedecan.ca](https://fedecan.ca) website. The site is built with VitePress and deployed to GitHub Pages.

## Development

### **Setup & Start a local development server:**

[recommended extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for VS Code

```bash
pnpm install    # install dependencies
pnpm docs:dev   # start a local development server
```

### **Deployment:**

Before making a PR, check for build issues locally. Some issues will not appear in the local development server, but will make the live build fail.

```bash
pnpm docs:build     # build the site
pnpm docs:preview   # preview the built site
```

If you don't see any errors, you can make a PR to the main branch.

## Contributing Content

**Documentation:**

- VitePress: [vitepress.dev](https://vitepress.dev/)
- VitePress Valence (component library): [cynber.dev/projects/vitepress-valence](https://cynber.dev/projects/vitepress-valence/)
- Prettier (code formatting): [prettier.io](https://prettier.io/)
- Lunaria (i18n): [lunaria.dev](https://lunaria.dev/)

**Image Sizing:**

- **OG:image:** 1200x630px (1.91:1 aspect ratio)
- **Banner:** 1200x300px (4:1 aspect ratio)

**Other Tips:**

- When linking to other pages, [don't use any file extensions](https://vitepress.dev/guide/routing#linking-between-pages).
- If you are getting a warning message on the `.github/workflows/deploy.yml` file, refresh it by following the [instructions here](https://github.com/github/vscode-github-actions/issues/215#issuecomment-1634719484).

## Translate Content

We are using [Lunaria](https://lunaria.dev/) to manage translations. We will add more information here when we are ready for people to contribute translations.

See the translation progress at [lang.fedecan.ca](https://lang.fedecan.ca/).
