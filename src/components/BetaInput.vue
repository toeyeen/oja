<template>
  <label :for="label" class="beta-field__label"> {{ label }}: </label>
  <input
    class="beta-field"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

// const emit = defineEmits({event: 'update:modelValue', })

const inputtEmit = () => {}
</script>

<style lang="scss" scoped>
@use '../style/abstracts/variables' as vars;
.beta-field {
  border: none;
  border: 1px solid #767676;
  width: 100%;
  height: 40px;
  font-family: inherit;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 3rem;
  // outline: 1px solid red;

  &:focus,
  &:active {
    outline: none;
    border: none;
    box-shadow: inset 0px 0px 3px 1px vars.$primary-color;
  }

  &__label {
    font-size: 13px;
    margin: 0 0 10px 14px;
    width: 100%;
    display: block;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}
</style>
