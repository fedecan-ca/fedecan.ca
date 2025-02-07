<script setup lang="ts">
import { useSidebar } from "vitepress/theme";
import { watch } from "vue";

const { hasSidebar, isSidebarEnabled } = useSidebar();
</script>

<template>
  <footer
    class="custom-footer"
    :class="{ 'has-sidebar': hasSidebar && isSidebarEnabled }"
  >
    <div class="container">
      <div class="note">
        <p>
          Federated Open Communications Canada (Fedecan) is an incorporated not-for-profit
          organization in Canada. For more information,
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
            <Icon icon="fa:heart-o" width="1em" height="1em" />
            Donate
          </a>
          <a href="https://github.com/fedecan-ca/" target="_blank">
            <Icon icon="fa:github" width="1em" height="1em" />
            Github
          </a>
        </div>

        <div class="link-column">
          <h3>Contact</h3>
          <a href="mailto:support@fedecan.ca">
            <Icon icon="ic:outline-email" width="1em" height="1em" />
            support@fedecan.ca
          </a>
          <a href="https://lemmy.ca/u/admin" target="_blank">
            <Icon icon="ic:outline-message" width="1em" height="1em" />
            Message on Lemmy
          </a>
        </div>

        <div class="link-column">
          <h3>Platforms</h3>
          <a href="https://lemmy.ca" target="_blank">
            <Icon icon="simple-icons:lemmy" width="1em" height="1em" />
            Lemmy.ca
          </a>
          <a href="https://status.lemmy.ca" target="_blank">
            <Icon icon="fa:heartbeat" width="1em" height="1em" />
            Uptime Status
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
  flex: 1 1 300px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
}

.links {
  flex: 1 1 600px;
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
