<template>
  <div class="input__container">
    <input class="input" type="text" />
    <div class="input-append">
      <p>Subscribe</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
</script>

<style lang="scss" scoped>
@use '../style/abstracts/variables' as vars;

.input {
  // display: inline-block;
  border: none;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  height: 36px;
  width: 100%;

  &:focus {
    // outline: 1px solid #ccc;
    outline: none;
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
    background: vars.$primary-color-light-2;
    color: vars.$white-color;
    width: 100px;
    height: 100%;
    font-size: 1.4rem;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
  }
}
</style>
