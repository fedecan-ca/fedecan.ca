<template>
    <a :href="url" class="blog-post-link">
        <div class="blog-post">
            <div v-if="image" class="banner-image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
            <div class="content">
                <h3>{{ title }}</h3>
                <p class="date">{{ date }}</p>
                <p class="excerpt">{{ excerpt }}</p>
            </div>
        </div>
    </a>
</template>


<script>
export default {
    props: {
        title: String,
        date: String,
        excerpt: String,
        url: String,
        image: String
    }
}
</script>

<style scoped>
.blog-post-link {
    text-decoration: none;
    color: inherit;
}

.blog-post {
    width: 100%;
    margin: 20px auto;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.6s ease, box-shadow 0.6s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-post:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}

.banner-image {
    width: 100%;
    height: 0;
    padding-top: 45.44%;
    background-size: cover;
    background-position: center;
}

.content {
    padding: 20px;
    background-color: var(--vp-c-bg-soft);
    width: 100%;
}

.content h3 {
    margin-top: 0;
}

.content .date {
    font-style: italic;
    color: #666;
}
</style>