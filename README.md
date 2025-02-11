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
- VitePress Valence: [cynber.dev/projects/vitepress-valence](https://cynber.dev/projects/vitepress-valence/)

**Structure:**

See the bottom of this README for a file structure overview.

**Tips:**

- When linking to other pages, [don't use any file extensions](https://vitepress.dev/guide/routing#linking-between-pages).
- If you are getting a warning message on the `.github/workflows/deploy.yml` file, refresh it by following the [instructions here](https://github.com/github/vscode-github-actions/issues/215#issuecomment-1634719484).

### **Icons:**

We are using [iconify](https://icon-sets.iconify.design), search for icons [here](https://icon-sets.iconify.design/).

1. Filter results to find icons with a compatible license. For example, `Material Design Icons`
2. Copy the icon name, such as `ic:outline-email`, then use it as follows:

```html
<Icon icon="ic:outline-email" />
```

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

#### Image Sizing:

- **OG:image:** 1200x630px (1.91:1 aspect ratio)
- **Banner:** 1200x300px (4:1 aspect ratio)

## File Structure Overview

```
fedecan.ca
├─ docs
│  ├─ .vitepress
│  │  ├─ config              # config.mts, but split into multiple files
│  │  │  ├─ en.ts
│  │  │  ├─ fr.ts
│  │  │  ├─ index.ts
│  │  │  ├─ search.ts
│  │  │  └─ shared.ts
│  │  └─ theme
│  │     ├─ components
│  │     │  ├─ CustomFooter.vue
│  │     │  ├─ CustomNotFound.vue
│  │     │  ├─ DataWrapperChart.vue
│  │     │  ├─ InfoPill.vue
│  │     │  ├─ InfoText.vue
│  │     │  ├─ StripeButton.vue
│  │     │  └─ ThemedImage.vue
│  │     ├─ CustomLayout.vue
│  │     ├─ data
│  │     │  ├─ authors.js
│  │     │  └─ posts.data.js
│  │     ├─ index.ts
│  │     └─ style.css
│  ├─ en
│  │  ├─ announcements
│  │  │  └─ ...
│  │  ├─ announcements.md
│  │  ├─ contact.md
│  │  ├─ donate-private.md
│  │  ├─ donate.md
│  │  ├─ guide
│  │  │  └─ ...
│  │  └─ index.md
│  ├─ fr
│  │  ├─ announcements
│  │  │  └─ ...
│  │  ├─ announcements.md
│  │  ├─ contact.md
│  │  ├─ donate-private.md
│  │  ├─ donate.md
│  │  ├─ guide
│  │  │  └─ ...
│  │  └─ index.md
│  └─ public
│     └─ ...
├─ package.json
├─ pnpm-lock.yaml
└─ README.md
```