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
      content: Security | SSH hardening
  - - meta
    - property: og:url
      content: https://fedecan.ca/guide/lemmy/infrastructure/ssh/hardening
  - - meta
    - property: og:description # 150-160 characters
      content:  Guides for hardening ssh for hosting.
  - - meta
    - property: article:section
      content: Security | SSH hardening
---

# SSH Hardening

This guide will cover the hardening of SSH for hosting a Lemmy instance.

> **Note:** This guide is not exhaustive and should not be considered a complete guide to securing a server. It is recommended to consult with a security professional when setting up a server and to follow best practices for server security.

## Hardening SSH

### Requirements

- A server running a debian based linux system.
- Superuser privileges on the server. (Note: You can use the `sudo` command to run commands as a superuser.)
- Some basic linux knowledge.
- A text editor. (Note: In this guide, we will use `nano` as the text editor. You can use any text editor of your choice.)

### Securing SSH

#### Disabling Root Login

It is recommended to disable root login to improve the security of the server. By disabling root login, you prevent attackers from directly logging in as the root user and gaining full access to the server.

To disable root login, you can edit the `sshd_config` file located at `/etc/ssh/sshd_config` and set the `PermitRootLogin` option to `no`.

```bash
sudo nano /etc/ssh/sshd_config
```

Find the `PermitRootLogin` option in the file and change it to `no`.

```bash
PermitRootLogin no
```

Save the file and restart the SSH service to apply the changes.

```bash
sudo systemctl restart sshd
```

#### Disabling Password Authentication

It is recommended to disable password authentication for SSH connections and use key-based authentication instead. Key-based authentication is more secure than password authentication as it requires a private key to authenticate the user. This makes it harder for attackers to gain unauthorized access to the server.

> **Note:** This guide will not cover key-based authentication, please consult the official OpenSSH documentation for more information. A guide will be provided in the future.

#### Limiting User Access

You can limit the users who are allowed to connect to the server using SSH by using the `AllowUsers` option in the `sshd_config` file. By specifying a list of users who are allowed to connect to the server, you can restrict access to only authorized users.

```bash 
sudo nano /etc/ssh/sshd_config
```

Find the `AllowUsers` option in the file and add the list of users who are allowed to connect to the server.

```bash
AllowUsers lemmyuser, adminuser
```

Save the file and restart the SSH service to apply the changes.

```bash
sudo systemctl restart sshd
```

### Install Fail2Ban

Fail2Ban is a security tool that can help protect your server from brute-force attacks by monitoring the server logs and blocking IP addresses that have multiple failed login attempts. Fail2Ban can be installed on a debian based linux system using the package manager of your linux distribution.

To install Fail2Ban, run the following command:

```bash
sudo apt-get install fail2ban
```

After installing Fail2Ban, you can configure it to monitor the SSH logs and block IP addresses that have multiple failed login attempts. The configuration file for Fail2Ban is located at `/etc/fail2ban/jail.conf`.

You should create a new configuration file for Fail2Ban to avoid modifying the default configuration file. To create a new configuration file, run the following command:

```bash
sudo touch /etc/fail2ban/jail.local
```

Edit the `jail.local` file using a text editor and add the following configuration:

```bash
sudo nano /etc/fail2ban/jail.local
```

```bash
[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 5
bantime = 600
```

This configuration will monitor the SSH logs for failed login attempts and block IP addresses that have more than 5 failed login attempts within 10 minutes. The IP addresses will be blocked for 10 minutes.

> **Note:** The `maxretry` and `bantime` settings can be adjusted to suit your needs. You can increase the `maxretry` setting to block IP addresses that have more failed login attempts and increase the `bantime` setting to block IP addresses for a longer period.

Save the file and restart the Fail2Ban service to apply the changes.

```bash
# If you are using fail2ban version 0.10 or later
sudo fail2ban-client reload
# If you are using fail2ban version 0.9 or earlier (Only if you are using an older version of Fail2Ban otherwise it could break the service)
sudo fail2ban-client restart

# If both of the above commands do not work, you can use the following command
sudo systemctl restart fail2ban

# To check the status of Fail2Ban and view the blocked IP addresses
sudo fail2ban-client status sshd
```

> Keep in mind if you put the wrong password multiple times you will be blocked from accessing the server for the time specified in the `bantime` setting. If you are blocked you can access the server from a different IP address or wait for the `bantime` to expire.

### Conclusion

This guide has covered the hardening of SSH for hosting a Lemmy instance. It has covered the steps to secure the SSH server by disabling root login, ~~disabling password authentication~~(guide comming soon), limiting user access, and installing Fail2Ban to protect the server from brute-force attacks. It is recommended to consult with a security professional when setting up a server and to follow best practices for server security.

For more information on OpenSSH, you can check out the [OpenSSH documentation](https://www.openssh.com/).

For more information on Fail2Ban, you can check out the [Fail2Ban documentation](https://github.com/fail2ban/fail2ban/wiki).