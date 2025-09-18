<script>
import ThemedImage from "./ThemedImage.vue";

export default {
  name: "ThemedImageGallery",
  components: {ThemedImage},
  props: {
    images: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((url) => {
          if (!url || typeof url !== "object") {
            return false;
          }

          return (
              url.hasOwnProperty("lightImageUrl") &&
              typeof url.lightImageUrl === "string" &&
              url.hasOwnProperty("darkImageUrl") &&
              (typeof url.darkImageUrl === "string" || url.darkImageUrl === null) &&
              url.hasOwnProperty("alt") &&
              typeof url.alt === "string"
              && url.hasOwnProperty("caption") &&
              (typeof url.caption === "string" || url.caption === null)
          );
        });
      },
    },
  }
};
</script>

<style scoped>
.themed-images-gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>

<template>
  <div class="themed-images-gallery">
    <ThemedImage v-for="(image, index) in images" :key="index" :lightImageUrl="image.lightImageUrl"
                 :darkImageUrl="image.darkImageUrl" :alt="image.alt" :caption="image.caption"/>
  </div>
</template>