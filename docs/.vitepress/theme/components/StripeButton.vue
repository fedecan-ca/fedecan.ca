<template>
    <div class="center-container">
      <div id="stripe-button-container" class="styled-stripe-button"></div>
    </div>
  </template>

<script>
export default {
    name: 'StripeButton',
    mounted() {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/buy-button.js';
        script.async = true;
        script.onload = this.loadStripeButton;
        document.head.appendChild(script);
    },
    methods: {
        loadStripeButton() {
            const stripeButton = document.createElement('stripe-buy-button');
            stripeButton.setAttribute('buy-button-id', 'buy_btn_1PO3qwRvn7n2JUX0nzcncDAx');
            stripeButton.setAttribute('publishable-key', 'pk_live_51P3hu9Rvn7n2JUX0SaMUhmNIvjHXJNxK8V8mfMJ7if12xfzZhXXrpbwi7FiM9iTrqsDtKRUbHCVBRpPu8VbCmepe00EhGr5bUs');
            document.getElementById('stripe-button-container').appendChild(stripeButton);
        }
    }
}
</script>

<style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.styled-stripe-button {
  margin-top: 16px;
  display: inline-block;
  border: 1px solid var(--vp-c-default-1);
  border-radius: 8px;
}
</style>