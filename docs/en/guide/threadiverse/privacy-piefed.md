---
aside: false

next:
  text: 'Overview for Moderators on Lemmy'
---

# Privacy on PieFed

<!--
    Tables were split into two sections for better readability

    This script tag contains reusable code for the tables
-->

<script setup>
const commonIconOptions = {
  iconMap: {
    'yes-user': 'icon-park-twotone:eyes',
    'yes': 'icon-park-twotone:eyes',
    'no': 'ic:round-minus',
    'depends': 'ph:asterisk-duotone',
    'federated': 'icon-park-twotone:eyes'
  },
  iconColorMap: {
    'yes-user': 'gray',
    'yes': 'red',
    'no': 'green',
    'depends': 'orange',
    'federated': 'purple'
  },
  width: '32px'
};

const createIconColumn = (key, title) => ({
  key,
  title,
  format: 'icon',
  options: commonIconOptions
});
</script>

<!-- Start of content -->

This page includes includes information on what data is shared with whom, and any relevant privacy and security considerations.

Federation is a key feature of PieFed, allowing users to interact with communities across different instances. For this to work, a minimal amount of data must be shared across multiple servers. See below for a full breakdown.

### Legend

<VpvTableJSON
:jsonDataProp="[
    {
        i: 'yes-user',
        m: 'You can see your own information'
    },
    {
        i: 'yes',
        m: 'Yes, the actor can see this information'
    },
    {
        i: 'federated',
        m: 'Yes, the actor can see this information IF it is federated to their server.'
    },
    {
        i: 'no',
        m: 'No, the actor can NOT see this information'
    },
    {
        i: 'depends',
        m: 'Complicated, read further for an explanation'
    }
    ]"
    :columns="[
        createIconColumn('i', 'Icon'),
        { key: 'm', title: 'Meaning', format: 'text' }
    ]"
/>

## Personally identifiable information

<VpvTableJSON
:jsonDataProp="[
    {
        actor: 'You',
        password: 'yes-user',
        ip: 'yes-user',
        browserAgent: 'yes-user',
        email: 'yes-user',
    },
    {
        actor: 'Other Users',
        password: 'no',
        ip: 'no',
        browserAgent: 'no',
        email: 'no'
    },
    {
        actor: 'Community Moderators',
        password: 'no',
        ip: 'no',
        browserAgent: 'no',
        email: 'no'
    },
    {
        actor: 'Your Instance Admins',
        password: 'depends',
        ip: 'yes',
        browserAgent: 'no',
        email: 'yes'
    },
    { 
        actor: 'Other Instance Admins',
        password: 'no',
        ip: 'no',
        browserAgent: 'no',
        email: 'no'
    },
    { 
        actor: 'PieFed Developers',
        password: 'no',
        ip: 'no',
        browserAgent: 'no',
        email: 'no'
    }
]"
:columns="[
    { key: 'actor', title: 'Actor', format: 'text' },
    createIconColumn('password', '(Your) Password'),
    createIconColumn('ip', 'IP'),
    createIconColumn('browserAgent', 'Browser Agent'),
    createIconColumn('email', 'Email')
]"
/>

::: tip <Icon icon="ph:asterisk-duotone" color="orange" width="24px" />

**Instance Admins & Passwords**

> Your password is stored in a hashed format at REST. This means that even if someone gets access to the database, they cannot see your password.
>
> However, if someone (for example, an instance admin with access to the infrastructure) would modify the server code, they can potentially see your password in transit and/or save it somewhere. This is the same for all websites and web applications.
>
> Joining a trustworthy instance is important! However you can also take precautions yourself. Using a password manager to generate a random password is good practice, and can ensure that even if someone gets access to your password, they cannot use it to log in to your accounts on other websites.

:::

::: tip <Icon icon="icon-park-twotone:eyes" color="red" width="24px" />

Instance admins require access to IP addresses and email in order to handle user accounts.
:::

## Community Interaction Information

<VpvTableJSON
    :jsonDataProp="[
        {
            actor: 'You',
            votes: 'yes-user',
            posts: 'yes-user',
            comments: 'yes-user',
            profile: 'yes-user',
            privateMessages: 'yes-user'
        },
        {
            actor: 'Other Users',
            votes: 'no',
            posts: 'yes',
            comments: 'yes',
            profile: 'yes',
            privateMessages: 'no'
        },
        {
            actor: 'Community Moderators',
            votes: 'depends',
            posts: 'yes',
            comments: 'yes',
            profile: 'yes',
            privateMessages: 'no'
        },
        {
            actor: 'Instance Admins',
            votes: 'yes',
            posts: 'yes',
            comments: 'yes',
            profile: 'yes',
            privateMessages: 'yes'
        },
        {
            actor: 'Other Instance Admins',
            votes: 'depends',
            posts: 'federated',
            comments: 'federated',
            profile: 'federated',
            privateMessages: 'depends'
        },
        {
            actor: 'PieFed Developers',
            votes: 'no',
            posts: 'no',
            comments: 'no',
            profile: 'no',
            privateMessages: 'no'
        }
        ]"
        :columns="[
            { key: 'actor', title: 'Actor', format: 'text' },
            createIconColumn('votes', 'Votes'),
            createIconColumn('posts', 'Posts'),
            createIconColumn('comments', 'Comments'),
            createIconColumn('profile', 'Profile'),
            createIconColumn('privateMessages', 'Private Messages')
        ]"
/>

::: tip <Icon icon="ph:asterisk-duotone" color="orange" width="24px" />

**Vote Data & Community Moderators/Remote Admins**

> PieFed allows you to opt-out of federating your votes to other instances. If you opt to not federate your votes, then community moderators and admins on other instances would not be able to see any votes you make since it doesn't federate to their instance. Meanwhile, community moderators and admins that are on your same instance would still retain the ability to view your votes. In the case of community moderators, they can only view votes that you make within the communities that they moderate.
>
> The effect of not federating your voting information is that your votes will no longer be counted as input by other instances for their post/comment ranking algorithms. Since your vote still counts on your local instance, it will still impact vote totals for you and others on your instance.
>
> Your vote federation preferences can be changed in your user settings with the "Federate votes" checkbox. You always have the option to explicitly vote either locally (non-federated) or globally (federated) on any particular vote if you click and hold for a couple seconds on the voting button. This will cause a popup to appear, letting you choose how you want to vote for that particular vote.

**Access to private messages by Other Instance Admins**

> If a user from instance A sends a private message to a user from instance B, only the admins of instances A and B will be able to see the message. This is required to deal with spam and abuse.

:::
