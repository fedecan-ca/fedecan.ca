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
      content: Guides | Lemmy Alternative UIs
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/guide/lemmy/alternative-uis
  - - meta
    - property: og:description # 150-160 characters
      content: Guides on the alternative UIs for Lemmy.
  - - meta
    - property: article:section
      content: Guides - Lemmy Alternative UIs

# NOTE TO CONTRIBUTORS:
#  - An entry should be flagged as being potentially unmaintained, if it has been over 6 months since the last commit.
#  - Entries should be placed in the correct position in one of three categories, sorted alphabetically within a particular category
#    - Default UIs
#    - Actively maintained alternative UIs
#    - Unmaintained alternative UIs
---

# Alternative UIs

Don't like how the website looks? There are a variety of different themes and interfaces that you can switch to. These "alternative UIs" are built by the community and give the platform a whole new look and feel!

::: info Worried about your personal data?

Some providers go a step further and run the alternative UIs themselves. This way you only have to trust the provider you made an account with, and not the developers of each alternative UI.

For example, we run alternative UIs for `lemmy.ca` on pages such as `photon.lemmy.ca`, or `old.lemmy.ca`. You can check them out by using the links below.

:::

::: tip 💡 TIP: See the screenshots in both light and dark mode

You can toggle the site theme in order to see the screenshots in both light and dark mode. Flip the toggle in the top right area of this website.

:::

## Default UI (Lemmy)

This is what you will see by default when you access [lemmy.ca](https://lemmy.ca) or [sh.itjust.works](https://sh.itjust.works). This is the official UI built by the main developers of Lemmy, and so it is generally the most stable and reliable UI available.

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/desktop/lemmy-default-light.png',
    image_dark: '/img/screenshots/desktop/lemmy-default-dark.png',
    alt: 'Screenshot of the default theme for Lemmy.',
    description: 'Screenshot of the default theme for Lemmy.'
  }"
  enableZoom
  enableBorder
/>

<div class="badge-container">
  <a href="https://github.com/LemmyNet/lemmy-ui"><img src="https://img.shields.io/badge/Source-github.com/LemmyNet/lemmy--ui-blue?style=flat-square&logo=github" alt="Source code on GitHub"></a>
  <img src="https://img.shields.io/github/last-commit/LemmyNet/lemmy-ui?style=flat-square" alt="Last commit to LemmyNet/lemmy-ui">
</div>

## Default UI (Piefed)

This is what you will see by default when you access [piefed.ca](https://piefed.ca). Similar to above, it is the official UI built by the main developers of Piefed, and so it is generally the most stable and reliable UI available.

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/desktop/piefed-default-light.png',
    image_dark: '/img/screenshots/desktop/piefed-default-dark.png',
    alt: 'Screenshot of the default theme for Piefed.',
    description: 'Screenshot of the default theme for Piefed.'
  }"
  enableZoom
  enableBorder
/>

<div class="badge-container">
  <a href="https://codeberg.org/rimu/pyfedi"><img src="https://img.shields.io/badge/Source-codeberg.org/rimu/pyfedi-blue?style=flat-square&logo=codeberg" alt="Source code on Codeberg"></a>
  <img src="https://img.shields.io/gitea/last-commit/rimu/pyfedi?gitea_url=https://codeberg.org&style=flat-square" alt="Last commit to rimu/pyfedi">
</div>

## Blorp

While Blorp is newer than some of the other alternative UIs on this page, it has seen rapid development and packs many features. You can download app versions on iOS, Android, and macOS.

Blorp was built to support BOTH **Lemmy** and **Piefed** instances. You can try it out on our instances at [blorp.lemmy.ca](https://blorp.lemmy.ca) or [blorp.piefed.ca](https://blorp.piefed.ca).

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/desktop/lemmy-blorp-light.png',
    image_dark: '/img/screenshots/desktop/lemmy-blorp-dark.png',
    alt: 'Screenshot of the Blorp alternative UI.',
    description: 'Screenshot of the Blorp alternative UI.'
  }"
  enableZoom
  enableBorder
/>

<div class="badge-container">
  <a href="https://github.com/Blorp-Labs/blorp"><img src="https://img.shields.io/badge/Source-github.com/Blorp--Labs/blorp-blue?style=flat-square&logo=github" alt="Source code on GitHub"></a>
  <img src="https://img.shields.io/github/last-commit/Blorp-Labs/blorp?style=flat-square" alt="Last Commit">
</div>

## Photon

