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
      content: Security | SSH
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/guide/lemmy/for-admins/infrastructure/ssh/overview
  - - meta
    - property: og:description # 150-160 characters
      content:  Guides for ssh for hosting.
  - - meta
    - property: article:section
      content: Security | SSH
---

# SSH

## What is SSH?

SSH (Secure Shell) is a cryptographic network protocol that is used to securely connect to a remote server or device over an unsecured network. SSH provides a secure way to access and manage a server remotely by encrypting the data that is transmitted between the client and the server.


## What is OpenSSH?

OpenSSH is a free and open-source implementation of the SSH protocol. It is the most widely used SSH server and client software and is included in most linux distributions. OpenSSH provides a secure way to connect to a remote server and manage it remotely.

The official documentation for OpenSSH can be found [here](https://www.openssh.com/).


## Guides on SSH

Here are some guides on SSH that can help you secure your server and manage it remotely using SSH:

### [SSH Configuration](configuring.md)

This guide will cover the setup of SSH for hosting a Lemmy instance.

### [SSH Hardening](hardening.md)

This guide will cover the hardening of SSH for hosting a Lemmy instance.

