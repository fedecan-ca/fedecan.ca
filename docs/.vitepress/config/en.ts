import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

export const en = defineConfig({
    lang: 'en-CA',
    title: 'Fedecan',
    titleTemplate: ':title | Fedecan',
    description: 'Discover a new way to connect online. As a Canadian not-for-profit, we can help you join a growing network of federated social media that prioritizes community over profit.',

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
                                { text: 'F.A.Q.', link: '/en/guide/fedecan/faq' }
                            ]
                        }
                    ]
                },
                {
                    text: 'Our Platforms',
                    items: [
                        {
                            text: 'Lemmy',
                            link: '/en/guide/lemmy/overview',
                            items: [
                                {
                                    text: 'Guides for Users',
                                    collapsed: true,
                                    items: [
                                        {
                                            text: 'Getting Started with Lemmy',
                                            link: '/en/guide/lemmy/for-users',
                                        },
                                        {
                                            text: 'Detailed Overview',
                                            link: '/en/guide/lemmy/for-users/detailed-overview'
                                        },
                                        {
                                            text: 'Privacy / Security',
                                            link: '/en/guide/lemmy/for-users/privacy-security'
                                        },
                                        {
                                            text: 'Finding Communities',
                                            link: '/en/guide/lemmy/for-users/how-to-find-communities'
                                        },
                                        {
                                            text: 'Mobile Apps',
                                            link: '/en/guide/lemmy/for-users/mobile-apps'
                                        },
                                        {
                                            text: 'Alternative UIs',
                                            link: '/en/guide/lemmy/for-users/alternative-uis'
                                        },
                                        {
                                            text: 'How to format posts',
                                            link: '/en/guide/lemmy/for-users/markdown'
                                        },
                                        {
                                            text: 'How to open something in my instance',
                                            link: '/en/guide/lemmy/for-users/how-to-open-in-my-instance'
                                        },
                                        {
                                            text: 'How to block users / communities',
                                            link: '/en/guide/lemmy/for-users/how-to-block'
                                        },
                                    ]
                                },
                                {
                                    text: 'Guides for Moderators',
                                    collapsed: true,
                                    items: [
                                        {
                                            text: 'Overview for Moderators',
                                            link: '/en/guide/lemmy/for-moderators',
                                        },
                                    ]
                                },
                                {
                                    text: 'Guides for Admins',
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
                                                    link: '/en/guide/lemmy/for-admins/infrastructure/firewall'
                                                },
                                                {
                                                    text: 'SSH',
                                                    link: '/en/guide/lemmy/for-admins/infrastructure/ssh/overview',
                                                    items: [
                                                        {
                                                            text: 'Configure SSH',
                                                            link: '/en/guide/lemmy/for-admins/infrastructure/ssh/configuring'
                                                        },
                                                        {
                                                            text: 'Hardening SSH',
                                                            link: '/en/guide/lemmy/for-admins/infrastructure/ssh/hardening'
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            text: 'Automation for Lemmy',
                                            link: '/en/guide/lemmy/for-admins/automation'
                                        },
                                    ]
                                },
                                // {
                                //     text: 'Guides for Developers',
                                //     link: '/en/guide/lemmy/for-developers'
                                // }
                            ]
                        }
                    ]
                },
                {
                    text: 'Statistics',
                    items: [
                        {
                            text: 'Lemmy',
                            collapsed: true,
                            items: [
                                {
                                    text: 'New Users per Day',
                                    link: '/en/guide/data/lemmy/users'
                                },
                                {
                                    text: 'New Comments per Day',
                                    link: '/en/guide/data/lemmy/comments'
                                },
                                {
                                    text: 'New Posts per Day',
                                    link: '/en/guide/data/lemmy/posts'
                                },
                                {
                                    text: 'Number of Communities',
                                    link: '/en/guide/data/lemmy/communities'
                                },
                                {
                                    text: 'Number of Federated Instances',
                                    link: '/en/guide/data/lemmy/instances'
                                },
                            ]
                        },
                    ]
                },
                {
                    text: 'Credits',
                    link: '/en/guide/credits'
                }
            ],
        },
    }
})
