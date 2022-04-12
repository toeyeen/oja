<template>
  <div class="navigation">
    <div class="navigation__section-1">
      <div class="navigation__logo">BRAND NAME</div>
    </div>
    <div class="navigation__section-2">
      <div class="navigation__search">
        <div class="navigation__search-input">
          <input type="text" />
          <font-awesome-icon
            class="navigation__search-icon icon"
            icon="magnifying-glass"
            size="2x"
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
