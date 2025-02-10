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
      content: Security | Firewalls
  - - meta
    - property: og:url
      content: https://fedecan.ca/guide/lemmy/for-admins/infrastructure/security/firewall
  - - meta
    - property: og:description # 150-160 characters
      content:  Guides for setting up firewalls for hosting.
  - - meta
    - property: article:section
      content: Security | Firewalls
---

# Firewalls

This guide will cover the setup of firewalls for hosting a Lemmy instance.

> **Note:** This guide is not exhaustive and should not be considered a complete guide to securing a server. It is recommended to consult with a security professional when setting up a server and to follow best practices for server security.

## What is a Firewall?

A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. A firewall typically establishes a barrier between a trusted internal network and untrusted external network, such as the internet.

## Types of Firewalls

There are several types of firewalls that can be used to secure a server. The most common types of firewalls are:

- **Software Firewalls:** Software firewalls are installed on individual computers or servers and are used to monitor and control network traffic on that device. Software firewalls are typically used to protect individual devices from unauthorized access and malware.

- **Hardware Firewalls:** Hardware firewalls are physical devices that are installed between a network and the internet. Hardware firewalls are used to protect an entire network from unauthorized access and malware. Hardware firewalls are typically used in corporate environments to protect large networks. (Note: This guide will not cover hardware firewalls as this is most of the time covered by your hoster, please contact your hosting provider for more details.)

- **Cloud Firewalls:** Cloud firewalls are virtual firewalls that are hosted in the cloud. Cloud firewalls are used to protect cloud-based servers and applications from unauthorized access and malware. Cloud firewalls are typically used in cloud-based environments to protect servers and applications hosted in the cloud. (Note: This guide will not cover Cloud firewalls as this is most of the time covered by your hoster, please contact your hosting provider for more details.)

## Setting up a Software Firewall

We will cover the setup of a software firewall for a server hosting a Lemmy instance on a debian based linux system. We will use the `ufw` (Uncomplicated Firewall) firewall for this guide.

### Requirements

- A server running a debian based linux system.
- Superuser privileges on the server. (Note: You can use the `sudo` command to run commands as a superuser.)
- Some basic linux and port knowledge.

### What is `ufw`?

`ufw` (Uncomplicated Firewall) is a user-friendly front-end for managing iptables firewall rules. It is designed to be easy to use and provides a simple interface for managing firewall rules on a linux system.

The official documentation for `ufw` can be found [here](https://help.ubuntu.com/community/UFW).

### Installing `ufw`

To install `ufw`, run the following command:

```bash
sudo apt-get install ufw
```

### Configuring `ufw` for Lemmy

To configure `ufw` for a Lemmy instance, you will need to allow traffic on the following ports:

- **HTTP (80):** The default port for HTTP traffic.
- **HTTPS (443):** The default port for HTTPS traffic.
- **SSH (22):** The default port for SSH traffic. (Note: If you changed the ssh port please change it here acordingly.)

To allow traffic on these ports, run the following commands:

```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22 # (Note: If you changed the ssh port please change it here acordingly.)
```

> the ssh port is important to allow you to connect to your server, if you missconfigured the ssh port you will be locked out of your server.

and to deny all other incoming traffic, run the following command:

```bash
sudo ufw default deny incoming
```

and to allow all outgoing traffic, run the following command:

```bash
sudo ufw default allow outgoing
```

### Enabling `ufw`

To enable `ufw`, run the following command:

```bash
sudo ufw enable
```

### Checking the Status of `ufw`

To check the status of `ufw`, run the following command:

```bash
sudo ufw status
```


## Conclusion

This guide has covered the setup of firewalls for hosting a Lemmy instance. It has covered the setup of a software firewall using `ufw` on a debian based linux system. It is recommended to consult with a security professional when setting up a server and to follow best practices for server security.

For more information on `ufw`, you can check out the [ufw documentation](https://help.ubuntu.com/community/UFW).

Alternative guides for UFW:

- [DigitalOcean UFW Essentials](https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands)
