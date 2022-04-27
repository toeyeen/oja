<template>
  <account-header title="my details" icon="user">
    <template #content>
      <p>
        Feel free to edit any of your details below so your Oja account is
        totally up to date.
      </p>
    </template>

    <template #form>
      <form class="account__view-display-form">
        <BetaInput label="First Name" type="text" />
        <BetaInput label="Last Name" type="text" />
        <BetaInput label="Email Address" class="mb-2" type="text" />
        <BaseButton> Save Changes </BaseButton>
      </form>
    </template>
  </account-header>
</template>

<script setup lang="ts">
import AccountHeader from '../../components/AccountHeader.vue'
</script>

<style scoped></style>
