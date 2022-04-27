<template>
  <account-header title="Address book" icon="home">
    <template #content>
      <button @click="$router.push({ name: 'AddAddress' })">Add New Address</button>
    </template>
  </account-header>

  <div class="account__view-display-address-1">
    <div class="account__view-display-address-1__details">
      <div class="account__view-display-address-1__details-info">
        <p>Anthonia Fred</p>
        <p>5b Ebinpejo Street</p>
        <p>Obanikoro</p>
        <p>Lagos</p>
        <p>100232</p>
        <p>Nigeria</p>
        <p>09091149637</p>
      </div>
      <div class="account__view-display-address-1__details-actions">
        <div>
          <p>Edit</p>
          <span> <BaseIcon name="edit-2" /> </span>
        </div>
        <div>
          <p>Delete</p>
          <span> <BaseIcon name="trash-2" /> </span>
        </div>
      </div>
    </div>
    <div class="account__view-display-address-1__select">
      <div>
        <input type="checkbox" name="" id="" />
        <p>Set as default delivery address</p>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <p>Set as default billing address</p>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script setup lang="ts">
import AccountHeader from '../../components/AccountHeader.vue'
import BaseIcon from '../../components/BaseIcon.vue'
</script>

<style scoped></style>
