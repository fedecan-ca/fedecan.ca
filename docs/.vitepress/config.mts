import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fedecan",
  titleTemplate: ':title | Fedecan',
  description: "Discover a new way to connect online. As a Canadian not-for-profit, we can help you join a growing network of federated social media that prioritizes community over profit.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { property: 'og:image', content: 'https://fedecan.ca/img/social-share.png' }]
  ],
  vite: {
    ssr: { noExternal: ['@cynber/vitepress-valence'] },
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/overrides/VPFooter.vue', import.meta.url),
          ),
        }
      ],
    },
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  sitemap: {
    hostname: 'https://fedecan.ca'
  },
  cleanUrls: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en-CA',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Announcements', link: '/en/announcements' },
          {
            text: 'Guides',
            items: [
              { text: 'Getting Started', link: '/en/guide/get-started' },
              { text: 'F.A.Q.', link: '/en/guide/fedecan/faq' }
            ]
          },
          { text: 'Contact Us', link: '/en/contact' },
          { text: 'Donate', link: '/en/donate' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guides',
              items: [
                { text: 'Getting Started', link: '/en/guide/get-started' },
                {
                  text: 'Fediverse',
                  items: [
                    { text: 'What is the Fediverse?', link: '/en/guide/fediverse/overview' },
                    { text: 'Why Open Source?', link: '/en/guide/fediverse/open-source' }
                  ]
                },
                {
                  text: 'Lemmy',
                  items: [
                    { text: 'What is Lemmy?', link: '/en/guide/lemmy/overview' },
                    { text: 'Automation for Lemmy', link: '/en/guide/lemmy/automation' },
                    { text: 'Alternative UIs', link: '/en/guide/lemmy/alternative-uis' },
                    { text: 'Lemmy Markdown', link: '/en/guide/lemmy/markdown' },
                    {
                      text: 'Securing Lemmy', link: '/en/guide/lemmy/infrastructure/security',
                      items: [
                        { text: 'Firewall', link: '/en/guide/lemmy/infrastructure/firewall' },
                        {
                          text: 'SSH',
                          link: '/en/guide/lemmy/infrastructure/ssh/overview',
                          items: [
                            { text: 'Configure SSH', link: '/en/guide/lemmy/infrastructure/ssh/configuring' },
                            { text: 'Hardening SSH', link: '/en/guide/lemmy/infrastructure/ssh/hardening' },
                          ]
                        }
                      ]
                    },
                  ]
                },
                {
                  text: 'Fedecan',
                  items: [
                    { text: 'F.A.Q.', link: '/en/guide/fedecan/faq' }
                  ]
                }
              ]
            }
          ],
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-CA',
      link: '/fr/',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          {
            text: 'Guide',
            items: [
              { text: 'Commencer', link: '/fr/guide/get-started' },
              { text: 'FAQ', link: '/fr/guide/fedecan/faq' }
            ]
          },
          { text: 'Faire un don', link: '/fr/donate' }
        ],
        sidebar: {
          '/fr/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Commencer', link: '/fr/guide/get-started' },
                {
                  text: 'Fedecan',
                  items: [
                    { text: 'FAQ', link: '/fr/guide/fedecan/faq' }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  },

  themeConfig: {
    logo: {
      light: '/img/icons/maple-leaf.svg',
      dark: '/img/icons/maple-leaf.svg'
    },

    footer: {
      message: '<a href="https://status.lemmy.ca/">Uptime Status</a> | <a href="https://github.com/fedecan-ca/">GitHub Organization</a>',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
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
    },
    externalLinkIcon: true
  }
})
