import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fedecan",
  titleTemplate: ':title | Fedecan',
  description: "Discover a new way to connect online. As a Canadian not-for-profit, we can help you join a growing network of federated social media that prioritizes community over profit.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { property: 'og:image', content: 'https://fedecan.ca/img/social-share.png' }]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Announcements', link: '/announcements' },
      { text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/guide/get-started' },
          {text: 'F.A.Q.', link: '/guide/fedecan/faq'}
        ]
      },
      { text: 'Contact Us', link: '/contact' },
      { text: 'Donate', link: '/donate' }
    ],

    sidebar: {
      // For pages in the `guide` directory
      '/guide/': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting Started', link: '/guide/get-started' },
            { text: 'Fediverse',
              items: [
                { text: 'What is the Fediverse?', link: '/guide/fediverse/overview' },
                { text: 'Why Open Source?', link: '/guide/fediverse/open-source' }
              ]
            },
            { text: 'Lemmy',
              items: [
                { text: 'What is Lemmy?', link: '/guide/lemmy/overview' },
                { text: 'Automation for Lemmy', link: '/guide/lemmy/automation' },
                { text: 'Alternative UIs', link: '/guide/lemmy/alternative-uis'},
                { text: 'Securing Lemmy', link: '/guide/lemmy/infrastructure/security', items: [
                  { text: 'Firewall', link: '/guide/lemmy/infrastructure/firewall' },
                  {
                    text: 'SSH', link: '/guide/lemmy/infrastructure/ssh/overview', items: [
                      { text: 'Configure SSH', link: '/guide/lemmy/infrastructure/ssh/configuring' },
                      { text: 'Hardening SSH', link: '/guide/lemmy/infrastructure/ssh/hardening' },
                    ]
                  }
                ]},
              ]
            },
            { text: 'Fedecan',
              items: [
                { text: 'F.A.Q.', link: '/guide/fedecan/faq' }
              ]
            }
          ]
        }
      ],
    },

    footer: {
      message: '<a href="https://status.lemmy.ca/">Uptime Status</a> | <a href="https://github.com/fedecan-ca/">GitHub Organization</a>',
    },

    logo: { light: '/icons/maple-leaf.svg', dark: '/icons/maple-leaf.svg'},

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
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-CA'
    },
    fr: {
      label: 'Français',
      lang: 'fr-CA',
      link: '/fr/'
    }
  }
})
