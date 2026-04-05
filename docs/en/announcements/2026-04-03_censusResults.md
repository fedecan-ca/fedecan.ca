---
outline: [2, 4]

# Core Content Fields
title: "2025 Instance Census Results"
summary: "Thank you to everyone who participated in the 2025 Fedecan Instance Census! We received around of 600 total valid responses this time around. We hope that you enjoy the results that we've put together."

# Publication Fields
date: 2026-04-03
author: otter
status: published
featured: false

# Organization Fields
category: Event
tags:
  - Census
  - Demographics
  - Usage Statistics
  - Threadiverse / Forum
  - Pixelfed
  - Fediverse

# Featured Image
featured_image:
  image: "/announcements/banner/2026-04-03_censusResults.png"

# Content Options
reading_time: 15

# Built in Social Media Sharing Fields
head:
  - - meta
    - property: og:type
      content: blog
  - - meta
    - property: og:locale
      content: en_CA
  - - meta
    - property: og:title #  max 50-60 characters
      content: 2025 Instance Census Results
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/announcements/2026-04-03_censusResults
  - - meta
    - property: og:description # 150-160 characters
      content: Results and visualizations from the 2025 Fedecan Instance Census
  - - meta
    - property: article:section
      content: Announcements
---

<VpvArticleHeader 
  returnLink="/en/announcements"
  returnText="Back to Announcements"
  authorsDataKey="enAuthors"
/>

# 2025 Fedecan Instance Census Results

Thank you to everyone who participated in the **2025 Fedecan Instance Census**! We received around of **600 total valid responses** this time around. We hope that you enjoy the results that we've put together.

This article is long, so please use the `On this page` menu to skip to your desired section.

::: tip Future Improvements

This survey was open to everyone who wanted to fill it out. However, we will also need to do a better job reaching users across each of the instances that we manage. Some instances were well represented, while others did not receive that many responses. It was difficult to reach Pixelfed users in particular.
:::

## Introduction

Once again, here is a cumulative count of survey responses over time:

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/m1-timeline_cumulative.json"
  chart-type="line"
  title="Cumulative Count of Survey Responses"
  subtitle="2025 Fedecan Instance Census"
  animate="progressive"
  colors="#8F1D3B"
  :animation-duration="2000"
  :options="{
    plugins: { legend: { display: false } },
    elements: { point: { radius: 1 } },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 16,
          autoSkip: true,
          callback: function(value, index, ticks) {
            const label = this.getLabelForValue(value);
            const date = new Date(label);
            return date.toLocaleDateString('en-CA', { 
              month: 'short', 
              day: 'numeric'
            });
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Valid Responses'
        }
      }
    }
  }"
/>

We organized the responses into three groups. However, the results in this article are for all users, regardless of which group they belong to.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/m3-user_type-raw.json"
  chart-type="pie"
  title="Respondent Type - Raw"
  subtitle="2025 Fedecan Instance Census"
  note="Original data is displayed, without any overrides."
  :colors="['#555555', '#8F1D3B', '#4A7C9B', '#E89C3F', '#7d3fe8']"
  show-percentage
/>

::: tip Future Improvements

This question turned out to be somewhat confusing. We intended for users to pick the option that was most to them, and for users with an account on `lemmy.ca`/`sh.itjust.works`/`piefed.ca`/`pixelfed.ca` to select that option, regardless of whether they interact with anyone.

Additionally, we did not account for users that view Fediverse content through the instances above, without an account or without any interaction.

:::

After manually processing the text entries for `Other`, we were able to move many of them into one of the other bins. If it was not clear which instances the 'lurker' responses were from, they were placed in the "I do not interact with the instances above" bin.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/m3-user_type.json"
  chart-type="pie"
  title="Respondent Type - Adjusted"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses."
  :colors="['#555555', '#8F1D3B', '#4A7C9B', '#E89C3F']"
  show-percentage
/>

## Section 1: Where is everyone from?

### 1.1: Where are you from?

Once again, we broke this question down into a few parts.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/1.1-location_global.json"
  chart-type="pie"
  title="Respondent Location"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#555555', '#8F1D3B', '#4A7C9B']"
  show-percentage
/>

### 1.2: Which province or territory are you from?

This question was asked to those who selected 'Canada' in [question 1.1](#_1-1-where-are-you-from).

<ChartCardGeo
  data-url="/announcements/2026-04-03_censusResults/1.2-location_canada.json"
  geo-url="/announcements/2026-04-03_censusResults/canada.geojson"
  title="Canadian Respondents by Province or Territory"
  subtitle="2025 Fedecan Instance Census"
  geo-key="name"
  projection="conicConformal"
  :projection-rotate="[100, -60]"
  :color-scale="['#feebf0ff', '#8F1D3B']"
  :logarithmic="true"
/>

For reference, see below for Canada's population distribution as of 2021 ([statcan](https://www150.statcan.gc.ca/n1/pub/12-581-x/2022001/sec1-eng.htm)):

<ChartCardGeo
  data-url="/announcements/2026-04-03_censusResults/canada-population-2021.json"
  geo-url="/announcements/2026-04-03_censusResults/canada.geojson"
  title="Canadian Population by Province or Territory"
  subtitle="2025 Fedecan Instance Census"
  source="Statistics Canada"
  source-link="https://www150.statcan.gc.ca/n1/pub/12-581-x/2022001/sec1-eng.htm"
  valueLabel="people"
  geo-key="name"
  projection="conicConformal"
  :projection-rotate="[100, -60]"
  :color-scale="['#feebf0ff', '#8F1D3B']"
  :logarithmic="true"
/>

### 1.3: Which continent are you from?

This question was asked to those who selected 'Somewhere else' in [question 1.1](#_1-1-where-are-you-from).

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/1.3-location_continents.json"
  chart-type="bar"
  title="International Respondents by Continent"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4A7C9B']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 12
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Responses'
        }
      }
    }
  }"
/>

### 1.4: What size does your community fall under?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/1.4-community_size.json"
  chart-type="pie"
  title="Community Size"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#555', '#231942', '#5e548e', '#9f86c0', '#8e5454']"
  show-percentage
/>

There were two responses in the "other" category:

- One response mentioned that this question was ambiguous on whether it was about where the respondent lived, or where their friends/community lived.
- The other response mentioned that they share their time between an urban place and a rural town.

### 1.5: What is the speed of your main internet connection?

Responses that were not included in this graph include:

- entries with qualitative values such as "fast", or with units such as `GHz`
- entries that were likely data caps, as they would be unreasonably high if they were interpreted as speeds
- entries with speeds greater than 10 Gbps, such as one entry for "1Tbps symmetrical SOHO"

::: tip Future Improvements

We should have used a numerical input question with specified units for this question.

The responses spanned across various notations and units, including `GHz`, typos, and confusing abbreviations. We cleaned the data to the best of our ability.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/1.5-internet_speed.json"
  chart-type="bar"
  title="Internet Speed"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses."
  :colors="['#548e81']"
  :options="{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Responses'
        }
      }
    }
  }"
/>

### 1.6: How many people live in your household?

::: tip Future Improvements

This question should be restricted to values `1` and above.
:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/1.6-household.json"
  chart-type="bar"
  title="Size of Household"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed. Responses with the value '0' or '1' were combined under '1'."
  :colors="['#8e5454']"
  :options="{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Number of People per Household'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Responses'
        }
      }
    }
  }"
/>

### 1.7: Who lives in your household with you?

::: tip Future Improvements

A clarifying statement could be added to note that partners, spouses, etc. should are included under 'Mostly family members or other relatives', and that friends and roommates are included under 'Mostly non-relatives'.

:::

<ChartCard
data-url="/announcements/2026-04-03_censusResults/1.7-household_composition.json"
chart-type="pie"
title="Household Composition"
subtitle="2025 Fedecan Instance Census"
note="Adjusted data is displayed, with overrides for custom user responses."
:colors="['#555', '#094657', '#0081b0', '#a0cceb', '#8e5454']"
show-percentage
/>

### 1.8: If you have pets, you may talk about them here

::: details Read quoted responses from this section

We have highlighted some responses from people who indicated that they were comfortable with their responses being shared in the final dataset. We appoligize if your submission was not included here, but please feel free to share it again in the comments!

> We have a dog and five cats. We recently had to adopt the fifth cat because family was not able to take care of her anymore. She's happily hiding under the covers in the bedroom. So cute!

> I have two cats, eight fish, and at least 200 cherry shrimp! They won't stop having babies.

> 1 dog, Escalator.

> Our cat is very sweet but has no patience whatsoever. She wants to go outside? "MEOW MEOW MEOW" _scratches couch_ "meow I suffer greatly at your hands, my feline rights are violated, this is worse than a US prison. MEOW"

> An adorable collie. Thanks for asking.

> 3 cats, one very large Orange boy and two young kittens. Got the kittens after we lost the orange guy's brother earlier this year.

> Very Important DOG!

> I have a beautiful calico cat 🐈

> pets schmets

> 2 very old, very adorable dogs. (15 and 16 years old 🥹)

> I have a beautiful 18.5 y/o female Bengal cat. She is so sweet and affectionate in her twilight years.

> I adopted a dog (labrador mix) from the local shelter six years ago. I don't know for sure how old she is but she still loves walks and pets as much as on day one.

> Cute little morkie.

> 6

> I have a cat named Chico and he bites me a lot :)

