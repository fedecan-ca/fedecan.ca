<script setup>
import { useData, useRoute } from "vitepress";

const route = useRoute();
const isFrench = route.path.startsWith("/fr/");

const content = {
  en: {
    title: "PAGE NOT FOUND",
    quote:
      "Looks like the page has wandered off! Try using the search bar to find your way back.",
    homeLink: "/en/",
    homeText: "Take me home",
  },
  fr: {
    title: "PAGE NON TROUVÉE",
    quote:
      "On dirait que la page s'est éloignée ! Essayez d'utiliser la barre de recherche pour retrouver votre chemin.",
    homeLink: "/fr/",
    homeText: "Retour à l'accueil",
  },
};

const currentContent = isFrench ? content.fr : content.en;
</script>

<template>
  <div class="container">
    <img src="/img/error-lost.webp" alt="404 illustration" class="error-image" />
    <div class="NotFound">
      <p class="code">404</p>
      <h1 class="title">{{ currentContent.title }}</h1>
      <div class="divider" />
      <blockquote class="quote">
        {{ currentContent.quote }}
      </blockquote>

      <div class="action">
        <a class="link" :href="currentContent.homeLink" aria-label="go to home">
          {{ currentContent.homeText }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 32px;
}

.error-image {
  max-width: 300px;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: center;
    padding: 64px 32px;
    gap: 64px;
  }

  .error-image {
    max-width: 400px;
  }
}

.NotFound {
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    text-align: left;
  }

  .divider {
    margin-left: 0 !important;
  }

  .quote {
    margin-left: 0 !important;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: border-color 0.25s, color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}
</style>
