<template>
  <div class="footer__section-1">
    <div class="footer__section-1__subscribe">
      <p>Don't miss out on savings. Subscribe today!</p>
      <BaseInput
        title="Subscribe"
        variant="primary-color-light-2"
        placeholder="Enter email address"
      />
    </div>

    <div class="footer__section-1__socials">
      <p>Connect with clicks</p>
      <div class="footer__section-1__socials-icons">
        <BaseIcon
          v-for="icon in state.icons"
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
      <FooterAccordion
        v-for="links in state.links"
        :key="links.id"
        :links="links"
      />
    </ul>

    <div class="footer__section-2__img">
      <img
        src="https://clicks.co.za/medias/?context=bWFzdGVyfHJvb3R8NDY1MnxpbWFnZS9wbmd8aDc1L2g1YS84Nzk2MTc4OTM5OTM0LnBuZ3xlYjZmNDBmMDAyZWQxZjM4NzAyZTJkY2NjODdmNjJjODZmZGU5ZjgxYjY1YTA1OTE2MzNlYjE4MzcyZTExZjYx"
        alt=""
      />
    </div>
  </div>

  <div class="footer__section-3">
    <div>
      <p>Guranteed secure payment by</p>
    </div>

    <div class="footer__section-3__payment-link">
      <div
        class="footer__section-3__payment-link__item"
        v-for="image in state.images"
        :key="image.id"
      >
        <img :src="image.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import BaseInput from './BaseInput.vue'
import FooterAccordion from './FooterAccordion.vue'

const state = reactive({
  links: [
    {
      id: 1,
      linkTitle: 'ClubCard',
      subLinks: [
        {
          id: 1,
          title: 'Join ClubCard',
        },
        {
          id: 2,
          title: 'Partners',
        },
        {
          id: 3,
          title: 'Competition',
        },
        {
          id: 4,
          title: 'Baby Club',
        },
      ],
    },
    {
      id: 2,
      linkTitle: 'My Account',
      subLinks: [
        {
          id: 1,
          title: 'My ClubCard',
        },
        {
          id: 2,
          title: 'Order History',
        },
        {
          id: 3,
          title: 'Competition',
        },
        {
          id: 4,
          title: 'Baby Club',
        },
      ],
    },
    {
      id: 1,
      linkTitle: 'Customer Service',
      subLinks: [
        {
          id: 1,
          title: 'Help',
        },
        {
          id: 2,
          title: 'Contact Us',
        },
        {
          id: 3,
          title: 'Legal terms and condition',
        },
        {
          id: 4,
          title: 'Delivery times',
        },
      ],
    },
    {
      id: 1,
      linkTitle: 'Click Groups',
      subLinks: [
        {
          id: 1,
          title: 'Careers',
        },
        {
          id: 2,
          title: 'Click Groups',
        },
        {
          id: 3,
          title: 'Legal',
        },
        {
          id: 4,
          title: 'Club Card',
        },
        {
          id: 5,
          title: 'Site Stamp',
        },
      ],
    },
  ],

  icons: [
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
  ],

  images: [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dvuogdjyq/image/upload/v1650355643/Logos/Paypal_egfmgi.svg',
      name: 'paypal',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dvuogdjyq/image/upload/v1650355643/Logos/Flutterwave_qrjcyo.svg',
      name: 'flutterwave',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dvuogdjyq/image/upload/v1650355643/Logos/Visa_cp9lsy.svg',
      name: 'visa',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dvuogdjyq/image/upload/v1650355643/Logos/Mastercard_t66emk.svg',
      name: 'mastercard',
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dvuogdjyq/image/upload/v1650355643/Logos/Paystack_qyvaa6.svg',
      name: 'paystack',
    },
  ],
})
</script>

<style lang="scss" scoped></style>
