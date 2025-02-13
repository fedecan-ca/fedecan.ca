import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { search } from './search'
import { en } from './en'
import { fr } from './fr'

export default defineConfig({
    ...shared,
    themeConfig: {
        search,
    },
    locales: {
        root: {
            label: 'English',
            ...en,
            link: '/en/'
        },
        fr: {
            label: 'Français',
            ...fr,
            link: '/fr/'
        }
    }
})
