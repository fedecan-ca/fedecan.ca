<template>
  <div class="outer-container">
    <HorizontalContainer>
      <div class="wip-container">
        <div class="title">This section is a work in progress</div>
        <p>
          You can ask your question in the
          <a :href="communityLink" target="_blank" rel="noopener"
            >{{ communityName }}</a
          >
          community.
        </p>
        <p>If you'd like to contribute, please <a href="/en/contact">get in touch</a>.</p>
      </div>
    </HorizontalContainer>
  </div>
</template>

<script setup>
defineProps({
  communityName: {
    type: String,
    default: 'c/newtolemmy'
  },
  communityLink: {
    type: String,
    default: 'https://lemmy.ca/c/newtolemmy'
  }
})
</script>

<style scoped>

.outer-container {
  padding: 2rem 1rem;
}

.wip-container {
  padding: 1rem;
  text-align: center;
  width: 100%;
}

.wip-container .title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.wip-container p {
  margin: 0.5rem 0;
}

.wip-container li {
  margin: 0.5rem 0;
}

.wip-container a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.wip-container a:hover {
  text-decoration: underline;
}
</style>
