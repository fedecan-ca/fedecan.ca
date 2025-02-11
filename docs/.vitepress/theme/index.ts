// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'

import './style.css'
import '@cynber/vitepress-valence/style.css'

import { Icon } from '@iconify/vue'

import {  BlogPostHeader, 
          BlogPostList,
          HorizontalContainer,
          VerticalContainer,
          HorizontalCard,
          VerticalCard,
          EmbedLemmy,
        } from '@cynber/vitepress-valence'

import authors from './data/authors.js'
import { data as postsData } from './data/posts.data.js'

// Deprecated components
import InfoPill from './components/InfoPill.vue';
import InfoText from './components/InfoText.vue';
import StripeButton from './components/StripeButton.vue';
import DataWrapperChart from './components/DataWrapperChart.vue';
import ThemedImage from './components/ThemedImage.vue';

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData }) {
    // Deprecated components 
    app.component('InfoPill', InfoPill)
    app.component('InfoText', InfoText)
    app.component('StripeButton', StripeButton)
    app.component('DataWrapperChart', DataWrapperChart)
    app.component('ThemedImage', ThemedImage)

    // New components
    app.provide('authors', authors)  
    app.provide('postsData', postsData)

    app.component('Icon', Icon)

    app.component('BlogPostHeader', BlogPostHeader)
    app.component('BlogPostList', BlogPostList)
    app.component('HorizontalContainer', HorizontalContainer)
    app.component('VerticalContainer', VerticalContainer)
    app.component('HorizontalCard', HorizontalCard)
    app.component('VerticalCard', VerticalCard)
    app.component('EmbedLemmy', EmbedLemmy)
  }
} satisfies Theme;
