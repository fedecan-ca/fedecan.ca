import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-CA',
  title: 'Fedecan',
  titleTemplate: ':title | Fedecan',
  description:
    'Discover a new way to connect online. As a Canadian not-for-profit, we can help you join a growing network of federated social media that prioritizes community over profit.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Guides & Resources', link: '/en/guide/get-started' },
      { text: 'Announcements', link: '/en/announcements' },
      { text: 'Contact', link: '/en/contact' },
      { text: '❤️ Donate', link: '/en/donate' },
    ],

    sidebar: {
      '/en/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is the Fediverse?', link: '/en/guide/get-started' },
            {
              text: 'Fedecan',
              items: [
                { text: 'Who We Are', link: '/en/guide/fedecan' },
                {
                  text: 'Our Platforms',
                  link: '/en/guide/fedecan/our-platforms',
                },
                { text: 'F.A.Q.', link: '/en/guide/fedecan/faq' },
              ],
            },
          ],
        },
        {
          text: 'Threadiverse',
          items: [
            {
              text: 'Overview',
              link: '/en/guide/threadiverse/overview',
            },
            {
              text: 'Detailed Overview',
              link: '/en/guide/threadiverse/detailed-overview',
            },
            {
              text: 'for Users',
              items: [
                {
                  text: 'Alternative UIs',
                  link: '/en/guide/threadiverse/alternative-uis',
                },
                {
                  text: 'Apps',
                  link: '/en/guide/threadiverse/apps',
                },
                {
                  text: 'Finding Communities',
                  link: '/en/guide/threadiverse/finding-communities',
                },
                {
                  text: 'Formatting Posts',
                  link: '/en/guide/threadiverse/formatting-posts',
                },
                {
                  text: 'How to block users, communities, or instances',
                  link: '/en/guide/threadiverse/how-to-block',
                },
                {
                  text: 'How to deal with inappropriate content',
                  link: '/en/guide/threadiverse/how-to-deal-with-inappropriate-content',
                },
                {
                  text: 'How to open something in my instance',
                  link: '/en/guide/threadiverse/how-to-open-in-my-instance',
                },
                {
                  text: 'Privacy on Lemmy',
                  link: '/en/guide/threadiverse/privacy-lemmy',
                },
              ],
            },
            {
              text: 'for Moderators on Lemmy',
              collapsed: true,
              items: [
                {
                  text: 'Overview for Moderators',
                  link: '/en/guide/lemmy/for-moderators',
                },
              ],
            },
            {
              text: 'for Admins running Lemmy',
              collapsed: true,
              items: [
                {
                  text: 'Overview for Admins',
                  link: '/en/guide/lemmy/for-admins',
                },
                {
                  text: 'Securing Lemmy',
                  link: '/en/guide/lemmy/for-admins/infrastructure/security',
                  items: [
                    {
                      text: 'Firewall',
                      link: '/en/guide/lemmy/for-admins/infrastructure/firewall',
                    },
                    {
                      text: 'SSH',
                      link: '/en/guide/lemmy/for-admins/infrastructure/ssh/overview',
                      items: [
                        {
                          text: 'Configure SSH',
                          link: '/en/guide/lemmy/for-admins/infrastructure/ssh/configuring',
                        },
                        {
                          text: 'Hardening SSH',
                          link: '/en/guide/lemmy/for-admins/infrastructure/ssh/hardening',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              text: 'for Devs & Technical Users',
              collapsed: true,
              items: [
                {
                  text: 'Automation for Lemmy',
                  link: '/en/guide/lemmy/automation',
                },
              ],
            },
          ],
        },
        {
          text: 'Pixelfed',
          items: [{ text: 'Overview', link: '/en/guide/pixelfed/overview' }],
        },
        {
          text: 'Misc.',
          items: [
            {
              text: 'About this site',
              link: '/en/guide/credits',
            },
            {
              text: 'Statistics for lemmy.ca',
              collapsed: true,
              items: [
                {
                  text: 'New Users per Day',
                  link: '/en/guide/data/lemmy/users',
                },
                {
                  text: 'New Comments per Day',
                  link: '/en/guide/data/lemmy/comments',
                },
                {
                  text: 'New Posts per Day',
                  link: '/en/guide/data/lemmy/posts',
                },
                {
                  text: 'Number of Communities',
                  link: '/en/guide/data/lemmy/communities',
                },
                {
                  text: 'Number of Federated Instances',
                  link: '/en/guide/data/lemmy/instances',
                },
              ],
            },
          ],
        },
      ],
    },
  },
})