Photon by [Xyphyn](https://github.com/Xyphyn) is a modern alternative UI for Lemmy. It supports multi-account switching, infinite scroll, and it is faster and more lightweight than the default UI.

Photon supports BOTH **Lemmy** and **Piefed** instances. You can try it out on our instances at [photon.lemmy.ca](https://photon.lemmy.ca) or [photon.piefed.ca](https://photon.piefed.ca).

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/desktop/lemmy-photon-light.png',
    image_dark: '/img/screenshots/desktop/lemmy-photon-dark.png',
    alt: 'Screenshot of the Photon alternative UI.',
    description: 'Screenshot of the Photon alternative UI.'
  }"
  enableZoom
  enableBorder
/>

<div class="badge-container">
  <a href="https://github.com/Xyphyn/photon"><img src="https://img.shields.io/badge/Source-github.com/Xyphyn/photon-blue?style=flat-square&logo=github" alt="Source code on GitHub"></a>
  <img src="https://img.shields.io/github/last-commit/Xyphyn/photon?style=flat-square" alt="Last Commit">
</div>

## Voyager

Voyager is a mobile-first web client. It boasts gestures, iOS and Android based themes, and lots of customizations. You can also download an app version on both iOS and Android.

Voyager supports BOTH **Lemmy** and **Piefed** instances. You can try it out on our instances at [voyager.lemmy.ca](https://voyager.lemmy.ca) or [voyager.piefed.ca](https://voyager.piefed.ca).

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/promo-voyager.webp',
    alt: 'Promo for the Voyager client',
    description: 'Promo for the Voyager client (source: github.com/aeharding/voyager)'
  }"
  enableZoom
  enableBorder
/>

<div class="badge-container">
  <a href="https://github.com/aeharding/voyager"><img src="https://img.shields.io/badge/Source-github.com/aeharding/voyager-blue?style=flat-square&logo=github" alt="Source code on GitHub"></a>
  <img src="https://img.shields.io/github/last-commit/aeharding/voyager?style=flat-square" alt="Last Commit">
</div>

## Alexandrite

::: warning ⚠️ This project may not be actively maintained.

While we have kept this entry in the guide, an unmaintained project may not work as expected, and may have unresolved security vulnerabilities.

:::

Alexandrite is a highly customizable Lemmy client with a variety of layout options and customizable theme hues.

Alexandrite supports **Lemmy** only. You can try it out on our instance at [alex.lemmy.ca](https://alex.lemmy.ca).

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/desktop/lemmy-alexandrite-light.png',
    image_dark: '/img/screenshots/desktop/lemmy-alexandrite-dark.png',
    alt: 'Screenshot of the Alexandrite alternative UI.',
    description: 'Screenshot of the Alexandrite alternative UI.'
  }"
  enableZoom
/>

<div class="badge-container">
  <a href="https://github.com/sheodox/alexandrite"><img src="https://img.shields.io/badge/Source-github.com/sheodox/alexandrite-blue?style=flat-square&logo=github" alt="Source code on GitHub"></a>
  <img src="https://img.shields.io/github/last-commit/sheodox/alexandrite?style=flat-square" alt="Last Commit">
</div>

## Mlymym

::: warning ⚠️ This project may not be actively maintained.

While we have kept this entry in the guide, an unmaintained project may not work as expected, and may have unresolved security vulnerabilities.

:::

Mlymym is a retro UI for Lemmy, which was designed to be reminiscent of old Reddit. It is best used on a desktop, and is not recommended for mobile users.

Mlymym supports **Lemmy** only. You can try it out on our instance at [old.lemmy.ca](https://old.lemmy.ca).

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/desktop/lemmy-old-light.png',
    image_dark: '/img/screenshots/desktop/lemmy-old-dark.png',
    alt: 'Screenshot of the Mlymym alternative UI.',
    description: 'Screenshot of the Mlymym alternative UI.'
  }"
  enableZoom
/>

<div class="badge-container">
  <a href="https://github.com/rystaf/mlmym"><img src="https://img.shields.io/badge/Source-github.com/rystaf/mlmym-blue?style=flat-square&logo=github" alt="Source code on GitHub"></a>
  <img src="https://img.shields.io/github/last-commit/rystaf/mlmym?style=flat-square" alt="Last Commit">
</div>

## Tesseract

::: warning ⚠️ This project may not be actively maintained.

While we have kept this entry in the guide, an unmaintained project may not work as expected, and may have unresolved security vulnerabilities.

:::

Tesseract was designed to be a client for Lemmy and Sublinks. It boasts media support in the feed and in posts for common sources (ex. Tidal, Loops, Peertube, Spotify, YouTube, etc.), tools for community discovery, and more.

Tesseract supports **Lemmy** only. You can try it out on our instance at [tess.lemmy.ca](https://tess.lemmy.ca).

<VpvImage
  :imageConfig="{
    image: '/img/screenshots/desktop/lemmy-tesseract-light.png',
    image_dark: '/img/screenshots/desktop/lemmy-tesseract-dark.png',
    alt: 'Screenshot of the Tesseract alternative UI.',
    description: 'Screenshot of the Tesseract alternative UI.'
  }"
  enableZoom
  enableBorder
/>

<div class="badge-container">
  <a href="https://github.com/asimons04/tesseract"><img src="https://img.shields.io/badge/Source-github.com/asimons04/tesseract-blue?style=flat-square&logo=github" alt="Source code on GitHub"></a>
  <img src="https://img.shields.io/github/last-commit/asimons04/tesseract?style=flat-square" alt="Last Commit">
</div>

<style>

.badge-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

</style>
