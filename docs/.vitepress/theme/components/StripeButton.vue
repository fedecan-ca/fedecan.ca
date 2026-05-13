<template>
  <div class="center-container">
    <div id="stripe-button-container" class="styled-stripe-button"></div>
  </div>
</template>

<script>
export default {
  name: 'StripeButton',
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://js.stripe.com/v3/buy-button.js'
    script.async = true
    script.onload = this.loadStripeButton
    document.head.appendChild(script)
  },
  methods: {
    loadStripeButton() {
      const stripeButton = document.createElement('stripe-buy-button')
      stripeButton.setAttribute(
        'buy-button-id',
        'buy_btn_1PO3qwRvn7n2JUX0nzcncDAx'
      )
      stripeButton.setAttribute(
        'publishable-key',
        'pk_live_51P3hu9Rvn7n2JUX0SaMUhmNIvjHXJNxK8V8mfMJ7if12xfzZhXXrpbwi7FiM9iTrqsDtKRUbHCVBRpPu8VbCmepe00EhGr5bUs'
      )
      document
        .getElementById('stripe-button-container')
        .appendChild(stripeButton)
    },
  },
}
</script>

<style>
.center-container {
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  background-color: var(--vp-c-bg-elv);
}

.styled-stripe-button {
  margin: 16px;
  display: inline-block;
}
</style>
