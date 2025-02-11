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
      content: Security | SSH configuration
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/guide/lemmy/for-admins/infrastructure/ssh/configuration
  - - meta
    - property: og:description # 150-160 characters
      content:  Guides for setting up ssh for hosting.
  - - meta
    - property: article:section
      content: Security | SSH configuration
---

# SSH Configuration

This guide will cover the setup of SSH for hosting a Lemmy instance.

> **Note:** This guide is not exhaustive and should not be considered a complete guide to securing a server. It is recommended to consult with a security professional when setting up a server and to follow best practices for server security.

## Setting up SSH

### Requirements

- A server running a debian based linux system.
- Superuser privileges on the server. (Note: You can use the `sudo` command to run commands as a superuser.)
- Some basic linux knowledge.
- A text editor. (Note: In this guide, we will use `nano` as the text editor. You can use any text editor of your choice.)

### Installing OpenSSH

OpenSSH is included in most linux distributions and can be installed using the package manager of your linux distribution. To install OpenSSH on a debian based linux system, you can run the following command:

```bash
sudo apt-get install openssh-server
```

### Configuring OpenSSH

The configuration file for OpenSSH is located at `/etc/ssh/sshd_config`. This file contains the configuration settings for the OpenSSH server. You can edit this file using a text editor to configure the OpenSSH server.

```bash
sudo nano /etc/ssh/sshd_config
```

Here are some common configuration settings that you can change in the `sshd_config` file:

- **Port:** The port on which the OpenSSH server listens for incoming connections. By default, OpenSSH listens on port 22. You can change this port to a different port to improve security. It is recommended to use a port number above 1024. **(Note: Make sure to update the firewall rules to allow traffic on the new port and revoke the old firewall rule for port 22.)**

- **PermitRootLogin:** This setting controls whether the root user is allowed to log in to the server using SSH. It is recommended to disable root login to improve security.

- **PasswordAuthentication:** This setting controls whether password authentication is allowed for SSH connections. It is recommended to disable password authentication and use key-based authentication for SSH connections. **(Note: This guide will not cover key-based authentication, please consult the official OpenSSH documentation for more information. A guide will be provided in the future.)**

- **AllowUsers:** This setting controls which users are allowed to connect to the server using SSH. You can specify a list of users who are allowed to connect to the server.

After making changes to the `sshd_config` file, you will need to restart the OpenSSH server to apply the changes. You can restart the OpenSSH server using the following command:

```bash
sudo systemctl restart sshd
```

### Setting up a Firewall

Pleasae refer to the [Firewall](../firewall.md) guide for setting up a firewall for your Lemmy instance.

### Hardening SSH

Please refer to the [SSH Hardening](hardening.md) guide for hardening SSH for your Lemmy instance.

### Conclusion

This guide has covered the setup and hardening of SSH for hosting a Lemmy instance. It has covered the installation and configuration of OpenSSH on a debian based linux system. It is recommended to consult with a security professional when setting up a server and to follow best practices for server security.

For more information on OpenSSH, you can check out the [OpenSSH documentation](https://www.openssh.com/).

