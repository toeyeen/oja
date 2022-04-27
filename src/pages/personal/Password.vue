<template>
  <account-header title="change password" icon="lock">
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, corrupti
      </p>
    </template>

    <template #form>
      <form class="account__view-display-form">
        <BetaInput label="Current Password" type="password" />
        <BetaInput label="New Password" class="mb-2" type="password" />
        <BaseButton> Save Password </BaseButton>
      </form>
    </template>
  </account-header>
</template>

<script setup lang="ts">
import AccountHeader from '../../components/AccountHeader.vue'
</script>

<style scoped></style>