> My 2 dogs recently died, I still haven't come to terms with it.

> A precious dog an a whiny cat 😅

> I have a beautiful and precious female orange cat named Kenya who just turned 11

> We just got a pet cat two months back, her name is Pepper, she's five years old and was very shy. Now she's desperate for love and meows at us whenever we have food or it's a day that ends in "Y". We love her very much.

> My little bat called Minnie. Shes getting old now and is starting to go blind :(

> We have 3 cats.
>
> Pater (because the vets wouldn't let the vet tech who rescued her name her "Tater, as in Tater Tot" so now it's "Pater, as in Po-Tater Tot") who is on a diet because she eats too much.
>
> Ripley, who is a tuxedo and is my favourite because he yells at lot about everything but will also just follow me when I walk into the backwoods (to his own detriment, I have had to return carrying him because he was exhausted).
>
> And Millie, who is the baby and does not have a single thought. She loves to get into our basements panel ceiling, find where you are, and yell at you because she wants attention.

> I have three kitties! One has a sick eye right now but is recovering.

> 1 cat (standard issue)

> 4 cats - 1 old lady black tabby, 2 young adults tuxes and brand new orange guy

> 1 cat with multiple brain cells

> We have a jet black old male cat. His favourite pastime is beating u other cats, so we just have the one.

> A lovely black cat named Granny Weatherwax

:::

All responses were manually processed to the best of our ability. For example:

- "2 hekkin good bois" was assigned `2 dogs`
- "dogs" or "cats" were assigned `2 dogs` or `2 cats` respectively
- "fish" was assigned `1 fish`, while "Fish (many)", "A small army of little fishes.", and "Too many fish" were each assigned `10 fish`. This likely underestimated the actual number of fish.
- "bunny" was included under the count for "rabbit", while "cockatiel" and "parrot" were included under the count for "bird"

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/1.8-pets.json"
  chart-type="bar"
  title="Total number of pets of each type"
  subtitle="2025 Fedecan Instance Census"
  note="User submissions were manually processed."
  :colors="['#094657']"
  :height="650"
  :options="{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 12
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Pets'
        }
      }
    }
  }"
/>

Below you can find the total number of responses mentioning a particular type of pet. For example, a response that mentioned 2 dogs and 1 cat would be counted as `1` in the "dog" category and `1` in the "cat" category.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/1.8-pets-mentions.json"
  chart-type="bar"
  title="Total number of responses mentioning a particular type of pet"
  subtitle="2025 Fedecan Instance Census"
  note="User submissions were manually processed."
  :colors="['#094657']"
  :height="650"
  :options="{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 12
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Pets'
        }
      }
    }
  }"
/>

In addition to this data, `4` responses mentioned pets who passed away, and `2` mentioned wishing for pets but being unable to have any currently. Another `4` submissions mentioned pets without specifying the type and/or number.

## Section 2: Who are you

### 2.01: What age range do you fall into?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.01-age.json"
  chart-type="bar"
  title="Age of Respondents"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#8F1D3B']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 12
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Responses'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Age (years old)'
        }
      },
    }
  }"
/>

::: tip Future Improvements

We received feedback on this question as follows:

> The question about age ranges in the next page does not really align with developmental demographics, as the difference between a 10 and 19 year old is obviously enormous. Even between ages such as 16 and 13, a 13 year old community will be very different from a 16 year old community.

We plan to discuss this before the next census.

:::

### 2.02: What is your ethnicity?

This year, we organized the ethnicity categories based on the [2021 Canadian Census](https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/app/index-eng.cfm?ID=a2_5). The graph below displays the total counts for each selection, so in cases where a respondent selected two categories, both were counted as individual submissions.

Nine submissions were manually overridden to place them within the matching category, based on the linked Canadian Census Appendix page.

- Submission(s) for "Canadian" were included under "North American: Other North American origins"
- Submission(s) for "European: Central European origins" were included under "European: Other European origins"
- Submission(s) for "Mexico" were included under "Latin, Central and South American origins"
- Submission(s) for "Jewish", "Ashkenazi", and "White" were included under "Other ethnic and cultural origins"
- When a submission mentioned the ethnicity of parents, multiple categories were selected as appropriate

We welcome input on how to improve this section further in the next census.

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

"no answer (skip this question)": "`no answer`"

"North American: North American Indigenous origins": "`NA Indigenous`"

"North American: Other North American origins": "`Other NA`"

"European: British Isles origins": "`British Isles`"

"European: French origins": "`French`"

"European: Other Western European origins": "`Other W Euro.`"

"European: Other Northern European origins": "`Other N Euro.`"

"European: Southern European origins": "`S European`"

"European: Southeast European origins": "`SE European`"

"European: Eastern European origins": "`E European`"

"European: Other European origins": "`Other European`"

"Caribbean origins": "`Caribbean`"

"Latin, Central and South American origins": "`Latin, C & S American`"

"African: Central and West African origins": "`C & W African`"

"African: North African origins": "`N African`"

"African: Southern and East African origins": "`S & E African`"

"Asian: West and Central Asian and Middle Eastern origins": "`W & C Asian & Middle Eastern`"

"Asian: South Asian origins": "`S Asian`"

"Asian: East and Southeast Asian origins": "`E & SE Asian`"

"Oceanian: Pacific Islands origins": "`Pacific Isl.`"

"Oceanian: Other Oceanian origins": "`Other Oceanian`"

"Other ethnic and cultural origins": "`Other ethnic & cultural`"

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.02-ethnicity.json"
  chart-type="bar"
  title="Ethnicity of Respondents"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses. Respondents could select more than one option."
  :colors="['#8F1D3B']"
  :column-colors="{
    'no answer': '#555',
  }"
  :height="650"
  :options="{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: true
      }
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 12
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Responses'
        }
      }
    }
  }"
/>

### 2.03: What sexuality do you identify with?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.03-sexuality.json"
  chart-type="bar"
  title="Sexuality"
  subtitle="2025 Fedecan Instance Census"
  note="Respondents could select more than one option."
  :colors="['#8F1D3B']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        y: {
          ticks: {
            autoSkip: false,
          }
        },
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

::: tip Future Improvements

The custom user responses were placed in the "Other" category, and include "Demisexual", "Pansexual", "Demi hetero", "Heteroromantic Demisexual", and "Fluid-ish", as well as "Amazing" and "All of the above (except straight)"

Another improvement would be to include an additional category for `Lesbian`.

:::

### 2.04: What gender do you identify with?

