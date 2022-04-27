<template>
  <account-header title="Prime Oja" icon="package"> </account-header>

  <!-- If No active subscription -->
  <div class="account__view-display-prime-none">
    <p>
      You don’t have any active subscription, subscribe to a Prime Oja plan to
      enjoy free shipping
    </p>
  </div>

  <!-- If there is an active Subscription -->
  <div class="account__view-display-prime-1">
    <div class="account__view-display-prime-1__head active">
      <BaseIcon name="package" />
      <p>Prime Oja is active, You get fast delivery to your Nigeria Address</p>
    </div>
    <div class="account__view-display-prime-1__content">
      <div>
        <small>Expiry Date </small>
        <p>29, Nov, 2022</p>
      </div>

      <p>We'll be in contact when it's time to renew your subscription.</p>
    </div>
  </div>

  <div class="account__view-display-prime-2">
    <div class="account__view-display-prime-2__head">
      <p>What you get</p>
    </div>
    <div class="divider"></div>
    <div class="account__view-display-prime-2__content">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic doloribus
        deserunt repellat doloremque repudiandae, a veniam voluptates veritatis
        corporis iusto.
      </p>
    </div>
  </div>

  <div class="account__view-display-prime-3">
    <div class="account__view-display-prime-3__content">
      <p>Prime Oja <a href="#"> Terms & Condition </a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountHeader from '../components/AccountHeader.vue'
</script>

<style scoped></style>
