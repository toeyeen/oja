<template>
  <div class="input__container">
    <input
      class="input"
      :class="[inputStyle]"
      type="text"
      :placeholder="props.placeholder"
    />
    <div class="input-append" :class="[color]">
      <p>{{ props.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps({
  title: String,
  placeholder: String,
  size: {
    type: String,
    default: 'normal',
  },
  variant: {
    type: String,
    default: 'primary',
  },
})

const inputStyle = computed(() => {
  return {
    small: props.size == 'small',
  }
})

const color = computed(() => {
  switch (props.variant) {
    case 'primary':
      return `primary-color`
      break

    case 'secondary':
      return `${props.variant}-color`
      break

    case 'primary-color-light-2':
      return `primary-color-light-2`
      break

    default:
      break
  }
})
</script>

<style lang="scss" scoped>
@use '../style/abstracts/variables' as vars;

.input {
  // display: inline-block;
  border: none;
  border: 1px solid vars.$gray-color-1;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  height: 36px;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
    border: none;
    box-shadow: inset 0px 0px 3px 1px vars.$primary-color;
  }

  // width: 300px;

  &__container {
    position: relative;
    flex: 1;
    // display: inline;
  }

  &-append {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    position: absolute;
    // background: vars.$primary-color-light-2;
    color: vars.$white-color;
    width: 100px;
    height: 100%;
    font-size: 14px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
  }
}

.small {
  height: 32px;
}
</style>
