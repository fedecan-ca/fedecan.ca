<template>
  <div v-if="simple" class="simple-container">
    <div class="chart-wrapper" style="min-height: 415px">
      <!-- Light mode chart -->
      <div 
        ref="lightChartContainer" 
        :class="{ 'chart-hidden': isDark }"
      >
        <noscript>
          <img :src="`https://datawrapper.dwcdn.net/${chartId}/full.png`" alt="" />
        </noscript>
      </div>
      <!-- Dark mode chart -->
      <div 
        ref="darkChartContainer" 
        :class="{ 'chart-hidden': !isDark }"
      >
        <noscript>
          <img :src="`https://datawrapper.dwcdn.net/${chartId}/full.png`" alt="" />
        </noscript>
      </div>
    </div>
  </div>
  <div v-else>
    <VpvContainerHorizontal>
      <div class="chart-card">
        <div class="chart-wrapper" style="min-height: 415px">
          <!-- Light mode chart -->
          <div 
            ref="lightChartContainer" 
            :class="{ 'chart-hidden': isDark }"
          >
            <noscript>
              <img :src="`https://datawrapper.dwcdn.net/${chartId}/full.png`" alt="" />
            </noscript>
          </div>
          <!-- Dark mode chart -->
          <div 
            ref="darkChartContainer" 
            :class="{ 'chart-hidden': !isDark }"
          >
            <noscript>
              <img :src="`https://datawrapper.dwcdn.net/${chartId}/full.png`" alt="" />
            </noscript>
          </div>
        </div>
      </div>
    </VpvContainerHorizontal>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  chartId: {
    type: String,
    required: true,
  },
  simple: {
    type: Boolean,
    default: false,
  },
})

const { isDark } = useData()
const lightChartContainer = ref(null)
const darkChartContainer = ref(null)

const createChartScript = (darkMode = false) => {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.defer = true
  script.src = `https://datawrapper.dwcdn.net/${props.chartId}/embed.js?v=4`
  script.charset = "utf-8"
  
  script.setAttribute('data-dark', darkMode.toString())
  script.setAttribute('data-logo', 'on')
  
  return script
}

onMounted(() => {
  // Load light mode version
  if (lightChartContainer.value) {
    const lightScript = createChartScript(false)
    lightChartContainer.value.appendChild(lightScript)
  }
  
  // Load dark mode version
  if (darkChartContainer.value) {
    const darkScript = createChartScript(true)
    darkChartContainer.value.appendChild(darkScript)
  }
})
</script>

<style scoped>
.simple-container {
  padding: 2rem 0;
}

.chart-card {
  padding: 1rem;
  background-color: var(--vp-c-bg);
  border-radius: 16px;
  border: 2px solid var(--vp-c-divider);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out,
    transform 0.2s ease-in-out;
}

.chart-card:hover {
  border-color: var(--vp-c-border);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.chart-wrapper {
  position: relative;
}

.chart-hidden {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}
</style>