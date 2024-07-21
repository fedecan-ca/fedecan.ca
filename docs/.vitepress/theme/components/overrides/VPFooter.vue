<script setup lang="ts">
import { useData } from "vitepress/dist/client/theme-default/composables/data";
import { useSidebar } from "vitepress/dist/client/theme-default/composables/sidebar";
import { Icon } from "@iconify/vue";

const { theme, frontmatter } = useData();
const { hasSidebar } = useSidebar();
</script>

<template>
  <footer
    v-if="theme.footer && frontmatter.footer !== false"
    class="VPFooter"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <div class="container">
      <div class="footer-content">
        <div class="note">
          <p>
            Federated Open Communications Canada (Fedecan) is an incorporated
            not-for-profit organization in Canada. For more information,
            <b
              ><a href="https://fedecan.ca/guide/fedecan/faq" target="_blank"
                >see the FAQ section</a
              ></b
            >
            in our guides.
          </p>
        </div>

        <div class="links">
          <div class="link-column">
            <h3>Organization</h3>
            <a href="https://fedecan.ca/donate" target="_blank">
              <Icon icon="fa:heart-o" width="1.2em" height="1.2em" />
              Donate
            </a>
            <a href="https://github.com/fedecan-ca/" target="_blank">
              <Icon icon="fa:github" width="1.2em" height="1.2em" />
              GitHub Repositories
            </a>
          </div>

          <div class="link-column">
            <h3>Contact</h3>
            <a href="mailto:support@fedecan.ca">
              <Icon icon="ic:outline-email" width="1.2em" height="1.2em" />
              support@fedecan.ca
            </a>
            <a href="https://lemmy.ca/u/admin" target="_blank">
              <Icon icon="ic:outline-message" width="1.2em" height="1.2em" />
              Message on Lemmy
            </a>
          </div>

          <div class="link-column">
            <h3>Platforms</h3>
            <a href="https://lemmy.ca" target="_blank">
              <Icon icon="simple-icons:lemmy" width="1.2em" height="1.2em" />
              Lemmy.ca
            </a>
            <a href="https://status.lemmy.ca" target="_blank">
              <Icon icon="fa:heartbeat" width="1.2em" height="1.2em" />
              Uptime Status
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration: none;
  transition: color 0.25s, text-decoration 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
  text-decoration: underline;
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
}

.note {
  flex: 1 1 40%;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-1);
  padding: 0 16px;
}

.links {
  flex: 2 1 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.link-column {
  flex: 1 1 30%;
  padding: 0 16px;
}

.link-column h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.link-column a,
.link-column p {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.link-column p .icon-wrapper,
.link-column a .icon-wrapper {
  margin-right: 8px;
}
</style>
