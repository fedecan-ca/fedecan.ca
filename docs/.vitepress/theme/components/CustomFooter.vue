<script setup lang="ts">
import { onMounted } from "vue";
import { useSidebar } from "vitepress/theme";
import { useRoute } from "vitepress";

const { hasSidebar, isSidebarEnabled } = useSidebar();
const route = useRoute();
const isFrench = route.path.startsWith("/fr/");

const content = {
  en: {
    note:
      "Federated Open Communications Canada (Fedecan) is a not-for-profit organization in Canada. Check out",
    guides: "our guides",
    moreInfo: "for more information.",
    organization: "Organization",
    donate: "Donate",
    contact: "Contact",
    message: "Message on Lemmy",
    platforms: "Platforms",
    status: "Uptime Status",
  },
  fr: {
    note:
      "Federated Open Communications Canada (Fédécan) est un organisme sans but lucratif au Canada. Consultez",
    guides: "nos guides",
    moreInfo: "pour plus d'informations.",
    organization: "Organisation",
    donate: "Faire un don",
    contact: "Contact",
    message: "Message sur Lemmy",
    platforms: "Plateformes",
    status: "État du système",
  },
};

const currentContent = isFrench ? content.fr : content.en;
const guidesLink = isFrench ? "/fr/guide/fedecan/" : "/en/guide/fedecan/";

onMounted(() => {
  requestAnimationFrame(() => {
    document.body.offsetHeight;
  });
});
</script>

<template>
  <footer
    class="custom-footer"
    :class="{ 'has-sidebar': hasSidebar && isSidebarEnabled }"
  >
    <div class="container">
      <div class="note">
        <p>
          {{ currentContent.note }}
          <b
            ><a :href="guidesLink" target="_blank">{{ currentContent.guides }}</a></b
          >
          {{ currentContent.moreInfo }}
        </p>
      </div>

      <div class="links">
        <div class="link-column">
          <h3>{{ currentContent.organization }}</h3>
          <a :href="isFrench ? '/fr/donate' : '/en/donate'" target="_blank">
            <Icon icon="fa:heart-o" width="1em" height="1em" />
            {{ currentContent.donate }}
          </a>
          <a href="https://github.com/fedecan-ca/" target="_blank">
            <Icon icon="fa:github" width="1em" height="1em" />
            GitHub
          </a>
          <a href="https://status.fedecan.ca" target="_blank">
            <Icon icon="fa:heartbeat" width="1em" height="1em" />
            {{ currentContent.status }}
          </a>
        </div>

        <div class="link-column">
          <h3>{{ currentContent.contact }}</h3>
          <a href="mailto:support@fedecan.ca">
            <Icon icon="ic:outline-email" width="1em" height="1em" />
            support@fedecan.ca
          </a>
          <a href="https://lemmy.ca/u/admin" target="_blank">
            <Icon icon="ic:outline-message" width="1em" height="1em" />
            {{ currentContent.message }}
          </a>
        </div>

        <div class="link-column">
          <h3>{{ currentContent.platforms }}</h3>
          <a href="https://lemmy.ca" target="_blank">
            <Icon icon="simple-icons:lemmy" width="1em" height="1em" />
            lemmy.ca
          </a>
          <a href="https://sh.itjust.works" target="_blank">
            <Icon icon="simple-icons:lemmy" width="1em" height="1em" />
            sh.itjust.works
          </a>
          <a href="https://pixelfed.ca" target="_blank">
            <Icon icon="simple-icons:pixelfed" width="1em" height="1em" />
            pixelfed.ca
          </a>
          <a href="https://piefed.ca" target="_blank">
            <Icon icon="fa6-brands:canadian-maple-leaf" width="1em" height="1em" />
            piefed.ca
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 48px;
  background-color: var(--vp-c-bg);
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.note {
  flex: 1 1 250px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.note a {
  text-decoration: underline;
}

.note a:hover {
  color: var(--vp-c-brand);
}

.links {
  flex: 1 1 650px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-around;
}

.link-column {
  flex: 0 1 auto;
  min-width: 160px;
}

.link-column h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
}

.link-column a {
  display: flex;
  align-items: center;
  margin: 8px 0;
  text-decoration: none;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.link-column a:hover {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

.link-column a :deep(svg) {
  margin-right: 8px;
}

/* Handle sidebar */
@media (min-width: 700px) {
  .custom-footer.has-sidebar {
    margin-left: var(--vp-sidebar-width);
    max-width: calc(var(--vp-layout-max-width) - var(--vp-sidebar-width));
  }
}

/* Responsive breakpoints */
@media (max-width: 700px) {
  .note {
    text-align: center;
    flex: 1 1 100%;
  }

  .links {
    flex: 1 1 100%;
    justify-content: center;
  }

  .link-column {
    flex: 1 1 100%;
    text-align: center;
  }

  .link-column a {
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .link-column {
    flex: 1 1 calc(50% - 16px);
    min-width: 200px;
  }
}

@media (max-width: 480px) {
  .link-column {
    flex: 1 1 100%;
    text-align: center;
  }

  .link-column a {
    justify-content: center;
  }
}
</style>
