<template>
  <div class="option-bar">
    <div :class="['option', type]">
      <Icon :icon="icon" width="1.2em" height="1.2em" />
      <span>{{ label }}</span>
      <div class="hover-text">
        {{ hoverText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPill",
  props: {
    type: {
      type: String,
      default: "ok", // 'ok' or 'warn'
      validator: (value) => ["ok", "warn"].includes(value),
    },
    label: {
      type: String,
      default: "No fees",
    },
    hoverText: {
      type: String,
      default: "We will receive 100% of your donation.",
    },
  },
  computed: {
    icon() {
      return this.type === "ok" ? "ic:round-check" : "ic:round-warning-amber";
    },
  },
};
</script>

<style scoped>
.option-bar {
  display: flex;
  gap: 10px;
  padding: 10px;
}

.option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 0.8em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.option.ok {
  background-color: var(--vp-c-good-soft);
  color: var(--vp-c-good-3);
}

.option.warn {
  background-color: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-3);
}

.hover-text {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  z-index: 10;
  max-width: 90vw;
  overflow-wrap: break-word;
}

.option:hover .hover-text {
  display: block;
}

@media (max-width: 600px) {
  .hover-text {
    left: 0;
    right: 0;
    transform: none;
    text-align: center;
  }
}
</style>
