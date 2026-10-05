# Mobile Apps

According to our recent surveys ([instance census 2023](/en/announcements/2024-02-10_censusResults) and [instance census 2025](/en/announcements/2026-04-03_censusResults)), the **vast majority** of users access the Threadiverse from a mobile app or mobile web browser.

Thankfully, there are a wide variety of mobile apps out there that you can use. Since the platforms encourage a healthy ecosystem of third party apps and tools, there are many different options for you to choose from.

### Apps for a Lemmy Instance

To compare the different apps available, you can check out the website below. It will let you filter by platform, whether or not the app is open-source, free or paid, and more.

<br>

<VpvContainerVertical>
<VpvCardVertical
  title="lemmyapps.com"
  excerpt="A website that lists all the different mobile apps available for Lemmy, with the ability to filter by platform, open-source status, price, and more."
  image="/img/screenshots/promo-mobile.png"
  url="https://www.lemmyapps.com/"
/>
</VpvContainerVertical>

You can also see another version of this list on [join-lemmy.org/apps](https://join-lemmy.org/apps). If you want to learn about new apps or updates over time, you can subscribe to the [!lemmyapps@lemmy.world](https://lemmy.ca/c/lemmyapps@lemmy.world) community.

### Apps for a PieFed Instance

To compare the different apps available and a broad idea of the extent of the PieFed support, you can check out the table below. All of the apps that support PieFed also support Lemmy, though the reverse is not necessarily true.

<VpvTableJSON
  :sortable="true"
  defaultSortField="name"
  :jsonDataProp="piefedAppSummary"
  :columns="[
    {
      key: 'name',
      title: 'App Name',
      format: 'text'
    },
    {
      key: 'platforms',
      title: 'Platform(s)',
      format: 'text'
    },
    {
      key: 'source',
      title: 'Source',
      format: 'link',
      options: {
        externalIcon: 'mdi:open-in-new',
        externalHoverText: 'View source code'
      }
    },
    {
      key: 'browsing',
      title: 'General Browsing',
      format: 'icon',
      options: {
        iconMap: {
          'full': 'ic:twotone-check-circle',
          'basic': 'mdi:circle-slice-4',
          'none': 'mdi:circle-outline'
        },
        iconColorMap: {
          'full': '#4CAF50',
          'basic': '#FF9800',
          'none': '#9E9E9E'
        },
        hoverTextMap: {
          'full': 'Good support',
          'basic': 'Basic support',
          'none': 'Not supported'
        },
        width: '1.6em',
        height: '1.6em'
      }
    },
    {
      key: 'moderating',
      title: 'Moderation Tools',
      format: 'icon',
      options: {
        iconMap: {
          'full': 'ic:twotone-check-circle',
          'basic': 'mdi:circle-slice-4',
          'none': 'mdi:circle-outline'
        },
        iconColorMap: {
          'full': '#4CAF50',
          'basic': '#FF9800',
          'none': '#9E9E9E'
        },
        hoverTextMap: {
          'full': 'Good support',
          'basic': 'Basic support',
          'none': 'Not supported'
        },
        width: '1.6em',
        height: '1.6em'
      }
    }
  ]"
/>

## Which App Should I Use?

The best app for you will depend on your personal preferences! You can also install multiple apps and use the same login on all of them.

If you are on a Lemmy instance, a good place to start is to go on [lemmyapps.com](https://www.lemmyapps.com/), filter by your device type, sort the list by the number of downloads. You can also go off of the results of our [instance census 2025](/en/announcements/2026-04-03_censusResults#_3-1-10-on-mobile-how-do-you-access-the-instance) to see which apps are most popular.

## What are the differences?

**Free vs. Paid**:

- Some of the apps are completely free, without any ads or in-app purchases.
- Some of the apps are free, with in-app purchases to remove ads or unlock additional features.

**Open Source**:

- A number of the apps are completely open-source, meaning that anyone can see the code to verify that it is safe to use. This is a good option for people who are concerned about privacy and security.

**Mod Tools**:

- If you are moderating a community, you may want to look for an app that has mod tools built-in. This can make it easier to manage your community from your phone. For the most recent recommendations, you can make a post and ask!

## Deep Linking

::: tip ⚙️ This section is intended for more technical users

If you want to be able to open any Threadiverse link in your app of choice, you can set up deep linking. Check out the [zachable/MastodonRedirect](https://github.com/zacharee/MastodonRedirect) repository on GitHub for more information.
:::

<script setup>
const piefedAppSummary = [
  {
    name: 'Blorp',
    platforms: 'iOS, Android, MacOS, Web',
    source: 'https://github.com/Blorp-Labs/blorp',
    browsing: 'full',
    moderating: 'basic'
  },
  {
    name: 'Boost',
    platforms: 'Android',
    source: '',
    browsing: 'full',
    moderating: 'full'
  },
  {
    name: 'Interstellar',
    platforms: 'Android, Linux, Windows',
    source: 'https://github.com/interstellar-app/interstellar',
    browsing: 'full',
    moderating: 'full'
  },
  {
    name: 'Mlem',
    platforms: 'iOS',
    source: 'https://github.com/mlemgroup/mlem',
    browsing: 'full',
    moderating: 'full'
  },
  {
    name: 'Summit',
    platforms: 'Android',
    source: 'https://github.com/idunnololz/summit',
    browsing: 'full',
    moderating: 'basic'
  },
  {
    name: 'Thunder',
    platforms: 'iOS, Android',
    source: 'https://github.com/thunder-app/thunder',
    browsing: 'full',
    moderating: 'basic'
  },
  {
    name: 'Voyager',
    platforms: 'iOS, Android, Linux, Web',
    source: 'https://github.com/aeharding/voyager',
    browsing: 'full',
    moderating: 'full'
  }
]
</script>