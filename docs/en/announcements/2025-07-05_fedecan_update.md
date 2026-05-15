---
aside: false

# Core Content Fields
title: 'Fedecan Update: 2 years later'
summary: Hello everyone! It’s time for another long-overdue update on how Fedecan and our various sites are doing. It’s been just over two years since the great Reddit migration, and in that time we’ve made some solid progress

# Publication Fields
date: 2025-07-05
author: shadow
status: published
featured: false

# Organization Fields
category: Announcement
tags:
  - Fedecan
  - Finances
  - Infrastructure
  - Fediverse Growth

# Featured Image
featured_image:
  image: '/announcements/banner/2025-07-05_fedecan_update.png'

# Content Options
reading_time: 4

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
      content: 'Fedecan Update: lemmy.ca - 2 years later'
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/announcements/2025-07-05_fedecan_update
  - - meta
    - property: og:description # 150-160 characters
      content: 'Hello everyone! It’s time for another long-overdue update on how Fedecan and our various sites are doing. It’s been just over two years since the great Reddit migration, and in that time we’ve made some solid progress.'
  - - meta
    - property: article:section
      content: Announcement
---

<VpvArticleHeader
  returnLink="/en/announcements"
  returnText="Back to Announcements"
  authorsDataKey="enAuthors"
/>

Hello everyone!

It’s time for another long-overdue update on how Fedecan and our various sites are doing. It’s been just over two years since the great Reddit migration, and in that time we’ve made some solid progress:

- [Registered Fedecan.ca as a non-profit](https://fedecan.ca/en/announcements/2024-04-08_incorporated)
- [Moved from OVH to our own hardware in a Vancouver datacenter](https://lemmy.ca/post/37453471)
- [Started collaborating with the team behind sh.itjust.works](https://lemmy.ca/post/42145533)
- [Launched Pixelfed.ca](https://fedecan.ca/en/announcements/2025-02-19-pixelfed_launch)
- [Launched Piefed.ca](https://lemmy.ca/post/45609571)

## Finances

Here’s a look at our bank balance since we began accepting donations:

<VpvImage 
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/finances-1.png',
        description: 'Fedecan Bank Balance from August 2024 to June 2025'
      }"
      enableZoom
      enableBorder
    />

We’re currently sitting at around $2,900, with a monthly burn of about $200, which gives us roughly a year of runway. We have some additional annual costs (like domain renewals and non-profit registration), but overall we run very lean.

Fedecan still owes:

- TruckBC: $1,980
- Shadow (me): $525

These were out-of-pocket hosting and non-profit registration costs from 2023/2024. It’d be great to get those covered, but we want to keep at least a year of operating expenses in reserve.

If you're a regular user and value what we're doing, please consider donating! We have multiple ways to donate, you can find the comparison and donation links on our website: https://fedecan.ca/en/donate

## Sh.itjust.works

Nothing major to report here - we’ve all been a bit busy lately, but collaboration is continuing slowly behind the scenes.

## Fediverse Growth

We're seeing a healthy volume of posts and communities on lemmy.ca, surging with each Reddit drama:

<VpvImage 
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/fediverse-growth-1.png',
        description: 'New comments and new posts per day'
      }"
      enableZoom
      enableBorder
    />

## Infrastructure

Our server is a Dell R7515 with an EPYC 7763, 1 TB ram and 4x 7.68tb nvme data disks, which is hosted in a datacenter in Vancouver, BC.

I spun up victoriametrics + victorialogs a few weeks ago and have been ingesting all of our data, giving us the ability to put together some nice grafana dashboards.

Everything is running great on the infrastructure side of things. Our server is barely working up a sweat and we shouldn't have to worry about scaling for a long time.

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/infrastructure-1.png',
        description: 'CPU usage'
      }"
      enableZoom
      enableBorder
    />

<br>

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/infrastructure-2.png',
        description: 'Memory usage'
      }"
      enableZoom
      enableBorder
    />

Lemmy.ca still comprises almost all of our traffic:

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/infrastructure-3.png',
        description: 'Network usage by platform'
      }"
      enableZoom
      enableBorder
    />

## Lemmy.ca

Our over provisioned stack is performing well, handling the occasional lemmy / lemmy-ui dropout:

<VpvImageGallery
    layout="full"
    :directUrls="[
        '/announcements/2025-07-05_fedecan_update/lemmy_ca-1.png',
        '/announcements/2025-07-05_fedecan_update/lemmy_ca-2.png',
        '/announcements/2025-07-05_fedecan_update/lemmy_ca-3.png',
        '/announcements/2025-07-05_fedecan_update/lemmy_ca-4.png',
        '/announcements/2025-07-05_fedecan_update/lemmy_ca-5.png',
        '/announcements/2025-07-05_fedecan_update/lemmy_ca-6.png',
    ]"
/>

Similarly the DB is mostly running out of ram:

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/lemmy_ca-7.png',
        description: 'Disk Blocks Read'
      }"
      enableZoom
      enableBorder
    />

Our object storage is slowly climbing as expected, but we've got several years of capacity to figure out a long term solution:

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/lemmy_ca-8.png',
        description: 'Object storage usage'
      }"
      enableZoom
      enableBorder
    />

I’m also doing some limited analytics on our web logs. As expected, lemmy.world makes up the majority of our federation traffic:

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/lemmy_ca-9.png',
        description: 'Federation traffic'
      }"
      enableZoom
      enableBorder
    />

One interesting thing to see from the user-agent data is the breakdown of traffic by the different mobile clients:

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/lemmy_ca-10.png',
        description: 'Mobile client traffic'
      }"
      enableZoom
      enableBorder
    />

The “dart” UA is just a common web library, Thunder reports as this and I suspect other clients do too. If you’re a client developer, please [set your user-agent](https://github.com/thunder-app/thunder/issues/1848)!

Out of the alternative web clients we support, tesseract is the most popular although the overall traffic volume is still low:

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/lemmy_ca-11.png',
        description: 'Alternative web clients'
      }"
      enableZoom
      enableBorder
    />

We only store 7 days of logs but I’m hoping to get these pulled out into metrics soon, since it would be interesting to track which clients / interfaces people use over time.

## Pixelfed.ca

Not much to say on this one, due to using local storage it currently runs on a single VM without redundancy.

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/pixelfed_ca-1.png',
        description: 'Pixelfed.ca post, active user, and total user statistics'
      }"
      enableZoom
      enableBorder
    />

<br>

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/pixelfed_ca-2.png',
        description: 'Pixelfed.ca response data'
      }"
      enableZoom
      enableBorder
    />

## Piefed.ca

Piefed runs on a pair of VMs with its own database and object storage backends.

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/piefed_ca-1.png',
        description: 'Piefed.ca service health'
      }"
      enableZoom
      enableBorder
    />

<br>

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/piefed_ca-2.png',
        description: 'Piefed.ca response data'
      }"
      enableZoom
      enableBorder
    />

## Cloudflare

If you want to compare against previous data posts, here’s our same cloudflare graphs for lemmy.ca

<VpvImage
      :imageConfig="{
        image: '/announcements/2025-07-05_fedecan_update/cloudflare.png',
        description: 'Lemmy.ca traffic'
      }"
      enableZoom
      enableBorder
    />

As always, feel free to reach out if you have any questions or ideas. Thanks for being a part of the Fediverse!

<br><br><br>

<VpvEmbedLemmy
  headerTitle="You can also read this post on Lemmy"
  :links="[
    'https://lemmy.ca/post/45609571'
  ]"
  :titleLines="2"
  :excerptLines="3"
/>
