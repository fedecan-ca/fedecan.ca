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
