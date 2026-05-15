---
layout: home

hero:
  text: 'Donate'
  tagline: |
    We are a non-profit organization and all of our platforms are sustained by donations from users like you. If you would like to support our work, please consider making a donation.

    Your contributions will help us maintain our servers, platforms, and services; pay for operational costs; and spin up new platforms for you to use.

head:
  # Header code from FundraiseUp
  - - script
    - {}
    - |
      (function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track'
      .split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
      :function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],
      j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a+'';
      t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=4;o.h=w.location.href;o.l=[];
      for(i=0;i<7;i++)o[l[i]]=o(l[i]);w[n]=o}
      })(window,document,'script','FundraiseUp','AMHBMQHJ');

  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:locale
      content: en_CA
  - - meta
    - property: og:title #  max 50-60 characters
      content: Donate
  - - meta
    - property: og:url
      content: https://fedecan.ca/en/donate
  - - meta
    - property: og:description # 150-160 characters
      content: Your contributions will help us maintain our servers, platforms, and services, pay for operational costs, and spin up new platforms for you to use.
---

::: info Tax Receipts

While we are a registered non-profit organization, we are not a registered charity. As such, we are unable to provide tax receipts for donations. Please see our [FAQ section](guide/fedecan/faq#_2-why-are-you-not-a-registered-charity) to read about why we are not pursuing charitable status right now.

:::

## How to Donate

We support a few different donation methods. Please see the comparison table for details on fees, payment types, etc.

Is there another way you would like to donate? You can start a discussion in our <a href="https://lemmy.ca/c/main">Lemmy community</a> or send us an email at <a href="mailto:support@fedecan.ca">support@fedecan.ca</a>.

### Comparison Table

<VpvTableJSON
  :sortable="false"
  :jsonDataProp="donationMethods"
  :columns="[
    {
      key: 'icon',
      title: '-',
      format: 'icon',
      options: {
        iconMap: {
          'FundraiseUp': 'iconoir:donate',
          'GitHub Sponsors': 'mdi:github',
          'Interac e-Transfer': 'mingcute:send-line',
          'Stripe': 'mingcute:stripe-line'
        },
        iconColorMap: {
          'FundraiseUp': '#9E9E9E',
          'GitHub Sponsors': '#9E9E9E',
          'Interac e-Transfer': '#9E9E9E',
          'Stripe': '#9E9E9E'
        },
        width: '1.8em',
        height: '1.8em'
      }
    },
    {
      key: 'method',
      title: 'Method',
      format: 'text'
    },
    {
      key: 'oneTime',
      title: 'One-Time',
      format: 'icon',
      options: {
        iconMap: {
          'yes': 'ic:twotone-check-circle',
          'no': 'mdi:close-circle',
          'depends': 'mdi:help-circle'
        },
        iconColorMap: {
          'yes': '#4CAF50',
          'no': '#9E9E9E',
          'depends': '#FF9800'
        },
        hoverTextMap: {
          'yes': 'Supported',
          'no': 'Not supported',
          'depends': 'Depends'
        },
        width: '1.6em',
        height: '1.6em'
      }
    },
    {
      key: 'recurring',
      title: 'Recurring',
      format: 'icon',
      options: {
        iconMap: {
          'yes': 'ic:twotone-check-circle',
          'no': 'mdi:cross-circle',
          'depends': 'ic:twotone-circle'
        },
        iconColorMap: {
          'yes': '#4CAF50',
          'no': '#9E9E9E',
          'depends': '#afaf4c'
        },
        hoverTextMap: {
          'yes': 'Supported',
          'no': 'Not supported',
          'depends': 'Varies by bank'
        },
        width: '1.6em',
        height: '1.6em'
      }
    },
    {
      key: 'fees',
      title: 'Fees',
      format: 'boolean',
      options: {
        displayAs: 'icon',
        trueIcon: 'mdi:warning',
        falseIcon: 'line-md:cancel-twotone',
        trueColor: '#FF9800',
        falseColor: '#4CAF50',
        trueHoverText: 'Fees apply',
        falseHoverText: 'No fees'
      }
    },
    {
      key: 'paymentMethods',
      title: 'Payment Methods',
      format: 'tags',
      options: {
        tagColors: {
          'Visa': '#1A1F71',
          'Mastercard': '#EB001B',
          'Amex': '#2E77BC',
          'Apple Pay': '#555555',
          'Google Pay': '#4285F4',
          'Interac': '#FFAD00',
          'Link': '#00D66B'
        }
      }
    }
  ]"
