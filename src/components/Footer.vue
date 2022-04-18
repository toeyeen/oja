<template>
  <div class="footer__section-1">
    <div class="footer__section-1__subscribe">
      <p>Don't miss out on savings. Subscribe today!</p>
      <BaseInput />
    </div>

    <div class="footer__section-1__socials">
      <p>Connect with clicks</p>
      <div class="footer__section-1__socials-icons">
        <BaseIcon
          v-for="icon in icons"
          :key="icon.id"
          :name="icon.name"
          :size="24"
        />
      </div>
    </div>
  </div>
  <div class="footer__section-2">
    <div class="footer__section-2__service">
      <div>
        <p>Customers Service center</p>
        <p>0800 000 0000</p>
      </div>

      <div>
        <p>Customers Outside Naija</p>
        <p>+44 00 1000 000</p>
      </div>
    </div>
    <ul class="footer__section-2__ul">
      <FooterAccordion />
      <FooterAccordion />
      <FooterAccordion />
      <FooterAccordion />
    </ul>

    <div class="footer__section-2__img">
      <img
        src="https://clicks.co.za/medias/?context=bWFzdGVyfHJvb3R8NDY1MnxpbWFnZS9wbmd8aDc1L2g1YS84Nzk2MTc4OTM5OTM0LnBuZ3xlYjZmNDBmMDAyZWQxZjM4NzAyZTJkY2NjODdmNjJjODZmZGU5ZjgxYjY1YTA1OTE2MzNlYjE4MzcyZTExZjYx"
        alt=""
      />
    </div>
  </div>

  <div class="footer__section-3">
    <h1>Lorem, ipsum dolor.</h1>
    <div class="payment-link"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from './BaseInput.vue'
import FooterAccordion from './FooterAccordion.vue'

const icons = ref([
  {
    id: 1,
    name: 'twitter',
  },
  {
    id: 2,
    name: 'facebook',
  },
  {
    id: 3,
    name: 'instagram',
  },
  {
    id: 4,
    name: 'youtube',
  },
])
</script>

<style lang="scss" scoped></style>
