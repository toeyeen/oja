<template>
  <div class="sub-navigation">
    <div
      class="sub-navigation-items"
      v-for="navigation in navigations"
      :key="navigation.id"
    >
      <div class="sub-navigation-item">
        <BaseIcon :name="navigation.icon" :size="24" />

        <div
          v-if="navigation.title == 'cart'"
          class="navbar-top__list-item__cart"
        >
          <span> 10 </span>
        </div>
      </div>
    </div>

    <!-- <ul v-for="i in navigations" :key="i.id">
      {{
        i.title
      }}
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import vue from 'vue'
import { SubMenu } from '../global/types'
import BaseIcon from './BaseIcon.vue'

const navigations: Array<SubMenu> = [
  { id: 1, title: 'profile', icon: 'user' },
  { id: 2, title: 'bars', icon: 'map-pin' },
  { id: 3, title: 'saved', icon: 'star' },
  { id: 4, title: 'cart', icon: 'shopping-cart' },
]
</script>

<style scoped></style>
