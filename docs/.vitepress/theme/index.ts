// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './style.css'
import '@cynber/vitepress-valence/style.css'

import authors from './data/authors.js'
import { data as postsData } from './data/posts.data.js'

import { Icon } from '@iconify/vue'
import { BlogPostHeader } from '@cynber/vitepress-valence'
import { BlogPostList } from '@cynber/vitepress-valence'
import { EmbedLemmy } from '@cynber/vitepress-valence'


// import BlogPostCard from './components/BlogPostCard.vue';
// import BlogPostHeader from './components/BlogPostHeader.vue';
import InfoPill from './components/InfoPill.vue';
import InfoText from './components/InfoText.vue';
import StripeButton from './components/StripeButton.vue';
import DataWrapperChart from './components/DataWrapperChart.vue';
import ThemedImage from './components/ThemedImage.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Deprecated components 
    // app.component('BlogPostCard', BlogPostCard);
    app.component('InfoPill', InfoPill);
    app.component('InfoText', InfoText);
    app.component('StripeButton', StripeButton);
    app.component('DataWrapperChart', DataWrapperChart);
    app.component('ThemedImage', ThemedImage);

    // New components
    app.provide('authors', authors)  
    app.provide('postsData', postsData)

    app.component('Icon', Icon);

    app.component('BlogPostHeader', BlogPostHeader)
    app.component('BlogPostList', BlogPostList)
    app.component('EmbedLemmy', EmbedLemmy)
  }
} satisfies Theme;
