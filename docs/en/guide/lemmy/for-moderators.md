# Lemmy: Guides for Moderators

<WorkInProgress 
    communityName="c/newtolemmy"
    communityLink="https://lemmy.ca/c/newtolemmy"
/>

## Create a community

If you are on the main interface, you can create a community by selecting "Create Community" at the top of the page.

### Name

This value **cannot** be changed after the community is created. It is a unique identifier for the community, and it is used to link to the community from other instances. It will also appear in the URL for your community. For example, if you enter `cats`: `https://example.com/c/cats`

It can only have `lowercase letters` and `underscores`, with no spaces, and it must be at least 3 characters long.

Shorter and memorable names are better.

### Display Name

You can change this as often as you want. It is the name that will be displayed on the community page, in apps, and various other places.

A shorter name is still preferred, as long names can look weird on smaller screens.

::: info TIP: Change the Display Name to reflect the status of the community

If you close a community, or lock it to redirect users somewhere else, you can change the display name to reflect that change. When users are searching for communities, this will help them identify which community to use without having to open the community to check.

For example: `[closed] My Cool Community`

:::

### Icon and Banner

These are optional, and allow you to customize the community the way you'd like.

An **icon** is recommended as it makes it easier to identify the community in a list of communities.

While support will vary on the app and interface, it is possible to include an animated image as the icon. Try uploading an animated `webp` file!

### Sidebar

This is the place for a community description, rules, and other information. It is recommended to start with a short description of the community so people know what to expect.

You can use **markdown** formatting to make it nicer. See the [markdown guide](./for-users/markdown.md) page for more information.

### NSFW

If your community will primarily contain NSFW content, you should check this box. Untagged NSFW content will quickly be banned by various users, moderators, and admins.

### Visibility

**Public** is the default visibility, and it will be accessible to all instances that are federated with your instance.

**Local Only** will only be accessible to users on your instance.

### Only moderators can post to this community

This is self-explanatory, and you can use this to temporarily disable posting to the community.

### Languages

You can enforce the use of specific languages for this community.

::: warning IMPORTANT

If you deselect `Undetermined`, users will be forced to select a language each time they post to the community. This can break functionality in some apps, so it is recommended to leave this option selected.

:::

## Adding and removing team members

If you want to add someone as a moderator, there are a few options.

On the default interface, you will need to wait for them to make a post or comment in the community. You can then select the **three dots** on that content and then appoint them as a moderator. For posts, you will need to open the post page before taking this action.

If your instance supports the Photon interface, you can add new moderators directly. For example, if you are a user on `lemmy.ca` and moderate the `!cats@example.com` community, you would do so on this page: `photon.lemmy.ca/c/cats@example.com/settings/team`





## Scheduled and Automated Posts

There are various third party tools that can create posts for you.

**Scheduling:** 

[LemmySchedule](https://github.com/RikudouSage/LemmySchedule) is a third party tool that can schedule posts ahead of time. It supports recurring posts, incremental numbering in post titles, scheduled pin/unpin, and more. You can use it to schedule out discussion threads ahead of time.

**Automation:**

[RSS Ponder.cat](https://rss.ponder.cat/post/34622) is a third party tool that lets you request content from a particular RSS feed for your community. You need to be a moderator of the community in order to subscribe to feeds within that community.

The commands are as follows:

``` bash
/add {rss_url} {community}@{instance} # Add a new RSS feed
/delete {rss_url} {community}@{instance} # Delete an existing RSS feed
/list {community}@{instance} # List all feeds for a community
/help # Show a help message
```