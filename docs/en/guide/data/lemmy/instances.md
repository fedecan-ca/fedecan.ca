# Lemmy Federated Instances Statistics

On this page, you can find graphs showing the total number of instances that are federated with [lemmy.ca](https://lemmy.ca). The data is updated around every eight hours.

<VpvImageGallery
  title="Past 2 weeks"
  :directUrls="[getImageUrl('instances', '2w')]"
  layout="full"
/>

<VpvImageGallery
  title="Past 6 months"
  :directUrls="[getImageUrl('instances', '6m')]"
  layout="full"
/>

<VpvImageGallery
  title="Past year"
  :directUrls="[getImageUrl('instances', '1y')]"
  layout="full"
/>

<VpvImageGallery
  title="Past 2 years"
  :directUrls="[getImageUrl('instances', '2y')]"
  layout="full"
/>











<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

const BASE_URL = 'https://data.fedecan.ca/images'

const IMAGES = {
  instances: {
      '2w': 'instances-2w',
      '6m': 'instances-6m',
      '1y': 'instances-1y',
      '2y': 'instances-2y'
  }
}

const getImageUrl = computed(() => (type, duration) => {
  const baseName = IMAGES[type]?.[duration]
  if (!baseName) return null
  
  return `${BASE_URL}/${baseName}-${isDark.value ? 'dark' : 'light'}.png`
})
</script>