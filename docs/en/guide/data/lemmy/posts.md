# Lemmy Post Statistics

On this page, you can find graphs showing the number of new posts per day on [lemmy.ca](https://lemmy.ca), as well as globally. The data is updated around every eight hours.

<ImageGallery
  title="lemmy.ca (past 2 weeks)"
  :directUrls="[getImageUrl('posts', 'local', '2w')]"
  layout="vertical"
/>

<ImageGallery
  title="All federated instances (past 2 weeks)"
  :directUrls="[getImageUrl('posts', 'global', '2w')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past 6 months)"
  :directUrls="[getImageUrl('posts', 'local', '6m')]"
  layout="vertical"
/>

<ImageGallery
  title="All federated instances (past 6 months)"
  :directUrls="[getImageUrl('posts', 'global', '6m')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past year)"
  :directUrls="[getImageUrl('posts', 'local', '1y')]"
  layout="vertical"
/>

<ImageGallery
  title="All federated instances (past year)"
  :directUrls="[getImageUrl('posts', 'global', '1y')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past 2 years)"
  :directUrls="[getImageUrl('posts', 'local', '2y')]"
  layout="vertical"
/>

<ImageGallery
  title="All federated instances (past 2 years)"
  :directUrls="[getImageUrl('posts', 'global', '2y')]"
  layout="vertical"
/>











<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

const BASE_URL = 'https://data.fedecan.ca/images'

const IMAGES = {
  posts: {
    global: {
      '2w': 'posts-global-2w',
      '6m': 'posts-global-6m',
      '1y': 'posts-global-1y',
      '2y': 'posts-global-2y'
    },
    local: {
      '2w': 'posts-local-2w',
      '6m': 'posts-local-6m',
      '1y': 'posts-local-1y',
      '2y': 'posts-local-2y'
    }
  }
}

const getImageUrl = computed(() => (type, scope, duration) => {
  const baseName = IMAGES[type]?.[scope]?.[duration]
  if (!baseName) return null
  
  return `${BASE_URL}/${baseName}-${isDark.value ? 'dark' : 'light'}.png`
})
</script>