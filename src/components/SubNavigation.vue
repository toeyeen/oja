<template>
  <div class="sub-navigation">
    <div
      class="sub-navigation-items"
      v-for="navigation in navigations"
      :key="navigation.id"
    >
      <div class="sub-navigation-item">
        <font-awesome-icon class="icon" :icon="navigation.icon" size="3x" />
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

const navigations: Array<SubMenu> = [
  { id: 1, title: 'profile', icon: 'marker' },
  { id: 2, title: 'bars', icon: 'bars' },
  { id: 3, title: 'saved', icon: 'trash' },
  { id: 4, title: 'cart', icon: 'bars' },
]
</script>

<style scoped></style>
