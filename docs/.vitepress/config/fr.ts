import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

export const fr = defineConfig({
    lang: 'fr-CA',
    title: 'Fédécan',
    titleTemplate: ':title | Fédécan',
    description: 'Découvrez une nouvelle façon de vous connecter en ligne. En tant qu\'organisme canadien sans but lucratif, nous pouvons vous aider à rejoindre un réseau croissant de médias sociaux fédérés qui privilégient la communauté plutôt que le profit.',

    themeConfig: {
        nav: [
            { text: 'Accueil', link: '/fr/' },
            { text: 'Guides et Ressources', link: '/fr/guide/get-started' },
            { text: 'Annonces', link: '/fr/announcements' },
            { text: 'Contact', link: '/fr/contact' },
            { text: '❤️ Faire un don', link: '/fr/donate' },
        ],

        sidebar: {
            '/fr/guide/': [
                // French sidebar configuration...
            ]
        }
    }
})
