<template>
  <div v-if="simple" class="vpv-chart-simple">
    <div class="vpv-chart-wrapper" :style="wrapperStyle">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>

  <div v-else class="vpv-chart-card">
    <div v-if="title || subtitle" class="vpv-chart-header">
      <h3 v-if="title" class="vpv-chart-title">{{ title }}</h3>
      <p v-if="subtitle" class="vpv-chart-subtitle">{{ subtitle }}</p>
    </div>

    <div
      v-if="isPie()"
      class="vpv-pie-layout"
      :class="{ 'vpv-pie-layout--mobile': mobileRef }"
    >
      <div class="vpv-pie-canvas-wrapper">
        <div class="vpv-chart-wrapper vpv-pie-canvas" :style="wrapperStyle">
          <canvas ref="chartCanvas"></canvas>
        </div>
      </div>
      <ul class="vpv-pie-legend" role="list">
        <li
          v-for="(item, i) in pieLegendItems"
          :key="i"
          class="vpv-pie-legend-item"
        >
          <span
            class="vpv-pie-legend-swatch"
            :style="{ background: item.color }"
          ></span>
          <span class="vpv-pie-legend-label">{{ item.text }}</span>
        </li>
      </ul>
    </div>

    <div v-else-if="isHorizBar()" class="vpv-horiz-bar-layout">
      <div
        v-if="horizYAxisTitle"
        class="vpv-horiz-yaxis-title"
        :aria-label="horizYAxisTitle"
      >
        <span>{{ horizYAxisTitle }}</span>
      </div>
      <div class="vpv-chart-wrapper" :style="wrapperStyle">
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>

    <div v-else class="vpv-chart-wrapper" :style="wrapperStyle">
      <canvas ref="chartCanvas"></canvas>
    </div>

    <div v-if="note" class="vpv-chart-note">{{ note }}</div>

    <div v-if="hasFooter" class="vpv-chart-footer">
      <span v-if="byline">Visualization: {{ byline }}</span>
      <span v-if="byline && source" class="vpv-footer-sep" aria-hidden="true"
        >·</span
      >
      <span v-if="source">
        Source:
        <a
          v-if="sourceLink"
          :href="sourceLink"
          target="_blank"
          rel="noopener noreferrer"
          class="vpv-chart-footer-link"
          >{{ source }}</a
        >
        <span v-else>{{ source }}</span>
      </span>
      <span
        v-if="license && (byline || source)"
        class="vpv-footer-sep"
        aria-hidden="true"
        >·</span
      >
      <span v-if="license">License: {{ license }}</span>
      <span
        v-if="lastupdated && (byline || source || license)"
        class="vpv-footer-sep"
        aria-hidden="true"
        >·</span
      >
      <span v-if="lastupdated">Last Updated: {{ lastupdated }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useData } from "vitepress";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { merge } from "chart.js/helpers";

Chart.register(...registerables);

