---
layout: doc
---

# Lemmy: Guides for Users

## What is Lemmy?

Lemmy is a forum-style social media platform, often referred to as a 'link aggregator'. You may be familiar with websites such as Reddit or Hacker News, which are similar in nature. You can share and discuss links, text, and images, and decide on what content rises to the top by upvoting and downvoting.

<!-- <ImageGallery
  title="You can switch between a variety of themes and interfaces"
  :folders="[
    '/gallery/lemmy-screenshots/desktop',
  ]"
/> -->

<!-- <ImageGallery
      title="You can switch between a variety of themes and interfaces"
      :images="[
        '/gallery/lemmy-screenshots/desktop/desktop-D1_default.png',
        '/gallery/lemmy-screenshots/desktop/desktop-D2_photon.png',
        '/gallery/lemmy-screenshots/desktop/desktop-D3_tesseract.png',
        '/gallery/lemmy-screenshots/desktop/desktop-D5_old.png',
        '/gallery/lemmy-screenshots/desktop/desktop-L1_default.png',
        '/gallery/lemmy-screenshots/desktop/desktop-L2_photon.png',
        '/gallery/lemmy-screenshots/desktop/desktop-L3_tesseract.png',
        '/gallery/lemmy-screenshots/desktop/desktop-L5_old.png',
      ]"
    /> -->

<ThemedImage 
    lightImageUrl="/gallery/lemmy-screenshots/desktop/desktop-L1_default.png"
    darkImageUrl="/gallery/lemmy-screenshots/desktop/desktop-D1_default.png"
/>

<div class="caption">
  Screenshot of Lemmy's default desktop interface.
</div>

<ThemedImage 
    lightImageUrl="/gallery/lemmy-screenshots/desktop/desktop-L2_photon.png"
    darkImageUrl="/gallery/lemmy-screenshots/desktop/desktop-D2_photon.png"
/>

<div class="caption">
  Screenshot of Photon, one of the <a href="/en/guide/lemmy/for-users/alternative-uis">alternative UIs</a> for Lemmy.
</div>



Like many other forum-style websites, Lemmy is made up of communities, each of which has a topic or theme. When you make a post, you will post it to a particular community.

**Lemmy is a part of the 'fediverse'.** This means that you can access communities from all over the internet, as if they were all on the same website.

If you want to learn about this in detail, you can see the [Detailed Overview](./for-users/detailed-overview.md) page. However, if you're ready to get started, see below!

<br>

::: tip ❓ What is the Fediverse?

If you haven't already, we recommend that you read the ['What is the Fediverse?'](../get-started.md) section first.
:::

## Getting Started with Lemmy in 3 Steps

---

### 1. Pick an Instance

When you made an email address, you got to pick which website you made it with. You can do the same with Lemmy!

::: tip 🍦 Can't decide?

If you are having a hard time picking, you're not alone. With so many options, you might feel like you're at an ice cream shop, unable to pick which flavor to try.

Remember that you can always make an account in one place, and then move somewhere else later. Some people even have accounts on a few places at the same time.
:::

The instance that we run is [lemmy.ca](https://lemmy.ca), which is geared towards Canadians, but open to everyone. You can also check out [this organized list of instances](https://pangora.social/join/) for more options.

---

### 2. Make an Account

This part is easy!

As mentioned above, we run **lemmy.ca**, which you can join by going to [lemmy.ca/signup](https://lemmy.ca/signup). If you want to join a different instance, look for a 'sign up' or 'register' button on their website.

In order to reduce spam, some instances will have a sign up form. After you submit, an admin will review your account and approve it manually. This can take a few hours.

---

### 3. Start Posting

Congratulations! 🎉 You are now free to use Lemmy however you like.

To make the most of your experience:

- Join the [NewToLemmy](https://lemmy.ca/c/NewToLemmy) community. This community is specifically for new users, and you can come back to it whenever you have questions.
- Grab a mobile app. In our most recent survey, the majority of our users accessed Lemmy on mobile. You can find a list of mobile apps [here](../../guide/lemmy/for-users/mobile-apps).


## More Guides

<HorizontalContainer>
<HorizontalCard
  title="Finding Communities"
  excerpt="Some tips and links that can help you find communities that you might like."
  image="/img/guide/lemmy/detailed-overview/lemmy-detailed_overview-fediverse.png"
  url="/en/guide/lemmy/for-users/how-to-find-communities"
  :hideCategory="true"
  :hideAuthor="true"
/>
<HorizontalCard
  title="Mobile Apps"
  excerpt="Around 85% of our users access Lemmy on mobile. See this page for info on mobile apps."
  image="/gallery/lemmy-screenshots/mobile/mobile-card.png"
  url="/en/guide/lemmy/for-users/mobile-apps"
  :hideCategory="true"
  :hideAuthor="true"
/>
<HorizontalCard
  title="Alternative UIs"
  excerpt="Don't like how Lemmy looks? There are a variety of different themes and interfaces that you can switch to."
  image="/gallery/lemmy-screenshots/desktop/desktop-D2_photon.png"
  url="/en/guide/lemmy/for-users/alternative-uis"
  :hideCategory="true"
  :hideAuthor="true"
/>
<HorizontalCard
  title="Tools or Libraries for automation of Lemmy"
  excerpt="A list of tools or libraries that can be used to automate tasks on Lemmy, such as moderation or maintenance."
  url="/en/guide/lemmy/automation"
  :hideCategory="true"
  :hideAuthor="true"
/>
</HorizontalContainer>


<style scoped>
.caption {
  text-align: center;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: -0.5rem 0 1.5rem 0;
}
</style>

