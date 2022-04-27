<template>
  <!-- <div class="account__view-display-details"></div> -->
  <div class="account__view-display-details-header">
    <h1>Order Details</h1>

    <p>Thanks for your order! Check out the details below.</p>
  </div>

  <div class="account__view-display-details-order">
    <div>
      <p>
        <span> <BaseIcon name="archive" :size="16" /> </span> Order No:
      </p>
      <p>123456789</p>
    </div>
    <div>
      <p>
        <span><BaseIcon name="calendar" :size="16" /> </span> Order Date:
      </p>
      <p>22 Jan, 2022</p>
    </div>

    <button>Return Information</button>
  </div>

  <div class="account__view-display-details-address">
    <h1>Delivery Address</h1>

    <div class="my-3 divider"></div>

    <div class="account__view-display-details-address__info">
      <p>Anthonia Fred</p>
      <p>5b Ebinpejo Street</p>
      <p>Obanikoro, 100232</p>
      <p>Lagos</p>
      <p>Nigeria</p>
      <p>09091149637</p>
    </div>
  </div>

  <div class="account__view-display-details-info">
    <div class="account__view-display-details-info__header">
      <h1>We've sent it</h1>

      <p>5 Items</p>
    </div>
    <p>Estimated Delivery Sunday 22nd January 2022</p>

    <p>
      Your parcel is on its way to a courier and will be with you very soon!
    </p>

    <div class="my-3 divider"></div>

    <div class="account__view-display-details-info__card">
      <img
        src="https://images.asos-media.com/products/image/22415420-1-midwashblue"
        alt=""
      />

      <p></p>
    </div>
  </div>

  <div class="account__view-display-details-payment">
    <h1>Payment Details</h1>

    <div class="my-3 divider"></div>

    <div class="account__view-display-details-payment__type">
      <img
        src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1650355643/Logos/Visa_cp9lsy.svg"
        alt=""
      />

      <p>VISA <span>Debit</span></p>
    </div>
  </div>

  <div class="account__view-display-details-total">
    <h1>Order Total</h1>

    <div class="my-3 divider"></div>

    <div class="account__view-display-details-total__order">
      <div class="account__view-display-details-total__order-value">
        <p>Sub-Total:</p>
        <p>$260.09</p>
      </div>
      <div class="account__view-display-details-total__order-value">
        <p>Delivery:</p>
        <p>Free</p>
      </div>
      <div class="account__view-display-details-total__order-value">
        <p>Sales Tax:</p>
        <p>$20.28</p>
      </div>

      <div class="my-4 divider"></div>

      <div class="account__view-display-details-total__order-value">
        <p>Total:</p>
        <p>$280.37</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
