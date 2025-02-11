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
                                    link: '/en/guide/lemmy/for-users',
                                    collapsed: true,
                                    items: [
                                        {
                                            text: 'Alternative UIs',
                                            link: '/en/guide/lemmy/for-users/alternative-uis'
                                        },
                                        {
                                            text: 'How to format posts',
                                            link: '/en/guide/lemmy/for-users/markdown'
                                        },
                                    ]
                                },
                                {
                                    text: 'Guides for Moderators',
                                    link: '/en/guide/lemmy/for-moderators'
                                },
                                {
                                    text: 'Guide for Admins',
                                    link: '/en/guide/lemmy/for-admins',
                                    collapsed: true,
                                    items: [
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
                                {
                                    text: 'Guides for Developers',
                                    link: '/en/guide/lemmy/for-developers'
                                }
                            ]
                        }
                    ]
                }
            ],
        },
    }
})
