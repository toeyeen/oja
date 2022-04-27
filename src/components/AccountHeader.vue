<template>
  <div class="account__view-display-header">
    <BaseIcon :name="icon" :size="36" />
    <h1>{{ title }}</h1>

    <slot name="content"> </slot>

    <slot name="form"> </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: {
    type: String,
  },
})
</script>

<style scoped></style>
