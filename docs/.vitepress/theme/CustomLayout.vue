<script setup>
import DefaultTheme from "vitepress/theme";
import CustomFooter from "./components/CustomFooter.vue";
import CustomNotFound from "./components/CustomNotFound.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <CustomFooter />
    </template>
    <template #not-found>
      <CustomNotFound />
    </template>
  </Layout>
</template>
