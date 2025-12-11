---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Fedecan"
  text: "Discover a new way to connect online"
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

title: "Welcome"
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

For a full list of our platforms and how they compare, check out [our full list of platforms on our guide page](/en/guide/fedecan/our-platforms). 

All of our platforms are interconnected, and you can interact with users from all over the world.

<VpvContainerVertical>
<VpvCardVertical
    title="pixelfed.ca"
    image="/img/guide/pixelfed-screenshots.png"
    excerpt="A photo sharing platform managed by Canadians"
    url="https://pixelfed.ca"
    category="Pixelfed"
    :hideAuthor="true"
/>
<VpvCardVertical
    title="lemmy.ca"
    image="/img/guide/desktop-D2_photon.png"
    excerpt="A Canadian focused forum running the Lemmy software" 
    url="https://lemmy.ca"
    category="Lemmy"
    :hideAuthor="true"
/>
<VpvCardVertical
    title="sh.itjust.works"
    image="/img/guide/desktop-D2_tess-sjw.png"
    excerpt="A general purpose forum running the Lemmy software"
    url="https://sh.itjust.works"
    category="Lemmy"
    :hideAuthor="true"
/>
<VpvCardVertical
    title="piefed.ca"
    image="/img/guide/piefed-desktop-D1_default.png"
    excerpt="A new Canadian focused forum running the Piefed software"
    url="https://piefed.ca"
    category="Piefed"
    :hideAuthor="true"
/>
</VpvContainerVertical>
<br>



## Want to help?

Everyone can contribute in their own way! 
<!-- Whether you want to join a platform, donate, or help share your expertise, we look forward to seeing you around. See below for some links to get started, but this list is not exhaustive: -->

- **Join the discussion:** Check out our [main community on lemmy.ca](https://lemmy.ca/c/main) to follow recent discussions or ask questions. As we get organized and start on new projects, we will make posts in the community looking for help.
- **Help Translate:** We will be rolling out translations for our website and other materials. You can check the status of translations at [lang.fedecan.ca](https://lang.fedecan.ca/).
- **Donate:** See our [donation page](donate.md) to learn how you can support our work.

What we love to see most of all is new people making the jump to the Fediverse. See you soon! 🍁
