import type { DefaultTheme } from 'vitepress'

export const search: DefaultTheme.Config['search'] = {
    provider: 'local',
    options: {
        locales: {
            root: {
                translations: {
                    button: {
                        buttonText: 'Search',
                        buttonAriaLabel: 'Search'
                    },
                    modal: {
                        noResultsText: 'No results for',
                        resetButtonTitle: 'Reset search',
                        footer: {
                            selectText: 'to select',
                            navigateText: 'to navigate',
                        }
                    }
                }
            },
            fr: {
                translations: {
                    button: {
                        buttonText: 'Rechercher',
                        buttonAriaLabel: 'Rechercher'
                    },
                    modal: {
                        noResultsText: 'Aucun résultat pour',
                        resetButtonTitle: 'Réinitialiser la recherche',
                        footer: {
                            selectText: 'pour sélectionner',
                            navigateText: 'pour naviguer',
                        }
                    }
                }
            }
        }
    }
}
