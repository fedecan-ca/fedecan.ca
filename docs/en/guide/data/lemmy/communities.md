# Lemmy Community Statistics

On this page, you can find graphs showing the total number of communities on [lemmy.ca](https://lemmy.ca), as well as globally. The data is updated around every eight hours.

<ImageGallery
  title="lemmy.ca (past 2 weeks)"
  :directUrls="[getImageUrl('communities', 'local', '2w')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past 2 weeks)"
  :directUrls="[getImageUrl('communities', 'global', '2w')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past 6 months)"
  :directUrls="[getImageUrl('communities', 'local', '6m')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past 6 months)"
  :directUrls="[getImageUrl('communities', 'global', '6m')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past year)"
  :directUrls="[getImageUrl('communities', 'local', '1y')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past year)"
  :directUrls="[getImageUrl('communities', 'global', '1y')]"
  layout="vertical"
/>

<ImageGallery
  title="lemmy.ca (past 2 years)"
  :directUrls="[getImageUrl('communities', 'local', '2y')]"
  layout="vertical"
/>

<ImageGallery
  title="All instances (past 2 years)"
  :directUrls="[getImageUrl('communities', 'global', '2y')]"
  layout="vertical"
/>











<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

const BASE_URL = 'https://data.fedecan.ca/images'

const IMAGES = {
  communities: {
    global: {
      '2w': 'communities-global-2w',
      '6m': 'communities-global-6m',
      '1y': 'communities-global-1y',
      '2y': 'communities-global-2y'
    },
    local: {
      '2w': 'communities-local-2w',
      '6m': 'communities-local-6m',
      '1y': 'communities-local-1y',
      '2y': 'communities-local-2y'
    }
  }
}

const getImageUrl = computed(() => (type, scope, duration) => {
  const baseName = IMAGES[type]?.[scope]?.[duration]
  if (!baseName) return null
  
  return `${BASE_URL}/${baseName}-${isDark.value ? 'dark' : 'light'}.png`
})
</script>