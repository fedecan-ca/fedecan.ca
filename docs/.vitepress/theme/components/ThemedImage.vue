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
    <img
      :src="darkImageUrl"
      :alt="alt"
      class="dark-only"
    />
    <img
      :src="lightImageUrl"
      :alt="alt"
      class="light-only"
    />
  </div>
</template>