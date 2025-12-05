---
layout: doc

head:
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:locale
      content: en_CA
  - - meta
    - property: og:title #  max 50-60 characters
      content: Guides | Getting Started
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/guide/get-started
  - - meta
    - property: og:description  # 150-160 characters
      content: Welcome to the Fediverse! This guide can help you get started.
  - - meta
    - property: article:section
      content: Guides
---

# Welcome to the Fediverse

If this is your first time hearing about the Fediverse, we're very excited to be the ones to introduce you to it!

## Background

When you want to send an email, you don't need to use the same email provider as the person you're sending it to. 

<VpvImage
  :imageConfig="{
    image: '/img/guide/getting-started/getting_started-email-light.png',
    image_dark: '/img/guide/getting-started/getting_started-email-dark.png',
  }"
  enableZoom
/>

The same is true for phone calls. You can sign up with any phone network, and still call your friend regardless of which network they are on.

This is possible because of **open standards**. Email providers and phone networks use these standards to **federate** their services. 

<VpvImage
  :imageConfig="{
    image: '/img/guide/getting-started/getting_started-federate-light.png',
    image_dark: '/img/guide/getting-started/getting_started-federate-dark.png',
  }"
  enableZoom
/>

Open standards allow you to communicate with anyone, without needing to be on the same service!

::: info 💡 You already use 'federated' services
Email and phone calls are both examples of federated services.
:::

## Old Social Media

Most older social media platforms are **centralized**. If you wanted to leave a comment somewhere, you needed to make an account on that website / app.

<VpvImage
  :imageConfig="{
    image: '/img/guide/getting-started/getting_started-old_media-light.png',
    image_dark: '/img/guide/getting-started/getting_started-old_media-dark.png',
  }"
  enableZoom
/>

As the userbase of individual platforms grew, it became a **problem** with how much power the platforms had. It became very difficult to leave them, or for better alternatives to compete. 

It has gotten to the point where a few companies have a near-monopoly on social media, and your online experience along with it.

<VpvImage
  :imageConfig="{
    image: '/img/guide/getting-started/getting_started-old_monopolies-light.png',
    image_dark: '/img/guide/getting-started/getting_started-old_monopolies-dark.png',
  }"
  enableZoom
/>

So why aren't social networks federated?

## The Fediverse

Faced with this problem, in 2018 the World Wide Web Consortium ([W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)) published the first version of the **[ActivityPub](https://en.wikipedia.org/wiki/ActivityPub)** standard. W3C is the main international organization responsible for the web's standards, including HTML and CSS.

ActivityPub is an **open standard** and **federation protocol** for social media. It allows different social media platforms to communicate with each other!

<VpvImage
  :imageConfig="{
    image: '/img/guide/getting-started/getting_started-the_fediverse-light.png',
    image_dark: '/img/guide/getting-started/getting_started-the_fediverse-dark.png',
  }"
  enableZoom
/>

Since then, a number of independent projects have adopted ActivityPub to make new social media platforms.

- Do you like reading short text posts from your friends and celebrities? Join one of the many microblogging platforms, and you will be able to follow people from any of the other platforms.

- Do you like sharing photos? Watching videos? Upvoting and commenting on forum posts? There are platforms for all of these, and much more.

All of these platforms make up a 'federated universe' of social media, known as the **Fediverse**.

<VpvImage
  :imageConfig="{
    image: '/img/guide/getting-started/getting_started-welcome-light.png',
    image_dark: '/img/guide/getting-started/getting_started-welcome-dark.png',
  }"
  enableZoom
/>

## How does this help?

- **Decentralization**: No single entity has control over the entire network, and it is much harder for a single entity to take over a social media format.
- **Freedom to Choose**: You can pick the server that best fits your needs, moderation preferences, and values. If something changes, you can easily move to another server and still see the same content.

Many of these platforms are being built from the ground up, by teams of volunteers, to fix the problems we saw with older social media platforms. As such they are often better about privacy, transparency, and user control.

<br><br>

# Ready to get started already?

You can jump to our page on what platform we run!

<VpvContainerHorizontal>
<VpvCardHorizontal
    title="Our Platforms"
    image="/img/guide/pixelfed-screenshots.png"
    excerpt="We're running platforms for image sharing (Pixelfed), forums (Lemmy, Piefed), and more to come soon! Check out this page for a full list."
    url="/en/guide/fedecan/our-platforms"
    :hideCategory="true"
    :hideAuthor="true"
/>
</VpvContainerHorizontal>

<br>

### See the next section to learn how Fedecan fits into all this!