// ─── Props ────────────────────────────────────────────────────────────────────
const props = defineProps({
  dataUrl: { type: String, required: true },
  chartType: { type: String, required: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  simple: { type: Boolean, default: false },
  height: { type: Number, default: null },
  options: { type: Object, default: () => ({}) },
  colors: { type: [String, Array], default: null },
  columnColors: { type: Object, default: () => ({}) },
  datasetOptions: { type: Object, default: () => ({}) },
  showPercentage: { type: Boolean, default: false },
  animate: { type: String, default: "default" },
  animationDuration: { type: Number, default: 3000 },
  source: { type: String, default: "" },
  sourceLink: { type: String, default: "" },
  byline: { type: String, default: "" },
  license: { type: String, default: "" },
  lastupdated: { type: String, default: "" },
  note: { type: String, default: "" },
});

// ─── Theme ────────────────────────────────────────────────────────────────────
const { isDark } = useData();

const getCSSVar = (name) => {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
};

const getColors = () => ({
  text: getCSSVar("--vp-c-text-1"),
  text_2: getCSSVar("--vp-c-text-2"),
  text_3: getCSSVar("--vp-c-text-3"),
  grid: getCSSVar("--vp-c-divider"),
  primary: getCSSVar("--vp-c-brand-1"),
  bg: getCSSVar("--vp-c-brand-soft"),
  cardBg: getCSSVar("--vp-c-bg"),
});

// ─── Color helpers ────────────────────────────────────────────────────────────
const defaultPieColors = [
  "#3b82f6",
  "#ef4444",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#6366f1",
];

const getDatasetColor = (index = 0) => {
  if (!props.colors) return getColors().primary;
  if (Array.isArray(props.colors))
    return props.colors[index % props.colors.length];
  return props.colors;
};

// ─── Chart type helpers ───────────────────────────────────────────────────────
const isPie = () => props.chartType === "pie" || props.chartType === "doughnut";
const isHorizBar = () =>
  props.chartType === "bar" && props.options?.indexAxis === "y";

// ─── Mobile ───────────────────────────────────────────────────────────────────
const mobileRef = ref(false);
const checkMobile = () => {
  mobileRef.value = typeof window !== "undefined" && window.innerWidth < 640;
};

// ─── Horizontal bar: y-axis title ─────────────────────────────────────────────
// Extracted from user options and rendered as HTML to avoid Chart.js overlap.
const horizYAxisTitle = computed(() =>
  isHorizBar() ? (props.options?.scales?.y?.title?.text ?? "") : "",
);

// ─── Pie legend ───────────────────────────────────────────────────────────────
const pieLegendItems = ref([]);

const buildPieLegend = (data) => {
  const pieColors = props.colors || defaultPieColors;
  pieLegendItems.value = (data.labels || []).map((label, i) => ({
    text: label,
    color: Array.isArray(pieColors)
      ? pieColors[i % pieColors.length]
      : pieColors,
  }));
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const hasFooter = computed(
  () => !!(props.source || props.byline || props.license || props.lastupdated),
);

// ─── Wrapper style ────────────────────────────────────────────────────────────
const wrapperStyle = computed(() => {
  if (props.height) return { height: `${props.height}px` };
  if (isPie()) return { height: mobileRef.value ? "260px" : "320px" };
  return {};
});

// ─── Chart instance ───────────────────────────────────────────────────────────
const chartCanvas = ref(null);
let chartInstance = null;
let lastData = null;

const createChart = async () => {
  if (!chartCanvas.value) return;
  if (!lastData) {
    const response = await fetch(props.dataUrl);
    lastData = await response.json();
  }
  const colors = getColors();
  chartInstance?.destroy();
  if (isPie()) buildPieLegend(lastData);
  chartInstance = new Chart(chartCanvas.value, {
    type: props.chartType,
    data: prepareData(lastData, colors),
    options: getChartOptions(colors, lastData),
    plugins: [ChartDataLabels],
  });
};

// ─── Data preparation ─────────────────────────────────────────────────────────
const prepareData = (data, colors) => {
  if (props.chartType === "line") {
    return {
      labels: data.labels,
      datasets: [
        {
          label: props.title || "Cumulative Responses",
          data: data.cumulative || data.data,
          borderColor: getDatasetColor(),
          backgroundColor: props.colors ? `${getDatasetColor()}20` : colors.bg,
          tension: 0.4,
          fill: true,
          ...props.datasetOptions,
        },
      ],
    };
  }

  if (isPie()) {
    const pieColors = props.colors || defaultPieColors;
    return {
      labels: data.labels,
      datasets: [
        {
          data: data.values || data.data,
          backgroundColor: Array.isArray(pieColors)
            ? pieColors.slice(0, data.labels.length)
            : pieColors,
          borderWidth: 2,
          borderColor: colors.cardBg,
          ...props.datasetOptions,
        },
      ],
    };
  }

  if (props.chartType === "bar") {
    const labels = data.labels || [];
    const bgColors = labels.map(
      (label, i) => props.columnColors?.[label] ?? getDatasetColor(i),
    );
    return {
      labels,
      datasets: [
        {
          label: props.title || "Count",
          data: data.values || data.data,
          backgroundColor: bgColors,
          borderRadius: 4,
          ...(isHorizBar()
            ? { categoryPercentage: 0.6, barPercentage: 0.7 }
            : {}),
          ...props.datasetOptions,
        },
      ],
    };
  }
};

// ─── Animation ────────────────────────────────────────────────────────────────
const getProgressiveAnimation = (dataLength) => {
  const delay = props.animationDuration / dataLength;
  const previousY = (ctx) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(["y"], true).y;

  return {
    x: {
      type: "number",
      easing: "linear",
      duration: delay,
      from: NaN,
      delay(ctx) {
        if (ctx.type !== "data" || ctx.xStarted) return 0;
        ctx.xStarted = true;
        return ctx.index * delay;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delay,
      from: previousY,
      delay(ctx) {
        if (ctx.type !== "data" || ctx.yStarted) return 0;
        ctx.yStarted = true;
        return ctx.index * delay;
      },
    },
  };
};

// ─── Label wrapping ───────────────────────────────────────────────────────────
const makeWrapper = (maxChars) => (str) => {
  if (typeof str !== "string" || str.length <= maxChars)
    return [String(str ?? "")];
  const words = str.split(" ");
  const lines = [];
  let cur = "";
  for (const word of words) {
    const cand = cur ? `${cur} ${word}` : word;
    if (cand.length > maxChars && cur) {
      lines.push(cur);
      cur = word;
    } else cur = cand;
  }
  if (cur) lines.push(cur);
  return lines;
};

// ─── Horizontal bar y-axis config ─────────────────────────────────────────────
const buildHorizYAxis = (colors, mobile, labels) => {
  const maxChars = mobile ? 14 : 24;
  const wrapLabel = makeWrapper(maxChars);
  const fontSize = mobile ? 11 : 13;

  return {
    ticks: {
      color: colors.text,
      autoSkip: false,
      crossAlign: "far",
      font: { size: fontSize },
      callback(value) {
        return wrapLabel(String(this.getLabelForValue(value) ?? ""));
      },
    },
    grid: { color: colors.grid },
    title: { display: false },
    afterFit(scale) {
      const ctx = scale.chart.ctx;
      const fontFamily = getCSSVar("--vp-font-family-base") || "sans-serif";
      ctx.save();
      ctx.font = `${fontSize}px ${fontFamily}`;
      let maxLineW = 0;
      for (const lbl of labels) {
        for (const line of wrapLabel(String(lbl ?? ""))) {
          maxLineW = Math.max(maxLineW, ctx.measureText(line).width);
        }
      }
      ctx.restore();
      scale.width = Math.min(
        Math.ceil(maxLineW) + 16,
        Math.floor(scale.chart.width * 0.42),
      );
    },
  };
};

// ─── Aspect ratio for horizontal bar charts ───────────────────────────────────
const computeHorizAspectRatio = (labels, mobile) => {
  const maxChars = mobile ? 14 : 24;
  const wrapLabel = makeWrapper(maxChars);
  const fontSize = mobile ? 11 : 13;
  const lineH = Math.round(fontSize * 1.6);
  const slotGap = mobile ? 10 : 14;

  const totalContentH = labels.reduce((sum, l) => {
    return sum + wrapLabel(String(l ?? "")).length * lineH + slotGap;
  }, 0);

  const overhead = mobile ? 80 : 100;
  const refWidth = mobile ? 340 : 600;
  const ratio = refWidth / (totalContentH + overhead);
  return Math.max(0.6, Math.min(ratio, mobile ? 1.4 : 2.0));
};

// ─── Chart options ────────────────────────────────────────────────────────────
const getChartOptions = (colors, data) => {
  const mobile = mobileRef.value;
  const horizBar = isHorizBar();
  const labels = data.labels || [];

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: !isPie() && props.height === null,
    aspectRatio: mobile ? 1.3 : 1.9,
    layout: { padding: { top: 4, right: 6, bottom: 4, left: 4 } },
    plugins: {
      legend: isPie()
        ? { display: false }
        : { labels: { color: colors.text, font: { size: 13 }, padding: 12 } },
      tooltip: {
        backgroundColor: getCSSVar("--vp-c-bg-soft"),
        titleColor: colors.text,
        bodyColor: colors.text_2,
        borderColor: colors.grid,
        borderWidth: 1,
        padding: 10,
        ...(props.showPercentage &&
          isPie() && {
            callbacks: {
              label(ctx) {
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const pct =
                  total > 0 ? ((ctx.parsed / total) * 100).toFixed(1) : 0;
                return ` ${ctx.label}: ${ctx.parsed} (${pct}%)`;
              },
            },
          }),
      },
      datalabels: {
        display: false,
        font: { weight: "bold", size: 12 },
        clamp: true,
        formatter: (v) => v,
        anchor(ctx) {
          return "end";
        },
        align(ctx) {
          const value = ctx.dataset.data[ctx.dataIndex];
          const max = Math.max(...ctx.dataset.data);
          return value / max > 0.95 ? "start" : "end";
        },
        color(ctx) {
          const value = ctx.dataset.data[ctx.dataIndex];
          const max = Math.max(...ctx.dataset.data);
          return value / max > 0.95 ? "#ffffff" : getColors().text;
        },
        padding: { left: 4, right: 4 },
      },
    },
  };

  // Animation
  if (props.animate === "progressive" && props.chartType === "line") {
    const len = data.cumulative?.length || data.data?.length || 0;
    baseOptions.animation = getProgressiveAnimation(len);
    baseOptions.interaction = { intersect: false };
  } else if (props.animate === "none") {
    baseOptions.animation = false;
  } else {
    baseOptions.animation = { duration: 1000, easing: "easeInOutQuart" };
  }

  // Scales
  if (props.chartType === "line" || props.chartType === "bar") {
    if (horizBar) {
      baseOptions.aspectRatio = computeHorizAspectRatio(labels, mobile);
      baseOptions.scales = {
        x: {
          ticks: { color: colors.text, font: { size: mobile ? 11 : 13 } },
          grid: { color: colors.grid },
        },
        y: buildHorizYAxis(colors, mobile, labels),
      };
    } else {
      baseOptions.scales = {
        x: {
          ticks: {
            color: colors.text,
            maxRotation: 45,
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: mobile ? 8 : 16,
            font: { size: mobile ? 11 : 13 },
          },
          grid: { color: colors.grid },
        },
        y: {
          ticks: { color: colors.text, font: { size: mobile ? 11 : 13 } },
          grid: { color: colors.grid },
        },
      };
    }
  }

  // Strip Chart.js y-axis title for horizontal bars; it is rendered as HTML instead.
  let userOptions = props.options;
  if (horizBar && userOptions?.scales?.y?.title) {
    userOptions = {
      ...userOptions,
      scales: {
        ...userOptions.scales,
        y: { ...userOptions.scales.y, title: { display: false } },
      },
    };
  }

  return merge(baseOptions, userOptions);
};

// ─── Lifecycle ────────────────────────────────────────────────────────────────
let resizeTimer = null;

const onResize = () => {
  checkMobile();
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(createChart, 250);
};

onMounted(() => {
  checkMobile();
  createChart();
  window.addEventListener("resize", onResize);
});

watch(isDark, createChart);

onBeforeUnmount(() => {
  chartInstance?.destroy();
  window.removeEventListener("resize", onResize);
  clearTimeout(resizeTimer);
});
</script>

<style scoped>
/* ── Simple mode ─────────────────────────────────────────────────────────── */
.vpv-chart-simple {
  padding: 1rem 0;
}

/* ── Card shell ──────────────────────────────────────────────────────────── */
.vpv-chart-card {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1rem;
  margin: 1rem 0;
  background-color: var(--vp-c-bg);
  border-radius: 12px;
  border: 2px solid var(--vp-c-divider);
  transition:
    box-shadow 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
}
.vpv-chart-card:hover {
  border-color: var(--vp-c-border);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* ── Header ──────────────────────────────────────────────────────────────── */
.vpv-chart-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.vpv-chart-title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.3;
}
.vpv-chart-subtitle {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.4;
}

/* ── Horizontal bar: HTML y-axis title ───────────────────────────────────── */
.vpv-horiz-bar-layout {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.vpv-horiz-yaxis-title {
  flex: 0 0 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.vpv-horiz-yaxis-title span {
  display: block;
  transform: rotate(-90deg);
  transform-origin: center center;
  white-space: nowrap;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  max-width: 300px;
}
.vpv-horiz-bar-layout .vpv-chart-wrapper {
  flex: 1 1 0%;
  min-width: 0;
}

/* ── Pie layout ──────────────────────────────────────────────────────────── */
.vpv-pie-layout {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.vpv-pie-layout--mobile {
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
}
.vpv-pie-canvas-wrapper {
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vpv-pie-layout--mobile .vpv-pie-canvas-wrapper {
  flex: none;
  width: 100%;
}
.vpv-pie-canvas {
  width: 100%;
}

/* ── Pie legend ──────────────────────────────────────────────────────────── */
.vpv-pie-legend {
  flex: 0 0 30%;
  width: 30%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.45rem;
}
.vpv-pie-layout--mobile .vpv-pie-legend {
  flex: none;
  width: 100%;
  padding: 0 0.25rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.35rem 0.75rem;
}
.vpv-pie-legend-item {
  display: inline-flex;
  align-items: flex-start;
  gap: 0.4rem;
  min-width: 0;
}
.vpv-pie-legend-swatch {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 3px;
}
.vpv-pie-legend-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  word-break: break-word;
  min-width: 0;
}

/* ── Generic chart wrapper ───────────────────────────────────────────────── */
.vpv-chart-wrapper {
  position: relative;
  width: 100%;
}

/* ── Note ────────────────────────────────────────────────────────────────── */
.vpv-chart-note {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  font-style: italic;
  line-height: 1.4;
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
.vpv-chart-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 0.4rem;
  padding-top: 0.375rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  line-height: 1.4;
}
.vpv-footer-sep {
  color: var(--vp-c-text-3);
  opacity: 0.5;
  user-select: none;
}
.vpv-chart-footer-link {
  color: var(--vp-c-text-3);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.vpv-chart-footer-link:hover {
  color: var(--vp-c-text-2);
}

/* ── Mobile ──────────────────────────────────────────────────────────────── */
@media (max-width: 639px) {
  .vpv-chart-card {
    padding: 0.75rem;
    gap: 0.5rem;
  }
  .vpv-chart-title {
    font-size: 0.975rem;
  }
  .vpv-chart-subtitle {
    font-size: 0.85rem;
  }
  .vpv-pie-legend-label {
    font-size: 0.775rem;
  }
  .vpv-horiz-yaxis-title {
    flex: 0 0 1.25rem;
    width: 1.25rem;
  }
  .vpv-horiz-yaxis-title span {
    font-size: 0.7rem;
    max-width: 220px;
  }
}
</style>
