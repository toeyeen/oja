<template>
  <label v-if="label" :for="label" class="beta-field__label">
    {{ label }}:
  </label>
  <select
    :name="label"
    v-bind="{
    ...$attrs,
    onChange:($event) =>  $emit('update:modelValue',( $event.target as HTMLSelectElement).value )

  }"
    :value="modelValue"
  >
    <option
      :value="option"
      v-for="option in options"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
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
