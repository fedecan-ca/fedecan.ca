<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()

</script>

<script>
export default {
  name: "ThemedImage",
  props: {
    lightImageUrl: {
      type: String,
      required: true,
    },
    darkImageUrl: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      default: "Themed Image",
    },
  }
};
</script>

<style scoped>
.themed-image {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
<template>
  <div class="themed-image">
    <img :src="isDark ? darkImageUrl ?? lightImageUrl : lightImageUrl" :alt="alt" />
  </div>
</template>