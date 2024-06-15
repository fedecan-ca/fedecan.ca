# Fedecan.ca

This is the repository for the [Fedecan.ca](https://fedecan.ca) website. The site is built with Vitepress and deployed to GitHub Pages.

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

The site is deployed to GitHub Pages. The deployment process is automated using GitHub Actions. Before pushing changes, you can build the site locally and preview it to check for issues that didn't appear in the local development server.

```bash
npm run docs:build
npm run docs:preview
```



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

1. Create a new file with this naming format `docs/announcements/YYYY-MM-DD_identifier.md`.
2. In the file, add the following component before the content. The title and date fields are required, but the image field is optional.
```html
<BlogPostHeader 
  image=""
  title=""
  date=""
  />
```
3. In `docs/announcements.md`, add a new card with the following component. The title, date, excerpt, and url fields are required, but the image field is optional.
```html
<BlogPostCard title=""
          date=""
          excerpt=""
          url="" />
```