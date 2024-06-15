<template>
    <div>
        <a v-if="backLink" :href="backLink" class="back-link">← Back to Announcements</a>
        <img v-if="image" :src="image" :alt="title" class="banner-image" />
        <h1>{{ title }}</h1>
        <p class="date">{{ date }}</p>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'BlogPostHeader',
    props: { 
        backLink: {
            type: String,
            default: '/announcements'
        },
        image: {
            type: String,
            default: '' // Default empty string if no image
        },
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.back-link {
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.banner-image {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}

.date {
  font-style: italic;
  color: #666;
}
</style>