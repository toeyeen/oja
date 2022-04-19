<template>
  <div class="navigation">
    <div class="navigation__section-1">
      <div class="navigation__logo">BRAND NAME</div>

      <div class="navigation__order">
        <BaseIcon name="truck" class="navigation__order-icon-1" />
        <div class="navigation__order-title">Where is my order?</div>
        <BaseIcon name="chevron-right" class="navigation__order-icon-2" />
      </div>
    </div>

    <div class="navigation__section-2">
      <BaseInput
        title="Search"
        size="small"
        placeholder="Search products brnads and categories"
        class="navigation__search-desktop"
      />
      <div class="navigation__search">
        <div class="navigation__search-input">
          <input type="text" />
          <BaseIcon
            class="navigation__search-icon icon"
            name="search"
            :size="20"
          />
        </div>
      </div>
      <div class="navigation__menu">
        <div class="navigation__menu-btn">
          <font-awesome-icon class="icon" icon="bars" size="2x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from '../assets/svg/reprint.svg'
import SearchIcon from '../assets/svg/search.svg'
import BaseInput from './BaseInput.vue'
import BaseIcon from './BaseIcon.vue'
</script>

<style scoped lang="scss">
.icon-syle {
  width: 32px;
  height: 32px;
  fill: currentColor;
  color: blue;
  display: inline;
}
</style>
