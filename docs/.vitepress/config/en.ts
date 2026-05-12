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
              text: 'for Users',
              items: [
                {
                  text: 'Alternative UIs',
                  link: '/en/guide/threadiverse/alternative-uis',
                },
              ],
            },
            {
              text: 'Lemmy',
              items: [
                {
                  text: 'for Users',
                  collapsed: true,
                  items: [
                    {
                      text: 'Getting Started with Lemmy',
                      link: '/en/guide/lemmy/for-users',
                    },
                    {
                      text: 'Detailed Overview',
                      link: '/en/guide/lemmy/for-users/detailed-overview',
                    },
                    {
                      text: 'Privacy / Security',
                      link: '/en/guide/lemmy/for-users/privacy-security',
                    },
                    {
                      text: 'Finding Communities',
                      link: '/en/guide/lemmy/for-users/how-to-find-communities',
                    },
                    {
                      text: 'Mobile Apps',
                      link: '/en/guide/lemmy/for-users/mobile-apps',
                    },
                    {
                      text: 'How to format posts',
                      link: '/en/guide/lemmy/for-users/markdown',
                    },
                    {
                      text: 'How to open something in my instance',
                      link: '/en/guide/lemmy/for-users/how-to-open-in-my-instance',
                    },
                    {
                      text: 'How to handle inappropriate content',
                      link: '/en/guide/lemmy/for-users/how-to-handle-inappropriate-content',
                    },
                    {
                      text: 'How to block users / communities',
                      link: '/en/guide/lemmy/for-users/how-to-block',
                    },
                  ],
                },
                {
                  text: 'for Moderators',
                  collapsed: true,
                  items: [
                    {
                      text: 'Overview for Moderators',
                      link: '/en/guide/lemmy/for-moderators',
                    },
                  ],
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
            // {
            //   text: 'Guides for Developers',
            //   link: '/en/guide/lemmy/for-developers',
            // },
            {
              text: 'Piefed',
              items: [{ text: 'Overview', link: '/en/guide/piefed/overview' }],
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
              text: 'lemmy.ca Statistics',
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
            {
              text: 'About this site',
              link: '/en/guide/credits',
            },
          ],
        },
      ],
    },
  },
})
