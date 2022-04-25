<template>
  <div class="navbar">
    <div class="navbar-top">
      <div class="navbar-top__emergency">
        Delivery might be delayed due to the train attack in KDN.
      </div>

      <ul class="navbar-top__list">
        <li
          class="navbar-top__list-item"
          v-for="list in navList"
          :key="list.id"
        >
          <BaseIcon
            :size="20"
            :name="list.icon"
            class="navbar-top__list-item__icon"
          />
          <p class="navbar-top__list-item__title">
            <router-link :to="{ name: list.route }">
              {{ list.title }}
            </router-link>
          </p>

          <div class="navbar-top__list-item__cart" v-if="list.title == 'Cart'">
            <span>10</span>
          </div>
        </li>
      </ul>
    </div>

    <Navigation />
    <SubNavigation />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navigation from './Navigation.vue'
import SubNavigation from './SubNavigation.vue'
import BaseIcon from './BaseIcon.vue'

const navList = ref([
  {
    id: 1,
    icon: 'user',
    title: 'Sign In / Register',
    route: 'Login',
  },
  {
    id: 1,
    icon: 'map-pin',
    title: 'Find a store',
    route: 'StoreFinder',
  },
  {
    id: 1,
    icon: 'star',
    title: 'Favorites',
    route: 'Favorites',
  },
  {
    id: 1,
    icon: 'shopping-cart',
    title: 'Cart',
    route: 'Cart',
  },
])
</script>

<style scoped></style>
