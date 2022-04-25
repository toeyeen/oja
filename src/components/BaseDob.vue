<template>
  <label class="beta-field__label"> Date Of Birth: </label>
  <BaseSelect />
  <BaseSelect />
  <BaseSelect />
</template>

<script setup lang="ts">
const days = Array(Array.from)

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },

  options: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped></style>
