# Lemmy User Statistics

On this page, you can find graphs showing the number of new users per day on [lemmy.ca](https://lemmy.ca), as well as globally. The data is updated around every eight hours.

<VpvImageGallery
  title="lemmy.ca (past 2 weeks)"
  :directUrls="[getImageUrl('users', 'local', '2w')]"
  layout="full"
/>

<VpvImageGallery
  title="All federated instances (past 2 weeks)"
  :directUrls="[getImageUrl('users', 'global', '2w')]"
  layout="full"
/>

<VpvImageGallery
  title="lemmy.ca (past 6 months)"
  :directUrls="[getImageUrl('users', 'local', '6m')]"
  layout="full"
/>

<VpvImageGallery
  title="All federated instances (past 6 months)"
  :directUrls="[getImageUrl('users', 'global', '6m')]"
  layout="full"
/>

<VpvImageGallery
  title="lemmy.ca (past year)"
  :directUrls="[getImageUrl('users', 'local', '1y')]"
  layout="full"
/>

<VpvImageGallery
  title="All federated instances (past year)"
  :directUrls="[getImageUrl('users', 'global', '1y')]"
  layout="full"
/>

<VpvImageGallery
  title="lemmy.ca (past 2 years)"
  :directUrls="[getImageUrl('users', 'local', '2y')]"
  layout="full"
/>

<VpvImageGallery
  title="All federated instances (past 2 years)"
  :directUrls="[getImageUrl('users', 'global', '2y')]"
  layout="full"
/>











<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

const BASE_URL = 'https://data.fedecan.ca/images'

const IMAGES = {
  users: {
    global: {
      '2w': 'users-global-2w',
      '6m': 'users-global-6m',
      '1y': 'users-global-1y',
      '2y': 'users-global-2y'
    },
    local: {
      '2w': 'users-local-2w',
      '6m': 'users-local-6m',
      '1y': 'users-local-1y',
      '2y': 'users-local-2y'
    }
  }
}

const getImageUrl = computed(() => (type, scope, duration) => {
  const baseName = IMAGES[type]?.[scope]?.[duration]
  if (!baseName) return null
  
  return `${BASE_URL}/${baseName}-${isDark.value ? 'dark' : 'light'}.png`
})
</script>