# Lemmy Comment Statistics

On this page, you can find graphs showing the number of new comments per day on [lemmy.ca](https://lemmy.ca), as well as globally. The data is updated around every eight hours.

<ImageGallery
  title="lemmy.ca (past 2 weeks)"
  :directUrls="[getImageUrl('comments', 'local', '2w')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past 2 weeks)"
  :directUrls="[getImageUrl('comments', 'global', '2w')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past 6 months)"
  :directUrls="[getImageUrl('comments', 'local', '6m')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past 6 months)"
  :directUrls="[getImageUrl('comments', 'global', '6m')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past year)"
  :directUrls="[getImageUrl('comments', 'local', '1y')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past year)"
  :directUrls="[getImageUrl('comments', 'global', '1y')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past 2 years)"
  :directUrls="[getImageUrl('comments', 'local', '2y')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past 2 years)"
  :directUrls="[getImageUrl('comments', 'global', '2y')]"
  layout="vertical"
/>











<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

const BASE_URL = 'https://data.fedecan.ca/images'

const IMAGES = {
  comments: {
    global: {
      '2w': 'comments-global-2w',
      '6m': 'comments-global-6m',
      '1y': 'comments-global-1y',
      '2y': 'comments-global-2y'
    },
    local: {
      '2w': 'comments-local-2w',
      '6m': 'comments-local-6m',
      '1y': 'comments-local-1y',
      '2y': 'comments-local-2y'
    }
  }
}

const getImageUrl = computed(() => (type, scope, duration) => {
  const baseName = IMAGES[type]?.[scope]?.[duration]
  if (!baseName) return null
  
  return `${BASE_URL}/${baseName}-${isDark.value ? 'dark' : 'light'}.png`
})
</script>