---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Fedecan'
  text: 'Discover a new way to connect online'
  tagline: We can help you join a growing network of federated social media that prioritizes community over profit
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/get-started
    - theme: alt
      text: Donate
      link: /en/donate
    - theme: alt
      text: Announcements
      link: /en/announcements

features:
  - title: Run by a non-profit
    icon:
      src: /img/icons/heart-care.png
    details: We started Fedecan as a non-profit to ensure that our decisions will always prioritize our users.
    link: /en/guide/fedecan/
    linkText: Learn more about us
  - title: Open Source & Open Standards
    icon:
      src: /img/icons/server-edit.png
    details: Anyone can inspect the code. You can trust that the platforms are secure, privacy respecting, and fair.
    link: /en/guide/get-started
    linkText: Learn more
  - title: A Federated Network
    icon:
      src: /img/icons/fediverse.png
    details: Joining the network, whether through us or someone else, will let you interact with users everywhere else.
    link: /en/guide/get-started
    linkText: Learn more

title: 'Welcome'
---

## Recent Announcements

<VpvArticleList
    format="vertical"
    sortOrder="descending"
    titleLines="2"
    excerptLines="2"
    maxCards="3"
    postsDataKey="enPostsData"
    authorsDataKey="enAuthors"
    :hideAuthor="true"
    :hideCategory="true"
  />

## Our Platforms

We currently have 4 platforms under the Fedecan umbrella. Whether you join the Fediverse through one of our platforms, or through someone else's, you can still connect to the wider network. For a full list of our platforms and how they compare, check out [our full list of platforms on our guide page](/en/guide/fedecan/our-platforms).

<h3 style="margin-top: 3rem">Image Sharing with Pixelfed</h3>

<div style="display: flex; align-items: flex-start; gap: 2rem; flex-wrap: wrap; margin-bottom: 3rem;">
  <div style="flex: 1 1 250px; min-width: 0;">

Pixelfed is a federated platform for sharing images, photos, and videos, similar to platforms such as Instagram.

You can follow users, hashtags, and share posts, all without any ads, tracking, or secretive algorithms.

Pixelfed also connects nicely with Mastodon, so you can follow your favourite creators from that side of the Fediverse, while viewing their content in a familiar interface.

[read more](/en/guide/fedecan/our-platforms#image-sharing) or go to [pixelfed.ca](https://pixelfed.ca)

  </div>
  <div style="flex: 0 1 450px; margin: 0 auto;">
    <VpvImage 
      :imageConfig="{
        image: '/img/screenshots/desktop/pixelfed-default-light.jpg',
        image_dark: '/img/screenshots/desktop/pixelfed-default-dark.jpg',
        description: 'Screenshot of pixelfed.ca on desktop',
      }"
      enableZoom
      enableBorder
    />
  </div>
</div>

<h3 style="margin-top: 3 rem">Forum Style with Lemmy and Piefed</h3>

<div style="display: flex; align-items: flex-start; gap: 2rem; flex-wrap: wrap; margin-bottom: 3rem;">
  <div style="flex: 1 1 250px; min-width: 0;">

These platforms follow a forum format, similar to platforms like Reddit or Hacker News.

You can share and discuss links, text, and images, and use upvotes/downvotes to decide on what content rises to the top. There are communities for everything, from niche topics to general discussions.

We currently run **three** of these platforms, with unique features and functionality. You can try them all to see which one is best for your needs!

[read more](/en/guide/fedecan/our-platforms#forum-style) to join one of them

  </div>
  <div style="flex: 0 1 450px; margin: 0 auto;">
    <VpvImage 
      :imageConfig="{
        image: '/img/screenshots/desktop/lemmy-photon-light.png',
        image_dark: '/img/screenshots/desktop/lemmy-photon-dark.png',
        description: 'Screenshot of lemmy.ca on desktop using the photon theme',
      }"
      enableZoom
      enableBorder
    />
  </div>
</div>

## Want to help?

Everyone can contribute in their own way!

<!-- Whether you want to join a platform, donate, or help share your expertise, we look forward to seeing you around. See below for some links to get started, but this list is not exhaustive: -->

- **Join the discussion:** Check out our [main community on lemmy.ca](https://lemmy.ca/c/main) to follow recent discussions or ask questions. As we get organized and start on new projects, we will make posts in the community looking for help.
- **Help Translate:** We will be rolling out translations for our website and other materials. You can check the status of translations at [lang.fedecan.ca](https://lang.fedecan.ca/).
- **Donate:** See our [donation page](donate.md) to learn how you can support our work.

What we love to see most of all is new people making the jump to the Fediverse. See you soon! 🍁

<style>

.platform-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
}

.platform-row.reverse {
  flex-direction: row-reverse;
}

.platform-row .platform-text {
  flex: 1;
  min-width: 0; /* prevents flex overflow issues */
}

/* Stack vertically on smaller screens */
@media (max-width: 768px) {
  .platform-row,
  .platform-row.reverse {
    flex-direction: column;
  }
}

</style>
