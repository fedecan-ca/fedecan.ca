<template>
    <div class="chart-card--datawrapper">
        <div ref="chartContainer" style="min-height: 415px">
            <noscript>
                <img :src="computedFallbackImage" alt="" />
            </noscript>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataWrapperChart',
    props: {
        chartId: {
            type: String,
            required: true
        },
        fallbackImage: {
            type: String,
            default: '' // Default to empty string, will compute if not provided
        }
    },
    computed: {
        computedFallbackImage() {
            return this.fallbackImage || `https://datawrapper.dwcdn.net/${this.chartId}/full.png`;
        }
    },
    mounted() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.defer = true;
        script.src = `https://datawrapper.dwcdn.net/${this.chartId}/embed.js?v=4`;
        script.charset = 'utf-8';
        this.$refs.chartContainer.appendChild(script);
    }
}
</script>

<style scoped>
.chart-card--datawrapper {
    width: 90%;
    margin: 10px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(61, 61, 55, 0.04);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>