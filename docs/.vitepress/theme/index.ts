// https://vitepress.dev/guide/custom-theme
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'

import './style.css'
import '@cynber/vitepress-valence/style.css'

import {Icon} from '@iconify/vue'

import {
    BlogPostHeader,
    BlogPostList,
    EmbedLemmy,
    HorizontalCard,
    HorizontalContainer,
    ImageGallery,
    JSONTable,
    VerticalCard,
    VerticalContainer,
} from '@cynber/vitepress-valence'

import enAuthors from './data/authors_en.js'
import frAuthors from './data/authors_fr.js'
import {data as enPostsData} from './data/posts_en.data.js'
import {data as frPostsData} from './data/posts_fr.data.js'
import {data as galleryData} from './data/gallery.data.js';

// Deprecated components
import InfoPill from './components/InfoPill.vue';
import InfoText from './components/InfoText.vue';
import StripeButton from './components/StripeButton.vue';
import DataWrapperChart from './components/DataWrapperChart.vue';
import ThemedImage from './components/ThemedImage.vue';
import ThemedImageGallery from './components/ThemedImageGallery.vue';
import WorkInProgress from './components/WorkInProgress.vue'

export default {
    extends: DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({app, router, siteData}) {
        // New components
        app.component('Icon', Icon)

        app.component('BlogPostHeader', BlogPostHeader)
        app.component('BlogPostList', BlogPostList)
        app.component('EmbedLemmy', EmbedLemmy)
        app.component('HorizontalCard', HorizontalCard)
        app.component('HorizontalContainer', HorizontalContainer)
        app.component('ImageGallery', ImageGallery)
        app.component('JSONTable', JSONTable)
        app.component('VerticalCard', VerticalCard)
        app.component('VerticalContainer', VerticalContainer)

        app.provide('enAuthors', enAuthors)
        app.provide('frAuthors', frAuthors)
        app.provide('enPostsData', enPostsData)
        app.provide('frPostsData', frPostsData)
        app.provide('galleryData', galleryData)

        // Deprecated components
        app.component('InfoPill', InfoPill)
        app.component('InfoText', InfoText)
        app.component('StripeButton', StripeButton)
        app.component('DataWrapperChart', DataWrapperChart)
        app.component('ThemedImage', ThemedImage)
        app.component('ThemedImageGallery', ThemedImageGallery)

        // Add WorkInProgress component
        app.component('WorkInProgress', WorkInProgress)
    }
} satisfies Theme;