/>

### Donation Methods

<div class="donation-cards-grid">
  <div class="donation-card">

### <Icon icon="mingcute:send-line" width="1.2em" height="1.2em" /> Interac e-Transfer

Support for **recurring** donations depends on your bank.

**To send an Interac e-Transfer:**

1. Start an Interac e-Transfer on your bank app or website.
2. Enter `donate@fedecan.ca` as the recipient.
3. Optionally include your name in the message field.

  </div>
  <div class="donation-card">

### <Icon icon="mdi:github" width="1.2em" height="1.2em" /> GitHub Sponsors

This method requires a GitHub account, and donation amounts are in **USD**.

Link to donate: [github.com/sponsors/fedecan-ca](https://github.com/sponsors/fedecan-ca)

You can also use the button below:

  <div style="display: flex; justify-content: center; width: 100%;">
    <iframe src="https://github.com/sponsors/fedecan-ca/button" title="Sponsor fedecan-ca" height="32" style="border: 0; border-radius: 6px;"></iframe>
  </div>
  </div>
  <div class="donation-card">

### <Icon icon="iconoir:donate" width="1.2em" height="1.2em" /> FundraiseUp

::: warning Fees Apply with this donation method.

:::

Link to donate: [fedecan.donorsupport.co/page/general-donations](https://fedecan.donorsupport.co/page/general-donations)

To manage recurring donations: [fedecan.donorsupport.co](https://fedecan.donorsupport.co)

You can also use the button below:

  <div style="display: flex; justify-content: center; width: 100%;">
    <div style="
      border: 1px solid var(--vp-c-border);
      border-radius: 16px;
      background-color: var(--vp-c-bg-elv);
      padding: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    ">
      <a href="#XWUTTLQG"></a>
    </div>
  </div>
  </div>
  <div class="donation-card">

### <Icon icon="mingcute:stripe-line" width="1.2em" height="1.2em" /> Stripe

::: warning Fees Apply with this donation method.

:::

Link to donate: [donate.stripe.com/5kAg108OT6f44uIfYY](https://donate.stripe.com/5kAg108OT6f44uIfYY)

You can also use the button below:

  <div style="display: flex; justify-content: center; width: 100%">
    <StripeButton />
  </div>
  </div>
</div>

<script setup>
const donationMethods = [
  {
    icon: "Interac e-Transfer",
    method: "Interac e-Transfer",
    oneTime: "yes",
    recurring: "depends",
    fees: false,
    paymentMethods: ["Interac"]
  },
  {
    icon: "GitHub Sponsors",
    method: "GitHub Sponsors",
    oneTime: "yes",
    recurring: "yes",
    fees: false,
    paymentMethods: ["Credit/Debit Card"]
  },
  {
    icon: "FundraiseUp",
    method: "FundraiseUp",
    oneTime: "yes",
    recurring: "yes",
    fees: true,
    paymentMethods: ["Credit/Debit Card", "Apple Pay", "Google Pay", "Link"]
  },
  {
    icon: "Stripe",
    method: "Stripe",
    oneTime: "yes",
    recurring: "no",
    fees: true,
    paymentMethods: ["Credit/Debit Card", "Apple Pay", "Google Pay", "Link"]
  }
]
</script>

<style scoped>
.donation-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.donation-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  background: var(--vp-c-bg-soft);
}

.donation-card h3 {
  display: flex;
  align-items: center;
  gap: 0.4em;
  margin-top: 0;
  margin-bottom: 0.75rem;
}
</style>
