<template>
  <div class="info-text">
    <Icon :icon="icon" class="icon" :class="iconColorClass" />
    <span :class="colorClass" class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "InfoText",
  props: {
    colorType: {
      type: String,
      default: "ok", // 'ok', 'warn', 'gray'
      validator: (value) => ["ok", "warn", "gray"].includes(value),
    },
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    colorClass() {
      return {
        ok: "ok-color",
        warn: "warn-color",
        gray: "gray-color",
      }[this.colorType];
    },
    iconColorClass() {
      return {
        ok: "ok-icon-color",
        warn: "warn-icon-color",
        gray: "gray-icon-color",
      }[this.colorType];
    },
  },
};
</script>

<style scoped>
.info-text {
  display: flex;
  align-items: center;
  gap: 5px;
}

.icon {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
}

.text {
  word-wrap: break-word;
  white-space: normal;
}

.ok-color {
  color: var(--vp-c-good-3);
}

.warn-color {
  color: var(--vp-c-warning-3);
}

.gray-color {
  color: gray;
}

.ok-icon-color {
  color: var(--vp-c-good-3);
}

.warn-icon-color {
  color: var(--vp-c-warning-3);
}

.gray-icon-color {
  color: gray;
}
</style>
