import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    lastUpdated: true,
    cleanUrls: true,

    vite: {
        ssr: { noExternal: ['@cynber/vitepress-valence'] },
    },

    markdown: {
        image: {
            lazyLoading: true
        }
    },

    sitemap: {
        hostname: 'https://fedecan.ca'
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon-bg.svg' }],
        ['meta', { property: 'og:image', content: 'https://fedecan.ca/img/social-share.png' }],
        ['meta', { name: 'robots', content: 'index,follow' }]
    ],
    transformPageData(pageData) {
        const canonicalUrl = `https://fedecan.ca${pageData.relativePath}`
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '')
        
        pageData.frontmatter.head ??= []
        pageData.frontmatter.head.push([
            'link',
            { rel: 'canonical', href: canonicalUrl }
        ])
    },
    themeConfig: {
        logo: {
            light: '/img/icons/maple-leaf.svg',
            dark: '/img/icons/maple-leaf.svg'
        },
        externalLinkIcon: true
    }
})