Similar to the [previous census](https://fedecan.ca/en/announcements/2024-02-10_censusResults), the gender breakdown from the census is quite different from the gender breakdown of Canada or the rest of the world. We feel that this is strongly affected by the distributions for age and primary occupation/field of work. Most of the survey respondents were users of the forum/threaded platforms, and historically such platforms went through a similar evolution as they grew. We expect that over time, this breakdown to more closely reflect the wider population.

Nonetheless, we want everyone to feel comfortable and welcome on our platforms, and we invite any and all feedback on areas where we can make that experience better. Feel free to post in the [!main@lemmy.ca](https://lemmy.ca/c/main) community to make suggestions, call out issues, and/or discuss further.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.04-gender.json"
  chart-type="bar"
  title="Gender Identity"
  subtitle="2025 Fedecan Instance Census"
  note="Respondents could select more than one option."
  :colors="['#8F1D3B']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        y: {
          ticks: {
            autoSkip: false,
          }
        },
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

::: tip Future Improvements

Some custom user responses were placed in the closest matching category based on the comment. Other custom user responses were placed in the "Other" category, and include "demi-boy"/"demi-male", "man/non-binary", and "agender".

:::

### 2.05: Are you someone with trans experience (meaning your gender identity does not align with your sex assigned at birth)?

All custom user responses were placed in the closest matching category based on the comment.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.05-trans_experience.json"
  chart-type="pie"
  title="Trans Experience"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses."
  :colors="['#555', '#094657', '#0081b0']"
  show-percentage
/>

### 2.06: Disability

#### 2.06.01: Do you have a disability?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.06.01-disability.json"
  chart-type="pie"
  title="Disability Status"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#555', '#094657', '#0081b0']"
  show-percentage
/>

#### 2.06.02: What is your disability status?

This was an optional question, intended for those who answered "Yes" in [Question 2.06.01](#_2-06-01-do-you-have-a-disability). This question included options for `ADHD`, `Depression`, `Anxiety`, and `ASD`. Users were also able to add additional context and additional entries in a free text response box.

::: tip Future Improvements

We received valuable feedback on how this section was structured, and it will be helpful for guiding the census in future years.

In our first census in 2023, this section was primarily qualitative. As this was difficult to organize into a meaningful visualization, we tried to create clearer quantitative options based on the common responses last time, and included the additional qualitative question. The feedback this year will already help us refine the categories for next time. Nonetheless, we agree that we should have included more categories in the quantitative question than we did this year.

Our primary goal with this section is to avoid treating our community as a monolith. We know that community members have diverse lived experiences, and we do not want to leave out circumstances that are a significant part of daily lives. Additionally, by understanding the makeup of our community, we can better advocate for features or changes that can remove barriers faced by community members.

The categorization of `ADHD`, `Depression`, `Anxiety`, and `ASD` as "disabilities" was one common area of feedback. We recognize that for many, these are core identities or natural variations rather than disabilities or deficits. We also understand that the administrative "disability" label is preferred in some contexts as a broad umbrella term, such as by those who rely on specific legal protections or accommodations when navigating work, school, and other spaces. We plan on discussing how these questions can be better organized next time.

Another area of feedback was the personal nature of this section. While this question was optional, data was anonymized, and we hosted the survey platform ourselves, we understand the apprehension around the collection of such information. If similar questions are asked next time, we plan on adding an explanation near that question so that every respondent can understand why the question exists and can make an informed decision on what to share.

:::

When graphing this question, we added the free-text responses into a few additional broad categories based on the functional impact. Responses with multiple conditions were counted towards each respective category. As these new categories were not present in the original selection question, they likely display underestimates from the actual values.

::: details Explanation of categories

- Responses were included regardless of formal clinical confirmation, and includes entries where a condition was described as "suspected", "likely", "self-diagnosed", or currently "undiagnosed".

- Responses for Aspergers or mentions of being on the spectrum were included under `ASD`. Responses for ADD were included under `ADHD`.
- Compound terms like AuDHD were split and counted under both `ASD` and `ADHD` so that both aspects of that experience are represented.
- Mentions of depressive disorder or anxiety were included under `Depression` and `Anxiety` respectively
- Mentions of conditions affecting mood or emotional regulation, such as Bipolar Disorder or personality disorders, were included under `Other Mood or Personality Disorders`.
- Responses for trauma-related conditions or CPTSD were included under `PTSD / Trauma-related`.
- Mentions of spinal or nerve issues, joint conditions such as arthritis, and chronic pain affecting movement were included under `Mobility Restrictions`.
- Responses for chronic pain or migraines were included under `Chronic Pain / Migraines`.
- Responses for systemic health issues, including autoimmune conditions, autonomic nervous system variations, and digestive health issues were included under `Chronic Illness / Autoimmune`.
- Responses for sleep apnea or general sleep-related conditions were included under `Sleep Disorders`.
- Responses regarding low vision, color perception, or colorblindness were included under `Vision Impairment`.
- Responses for neurological variations such as aphantasia or neuropathy were included under `Cognitive / Neurological`.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.06.02-disability.json"
  chart-type="bar"
  title="Disability Status"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses. Respondents could select more than one option."
  :colors="['#8F1D3B']"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        y: {
          ticks: {
            autoSkip: false,
          }
        },
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

### 2.07: Are you currently studying?

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- Yes, I'm in secondary school/high school.
- Yes, I’m studying for a bachelor’s degree or higher.
- Yes, I’m studying something else.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.07-studying.json"
  chart-type="bar"
  title="Are you currently studying?"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses. Respondents could select more than one option."
  :colors="['#1d388f']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

Custom responses include:

- learning music and instruments
- learning new languages
- autodidactic education
- completing certifications and/or self-directed study for hobbies, homelabs, amateur radio, morse code

### 2.08: What education have you attained?

The categories for this question reflect the Canadian school systems:

[canada.ca/en/immigration-refugees-citizenship/services/settle-canada/education/school-types/post-secondary.html](https://canada.ca/en/immigration-refugees-citizenship/services/settle-canada/education/school-types/post-secondary.html)

Responses were manually overridden according to these categories. Responses that did not fit with any of the options were placed in the `Other` category.

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- no answer (skip this question)
- No formal education
- Secondary (or high) school level qualification
- some Post Secondary (from the options below)
- CEGEP diploma
- Institute diploma and/or certificate
- College diploma and/or certificate
- University: Bachelor’s degree
- University: Master’s degree
- University: Doctoral degree
- University: Professional Program

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.08-education.json"
  chart-type="bar"
  title="What education have you attained?"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses. Respondents could select more than one option."
  :colors="['#1d388f']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

### 2.09: Employment

#### 2.09.01: What is your employment status?

Responses for "it's complicated", "disability", "sabbatical", and "gap year" were included under `Other`. Responses for "freelance" were included under `Self-Employed`.

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- no answer (skip this question)
- Employed full time (30hrs+ per week)
- Employed part time
- etc.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.09-employment_status.json"
  chart-type="bar"
  title="Employment Status"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses. Respondents could select more than one option."
  :colors="['#1d388f']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 2.09.02: If employed, what field of work do you work in?

::: tip Future Improvements

The categories for this question were based on the popular classes of responses from the previous census.

In the future, it would be helpful to use an existing list such as:

[www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410020201](https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410020201)

:::

Responses for the additional details question were not considered for this question. While it was possible to create a second graph by manually overriding all custom responses and using the list of categories mentioned above, we skipped that for now due to time constraints. Additionally, some categories on our list could belong to multiple categories on the statscan list, and we would not be able to accurately map all responses to those new categories anyway.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.09-employment_v1.json"
  chart-type="bar"
  title="If employed, what field of work do you work in? (raw)"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses. Respondents could select more than one option."
  :colors="['#1d388f']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

### 2.10: What operating system(s) do you use on your desktop device(s)?

The `Other` category included responses for OpenBSD, FreeBSD, and Plan9.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.10-os_desktop.json"
  chart-type="bar"
  title="Desktop Operating System"
  subtitle="2025 Fedecan Instance Census"
  note="Respondents could select more than one option."
  :colors="['#801d8f']"
  :column-colors="{
    'no answer': '#555',
    'I don\'t use a desktop device': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

The following graph was created from the custom responses that some respondents included.

- Responses for "researching Linux", "planning to switch to Linux", "in the process of [...]", etc. were all overridden to `Switching to Linux`. If the response mentioned plans to try a distro, that distro was NOT included. However, if the response mentioned that the move was already in progress, then the distro was included.
- If a response mentioned Windows/Linux/MacOS without specifying the subtype, the response was NOT included in this graph
- Some responses were combined
  - Responses for "Garuda Dr460nized" (1) were included under "Garuda"
  - Responses for "Tumbleweed" (1) were included under OpenSUSE
  - Responses for specific versions (numbered, LTS, stable) were combined under the nearest label

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.10-os_desktop_details.json"
  chart-type="bar"
  title="Desktop Operating System Subtype"
  subtitle="2025 Fedecan Instance Census"
  note="Respondents could select more than one option."
  :colors="['#801d8f']"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

### 2.11: What operating system(s) do you use for your mobile device(s)?

Options for Ubuntu Touch and postmarketOS were not listed in the question, but were added to the visualization based on custom responses.

::: tip Future Improvements

In the future, it would be helpful to have options for GrapheneOS and LineageOS.

:::

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- no answer (skip this question)
- I don't use a mobile device
- Android (came with phone)
- Android (custom ROM - e.g. GrapheneOS, LineageOS, etc)
- iOS
- Other - Ubuntu Touch
- Other - postmarketOS

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/2.11-os_mobile.json"
  chart-type="bar"
  title="Mobile Operating System"
  subtitle="2025 Fedecan Instance Census"
  note="Respondents could select more than one option."
  :colors="['#801d8f']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

## Section 3: Instance Usage

This first question provides insight into survey coverage. As mentioned elsewhere on this page, the vast majority of survey respondents were from forum / threadiverse platforms (ex. Lemmy, Piefed, Mbin, NodeBB, etc.)

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.0-instances.json"
  chart-type="pie"
  title="Which of the following platforms do you use day to day?"
  subtitle="2025 Fedecan Instance Census"
  note="Respondents could select more than one option."
  :colors="['#555555', '#4a789b', '#1d8f49']"
  show-percentage
/>

### 3.1: Forum / Threadiverse Questions

Some responses were overridden to fix typos or otherwise match to a valid instance to the best of our ability. Some examples include:

- `technics.de` to `discuss.tchncs.de`
- `world` to `lemmy.world`
- `sdf.org` to `lemmy.sdf.org`
- `dbzer0` to `lemmy.dbzer0.com`
- `Aussie` to `aussie.zone`

The category `private instance` is for those who did not want to identify their instance, such as those who are self-hosting.

As expected, the vast majority of responses are from instances operated by us. We pinned a post about the census on all three instances, and that helped us reach more people. We would love to collaborate with more instances in the future! You can also run this census on your own instance(s). We will be publishing all relevant code and guides in our repository: [github.com/fedecan-ca](https://github.com/fedecan-ca).

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.01-primary_instance.json"
  chart-type="bar"
  title="Primary forum/threadiverse instance"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses. Respondents could select more than one option."
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.1.02: Approximately how many communities do you participate in?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.02-community_participation.json"
  chart-type="bar"
  title="Approximately how many communities do you participate in?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Number of Communities'
          }
        }
      }
    }"
/>

#### 3.1.02: If you moderate any communities, how many?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.03-moderated.json"
  chart-type="bar"
  title="If you moderate any communities, how many?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.1.02: What new or existing communities do you want to see more people using?

Below you can find responses from users that consented to their responses being shared. We have taken note of the other responses without sharing them publicly.

Responses have been sorted alphabetically.

