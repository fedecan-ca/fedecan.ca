import { defineRendererConfig, html } from '@lunariajs/core';

export default defineRendererConfig({
    slots: {
        head: (config) => html`<meta og:image="https://fedecan.ca/img/social-share.png" />`,
        afterTitle: (config) => html`<p>If this is your first time here, please see our <a href="https://github.com/fedecan-ca/fedecan.ca?tab=readme-ov-file#translate-content">translation guide</a>.</p> <br> <p>Si c'est votre première fois ici, veuillez consulter notre <a href="https://github.com/fedecan-ca/fedecan.ca?tab=readme-ov-file#translate-content">guide de traduction</a>.</p>`
    },
});