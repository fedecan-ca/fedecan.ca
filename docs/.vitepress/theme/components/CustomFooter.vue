<script setup lang="ts">
import { useRoute } from 'vitepress'

const route = useRoute()
const isFrench = route.path.startsWith('/fr/')

const content = {
  en: {
    note: 'Federated Open Communications Canada (Fedecan) is a not-for-profit organization in Canada. Check out',
    guides: 'our guides',
    moreInfo: 'for more information.',
    organization: 'Organization',
    donate: 'Donate',
    contact: 'Contact',
    message: 'Message the admins',
    platforms: 'Platforms',
    status: 'Uptime Status',
  },
  fr: {
    note: 'Federated Open Communications Canada (Fédécan) est un organisme sans but lucratif au Canada. Consultez',
    guides: 'nos guides',
    moreInfo: "pour plus d'informations.",
    organization: 'Organisation',
    donate: 'Faire un don',
    contact: 'Contact',
    message: 'Message sur Lemmy',
    platforms: 'Plateformes',
    status: 'État du système',
  },
}

const currentContent = isFrench ? content.fr : content.en
const guidesLink = isFrench ? '/fr/guide/fedecan/' : '/en/guide/fedecan/'
</script>

<template>
  <div class="footer-wrapper">
    <footer class="footer-card">
      <div class="note">
        <p>
          {{ currentContent.note }}
          <b
            ><a :href="guidesLink">{{ currentContent.guides }}</a></b
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
            <Icon icon="lucide-lab:pie" width="1em" height="1em" />
            piefed.ca
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-wrapper {
  padding: 0 24px 32px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 20;
}
.footer-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.note {
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
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
}

.link-column {
  flex: 1 1 160px;
}

.link-column h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.link-column a {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  text-decoration: none;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.link-column a:hover {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-wrapper {
    padding: 0 16px 24px;
  }

  .footer-card {
    padding: 24px;
  }
}

@media (max-width: 639px) {
  .footer-wrapper {
    padding: 0 12px 20px;
  }

  .footer-card {
    padding: 24px 20px;
  }

  .links {
    flex-direction: column;
    gap: 20px;
  }

  .link-column {
    flex: 1 1 100%;
    text-align: center;
  }

  .note {
    text-align: center;
  }

  .link-column a {
    justify-content: center;
  }
}
</style>
