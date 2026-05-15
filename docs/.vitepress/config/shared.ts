import { defineConfig } from 'vitepress'
import { generateFeed } from './rss'

export const shared = defineConfig({
  lastUpdated: true,
  cleanUrls: true,

  buildEnd: (config) => generateFeed(config),

  vite: {
    ssr: { noExternal: ['@cynber/vitepress-valence'] },
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  sitemap: {
    hostname: 'https://fedecan.ca',
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon-bg.svg' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://fedecan.ca/img/social-share.png',
      },
    ],
    ['meta', { name: 'robots', content: 'index,follow' }],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/atom+xml',
        title: 'Fedecan Announcements (EN)',
        href: 'https://fedecan.ca/feed-en.xml',
      },
    ],
    // Uncomment when French feed is enabled:
    // [
    //   'link',
    //   {
    //     rel: 'alternate',
    //     type: 'application/atom+xml',
    //     title: 'Annonces Fedecan (FR)',
    //     href: 'https://fedecan.ca/feed-fr.xml',
    //   },
    // ],
  ],
  transformPageData(pageData) {
    const canonicalUrl = `https://fedecan.ca${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl },
    ])
  },
  themeConfig: {
    logo: {
      light: '/img/icons/maple-leaf.svg',
      dark: '/img/icons/maple-leaf.svg',
    },
    externalLinkIcon: true,
  },
})
