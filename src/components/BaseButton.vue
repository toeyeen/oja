<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@use '../style/main.scss' as sty;

.base-button {
  border: none;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
  color: sty.$white-color;
  background: sty.$primary-color;
  font-size: 16px;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1.2rem 3.2rem;
  text-align: center;
  @include sty.fCenter;
  min-height: 32px;

  &:hover {
    background: rgba(233, 233, 233, 0.9);
    background: rgba(sty.$primary-color, $alpha: 0.95);
  }
}
</style>
