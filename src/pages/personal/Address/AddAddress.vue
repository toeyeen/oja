<template>
  <div class="account__view-display-add">
    <h1>Add New Address</h1>

    <p>
      Please enter an address you would like to save and deliver your items to.
    </p>

    <!-- If No address -->
    <p>You currently have no saved addresses. Get started by adding one.</p>

    <form>
      <BetaInput class="mb-3" label="First Name" type="text" />
      <BetaInput class="mb-3" label="Last Name" type="text" />
      <BetaInput class="mb-3" label="Mobile" type="text" />
      <BetaInput class="mb-3" label="Country" type="text" />
      <BetaInput class="mb-3" label="Address" type="text" />
      <BetaInput class="mb-3" label="City" type="text" />
      <BetaInput class="mb-3" label="State" type="text" />
      <BetaInput class="mb-3" label="LGA" type="text" />
      <BetaInput class="mb-3" label="Zip code" type="text" />
      <div class="mb-3 account__view-display-address-1__select">
        <div>
          <input type="checkbox" name="" id="" />
          <p>Set as default delivery address</p>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <p>Set as default billing address</p>
        </div>
      </div>
      <BaseButton> Save Address </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
