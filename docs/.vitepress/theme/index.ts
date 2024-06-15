// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { Icon } from '@iconify/vue';
import BlogPostCard from './components/BlogPostCard.vue'
import BlogPostHeader from './components/BlogPostHeader.vue'
import StripeButton from './components/StripeButton.vue';
import DataWrapperChart from './components/DataWrapperChart.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Icon', Icon);
    app.component('BlogPostCard', BlogPostCard);
    app.component('BlogPostHeader', BlogPostHeader);
    app.component('StripeButton', StripeButton);
    app.component('DataWrapperChart', DataWrapperChart);
  }
} satisfies Theme;
