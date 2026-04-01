<template>
  <div v-if="simple" class="vpv-chart-simple">
    <div class="vpv-chart-wrapper">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>

  <div v-else class="vpv-chart-card">
    <div v-if="title || subtitle" class="vpv-chart-header">
      <h3 v-if="title" class="vpv-chart-title">{{ title }}</h3>
      <p v-if="subtitle" class="vpv-chart-subtitle">{{ subtitle }}</p>
    </div>

    <div class="vpv-chart-wrapper" :style="wrapperStyle">
      <canvas ref="chartCanvas"></canvas>
    </div>

    <div v-if="colorLegendStops.length" class="vpv-geo-legend">
      <span class="vpv-geo-legend-label">{{
        formatValue(colorLegendStops[0].value)
      }}</span>
      <div class="vpv-geo-legend-gradient" :style="gradientStyle"></div>
      <span class="vpv-geo-legend-label">{{
        formatValue(colorLegendStops[colorLegendStops.length - 1].value)
      }}</span>
    </div>

    <div v-if="showDebug && debugInfo" class="vpv-debug-info">
      <details>
        <summary>Debug Info</summary>
        <pre>{{ debugInfo }}</pre>
      </details>
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
import { merge } from "chart.js/helpers";
import {
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ColorLogarithmicScale,
  ProjectionScale,
  geoConicConformal,
  geoOrthographic,
  geoEqualEarth,
  geoAlbers,
  geoMercator,
  geoNaturalEarth1,
} from "chartjs-chart-geo";

Chart.register(
  ...registerables,
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ColorLogarithmicScale,
  ProjectionScale,
);

