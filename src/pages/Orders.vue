<template>
  <account-header title="my orders" icon="package"> </account-header>

  <ul class="account__view-display-pagination">
    <p>Displaying 10 of 12 orders</p>
  </ul>

  <div class="account__view-display-order">
    <h1 class="account__view-display-order__status">We've Sent it!</h1>
    <h1 class="account__view-display-order__delivery">
      Estimated Delivery Sunday 22nd January 2022
    </h1>

    <div class="account__view-display-order__item">
      <div class="account__view-display-order__item-image">
        <div>
          <img
            src="https://images.asos-media.com/products/image/22415420-1-midwashblue"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.asos-media.com/products/image/22415420-1-midwashblue"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.asos-media.com/products/image/22415420-1-midwashblue"
            alt=""
          />
          <!-- If item is greater than 3 -->
          <div class="account__view-display-order__item-image__overlay">
            <span> + 2 </span>
          </div>
        </div>
      </div>
      <div class="account__view-display-order__item-track">
        <button>Track Parcel</button>
      </div>
    </div>

    <div class="my-2 divider"></div>
    <div class="account__view-display-order__info">
      <div class="account__view-display-order__info-details">
        <p>Order no: <span> 686652852 </span></p>
        <p>Order Date: <span> 15 Jan, 2022 </span></p>
      </div>
      <div class="account__view-display-order__info-view">
        <button>View Order</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountHeader from '../components/AccountHeader.vue'
</script>

<style scoped></style>
