---
aside: false
---


# Lemmy Privacy and Security

---

<WorkInProgress 
    communityName="c/newtolemmy"
    communityLink="https://lemmy.ca/c/newtolemmy"
/>

---

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

Federation is a key feature of Lemmy, allowing users to interact with communities across different instances. For this to work, some data must be shared across multiple servers. See below to understand what data is shared with whom, and any relevant privacy and security considerations.

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

<!-- | Icon                                                       | Meaning                                                                   |
|------------------------------------------------------------|---------------------------------------------------------------------------|
| <Icon icon="mdi:check-bold" color="red" width="32px" />    | Yes, the actor can see this information                                   |
| <Icon icon="mdi:check-bold" color="blue" width="32px" />   | Yes, the actor can see this information if it is federated to his server. |
| <Icon icon="mdi:minus-thick" color="green" width="32px" /> | No, the actor can NOT see this information      -->



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
        actor: 'Instance Admins',
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
        actor: 'Lemmy Developers',
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
> However, if someone (for example instance admin) would modify the server code, they can potentially see your password in transit and/or save it somewhere. This is the same for all websites and web applications.
> 
> Joining a trustworthy instance is important. However you can also take precautions yourself. Using a password manager to generate a random password is good practice, and can ensure that even if someone gets access to your password, they cannot use it to log in to your accounts on other websites.

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
            votes: 'federated',
            posts: 'federated',
            comments: 'federated',
            profile: 'federated',
            privateMessages: 'depends'
        },
        {
            actor: 'Lemmy Developers',
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

**Community Moderators & Vote Data**

> Community moderators were given the ability to see votes as of April 2025 (v0.19.11).

**Access to private messages by Other Instance Admins**

> If a user from instance A sends a private message to a user from instance B, only the admins of instances A and B will be able to see the message. This is required to deal with spam and abuse.

:::

<!-- | Actor                 | (Your) Password                                                                                                                                     | Ip                                                         | Browser Agent                                              | Email                                                      | Votes                                                                   | Posts                                                      | Comments                                                   | Profile                                                    | Private Messages                                           |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|
| You                   | <Icon icon="mdi:check-bold" color="red" width="32px" />                                                                                             | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />                 | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    |
| Other Users           | <Icon icon="mdi:minus-thick" color="green" width="32px" />                                                                                          | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" />              | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:minus-thick" color="green" width="32px" /> |
| Community Moderators  | <Icon icon="mdi:minus-thick" color="green" width="32px" />                                                                                          | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:check-bold" color="red" width="32px" /> (since ~0.19.x) | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:minus-thick" color="green" width="32px" /> |
| Instance Admins       | <Icon icon="mdi:check-bold" color="red" width="32px" /> AND <Icon icon="mdi:minus-thick" color="green" width="32px" />  (See below for explanation) | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />                 | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    | <Icon icon="mdi:check-bold" color="red" width="32px" />    |
| Other Instance Admins | <Icon icon="mdi:minus-thick" color="green" width="32px" />                                                                                          | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:check-bold" color="blue" width="32px" />                | <Icon icon="mdi:check-bold" color="blue" width="32px" />   | <Icon icon="mdi:check-bold" color="blue" width="32px" />   | <Icon icon="mdi:check-bold" color="blue" width="32px" />   | <Icon icon="mdi:check-bold" color="blue" width="32px" />   |
| Lemmy Developers      | <Icon icon="mdi:minus-thick" color="green" width="32px" />                                                                                          | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" />              | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | <Icon icon="mdi:minus-thick" color="green" width="32px" /> | -->
