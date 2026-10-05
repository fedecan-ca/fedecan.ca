---
outline: 2,4
---

# How to block a user, community, or instance

The steps and screenshots on this guide page correspond to the default desktop website interface. You can likely achieve the same results on other apps or alternative UIs.

::: danger 🛠️ Help Needed

The Piefed section of this guide page is incomplete. If you are familiar with Piefed, please consider contributing to this guide page.

:::

## Blocking a user

### Lemmy

To block a user on Lemmy, open a user's profile page and select the "Block user" button.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/user-block-light.png',
      image_dark: '/guide/threadiverse/how-to-block/user-block-dark.png'
    }"
    enableZoom
    enableBorder
  />

::: info Effects

When you block a user, you will no longer see their posts or comments. They will also not be able to send you private messages. However, they will still be able to see and reply to your posts and comments. In some version of Lemmy, you may also still receive notifications from them.
:::

::: warning Exceptions

You can still see posts from blocked users if you go to a post over a direct link to it.  
**Local** Admins can not be blocked.

:::

### PieFed

To block a user on PieFed, you can do it one of three ways. The first is very similar to how it is done on Lemmy; navigate to the user's profile page, select the "More" dropdown to the right of the username, and select the Block option.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-block-user-profile-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-block-user-profile-dark.png'
    }"
    enableZoom
    enableBorder
  />

Another way to block a user is to open the three dot menu on a post or comment that user has made and select the Block option.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-block-user-post-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-block-user-post-dark.png'
    }"
    enableZoom
    enableBorder
  />

The final way is to navigate to your user settings by clicking the gear in the upper right and selecting the Blocks & Filters tab. Then, scrolling down, you can manage all your blocks in one place, users being one of the tabs there. You can both add and remove blocks from this page.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-block-user-settings-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-block-user-settings-dark.png'
    }"
    enableZoom
    enableBorder
  />

## Blocking a community

### Lemmy

To block a community on Lemmy, open the community page and select the "Block community" button in the sidebar.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/community-block-light.png',
      image_dark: '/guide/threadiverse/how-to-block/community-block-dark.png'
    }"
    width="400px"
    enableZoom
    enableBorder
  />

::: info Effects

When you block a community, you will no longer see their posts or comments. Even if you are going to a user's profile page, you will not see their posts or comments if they are from a blocked community. You will also not be able to see the community.

:::

### PieFed

Similar to blocking users in PieFed, there are two ways to block a community. First is that you can open the three dot menu on a post in your timeline and choose the appropriate Block option.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-block-community-post-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-block-community-post-dark.png'
    }"
    enableZoom
    enableBorder
  />

The second option is to add a block from your user settings on the Blocks & Filters tab. Select the Communities tab in the Blocks section and then add and/or remove blocks as you wish.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-block-community-settings-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-block-community-settings-dark.png'
    }"
    enableZoom
    enableBorder
  />

## Blocking an instance

### Lemmy

To block an instance go to your profile settings and click on the "Blocks" tab.  
Then click on "Block instance" and enter the instance domain you want to block.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/instance-block-light.png',
      image_dark: '/guide/threadiverse/how-to-block/instance-block-dark.png'
    }"
    enableZoom
    enableBorder
  />

::: info Effects

When you block an instance, you will no longer see their posts or comments. You will also not be able to see the communities or users from that instance. You will also not be able to see the posts or comments from users on that

:::

::: warning Exceptions

You can not block your own instance.

:::

### PieFed

Similar to blocking communities in PieFed, there are two ways to block an instance. First is that you can open the three dot menu on a post in your timeline and choose the appropriate Block option.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-block-instance-post-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-block-instance-post-dark.png'
    }"
    enableZoom
    enableBorder
  />

The second option is to add a block from your user settings on the Blocks & Filters tab. Select the Instances tab in the Blocks section and then add and/or remove blocks as you wish.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-block-instance-settings-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-block-instance-settings-dark.png'
    }"
    enableZoom
    enableBorder
  />

## Hide single posts

### Lemmy

To hide a single post, use the three dots button on the post and select "Hide post".

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/hide-post-light.png',
      image_dark: '/guide/threadiverse/how-to-block/hide-post-dark.png',
      description: 'Hide a post on Lemmy'
    }"
    enableZoom
    enableBorder
  />

::: info Effects

When you hide a post, you will no longer see that post. You can still see the comments on the post, but you will not be
able to see the post itself. You can also still see the post if you go to the community page or the user's profile page.

:::

#### Show / Hide hidden posts

To show hidden posts find the "Hidden post" you want to show and click on the three dots on the right side of the post.
For example over a direct link, in the community page, in your feed, or in the user's profile page.

When you want to find a hidden post in a community page or in your feed you need to enable the option to show hidden
posts.

When the toggle is set to this option, hidden posts will not be displayed:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/show-hidden-false-light.png',
      image_dark: '/guide/threadiverse/how-to-block/show-hidden-false-dark.png',
      description: 'Only display non-hidden posts'
    }"
    enableZoom
    enableBorder
  />

When the toggle is set to this other option, it will display all posts including those that you have hidden:

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/show-hidden-true-light.png',
      image_dark: '/guide/threadiverse/how-to-block/show-hidden-true-dark.png',
      description: 'Display all posts, including hidden posts'
    }"
    enableZoom
    enableBorder
  />

### PieFed

To hide a single post, use the three dots button on the post and select "Hide this post from me".

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-hide-post-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-hide-post-dark.png',
      description: 'Hide a post on PieFed'
    }"
    enableZoom
    enableBorder
  />

#### Unhiding posts

To unhide a post in PieFed, expand the Account menu at the top of the screen and select "Hidden Posts" to see a feed of all the posts you have opted to hide.

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-browse-hidden-posts-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-browse-hidden-posts-dark.png',
      description: 'View your hidden posts on PieFed'
    }"
    width="250px"
    enableZoom
    enableBorder
  />

Then, you can unhide the posts using the three dots menu, this time selecting "Stop hiding this post from me"

<VpvImage 
    :imageConfig="{ 
      image: '/guide/threadiverse/how-to-block/piefed-unhide-post-light.png',
      image_dark: '/guide/threadiverse/how-to-block/piefed-unhide-post-dark.png',
      description: 'Unhide a post on PieFed'
    }"
    enableZoom
    enableBorder
  />
