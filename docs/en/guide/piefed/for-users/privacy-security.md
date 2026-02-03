---
aside: false
---

# PieFed Privacy and Security

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

Like other areas of the fediverse, federation is an important feature of PieFed and allows users of different instances to interact with each other. To enable federation, some data must be shared with other instances. This guide is meant to help inform about what data is shared and with whom.

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
        actor: 'Home Instance Admins',
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

> Your password is stored in a hashed format in your instance's database. This means that even if someone gets access to the database, they cannot see your password.
>
> However, if someone modifies the source code or has infrastructure access to the server, they can potentially see your password in transit and/or save it somewhere. This is the same for all websites and web applications.
>
> Joining a trustworthy instance is important. However, you can also take precautions yourself. Using a password manager to generate a random password unique to just that site/application is good practice, and can ensure that even if someone gets access to your password, they cannot use it to log in to your accounts on other websites.

:::

::: tip <Icon icon="icon-park-twotone:eyes" color="red" width="24px" />

**Instance Admins & IP/email**

> Instance admins require access to IP addresses and email in order to handle user accounts and registration applications. These can also be useful tools to help combat spammers.

:::

## Community Interaction Information

<VpvTableJSON
    :jsonDataProp="[
        {
            actor: 'You',
            votes: 'yes-user',
            reactions: 'yes-user',
            posts: 'yes-user',
            comments: 'yes-user',
            profile: 'yes-user',
            privateMessages: 'yes-user'
        },
        {
            actor: 'Other Users',
            votes: 'no',
            reactions: 'federated',
            posts: 'yes',
            comments: 'yes',
            profile: 'yes',
            privateMessages: 'no'
        },
        {
            actor: 'Community Moderators',
            votes: 'federated',
            reactions: 'federated',
            posts: 'yes',
            comments: 'yes',
            profile: 'yes',
            privateMessages: 'no'
        },
        {
            actor: 'Home Instance Admins',
            votes: 'yes',
            reactions: 'yes',
            posts: 'yes',
            comments: 'yes',
            profile: 'yes',
            privateMessages: 'yes'
        },
        {
            actor: 'Other Instance Admins',
            votes: 'federated',
            reactions: 'federated',
            posts: 'federated',
            comments: 'federated',
            profile: 'federated',
            privateMessages: 'depends'
        },
        {
            actor: 'PieFed Developers',
            votes: 'no',
            reactions: 'no',
            posts: 'no',
            comments: 'no',
            profile: 'no',
            privateMessages: 'no'
        }
        ]"
        :columns="[
            { key: 'actor', title: 'Actor', format: 'text' },
            createIconColumn('votes', 'Votes'),
            createIconColumn('reactions', 'Reactions'),
            createIconColumn('posts', 'Posts'),
            createIconColumn('comments', 'Comments'),
            createIconColumn('profile', 'Profile'),
            createIconColumn('privateMessages', 'Private Messages')
        ]"
/>

::: tip <Icon icon="icon-park-twotone:eyes" color="purple" width="24px" />

**PieFed Vote and Reaction Data**

> PieFed users can choose whether to federate their votes and reactions or to keep those actions just contained to their local instance. If a vote/reaction is not federated, then any user (including community moderators and instance admins) on a remote instance would not be able to see that vote/reaction.

:::

::: tip <Icon icon="ph:asterisk-duotone" color="orange" width="24px" />

**Access to private messages by Other Instance Admins**

> If a user from instance A sends a private message to a user from instance B, only the admins of instances A and B will be able to see the message. This is required to deal with spam and abuse.

:::