// ─── Props ────────────────────────────────────────────────────────────────────
const props = defineProps({
  dataUrl: { type: String, required: true },
  geoUrl: { type: String, required: true },
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  simple: { type: Boolean, default: false },
  height: { type: Number, default: null },
  geoKey: { type: String, default: "name" },
  dataKey: { type: String, default: "labels" },
  valueKey: { type: String, default: "values" },
  valueLabel: { type: String, default: "responses" },
  projection: { type: String, default: "equalEarth" },
  projectionRotate: { type: Array, default: null },
  projectionScale: { type: Number, default: 1 },
  projectionOffset: { type: Array, default: () => [0, 0] },
  projectionPadding: { type: [Number, Object], default: 0 },
  colorScale: { type: Array, default: () => ["#e0f2fe", "#0369a1"] },
  logarithmic: { type: Boolean, default: false },
  noDataColor: { type: String, default: "#e5e7eb" },
  legendSteps: { type: Number, default: 5 },
  options: { type: Object, default: () => ({}) },
  showDebug: { type: Boolean, default: false },
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

// ─── Mobile ───────────────────────────────────────────────────────────────────
const mobileRef = ref(false);
const checkMobile = () => {
  mobileRef.value = typeof window !== "undefined" && window.innerWidth < 640;
};

// ─── Refs ─────────────────────────────────────────────────────────────────────
const chartCanvas = ref(null);
let chartInstance = null;
const debugInfo = ref(null);
const colorLegendStops = ref([]);

// ─── Footer ───────────────────────────────────────────────────────────────────
const hasFooter = computed(
  () => !!(props.source || props.byline || props.license || props.lastupdated),
);

// ─── Wrapper style ────────────────────────────────────────────────────────────
const wrapperStyle = computed(() =>
  props.height ? { height: `${props.height}px` } : {},
);

// ─── Projection ───────────────────────────────────────────────────────────────
const projectionMap = {
  conicConformal: geoConicConformal,
  orthographic: geoOrthographic,
  equalEarth: geoEqualEarth,
  albers: geoAlbers,
  mercator: geoMercator,
  naturalEarth1: geoNaturalEarth1,
};

const getProjection = () => {
  if (!props.projectionRotate) return props.projection;
  const fn = projectionMap[props.projection];
  return fn ? fn().rotate(props.projectionRotate) : props.projection;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const normalize = (str) =>
  str
    ?.toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase() ?? "";

const lerpColor = (c1, c2, t) => {
  const parse = (c) => c.match(/\w\w/g).map((x) => parseInt(x, 16));
  const [r1, g1, b1] = parse(c1);
  const [r2, g2, b2] = parse(c2);
  const r = Math.round(r1 + t * (r2 - r1));
  const g = Math.round(g1 + t * (g2 - g1));
  const b = Math.round(b1 + t * (b2 - b1));
  return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
};

const formatValue = (v) => {
  if (v == null) return "";
  if (Math.abs(v) >= 1_000_000) return `${+(v / 1_000_000).toPrecision(3)}M`;
  if (Math.abs(v) >= 1_000) return `${+(v / 1_000).toPrecision(3)}K`;
  return String(v);
};

// ─── Legend ───────────────────────────────────────────────────────────────────
const buildLegend = (min, max) => {
  colorLegendStops.value = Array.from(
    { length: props.legendSteps + 1 },
    (_, i) => {
      const t = i / props.legendSteps;
      const value =
        props.logarithmic && min > 0
          ? Math.round(
              Math.exp(Math.log(min) + t * (Math.log(max) - Math.log(min))),
            )
          : Math.round(min + t * (max - min));
      return {
        value,
        color: lerpColor(props.colorScale[0], props.colorScale[1], t),
      };
    },
  );
};

const gradientStyle = computed(() => {
  if (!colorLegendStops.value.length) return {};
  const stops = colorLegendStops.value
    .map(
      (s, i) =>
        `${s.color} ${(i / (colorLegendStops.value.length - 1)) * 100}%`,
    )
    .join(", ");
  return { background: `linear-gradient(to right, ${stops})` };
});

// ─── Chart creation ───────────────────────────────────────────────────────────
const createChart = async () => {
  if (!chartCanvas.value) return;
  try {
    const [geoRes, dataRes] = await Promise.all([
      fetch(props.geoUrl),
      fetch(props.dataUrl),
    ]);
    const geoData = await geoRes.json();
    const surveyData = await dataRes.json();

    const labels = surveyData[props.dataKey] || [];
    const values = surveyData[props.valueKey] || [];
    const dataMap = new Map(
      labels.map((label, i) => [normalize(label), values[i]]),
    );

    const features = geoData.features.map((feature) => {
      const name = feature.properties[props.geoKey];
      const value = dataMap.get(normalize(name)) ?? null;
      return { feature, value, name };
    });

    const validValues = features.map((f) => f.value).filter((v) => v !== null);
    const min = Math.min(...validValues);
    const max = Math.max(...validValues);
    const total = values.reduce((a, b) => a + b, 0);

    buildLegend(min, max);

    if (props.showDebug) {
      debugInfo.value = {
        matched: features.filter((f) => f.value !== null).map((f) => f.name),
        unmatched: features.filter((f) => f.value === null).map((f) => f.name),
        projection: props.projection,
        projectionRotate: props.projectionRotate,
        valueRange: { min, max },
      };
    }

    const borderColor =
      getCSSVar("--vp-c-divider") || (isDark.value ? "#2e2e32" : "#e2e2e3");

    chartInstance?.destroy();
    chartInstance = new Chart(chartCanvas.value, {
      type: "choropleth",
      data: {
        labels: features.map((f) => f.name),
        datasets: [
          {
            label: props.title,
            outline: geoData.features,
            data: features.map((f) => ({ feature: f.feature, value: f.value })),
            borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: merge(
        {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: mobileRef.value ? 1.1 : 1.5,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: getCSSVar("--vp-c-bg-soft"),
              titleColor: getCSSVar("--vp-c-text-1"),
              bodyColor: getCSSVar("--vp-c-text-2"),
              borderColor: getCSSVar("--vp-c-divider"),
              borderWidth: 1,
              padding: 10,
              callbacks: {
                label: (ctx) => {
                  const v = ctx.raw?.value;
                  if (v === null) return "No data";
                  return `${v} ${props.valueLabel} (${((v / total) * 100).toFixed(1)}%)`;
                },
              },
            },
          },
          scales: {
            projection: {
              axis: "x",
              projection: getProjection(),
              projectionScale: props.projectionScale,
              projectionOffset: props.projectionOffset,
              padding: props.projectionPadding,
            },
            color: {
              type: props.logarithmic ? "colorLogarithmic" : "color",
              axis: "x",
              display: false,
              quantize: props.legendSteps,
              interpolate: (v) =>
                lerpColor(props.colorScale[0], props.colorScale[1], v),
              missing: props.noDataColor,
              legend: { display: false },
            },
          },
        },
        props.options,
      ),
    });
  } catch (err) {
    console.error("Geo chart error:", err);
    if (props.showDebug) debugInfo.value = { error: err.message };
  }
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
  margin-left: -1rem;
  margin-right: -1rem;
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

/* ── Generic chart wrapper ───────────────────────────────────────────────── */
.vpv-chart-wrapper {
  position: relative;
  width: 100%;
}

/* ── Color scale legend ──────────────────────────────────────────────────── */
.vpv-geo-legend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.6rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  align-self: center;
  width: min(320px, 100%);
}
.vpv-geo-legend-gradient {
  flex: 1;
  height: 12px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}
.vpv-geo-legend-label {
  flex-shrink: 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  min-width: 2rem;
  text-align: center;
}

/* ── Debug ───────────────────────────────────────────────────────────────── */
.vpv-debug-info {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.875rem;
}
.vpv-debug-info pre {
  font-size: 0.75rem;
  overflow-x: auto;
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
  .vpv-geo-legend {
    width: 100%;
  }
}
</style>
