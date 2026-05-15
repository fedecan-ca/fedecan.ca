---
outline: [2, 4]

# Core Content Fields
title: 'Launch of piefed.ca'
summary: 'Would you like some pie? We have launched a PieFed instance! PieFed follows a similar format as Lemmy and Mbin. Those that are familiar with Lemmy will find it very similar, with some additional features including topic lists, optional private voting, new mod and admin tools, crosspost de-duplication, community wikis, etc.'

# Publication Fields
date: 2025-06-06
author: fedecan
status: published
featured: false

# Organization Fields
category: Announcement
tags:
  - Fediverse
  - Platform
  - Threadiverse
  - Piefed

# Featured Image
featured_image:
  image: '/announcements/banner/2025-06-06_piefed-launch-light.jpg'
  image_dark: '/announcements/banner/2025-06-06_piefed-launch-dark.jpg'

# Content Options
reading_time: 2

# Built in Social Media Sharing Fields
head:
  - - meta
    - property: og:type
      content: blog
  - - meta
    - property: og:locale
      content: en_CA
  - - meta
    - property: og:title #  max 50-60 characters
      content: Launch of piefed.ca
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/announcements/2025-06-06_piefed-launch
  - - meta
    - property: og:image
      content: https://fedecan.ca/announcements/banner/2025-06-06_piefed-launch-light.jpg
  - - meta
    - property: og:description # 150-160 characters
      content: Would you like some pie? We have launched a PieFed instance!
  - - meta
    - property: article:section
      content: Announcements
---

<VpvArticleHeader
  returnLink="/en/announcements"
  returnText="Back to Announcements"
  authorsDataKey="enAuthors"
/>

<br>

Would you like some pie? Check it out here: https://piefed.ca/

<br>

## **What is PieFed**

PieFed follows a similar format as Lemmy and Mbin. Those that are familiar with Lemmy will find it very similar, with some additional features including topic lists, optional private voting, new mod and admin tools, crosspost de-duplication, community wikis, etc. Thanks to [how the fediverse works](https://fedecan.ca/en/guide/get-started), you can use either lemmy.ca or piefed.ca to interact freely!

We have done some testing and we are learning as we go, but please bear with us while this new platform gets going 🙂

## **Other Links & FAQ**

- `lemmy.ca` is not migrating to PieFed. We will run both instances at the same time. You can use whichever one you prefer.
- Learn about the differences between PieFed & Lemmy: https://join.piefed.social/features/
- A tour of the community moderation features in PieFed: https://piefed.social/post/844065
- One of the first mobile apps to implement support for PieFed, with more to come: https://interstellar.jwr.one/

<VpvEmbedLemmy
  headerTitle="You can also read this post on Lemmy"
  :links="[
    'https://lemmy.ca/post/45609571'
  ]"
  :titleLines="2"
  :excerptLines="3"
/>
