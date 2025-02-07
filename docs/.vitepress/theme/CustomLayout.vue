<script setup>
import DefaultTheme from "vitepress/theme";
import CustomFooter from "./components/CustomFooter.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <CustomFooter />
    </template>
  </Layout>
</template>
