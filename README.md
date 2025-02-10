# Fedecan.ca

This is the repository for the [fedecan.ca](https://fedecan.ca) website. The site is built with VitePress and deployed to GitHub Pages.

## Development

### **Setup & Start a local development server:**

[recommended extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) for VS Code

```bash
npm install

npm run docs:dev
```

Alternatively:
```bash
npx vitepress dev docs
```

### **Deployment:**

The site is deployed to GitHub Pages. 

Before pushing changes, check for build issues locally as some issues will not appear in the local development server. If you don't see any errors, you can make a PR to the main branch.

```bash
npm run docs:build
npm run docs:preview
```

We have a GitHub Action that checks for build issues before PRs can be merged to the main branch.


## Content

### **Pages:**

See the [vitepress documentation](https://vitepress.dev/) for more information on how to create pages and organize content.

- The main page content is in the `docs` folder, where the relative path of the file determines the URL.
- Assets like images are in the `docs/.vitepress/public` folder.
- Translated content can be found in the `docs/fr/` folder.


### **Tips:**

- When linking to other pages, [don't use any file extensions](https://vitepress.dev/guide/routing#linking-between-pages).
- If you are getting a warning message on the `.github/workflows/deploy.yml` file, refresh it by following the [instructions here](https://github.com/github/vscode-github-actions/issues/215#issuecomment-1634719484).

### **Icons:**

We are using [iconify](https://icon-sets.iconify.design) for icons. You can search for icons [here](https://icon-sets.iconify.design/).

1. Filter results to find icons with a compatible license. For consistency, we are using icons from the 'Material Design Icons' set.
2. Click on the desired icon, confirm details, and select `Components > Vue` to copy the code. It should look like this:
```html
<Icon icon="ic:outline-email" />
```

- Customization is possible. See the [iconify documentation](https://iconify.design/docs/icon-components/vue/), or see other examples in the codebase.
- We have some custom styles for icons. See the `docs/.vitepress/theme/style.css` file for details.

### **Announcements**

Please see https://cynber.dev/projects/vitepress-valence/blog/

### Images

- Images should be placed in the `docs/.vitepress/public/img` folder.
- To reference an image, simply use `/img/...` as the path.

**Light & Dark Mode:**

To include a light and dark mode version of an image, add the `.light-only` and `.dark-only` classes to the image tag:

Markdown:

```md
![image-light](/img/myImage-light.png){.light-only}

![image-dark](/img/myImage-dark.png){.dark-only}
```

HTML:

```html
<img class="light-only" src="/img/myImage-light.png">

<img class="dark-only" src="/img/myImage-dark.png">
```

Tips:
- Keep the size and aspect ratio of the images consistent.
- Use similar filenames, such as with a `-light` or `-dark` suffix.
- Don't include only one version of the image, else content will move when switching between light and dark mode.

To modify this behaviour, see the "Light & Dark Mode images" section in the `docs/.vitepress/theme/style.css` file.

```
fedecan.ca
├─ docs
│  ├─ .vitepress
│  │  ├─ config.mts
│  │  └─ theme
│  │     ├─ components
│  │     │  ├─ DataWrapperChart.vue
│  │     │  ├─ InfoPill.vue
│  │     │  ├─ InfoText.vue
│  │     │  ├─ overrides
│  │     │  │  └─ VPFooter.vue
│  │     │  ├─ StripeButton.vue
│  │     │  └─ ThemedImage.vue
│  │     ├─ data
│  │     │  ├─ authors.js
│  │     │  └─ posts.data.js
│  │     ├─ index.ts
│  │     └─ style.css
│  ├─ en
│  │  ├─ announcements
│  │  │  ├─ 2024-02-10_censusResults.md
│  │  │  ├─ 2024-04-08_incorporated.md
│  │  │  ├─ 2024-04-08_lemmyvision-2024.md
│  │  │  ├─ 2024-07-15_canvas-2024.md
│  │  │  └─ 2025-01-18_update-finances-new-server.md
│  │  ├─ announcements.md
│  │  ├─ contact.md
│  │  ├─ donate-private.md
│  │  ├─ donate.md
│  │  ├─ guide
│  │  │  ├─ fedecan
│  │  │  │  └─ faq.md
│  │  │  ├─ fediverse
│  │  │  │  ├─ open-source.md
│  │  │  │  └─ overview.md
│  │  │  ├─ get-started.md
│  │  │  └─ lemmy
│  │  │     ├─ alternative-uis.md
│  │  │     ├─ automation.md
│  │  │     ├─ infrastructure
│  │  │     │  ├─ firewall.md
│  │  │     │  ├─ security.md
│  │  │     │  └─ ssh
│  │  │     │     ├─ configuring.md
│  │  │     │     ├─ hardening.md
│  │  │     │     └─ overview.md
│  │  │     ├─ markdown.md
│  │  │     └─ overview.md
│  │  └─ index.md
│  ├─ fr
│  │  ├─ donate.md
│  │  ├─ guide
│  │  │  ├─ fedecan
│  │  │  │  └─ faq.md
│  │  │  └─ get-started.md
│  │  └─ index.md
│  └─ public
│     ├─ announcements
│     │  ├─ 2024-02-10_censusResults
│     │  │  ├─ 2.2.png
│     │  │  ├─ 2.5.png
│     │  │  ├─ 2.9.png
│     │  │  ├─ 4.1.png
│     │  │  └─ icecream.jpg
│     │  ├─ author
│     │  │  └─ shadow.webp
│     │  └─ banner
│     │     ├─ 2024-02-10_censusResults.jpg
│     │     ├─ canvas-2024.webp
│     │     └─ lemmyvision-2024.webp
│     ├─ favicon.svg
│     ├─ img
│     │  ├─ asleep.png
│     │  ├─ error-asleep.webp
│     │  ├─ error-leaves.png
│     │  ├─ guides
│     │  │  └─ markdown
│     │  │     ├─ blockquotes_dark.png
│     │  │     ├─ blockquotes_light.png
│     │  │     ├─ code_dark.png
│     │  │     ├─ code_light.png
│     │  │     ├─ emphasis_dark.png
│     │  │     ├─ emphasis_light.png
│     │  │     ├─ headers_dark.png
│     │  │     ├─ headers_light.png
│     │  │     ├─ horizontal_rule_dark.png
│     │  │     ├─ horizontal_rule_light.png
│     │  │     ├─ links_images_dark.png
│     │  │     ├─ links_images_light.png
│     │  │     ├─ lists_dark.png
│     │  │     ├─ lists_light.png
│     │  │     ├─ spoilers_dark.png
│     │  │     ├─ spoilers_light.png
│     │  │     ├─ sub_superscript_dark.png
│     │  │     ├─ sub_superscript_light.png
│     │  │     ├─ tables_dark.png
│     │  │     └─ tables_light.png
│     │  ├─ icons
│     │  │  ├─ fediverse.png
│     │  │  ├─ heart-care.png
│     │  │  ├─ maple-leaf-white.svg
│     │  │  ├─ maple-leaf.png
│     │  │  ├─ maple-leaf.svg
│     │  │  └─ server-edit.png
│     │  ├─ lemmy-screenshots.png
│     │  ├─ profile-square-light.png
│     │  ├─ profile-square.png
│     │  └─ social-share.png
│     └─ _redirects
├─ local-test
├─ package.json
├─ pnpm-lock.yaml
└─ README.md

```