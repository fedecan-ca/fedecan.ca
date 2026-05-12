<script setup>
import DefaultTheme from 'vitepress/theme'
import CustomFooter from './components/CustomFooter.vue'
import CustomNotFound from './components/CustomNotFound.vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

// doc layout is the default (no layout set, or layout: 'doc')
const isDoc = computed(
  () => !frontmatter.value.layout || frontmatter.value.layout === 'doc'
)
</script>

<template>
  <Layout>
    <!-- Doc layout: this slot is safely inside the content column, aside never overlaps -->
    <template v-if="isDoc" #doc-bottom>
      <CustomFooter />
    </template>

    <!-- Home + page + anything else: use layout-bottom, card styles handle centering -->
    <template v-if="!isDoc" #layout-bottom>
      <CustomFooter />
    </template>

    <template #not-found>
      <CustomNotFound />
    </template>
  </Layout>
</template>
