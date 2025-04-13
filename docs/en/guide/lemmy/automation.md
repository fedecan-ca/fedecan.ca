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
      content: Guides | Lemmy Automation
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/guide/lemmy/automation
  - - meta
    - property: og:description  # 150-160 characters
      content: Tools or Libraries for automation of Lemmy
  - - meta
    - property: article:section
      content: Guides - Lemmy Automation
---

# Lemmy Automation

## Tools or Libraries for automation of Lemmy

Lemmy has a API that can be used to automate tasks. Here are some tools or libraries that can be used to automate Lemmy.

## Lemmy API

The official Lemmy API documentation can be found [here](https://join-lemmy.org/api/). The API will change every time a
new version of Lemmy is released.

There are some unofficial API documentations:

- [lemmy.readme.io](https://lemmy.readme.io/)
- [Lemmy OpenAPI Spec](https://mv-gh.github.io/lemmy_openapi_spec)

## Lemmy API Libraries

There are some libraries that can be used to interact with the Lemmy API. There is only one library that is officially
supported by Lemmy:

- [lemmy-js-client](https://join-lemmy.org/api/)

(Note: This doubles as the official Lemmy API documentation and the official JS library documentation)

There are some unofficial libraries:

### Python

- [pythorhead](https://github.com/db0/pythorhead)
- [plemmy](https://github.com/Fedihosting-Foundation/plemmy)
- [lemmy.py](https://codeberg.org/retiolus/Lemmy.py)

### .NET

- [Lemmy.Net](https://github.com/ydinkov/Lemmy.Net) - A Dependency Injected HttpClient for the Lemmy API in dotnet
- [Lemmy.Net](https://github.com/Rickebo/Lemmy.Net) - A Lemmy API wrapper for .NET

And many more. If you have a library that you would like to add to this list, please open a pull request.

A almost complete list of libraries can be
found [here](https://github.com/dbeley/awesome-lemmy?tab=readme-ov-file#libraries).

## Automation Scripts

There are some scripts that can be used to automate tasks on Lemmy. Here are some examples:

### Administration - Moderation

- [threativore](https://github.com/db0/threativore) - A script to automatically report and remove spam on Lemmy
  instances
- [fedi-safety](https://github.com/db0/fedi-safety) - A script that can detect CSAM and delete it directly in pictrs
- [lemmy-automoderator](https://github.com/basedcount/lemmy-automoderator) - A script to automatically moderate posts on
  Lemmy instances
- [LemmySchedule](https://github.com/RikudouSage/LemmySchedule) - A script to schedule posts/pins/notifications on Lemmy
  instances

### Administration - Maintenance

- [defed-investigator](https://github.com/basedcount/defed-investigator) - A script to investigate who is defederating
  from your instance
- [Lemmy-Easy-Deploy](https://github.com/ubergeek77/Lemmy-Easy-Deploy) - A docker compose script to easily deploy a
  lemmy instance
- [lcs](https://github.com/Fmstrat/lcs) - A script that "boosts" your instance federated content by following some
  common communities on other communities
- [lemmy-tagginator](https://github.com/db0/lemmy-tagginator) - A script to automatically tag posts on Lemmy instances
  for better discoverability on the federated Microblogging platforms.
- [fediseer](https://gui.fediseer.com/) - A website for Instance admins to build trust chains and report bad instances
- [lemmy-stats-explorer](https://github.com/russjr08/lemmy-stats-exporter) - A script to export postgresql db to
  influxdb for grafana dashboards

### User - Automation

- [lemmy-instance-assistant](https://github.com/cynber/lemmy-instance-assistant) - A Addon for Lemmy and Kbin that adds
  some utilities to Lemmys UI
- [lemmyverse.link](https://github.com/RikudouSage/lemmyverse.link) - A redirect service for users to easily share their
  Lemmy links to other users on different instances
- [lemshare](https://codeberg.org/lemshare/lemshare) - Similar to lemmyverse.link, but with a different design

### User - Utility / Fun

- [lemmy-modder](https://github.com/Nothing4You/lemmy-modder) - A script for better moderation on Lemmy
  instances [Original Repository got abandoned from the creator, this is a fork with some fixes]
- [lemmy-federate](https://lemmy-federate.com/) - A website that lets you automatically federate your Lemmy communities
  to other instances
- [Lemmy Explorer](https://lemmyverse.net/) - A website that lets you explore the Lemmy universes instances and
  communities. ( [Raw Data](https://data.lemmyverse.net/) )

More Automation scripts can be
found [here](https://github.com/dbeley/awesome-lemmy?tab=readme-ov-file#userscripts--browser-plugins).