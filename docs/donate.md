---
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
---

# Donate

We are a non-profit organization and all of our platforms are sustained by donations from users like you. If you would like to support our work, please consider making a donation. 

While we are a registered non-profit organization, we are not a registered charity. As such, we are unable to provide tax receipts for donations. Please see our [FAQ section](guide/fedecan/faq#_2-why-are-you-not-a-registered-charity) to read about why we are not currently pursuing charitable status.

### Your contributions will help us:

- Maintain our servers, platforms, and services
- Pay for operational costs to keep the non-profit running smoothly
- Spin up new platforms for you, to cover more of your social media needs

## How to Donate

<div style="display: flex; align-items: center;">
  <div style="flex: 0 0 75%;">
    <p><b>Please choose the method that works best for you.</b></p>
    <p> We support a few different donation methods. See the <a href="#donation-method-comparison">table at the bottom of this page</a> for details on scheduling, fees, etc.</p>
  </div>
  <Icon icon="fluent-mdl2:compare-uneven" width="3em" height="3em" style="flex: 0 0 25%;" />
</div>



### One Time & Recurring Donations

<div class="cards-container">
  <div class="card">
    <h3 class="text-with-icon">
      <Icon icon="iconoir:donate" width="1.2em" height="1.2em" />
        FundraiseUp
    </h3>
    <InfoPill type="warn" label="Fees apply" hoverText="FundraiseUp charges a fee for processing donations."/>
    <div style="display: flex; justify-content: center; width: 100%;">
      <a href="#XWUTTLQG" style="display: none"></a>
    </div>
    <p>If the button isn't loading, you can use the <a href="https://fedecan.donorsupport.co/page/general-donations">donation page</a> directly.</p>
  </div>

  <div class="card">
    <h3 class="text-with-icon">
      <Icon icon="mdi:github" width="1.2em" height="1.2em" />
      GitHub Sponsors
    </h3>
    <InfoPill type="ok" label="No fees" hoverText="We will receive 100% of your donation."/>
    <p>
      You will need to sign in with GitHub to use this method:
    </p>
    <iframe src="https://github.com/sponsors/fedecan-ca/button" title="Sponsor fedecan-ca" height="32"  style="border: 0; border-radius: 6px;"></iframe>
    <p>If the button isn't loading, you can use the <a href="https://github.com/sponsors/fedecan-ca">GitHub Sponsors profile</a> directly.</p>
  </div>
</div>

<!-- <div class="cards-container">
  <div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
      <h3 class="text-with-icon">
        <Icon icon="mdi:github" width="1.2em" height="1.2em" />
        GitHub Sponsors
      </h3>
    <InfoPill type="ok" label="No fees" hoverText="We will receive 100% of your donation."/>
    </div>
    <hr>
    <div style="display: flex; justify-content: center; width: 100%;">
      <iframe src="https://github.com/sponsors/fedecan-ca/button" title="Sponsor fedecan-ca" height="34" width="342" style="border: 0; border-radius: 6px;"></iframe>
    </div>
  </div>
</div> -->

<br>

### One Time Donations Only

<div class="cards-container">
  <div class="card">
    <h3 class="text-with-icon">
      <Icon icon="mingcute:send-line" width="1.2em" height="1.2em" />
      Interac e-Transfer
    </h3>
    <InfoPill type="ok" label="No fees" hoverText="We will receive 100% of your donation." />
    <p>Step-by-step instructions:</p>
    <ol>
      <li>Start an Interac e-Transfer on your bank app or website.</li>
      <li>Enter the email <code>donate@fedecan.ca</code> as the recipient.</li>
      <li>If you would like to include your name, feel free to do so in the message field.</li>
    </ol>
  </div>

  <div class="card">
    <h3 class="text-with-icon">
      <Icon icon="mingcute:stripe-line" width="1.2em" height="1.2em" />
      Stripe
    </h3>
    <InfoPill type="warn" label="Fees Apply" hoverText="Stripe charges a fee for processing donations." />
    <StripeButton />
    <p>If the button isn't loading, you can use the <a href="https://donate.stripe.com/5kAg108OT6f44uIfYY">donation page</a> directly.</p>
  </div>
</div>

## Donation Method Comparison

<table style="width: 100%;">
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 20%;">
    <col style="width: 55%;">
  </colgroup>
  <thead>
    <tr>
      <th>Method</th>
      <th></th>
      <th>More Information</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>FundraiseUp</strong></td>
      <td>
        <InfoText 
            colorType="ok" 
            icon="ic:round-schedule" 
            text="One time"
          />
        <InfoText 
            colorType="ok" 
            icon="ic:round-schedule" 
            text="Recurring"
          />
        <InfoText 
            colorType="warn"
            icon="ic:round-warning-amber"
            text="Fees Apply"
          />
      </td>
      <td>
        <ul>
          <li>Options for one time donations and recurring monthly donations.</li>
          <li>Supports a variety of payment methods (credit cards, Apple Pay, Google Pay).</li>
          <li>You can manage your donation through the email you receive after donating.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong>GitHub Sponsors</strong></td>
      <td>
        <InfoText 
            colorType="ok" 
            icon="ic:round-schedule" 
            text="One time"
          />
        <InfoText 
            colorType="ok" 
            icon="ic:round-schedule" 
            text="Recurring"
          />
        <InfoText 
            colorType="ok"
            icon="ic:round-check"
            text="No fees"
          />
      </td>
      <td>
        <ul>
          <li>Options for one time donations and recurring monthly donations.</li>
          <li>Supports credit card payments.</li>
          <li>Requires a GitHub account.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong>Interac e-Transfer</strong></td>
      <td>
        <InfoText 
            colorType="ok" 
            icon="ic:round-schedule" 
            text="One time"
          />
        <InfoText 
            colorType="gray" 
            icon="ic:round-schedule" 
            text="Recurring unsupported"
          />
        <InfoText 
            colorType="ok"
            icon="ic:round-check"
            text="No fees"
          />
      </td>
      <td>
        <ul>
          <li>One time donations only.</li>
          <li>Requires access to Interac e-Transfer through your bank.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong>Stripe</strong></td>
      <td>
        <InfoText 
            colorType="ok" 
            icon="ic:round-schedule" 
            text="One time"
          />
        <InfoText 
            colorType="gray" 
            icon="ic:round-schedule" 
            text="Recurring unsupported"
          />
        <InfoText 
            colorType="warn"
            icon="ic:round-warning-amber"
            text="Fees Apply"
          />
      </td>
      <td>
        <ul>
          <li>One time donations only.</li>
          <li>Supports credit card payments.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

**Other Methods**

Is there another way you would like to donate? You can post a message in our <a href="https://lemmy.ca/c/main">Lemmy community</a> or send us an email at <a href="mailto:support@fedecan.ca">support@fedecan.ca</a>.