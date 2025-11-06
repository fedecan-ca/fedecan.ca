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
    caption: {
      type: String,
      required: false,
    },
  },
  computed: {
    containsMarkdownLink() {
      // Prüft, ob die caption im Markdown-Link-Format vorliegt
      return /\[.+\]\(.+\)/.test(this.caption);
    },
    extractedHref() {
      // Extrahiert die URL aus der Markdown-Link-Beschriftung
      const match = this.caption.match(/\[(.+)\]\((.+)\)/);
      return match ? match[2] : "";
    },
    extractedText() {
      // Extrahiert den Text des Links aus der Markdown-Link-Beschriftung
      const match = this.caption.match(/\[(.+)\]\((.+)\)/);
      return match ? match[1] : this.caption;
    },
  },
};
</script>

<style scoped>
.themed-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.caption {
  text-align: center;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: -0.5rem 0 1.5rem 0;
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
    <span class="caption" v-if="caption" v-html="caption"></span>
  </div>
</template>