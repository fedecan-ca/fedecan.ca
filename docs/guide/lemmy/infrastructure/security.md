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
      content: Guides | Lemmy Hosting Security
  - - meta
    - property: og:url
      content: https://fedecan.ca/guide/lemmy/infrastructure/security
  - - meta
    - property: og:description # 150-160 characters
      content: Guides on the security of Lemmy hosting.
  - - meta
    - property: article:section
      content: Guides - Lemmy Hosting Security
---

# Lemmy Hosting Security

This guide will cover securing the infrastructure of your Lemmy instance.

> **Note:** This guide is not exhaustive and should not be considered a complete guide to securing a server. It is recommended to consult with a security professional when setting up a server and to follow best practices for server security.

## Server Security

Its a good idea to secure the server hosting your Lemmy instance. Here are some tips to secure your server:

### Update the Server regularly

Make sure to keep your server up to date with the latest security patches and updates. This will help protect your server from known vulnerabilities and exploits.

The following commands can be used to update the server:

```bash
sudo apt update # Update the package list
sudo apt upgrade # Upgrade the installed packages
```

### Use Strong Passwords

Use strong passwords for all user accounts on the server, including the root account. The password should be long, complex, and unique to each account and should be generated through a offline password manager, so it is randomly generated and you can set your wanted strength there. (For example: [KeepassXC](https://keepassxc.org/)(Recommended), [Bitwarden](https://bitwarden.com), etc.)

### Use a Firewall

Refer to the [Firewalls](guide/lemmy/infra/firewall) guide for setting up a firewall for your server.

### Secure SSH

Refer to the [SSH](guide/lemmy/infra/ssh) guide for setting up and hardening SSH for your server.