For tips on how to find and contribute to some of these communities, you can see this guide page: [Guide for users: How to find communities](https://fedecan.ca/en/guide/lemmy/for-users/how-to-find-communities). If someone puts together a list of direct links to the most popular communities in each category, we will edit it into this section later on.

::: details Read quoted responses from this section

> !Albumartworkheaven@lemmy.world (mine)
> !hiphopheads
> lastfm

> !magictcg@lemmy.world and !mtg@mtgzone.com

> !taneggs@lemmy.ca

> - "What Is" communities to identify plants, objects, rocks
> - Astronomy related but NOT space tech (I'm so sick of Muskrat)
> - Hobby related communities
> - Dog related communities

> - General, casual and nonpolitical chitchat
> - Trains

> 3D modeling and animation such as Blender or Maya, Music group based communities such as Ween, movies and music and animation in general.

> Absurd memes, home projects

> Always like music communities, more maker ones would be good too but we do have a solid woodworking community

> Am I the asshole

> Analog photography communities

> anthro_comics, furry, furry_irl

> Anything related to the outdoors or hobbies that don't involve computers: cycling, skiing, woodworking, gardening, beekeeping, etc. Fediverse users tend to be "indoor cats" in my experience. We need more people who have interests and hobbies away from screens.

> Aquariums!

> Art comms

> Ask Canada

> automotive

> Baseball, Hockey, Nova Scotia and other Canadian local geogrqphical communities, Pathfinder 2e, Astronomy

> Basically anything other than just news and memes. There are a lot of communities I'd like to have discussions in but have comparatively little traffic.

> Biology/science/nature identification

> Board games

> CanadaPolitics, socialism, Canadian culture

> Climbing

> Community Organizing, Building Info

> Daoism

> Demisexuality, Maple Music, city-based communities

> Diy, maker

> Emergency medicine

> ESP32 / electronics

> Football(soccer)

> fresh water fish tanks
> planted tanks
> fresh water shrimp tanks

> Fun discussion comms

> Game Specific community such as Pathfinder or Startrek Adventures. Vehicle specific communities and Trade specific communities

> Gaming and niche tech.

> Hockey, c/hockey is pretty dead and is the main reason I still use reddit

> I miss /r game verification and /r game valuation.
> Those were two of the main place i was at back then.
> Not much i can do about it, since i don't have time to be a mod.

> I probably have an opinion here but I don't have time to articulate it. But yes. I wish some communities were more active. I know that's not really helpful, I'm sorry.

> I read by All/New so I'm community agnostic, but would like to see more activity related to science fiction.

> I think you should leave
> Movie and TV discussions

> I would love for RPG community to get so big that having separate per-niche-system communities would make sense. We could also replace SO once it gets shut down but for that the communities about helping with programming projects would need to get much bigger, to not risk burnout from those who help

> It would be nice to see more involvement in the current ones. Star trek adventures TTRPG would be one that it would be nice to see more of.

> Lemmy needs more otherkin communities and more activity in the otherkin communities it does have, such as c/transspecies@lemmy.blahaj.zone. It also needs more nonbinary communities.

> Linux help, music communities

> linux, buycanadian,

> Local communities

> Local communities but that's on me

> Local communities for the cities we live in, particularly if they're not major cities.

> local communities, e.g. c/vancouver

> Local ones, Provincial and City communities

> Manitoba

> More activity in city-specific communities would be cool

> More activity in general, more medium broad communities specifically (e.g. standup comedy, not comedy and not "this specific comedian")

> More discussion, comedy, Pokemon Go

> More niche hobby communities would be nice. But I know that mostly just requires larger number of members to even have enough people who participate in whatever hobby that is.

> More niche hobby things (e.g., fiber arts, music production) need more engagement / posts.

> More sports would be nice. Currently need Reddit for that.’

> motorcycles, hypotheticals, IT network type stuff

> My emulation/rom community :p

> Neurodivergent and history focused communities, I feel these are underused compared to their reddit counterparts

> Niche communities for people's interests and things.

> No stupid questions

> non-technical communities, from gardening to woodworking.

> Pathfinder

> Political communities

> Professional arts communities

> programming and/or metal music

> Psychedelic Music, loweffortmemes

> Public health

> Retro gaming, rétro handheld

> sim racing communities

> specific video game communities (e.g. a Fallout community)

> Sports

> Sports

> Technical (as opposed to popular) science.
> Typography and fonts.
> Probability and statistics.

> Textile hobbies, professional advice communities, smaller communities for specific games or book series/authors, etc.

> The academic side of artificial intelligence

> The RimWorld communities, it's the only thing I miss from Reddit

> trans memes, lgbt memes

> Vehicle enthusiast communities. Overlanding, autocross, etc

:::

#### 3.1.05: How often do you visit your primary forum/threadiverse instance?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.05-number_of_visits.json"
  chart-type="bar"
  title="How often do you visit your primary forum/threadiverse instance?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.1.06: On average, how much time do you spend on the instance per day?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.06-time_spent.json"
  chart-type="bar"
  title="On average, how much time do you spend on the instance per day?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.1.07: How do you access the instance most often?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.07-access_type.json"
  chart-type="bar"
  title="How do you access the instance most often?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.1.08: When using the instance through a web browser, which interfaces do you use?

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- I don't use desktop to access the platform.
- no answer (skip this question)
- default (the default interface on the platform)
- etc.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.08-browser_interface.json"
  chart-type="bar"
  title="When using the instance through a web browser, which interfaces do you use?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
    'I don\'t use desktop': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

One custom response indicated that they use the platform through Wordpress.

#### 3.1.09: Is there another interface you would like us to add?

This question did not have any relevant responses. General feedback from this question was moved to the section near the end.

#### 3.1.10: On mobile, how do you access the instance?

The app `Avalon` was not in the original set of questions, and it was added to the graph from a custom response. The `Other` response was from a respondent developing their own app, which is not released to the public yet.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.10-mobile_access.json"
  chart-type="bar"
  title="On mobile, how do you access the instance?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.1.11: How does your main instance’s speed compare to other websites you use?

Two responses in `Other` indicated that they either haven't noticed anything, or that they haven't been paying attention to it.

For the users reporting slower speeds, we compared their primary instance(s), location, and reported internet speed. Generally the users had high internet speeds, and were located on a different continent from the instance (ex. North America to Europe, Europe to Australia, etc.)

However, this was not always the case. For example, a `lemmy.ca` user located in British Columbia (Canada) reported slow speeds, despite our server being located in the same province.

::: tip Future Improvements

Adding our contact details to this question would allow the people facing slower speeds to reach out to us outside of the census in case we can find a fix.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.11-speed.json"
  chart-type="bar"
  title="How does your main instance’s speed compare to other websites you use?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.1.12: Other than the main instance you use listed above, which instances do you have an account on or visit, and approximately how much time do you spend there daily?

Below you can find responses from users that consented to their responses being shared. We have taken note of the other responses without sharing them publicly.

Responses have been sorted alphabetically. Responses for "None" or "0" have been excluded from this list for length.

::: details Read quoted responses from this section

> ani.social
> lemmynsfw.com

> ani.social (mod some communities here), piefed.ca, piefed.world, crust.piefed.social, piefed.wjs018.xyz, feddit.online
>
> I bounce between instances a lot.

> Beehaw. I don't use it any longer. Lemmy.ca is my primary.

> Blahaj.zone

> Dbzer0

> dbzer0
> shitjustworks
> lemmynsfw
> literature.cafe

> dbzer0, lemmy.ml, lemmy.zip, lemme.ee

> feddit.org

> Fediscience.org
> Tabletop.social

> I generally don't use instances unless it's through federation already.

> I have a few other accounts, they are strictly backup style accounts in case main instance goes down.

> I keep meaning to try piefed but haven't

> I started on .world but there were prolonged speed issues so went to .ca. I rarely go back to world.

> I used to be .worlder

> i used to use lemmy.world but i stopped using it. lemmy.ca is much faster and more reliable

> I usually just sort my timeline by all and comment on whatever piques my interest.

> lemmy.blahaj.zone

> lemmy.blahaj.zone, lemmy.world, lemmy.ml, mainly lurk

> Lemmy.ca

> Lemmy.ca, ttrpg.network, tenforward.social

> lemmy.dbzer0.com 1 hour a day, piefed.ca monthly, l.hostux.net rarely, K.fe.derate.me (weekly)

> Lemmy.ml it depends on how bored i if i switch accounts

> Lemmy.nsfw

> Lemmy.nsfw - 2 mins daily (but more like 1h per month total, not daily)

> lemmy.world

> lemmy.world

> Lemmy.world

> lemmy.world
> I have the account for moderating purposes, and use it for anywhere from 5 to 30 minutes per day to tend my communities.

> Lemmy.world
> Beehaw.org
>
> - only when lemmy.ca is down

> Lemmy.world (I check it occasionally, quick glance once a day)
>
> Sopuli.xyz (same as above)
>
> Piefed.social (same as above)
>
> I’ved settled in to my mains lemmy.ca and piefed.ca. I have been using the piefed.ca more and more.

> Lemmy.world - never
> Lemmy.ml - never
> Sh.itjust.works - rarely
> Piefed.social - never

> lemmy.world almost mever justbif lemmy.ca is down wich is almost never.

> Lemmy.world, mander.xyz, lemmy.dbzer0.com, sopuli.xyz, ttrpg.network

> Lemmy.world. I don't go there anymore

> LemmyNSFW, unsure about time spent

> lemmynsfw. For... Reasons.

> LemmyNSFW.com; < 1 hour
> Lemmy.World; 0 hours

> mander.xyz
> Once a month or less.

> Masto.ai about 1hour

> Once I've gone too deep into browsing lemmy.ca, like pages and pages, where the comment counts at consistently hitting 1 or 0, I'll hop on sh.itjust.works to cap off my day. I usually browse lemmy to kill the some time between jobs at works or while a job is running. The tab with lemmy will stay open most of the shift and I'll browse intermittently during the shift.

> piefed.ca

> piefed.ca

> piefed.social - most of the time until piefed.ca works better, my community still didn't work quite right on the piefed.ca instance last I checked so can't re-mod myself.

> pixelfed.sopelj.ca and sharkey.sopelj.ca
> I spend probably 30min on pixelfed posting corgi photos and looking at others

> Programming.dev

> programming.dev - < 1 hour

> sh.itjust.works, occasionally, mostly for variety when i've spent >2 hrs on lemmy.ca

> sjw, ml
> Log in to them once a month or when I want to see some content or comments from he bear or lemmygrad

> Spare account for .zip on my iPad but rarely use it

> You mean community from other instances or the instance itself?
> I go regularly on slrpnk.net sometimes to sopuli.xyz or mander.xyz. I go all the time to plenty of remote communities from numerous instances .

:::

#### 3.1.13: Do you use centralized forum or threaded platforms (e.g. Reddit, Hacker News)?

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- no answer (skip this question)
- I never use them as I don’t have a reason to
- I never use them as I actively avoid them
- I only visit when I come across a link
- I use them, but I use federated alternatives more
- I use them about equally as much as federated alternatives
- I use them more than federated alternatives

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.1.13-elsewhere.json"
  chart-type="bar"
  title="Do you use centralized forum or threaded platforms (e.g. Reddit, Hacker News)?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#4a789b']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

**Custom Responses:**

All custom responses were placed in `Other`. Some common themes from the custom responses include:

- Using proxies or privacy respecting frontends such as RedLib, libreddit, and xcancel, or using a site without being logged in
- Avoiding or using DNS and network blocks for some sites (ex. Reddit, Twitter, and/or Facebook), while still using others
- Opening links to Reddit when it is a result on a search engine, or when it is the only relevant result
- Using sites like Reddit for a handful of key communities which don't have a presence on the Fediverse yet

### 3.2: Pixelfed Related Questions

#### 3.2.01: Which Pixelfed instance would you consider to be your primary instance?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.01-primary_instance.json"
  chart-type="bar"
  title="Primary Pixelfed instance"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.02: How often do you visit Pixelfed?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.02-number_of_visits.json"
  chart-type="bar"
  title="How often do you visit Pixelfed?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.03: How do you access Pixelfed most often?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.03-access_type.json"
  chart-type="bar"
  title="How do you access Pixelfed most often?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer (skip this question)': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.04: On average, how much time do you spend on Pixelfed per day?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.04-time_spent.json"
  chart-type="bar"
  title="On average, how much time do you spend on Pixelfed per day?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.05: If you post on Pixelfed, what type of content do you share?

A custom response for "Album Artworks" was included under `Art, photography, or creative work`. A custom response for "Family" was included under `Personal life moments/daily updates`.

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.05-posted_content.json"
  chart-type="bar"
  title="If you post on Pixelfed, what type of content do you share?"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses."
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer (skip this question)': '#555',
    'I don\'t post anything (only lurking)': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.06: If you post similar content on other platforms (not Pixelfed), which platforms are you posting it on?

There were 2 responses for `Lemmy` and 1 response for `Instagram`.

#### 3.2.07: What type of content do you follow on Pixelfed?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.07-followed_content.json"
  chart-type="bar"
  title="What type of content do you follow on Pixelfed?"
  subtitle="2025 Fedecan Instance Census"
  note="Adjusted data is displayed, with overrides for custom user responses."
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer (skip this question)': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.08: Do you follow anyone that you know personally?

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.08-followed_know_personally.json"
  chart-type="bar"
  title="Do you follow anyone that you know personally?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.09: How do you prefer to discover new accounts to follow?

::: tip Future Improvements

There was one custom response in `Other` for `From the person themself`. This did not fit nicely into any existing category, and it could be listed as a new category in the future.

:::

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- no answer (skip this question)
- Using hashtags and the search feature
- Browsing the local and global feeds
- Viewing content that is boosted/reblogged by users that I am following

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.09-discovery_preferences.json"
  chart-type="bar"
  title="How do you prefer to discover new accounts to follow?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.10: On mobile, how do you access Pixelfed?

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- I don't use desktop to access the platform.
- no answer (skip this question)
- etc.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.10-mobile_access.json"
  chart-type="bar"
  title="On mobile, how do you access Pixelfed?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer (skip this question)': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.2.11: Do you use a centralized version of this platform (e.g. Instagram, VSCO, Cara, Pinterest)?

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- no answer (skip this question)
- I never use them as I don’t have a reason to
- I never use them as I actively avoid them
- I only visit when I come across a link
- I use them, but I use federated alternatives more
- I use them about equally as much as federated alternatives
- I use them more than federated alternatives

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.2.11-elsewhere.json"
  chart-type="bar"
  title="Do you use a centralized version of this platform (e.g. Instagram, VSCO, Cara, Pinterest)"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#1d8f49']"
  :column-colors="{
    'no answer (skip this question)': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

### 3.3: Fediverse related questions

#### 3.3.01: What decentralized / federated platforms do you use?

::: tip Future Improvements

From our feedback section:

> One federated service that you missed is Ibis (federated wiki). It's in its infancy, but it exists.

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.3.01-fediverse_platforms.json"
  chart-type="bar"
  title="Fediverse related questions What decentralized / federated platforms do you use?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#8F1D3B']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

#### 3.3.02: Where did you hear about the Fediverse, and what made you want to join?

This was a free text question. Some common themes include:

- The [2023 Reddit API controversy](https://en.wikipedia.org/wiki/Reddit_API_controversy). Other common terms that were used include "APIpocalypse" and "Reddit exodus". Some responses made a point to mention specific apps including Apollo, Boost, Infinity, Reddit is Fun (RiF), and Sync.
- Other Reddit controversies related to harmful content, the IPO, ads, harmful algorithms, poor moderation, and several mentions of the general "direction" of the changes/policies.
- Searching for an alternative to Reddit, or seeing a post/article about alternatives to Reddit.
- The [changes made to Twitter under Elon Musk](https://en.wikipedia.org/wiki/Twitter_under_Elon_Musk), and the subsequent migration away from Twitter by a number of communities
- [Facebook's censorship response](https://en.wikipedia.org/wiki/Censorship_by_Facebook#Online_News_Act_and_the_Canadian_wildfires) to the Canada's Online News Act, including blocking local Canadian news about wildfires
- Avoiding American platforms, or looking for platforms owned by and/or based in a specific region (ex. Canada)
- Trying it and preferring the content/community
- Interest in decentralization, self-hosting, account migrations, or other technical aspects of the Fediverse

Below you can find some responses from users that consented to their responses being shared. A number of responses were not included here for length as they were identical, or very similar to another included response.

::: details Read quoted responses from this section

> /r/RedditAlternatives originally

> 2023 Reddit API Kill (Relay for Reddit) -> Lemmy.ca (Connect/Voyager) -> Piefed.ca (Voyager). I moved to piefed when it became available to avoid supporting the crazy tankie devs of Lemmy.

> A friend created pixelfed

> About 2 years ago as musk enshittified Twitter

> alternative to reddit, without the naziism and catering inappropriately to advertisers

> alternativeto and a few youtube videos

> Ars Technica comments

> Came over in the initial Twitter migration

> Corey Doctorow, then later the 2023 Reddit migration

> Decentralization

> First Diaspora back when I quit Facebook, then Mastodon when I quit Twitter. Somewhere on the web, don't know exactly

> Friends

> FSF newsletter

> Had heard of mastodon, I left reddit during the 3rd party apps exodus

> Heard about it in Reddit and joined when 3rd party API became disabled.

> Heard about it initially in chatter regarding fash akko instances, then Gab using the Masto codebase.
> Became interested around when Elmo bought Twitter.

> Heard about it on the TTRPG subreddit during the API debacle, when a major part of the community migrated to Lemmy

> Heard about lemmy on reddit as an alternative, happy to move away from a single point of failure.

> Heard about Lemmy soon after joining Mastadon, and seeing the writing on the walls about the way Reddit was going, made an account. Which came in handy when the API changes came about. Haven't looked back since.

> Heard about Mastodon when musk bought Twitter. Found out about lemmy during the Reddit Exodus.

> Heard from reddit, was sick of reddit policies and hostility towards users

> Heard from Reddit. Wanted to support decentralized platforms.

> Heard of it during Reddit exodus 2023. I liked the mission of an open/decentralized alternative not subject to corporate interests.

> Heard of it via Reddit when rumors started to flow that Elon was buying Twitter

> I come during the API fiasco. I was a new Reddit user who have hear a lot about the fediverse from the privacy community but never felt it was easy to register because I never found a good tutorial and enough motivation back then.

> I decided to leave Reddit and researched alternatives. The Fediverse was the most attractive option.

> I don't recall how I heard about mastodon, and I signed up for it a long time ago. I heard about lemmy after the reddit API changes.

> I don't remember exactly but some time before Twitter buyout there was another exodus. That's when I created Mastodon account but Twitter-like format did not fit me well in general. When "Reddit API" exodus happened I learned about Lemmy. I wanted to join half because of Reddit enshittification, half because Fediverse is grassroots movement

> I first learned about mastodon looking for a self-hosted alternative for Twitter

> I have always kept my eye out for alternative platforms, I tend to pick those over the popular platforms. Especially when it comes to social media.

> I heard about it during the first major Reddit exodus, and joined in order to replace Reddit (I’d been very active on Reddit for more than a decade, now I use Lemmy instead)

> I heard about it on Reddit and wanted to join because reddit is going downhill

> i heard about lemmy when Reddit made api pricing changes and i was kicked off boost for Reddit

> I heard about Mastodon pretty early. Elon Musk's purchase of Twitter pushed me to move.

> I heard of the fediverse earlier this year from privacy communities. I was initially uninterested, but quickly became interested after being banned off Reddit, when I signed up for Lemmy.world, though i was unable to post thanks to restrictions on vpns, leading me to sign up for piefed.social. I then signed up for Mastodon not long after.

> I honestly can't remember for sure. It was most likely on Reddit after the API incident with a smaller chance being I saw it on tildes.net. When Reddit alternatives were being talked about at that time I first found tildes.net which I liked because the layout was very similar to old.reddit which is what I was using. I eventually found lemmy.ca and the layout/design was that sweet spot of being more modern than old.reddit without going to far with it. It's honestly just right for me. I've tried the other frontends but they didn't suit me or were too mobile-focused. I appreciate the shade of grey used in the background, that's usually my preference. Some instances use a pure black which I don't enjoy as much.
>
> As far as picking lemmy.ca over other lemmy instances goes, one nice thing I got used to when using Reddit was seeing some of the local subreddits for Canada or my city's subreddit. It kind of helped me keep in touch with news or general happenings around me. So when I found lemmy.ca, it kind of filled that gap that was missing when I was originally browsing lemmy.world or lemm.ml in the early days.

> I like to keep up with different social media sites/networks. Discovered Mastodon and signed up to see what's going on.

> I made my first account (not this one) during the reddit exodus when they locked the API down and treated their moderators poorly. I came across it on a link on a protest forum.

> I saw someone on Reddit mention Piefed

> I think I just looked for Reddit alternatives when I got banned.

> I think years ago I was looking up alternatives to Reddit and found out about the fediverse and I joined because I wanted to be apart of a better community.

> I used to work for Identi.ca, I was there when the Deep Magic was written

> I was a Reddit refugee from the middle of 2023. I heard about Lemmy from Reddit posts just before I left.

> I was monitoring and testing lemmy when it first came out out of interest in software, and then switched after the Reddit api debacle

> I was part of the great Reddit migration, before lemmy.ca I was a member of dbzero

> I was part of the pre-IPO Reddit exodus

> I'd heard of Mastodon for years and kept trying until it recently became worth using.

> Initially heard about Mastodon, which was interesting re: the decentralized structure but not of direct interest (not a big microblogging guy). Joined Lemmy following the API problem at reddit.

> Initially on Reddit during the API protest. I had been unhappy with the state of Reddit for a while and it was a good time for a change.

> Initially on Twitter, but a lot more when the backlash from Reddit happened

> It as over 10 years ago, I don't really remember but it was probably something like Hacker News or Reddit.

> It's been so long that I've forgotten, but when Twitter/X's owner did the salute after the inauguration, I looked for alternatives, but I had been on some since Facebook/Meta stopped Canadians from sharing news articles.

> Left reddit when they killed 3rd party apps. Read about the fediverse, liked the idea, figured I'd join.

> Linux related podcasts I think.

> Looked for a Canadian alternative to Reddit.

> Looked for alternatives to Reddit as US tech companies have too much power in Canada and didn’t want to support that.

> Lost access to the only way I had of consuming Reddit content. I don't remember where I learned of the Fediverse.

> Madison when Twitter got bought out

> Mainstream media

> Mass Reddit Exodus

> Mastodon

> Mastodon advertising during Twitter->X rebranding

> Mastodon as an alternative to Twitter in 2021

> Mastodon is the first I heard about but I didn't really like the Twitter "shout into the void".
>
> Reddit was down for a day around 3 years ago and increasingly frustrating to use, so I ended up stumbling upon Lemmy when looking for a replacement.

> Musk said he was going to buy twitter so I looked for an alternatives

> Nerds

> Not sure / don't remember

> Old twitter, wanted to join when Musk talked about buying Twitter

> On blogs

> On Reddit when they went public, almost 3 years ago already.

> On YouTube, the Reddit API drama

> Originally heard of Mastodon from Corey Doctorow way back in the early days, not sure where I heard of Lemmy

> Originally, reddit exodus, wanted something community run

> Other people experimenting with alternatives to Twitter. I first joined Mastodon but haven't used it in a while. I made a Lemmy account for the pixel placing event

> People talked about mastodon around me. I went to lemmy do to the reddit moderation fallout especialy when r/traaa shut down

> Probably someone posted about it in a reddit forum during the api shutdown.

> Reddit

> Reddit (tried) to kill third party apps, and Boost was moving to a new version for Lemmy.

> Reddit 3rd party app ban

> Reddit 3rd party Exodus. Heard about other fediverse options on Lemmy.

> Reddit alternative

> Reddit alternative, Twitter alternative

> Reddit api boycott

> Reddit API changes

> Reddit API fiasco

> Reddit api shenanigans

> Reddit apocalypse

> Reddit App Shit

> Reddit being lame lol

> Reddit broke Rif, and I left for lemmy.

> Reddit doing reddit things

> reddit during API restrictions drama

> Reddit during the app API exodus.

> Reddit excursion

> Reddit exodus

> Reddit going to shit

> Reddit killed 3rd party clients

> Reddit migration

> Reddit Mobile API shutdown

> Reddit probably, but I don't remember. I was interested in joining because I wanted to move away from corporate social media, particularly such hosted in the USA.

> Reddit purge

> Reddit, and I joined because I need to decouple from American corporations

> Reddit, lol

> Reddit. Need I say more?

> resetera

> Saw it referenced on reddit as a reddit alternative. Lemmy isn't centralized or beholden to corporate/fascist interests. (FUCK SPEZ)

> Search engine result. Reddit was profiting off volunteer work.

> Soon after the Twitter fiasco

> Switched from Reddit to Lemmy during the great migration 2 years ago

> That fact that it's not owned by a massive corporation and because it's Canadian. We need more Canadian tech organizations.

> The better community I feel and openness.

> The ideal of account migration and interoperability.

> The Reddit API drama in June 2023 inspired me to look around for alternatives. Lemmy was a small community that was about to blow up, and I wanted a front seat to watch it for and develop.

> Theverge. I joined because of the lack of algorithms, videos being almost inexistant on pixelfed, open source meaning that i don't expect features to be removed

> Thinking about local alternatives, concern over centralised data/collection

> Twitter exodus

> twitter then reddit

> Twitter, pre-Musk, during the first exodus.

> Unfairly banned from Reddit and I searched for alternatives and found Lemmy.

> Via reddit. Connection to foss made me interested

> Was looking for an alternative to reddit, don't remember the details...

> Way back in the Google+ days.

> Way back when mastodon was started.

> When it kinda started 5 years ago, I liked the concept of decentralization.

> When it started to be an alternative to reddit. It was decentralised and some instance are user-owned.

> When Reddit killed API access and Infinity stopped working

> When Reddit was asking for money for their api

> With the demise of Apollo app I wanted somewhere to go and found it through others mentioning.

> YouTube and reddit. Wanted analternative to the corporate web.

> YouTube, and thought it was good that it's private

:::

#### 3.2.03: How soon after learning about the Fediverse did you make an account and/or migrate over? Did you have any difficulties?

This was a free text question.

For the timeline, different people had different definitions of when they had "migrated over" including the time to first trying it, the time to make an account, the time to close accounts on other platforms, or the time to begin using it regularly. When graphing these responses:

- Responses without a clear timeline were placed in `Unknown`
- Responses using words such as "immediately", "right away", "instantly", etc. were placed in `< 1 minute`
- Responses using words such as "quick", "soon", "not long", or variants of those words (ex. "fairly quickly") were placed in `misc. short`

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.3.03-onboarding-time.json"
  chart-type="bar"
  title="How soon after learning about the Fediverse did you make an account and/or migrate over?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#8F1D3B']"
  :column-colors="{
    'unknown': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

For the difficulties, some common responses include:

- not knowing who or what to follow
- lack of content in specific niches
- the learning curve for learning how the platform or network works behind the scenes
- technical users having difficulty with running their personal self-hosted setups
- decision paralysis around picking a server, how servers differed, etc.
- mentioning issues with software or UI, many of which had confirmations that the issue has since been fixed/improved/patched

#### 3.3.04: Have you donated?

For this question, some custom responses mentioned financial difficulties, or plans to donate in the future. We can only speak for Fedecan, but we always want to emphasize that donating is completely optional. You know your circumstances best, so please only donate during times when you are able to and want to. ❤️

::: tip Future Improvements

We received a response that pointed out how some instances operate as a co-op, which collect annual dues from their members. We can adjust this question to account for that model in the future.

:::

::: details Original category labels

The labels in the chart below have been shortened to fit nicely on all screen sizes. The original labels from the census question are as follows:

- no answer (skip this question)
- I've donated money to one or more fediverse instances
- I've donated money to the developers of a fediverse platform
- I've donated money to another part of the ecosystem (app, tool, etc)
- I've donated my time to platform development (e.g. contributed code, translations, etc)
- I've donated my time to my instances (e.g. technical support, administrator duties)
- I've donated my time in another way (e.g. contributing to an app)
- I haven't donated
- I don't know how, and would be interested to learn more

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/3.3.04-donation.json"
  chart-type="bar"
  title="Have you donated?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#8F1D3B']"
  :column-colors="{
    'no answer': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

## Section 4: Do you have any feedback about your instance, this survey, or anything else?

### 4.1: Feedback

Question specific feedback has been moved into a respective section above.

Below you can find responses from users that consented to their responses being shared. We have organized the feedback by target audience, and we included responses from our team when appropriate.

::: details Feedback for our team (Fedecan)

> I find that Lemmy.Ca specifically gives me issues quicker when my Wifi or cellular is a poor connection. It gives me an error when i sort by local in boost, but if I switch to all, I will get a feed of just my non Lemmy feeds.

That is good to know, we will keep an eye out for this.

> Bring back fediverselore! I'll gladly moderate it!

> lemmy.ca should federate with hexbear and lemmygrad again and let individual users block the instances instead. Also it's possible to default-block now instead.

Generally, each instance will have a meta community or a place to request mod access. We will try to hold a discussion around these requests sometime in the future, but you can also kickstart the discussion in [meta@lemmy.ca](https://lemmy.ca/c/meta)

> Image display bugs on Pixelfed

This bug has a few causes. On our side, we are currently migrating away from Cloudflare and the response times during testing have caused some slowness when loading images. Pixelfed also has a bug where some images do not load at times, which is being worked on.

:::

::: details Feedback for the census

**Future question requests:**

> I wish there was ranking of how people consume the content : local feed, global feed, hashtags

**Platform related issues:**

> Not sure why I keep getting a prompt from my browser to resend the info because the form is being redirected on every page. I use IronFox and probably some privacy setting is not vibing with your form system.

**Points of Confusion:**

> I thought you wanted to know about why I'm using fediverse stuff.

> There is no option to indicate where one currently lives in this survey. For example, I am Canadian but I do not live in Canada.

- We can clarify this in the future. The location question with options for provinces or continents was meant for the users current location, while the ethnicity question was for their ethnic origins.

> This survey was a little intrusive, it would be nice to know what the information is for

- Please see a response to this at the end of this section.

:::

::: details Comments from people looking for ways to help

> I wish I could donate my time and skills in a meaningful way, but I'm not a programmer. I wish there were easy tasks that anyone could do with a little training.

> I'm a system admin by day and I wish there was a good way for me to help my instance with my skills in IT, rather than just keeping active and possibly giving money (if I can ever afford to, and be motivated enough to actually submit a donation)...
>
> Whether that's doing some kind of back up, or lending a hand with systems maintenance or anything... I dunno. I know how important security is, so I get why there's no easy way to do it; I'm just some person on the Internet, so suspicion is appropriate and expected, but I still wish I could provide my knowledge in some way that would benefit my fellow lemmings.

:::

::: details Other feedback and general comments (ex. other instances, apps)

> I don't know any good frontends for Piefed and I don't like the default one. I want to use it more but I don't like the interface

> I listed both Lemmy and piefed and my "main" platform - it's Lemmy, but I'm trying to move to piefed

> I still don't use lemmy.ca as much as I'd like since there is just more activity on reddit. But with that in mind, I'm generally more likely to participate in discussions on lemmy than reddit. Though it seems like forums in general are just unfriendly which makes me not participate as much as I'd like. I feel like micro blogging (like mastodon) tends to be friendlier and more positive though it has it's dark sides too.

> I think you're doing a great job. It's unfortunate that it is so hard to get people to make the move from the crummy legacy platforms. I try every once in a while to get people who follow me to transition, but almost no one does.

> I wish it got more funding from the government. All Canadians need an online community to communicate with each other and to inform ourselves. We're too reliant on US platforms that are controlled by who pays the most to advertise on those platforms.

> Piefed is way better than Lemmy. Especially after 1.4.0. Love the post/comment reaction emojis, reminds me of Facepunch Forums back in the day.

> Photon is slow sometimes with my piefed account

> Regarding the client questions: keep in mind that AFAIK so far none of alternative clients support PieFed's features that I find crucial (feeds, for example). I'm not really a fan of using web browser for that (notifications don't really work, on Android it gets unloaded, etc...) but I don't really have other options

> Lately there seems to be a lot of conflict on the fediverse (which is likely due to the world stage being what it is), but it is getting to the point where I'm considering stepping away from the fediverse for the same reasons I left the likes of Reddit.

:::

::: details General praise and well wishes

> :3

> Excellent instance and admins! Zero complaints

> Excellent work by the maintainers

> Fedecan forever!

> Go Canada!

> Great work, keep it up.

> Happy with the instance:)

> I <3 Fedecan

> i feel like lemmy.ca has a fantastic moderation team and the service is fast and reliable.

> I feel very lucky to have lemmy.ca and piefed.ca run by such extremely professional, knowledgable, and well organized people.

> I like my instance a lot. <3

> I like that my instance doesn't defederate anyone.

> I love Lemmy.CA

> I really enjoy the way Fedecan manages its instances. I have an ongoing donation to support it.

> I'm very grateful to the maintainers.

> It's great, thank you for it!

> It's great. I wish the Lemmy community was a bit larger or seemed to be slowly growing, but it seems like it's barely critical mass.

> It's working great so far and I hope Lemmy continues to prosper.

> Keep doing the work. Having an independent, non-profit social media platform is going to only get more important over time. Just like we found Lemmy and Lemmy.ca because it was there and it worked, others will find it in the future as the for-profit corporate platforms keep getting worse (enshittifying.) We're are unlikely to ever get as large as them but we don't have to be in order to serve a vital purpose for our neighbours.

> Keep up the good work

> Keep up the good work!

> Keep up the good work!

> Keep up the good work. Hope to see a chat service from Fedecan if it is feasible.

> Keep up the good work. It's been a fantastic few years of this platform and I want to see it grow.

> Keep up the great work ! 👍

> Keep up the great work! .ca is amazing and I'm super happy with the instance. Thanks to everyone that keeps it running!

> Keep up the great work. With the setting up of Fedecan and having the two lemmy instances I frequent under that umbrella, it gives me confidence that they'll be long-living and well supported.

> Lemmy.ca has been nothing short of delightful at every opportunity.
>
> Out of all the surveys I've filled out, I trust this one the most with the information asked of me. Thanks!

> Lemmy.ca is awesome and I appreciate the hosts work a lot

> Lemmy.ca is great! Keep up the fantastic work!

> Lemmy.ca is the best and most stable of the instances I use.

> Let's keep the momentum going and stop the enshittification of the Internet!

> Love it. Keep going.

> My instance is wonderful, and I'd like to thank the devs, moderators, and community founders for everything they do. That is all.

> naur

> Nice Survery, doesn't feel too long, can skip questions that I'm not comfortable answering

> No

> Nope

> not at the moment

> Not really, I'm glad you're doing this census though.

> Overall, I think the .ca instances are great, and a survey like this is a worthwhile endeavor to help serve your users better. The fedecan guide is one of the best out there for lemmy and I am hopeful to help populate the piefed guide soon.

> Piefed development is quick and the main developer (rimu) was nice and responded quickly when discussing bugs. Bug fix within the day.

> Seems to work great, glad you're here!

> Stay strong, ask for help if needed. FOSS is the way.

> Thank you!

> Thanks for doing a survey!

> Very happy lemmy.ca and want to extend thanks to the team.

> Very happy with lemmy.ca. Keep up the great work, Fedecan team.

> Very interesting, have essentially dropped Reddit except for r/Ottawa
> Very hopeful for continued growth and success. Very hapoy to have Canadian federated focus available

> We love you Canada

> You guys are great :)

> You guyz are doing a tremendous job, i hope you are also having fun.

:::

For users who did not want their responses shared, we have summarized some general feedback:

- A request to developers of desktop frontends to allow for infinite scroll, without having to click the next button.
- A request to all developers to work on a way to share universal links which function across instances
- A request for a better explanation on how the information from this census will be used. For anyone wondering the same, the only use case planned for this year is this article. This article is intended for admins, developers, and other community members to guide future decision-making and to satisfy curiosity.
- Additional thanks to mods, admins, instances, the people and organizations running them

### 4.2: Have you encountered any accessibility related challenges while using Lemmy, Piefed, or Pixelfed?

::: tip Future Improvements

We should encourage people to include additional details, such as which instance, platform, or app they are using.

:::

General feedback (not related to accessibility) has been moved to Question 4.1 above.

Some responses from this section include:

- Missing non-English translations
- A note about French translations of Piefed, and how translations of non-gendered words can be a problem for screen readers
- The hit box to collapse threads is very small. This was likely about Lemmy, but this is true for a number of Desktop UIs and apps.

### 4.3: Would you like to share your results within an anonymized data set?

Around 75% of users said yes, while the rest said no or had specific requirements.

The anonymized data sets are not yet available. If there is interest, we will work on putting those together and release them here.

<!-- TODO -->

### 4.4: What is your current favourite genre of music? 🎶

In the last census, [we asked for everyone's favourite dessert](https://fedecan.ca/en/announcements/2024-02-10_censusResults#_4-1-just-desserts). This year we asked about everyone's favourite genre of music.

Here is a word cloud containing every genre after the responses were cleaned:

- If a response listed multiple distinct genres, they were separated into multiple entries
- If only an artist was mentioned, the genres were extracted from Wikipedia. If artists were mentioned as examples, no further genres were added.

<VpvImage :imageConfig="{image: '/announcements/2026-04-03_censusResults/4.4-music-wordcloud.png'}" enableBorder enableZoom />

The responses were processed further for the graph below. Genres with 4 or fewer entries were placed in a parent category. We recognize that many of these genres are not actually contained neatly inside one parent category, and many of them are adjacent to the indicated category at best. Please use both the word cloud above and the graph below to get an idea of how people responded.

::: details Category mapping

```py
LABEL_RENAMES = {
    # --- 80s ---
    # 80s subgenres
    "80s_alternative": "80s",
    "80s_pop": "80s",
    # --- 90s ---
    # Decade tag
    "90s": "90s",
    # 90s subgenres
    "90s_alt": "90s",
    "90s_grunge": "90s",
    "90s_pop": "90s",
    # --- classical ---
    # Classical subgenres
    "baroque": "classical",
    "classical_arabic": "classical",
    "classical_contemporary": "classical",
    "classical_remixed": "classical",
    "classical_romantic": "classical",
    "orchestral": "classical",
    # --- country ---
    # Country/Americana family
    "americana": "country",
    "bluegrass": "country",
    "country_alt": "country",
    # --- edm ---
    # EDM subgenres
    "edm_focus": "edm",
    "edm_house_french": "edm",
    "edm_house_tech": "edm",
    # EDM/dance family
    "chillstep": "edm",
    "dance": "edm",
    "dubstep": "edm",
    "eurobeat": "edm",
    "gabber": "edm",
    "garage_uk": "edm",
    "hardstyle": "edm",
    "nightcore": "edm",
    "techcore": "edm",
    # --- electronic ---
    # Ambient family
    "ambient": "electronic",
    "ambient_space": "electronic",
    "electronic_ambient": "electronic",
    # Electronic family
    "breakbeat": "electronic",
    "breakcore": "electronic",
    "electro": "electronic",
    "electronica": "electronic",
    "electronic_old_school": "electronic",
    "glitchhop": "electronic",
    "idm": "electronic",
    "indie_electronica": "electronic",
    # --- folk ---
    # Folk subgenres
    "folk_celtic": "folk",
    "folk_eastern_canada": "folk",
    "folk_electronica": "folk",
    "folk_hippie": "folk",
    "folk_indie": "folk",
    "folk_irish": "folk",
    "folk_protest": "folk",
    "folk_québecois": "folk",
    # Folk adjacent
    "filk": "folk",
    "polka": "folk",
    "sea_shanties": "folk",
    "traditional_irish": "folk",
    # --- funk ---
    "funk": "funk",
    "funk_future": "funk",
    "funk_jazz": "funk",
    # --- hip_hop ---
    # Hip-hop subgenres
    "hip_hop_90s": "hip_hop",
    "hip_hop_alternative": "hip_hop",
    "hip_hop_german_feminist": "hip_hop",
    # Rap/hip-hop family
    "phonk": "hip_hop",
    "rap": "hip_hop",
    "trap": "hip_hop",
    # --- house ---
    "house_french": "house",
    "house_jazz": "house",
    "house_minimal": "house",
    "house_tech": "house",
    # --- jazz ---
    # Jazz subgenres
    "jazz_dreamy": "jazz",
    # Jazz adjacent
    "behop": "jazz",
    "fusion": "jazz",
    "lounge": "jazz",
    # --- metal ---
    # Metal subgenres
    "metal_70s": "metal",
    "metal_alt": "metal",
    "metal_black_melodic": "metal",
    "metal_death": "metal",
    "metal_death_melodic": "metal",
    "metal_doom": "metal",
    "metal_epic": "metal",
    "metal_extreme": "metal",
    "metal_folk": "metal",
    "metal_grind": "metal",
    "metal_heavy": "metal",
    "metal_industrial": "metal",
    "metal_instrumental": "metal",
    "metal_nu": "metal",
    "metal_old_fashioned": "metal",
    "metal_power": "metal",
    "metal_prog": "metal",
    "metal_stoner": "metal",
    # Metal adjacent
    "deathcore": "metal",
    "doom": "metal",
    # --- misc_other ---
    # Decade/era tags
    "00s": "misc_other",
    "70s": "misc_other",
    # Style tags
    "style_angry": "misc_other",
    "style_bass": "misc_other",
    "style_beat": "misc_other",
    "style_fast": "misc_other",
    "style_old": "misc_other",
    # Blues family
    "blues": "misc_other",
    "blues_delta": "misc_other",
    # Ska / Reggae family
    "reggae": "misc_other",
    "ska": "misc_other",
    "soca": "misc_other",
    "salsa": "misc_other",
    # Regional/cultural tags
    "canadian": "misc_other",
    "punjabi": "misc_other",
    "religious_souffi": "misc_other",
    # Misc standalone
    "ancient": "misc_other",
    "audio_book": "misc_other",
    "disco": "misc_other",
    "industrial": "misc_other",
    "instrumental": "misc_other",
    "liminal": "misc_other",
    "progressive": "misc_other",
    # --- pop ---
    # Pop family
    "citypop": "pop",
    "contemporary_adult": "pop",
    "hyperpop": "pop",
    "indiepop": "pop",
    "pop_alt": "pop",
    "pop_dream": "pop",
    "pop_electro": "pop",
    "pop_indie": "pop",
    "pop_j": "pop",
    "pop_k": "pop",
    "pop_kenyan": "pop",
    "pop_power": "pop",
    # --- punk ---
    # Punk subgenres
    "punk_electro": "punk",
    "punk_folk": "punk",
    "punk_hardcore": "punk",
    "punk_indie": "punk",
    "punk_post": "punk",
    # Punk/hardcore adjacent
    "beatcore": "punk",
    "darkwave": "punk",
    "emo": "punk",
    "emo_midwest": "punk",
    "emo_revival_midwest": "punk",
    "hardcore": "punk",
    "hardcore_post": "punk",
    # --- r&b_soul ---
    # R&B / Soul family
    "r&b": "r&b_soul",
    "soul": "r&b_soul",
    "soul_neo": "r&b_soul",
    # --- rock ---
    # Rock subgenres
    "rock_70s": "rock",
    "rock_80s": "rock",
    "rock_acid": "rock",
    "rock_alt_modern": "rock",
    "rock_and_roll": "rock",
    "rock_arena": "rock",
    "rock_celtic": "rock",
    "rock_experimental": "rock",
    "rock_folk": "rock",
    "rock_garage": "rock",
    "rock_german": "rock",
    "rock_hard": "rock",
    "rock_hard_classic": "rock",
    "rock_indie": "rock",
    "rock_industrial": "rock",
    "rock_math": "rock",
    "rock_old": "rock",
    "rock_pop": "rock",
    "rock_post": "rock",
    "rock_prog, rock_math": "rock",
    "rock_prog_70s": "rock",
    "rock_psych": "rock",
    "rock_punk": "rock",
    "rock_punk_emo": "rock",
    "rock_yatch": "rock",
    # Rock adjacent
    "grunge_doom": "rock",
    "neo_psychedelia": "rock",
    "new_wave": "rock",
    "new_wave_80s": "rock",
    "shoegaze": "rock",
    # --- soundtracks ---
    "soundtrack_fantasy": "soundtracks",
    "musical": "soundtracks",
    "musical_theatre": "soundtracks",
    # --- synthwave ---
    # Synthwave subgenres
    "synthwave_dark": "synthwave",
    "synthwave_dungeon": "synthwave",
    # Synthpop family
    "synthpop": "synthwave",
    "synthpop_british": "synthwave",
    # --- techno ---
    "techno": "techno",
    "techno_acid": "techno",
    "techno_hardstyle": "techno",
    "techno_melodic": "techno",
    "techno_new": "techno",
}
```

:::

<ChartCard
  data-url="/announcements/2026-04-03_censusResults/4.4-music.json"
  chart-type="bar"
  title="What is your current favourite genre of music?"
  subtitle="2025 Fedecan Instance Census"
  :colors="['#8F1D3B']"
  :column-colors="{
    'no answer (skip this question)': '#555',
  }"
  :options="{
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Number of Responses'
          }
        }
      }
    }"
/>

<br><br><br><br>

❤️ **Thank you to everyone that filled out the 2025 Fedecan Instance Census!** 🍁

<br><br><br><br>

## Our Process

After community feedback and discussions with other instance admins, we built off of the work done my [lemmy.nz](https://lemmy.nz) earlier this year to run this census. In order to make it easy to compare between instances, we used many of the same questions with similar (or near identical) wording.

This year we ran the survey on an instance of [Formbricks](https://github.com/formbricks/formbricks) hosted on our own hardware. The results on this page were put together with a collection of Python scripts and custom Vue components. The code is available on our [GitHub page](https://github.com/fedecan-ca/fedecan.ca).

We identified a few issues with Formbricks, which will hopefully be fixed by next year:

- Instability and performance issues with the survey creator caused us to lose work a few times. They have since added an auto-save feature in v4.6.0
- It was not possible to import and export surveys between instances, which is a required feature if we are going to be collaborating with other Fediverse organizations on this project. We got around this issue by investigating the Formbricks endpoints and creating a custom script to modify the file that is exported via. the API, before importing it back in successfully. This script can also be found on our GitHub.
- Immediately after launching the census, we were notified by a user that clicking on external links will open the page in the same window, voiding any progress that the user made. We made all links unclickable for the duration of the census.
