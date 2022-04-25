<template>
  <div class="account">
    <div class="account__view">
      <div class="account__view-list">
        <ul class="account__view-list-header">
          <div class="account__view-list-header__initials">
            <h1>AF</h1>
          </div>

          <div class="account__view-list-header__greetings">
            <p>Hi,</p>
            <p>Anthonia Fred</p>
          </div>
        </ul>

        <ul
          class="account__view-list-items"
          v-for="link in state.links"
          :key="link.id"
        >
          <li
            class="account__view-list-item"
            :class="{ active: subLink.active }"
            v-for="subLink in link.subLinks"
            :key="subLink.id"
          >
            <router-link
              :to="{ name: subLink.route }"
              @click="subLink.active = !subLink.active"
            >
              <BaseIcon :name="subLink.icon" :size="18" />
              <span>{{ subLink.title }}</span>
            </router-link>
          </li>
        </ul>
        <!-- <ul class="account__view-list-items">
          <li class="account__view-list-item">
            <BaseIcon name="user" />
            <span> My orders </span>
          </li>
          <li class="account__view-list-item active">
            <BaseIcon name="user" />
            <span> Prime Oga </span>
          </li>
        </ul>
        <ul class="account__view-list-items">
          <li class="account__view-list-item">
            <BaseIcon name="user" />
            <span> My details </span>
          </li>
          <li class="account__view-list-item active">
            <BaseIcon name="user" />
            <span> Change pasword </span>
          </li>
        </ul> -->
      </div>
      <div class="account__view-display">
        <router-view></router-view>
        <!-- <h1>Account</h1> -->
        <!-- <router-link></router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  links: [
    {
      id: 5,
      linkTitle: 'overview',
      subLinks: [
        {
          id: 1,
          title: 'Account overview',
          icon: 'user',
          active: true,
          route: 'AccountOverview',
        },
      ],
    },
    {
      id: 1,
      linkTitle: 'Orders',
      subLinks: [
        {
          id: 1,
          title: 'My orders',
          icon: 'user',
          active: false,
          route: 'Orders',
        },
        {
          id: 2,
          title: 'Prime Oja',
          icon: 'user',
          active: false,
          route: 'Orders',
        },
      ],
    },
    {
      id: 2,
      linkTitle: 'personal',
      subLinks: [
        {
          id: 1,
          title: 'My details',
          icon: 'user',
          active: false,
          route: 'Details',
        },
        {
          id: 2,
          title: 'Change password',
          icon: 'user',
          active: false,
          route: 'Password',
        },
        {
          id: 3,
          title: 'Address book',
          icon: 'user',
          active: false,
          route: 'Address',
        },
        {
          id: 4,
          title: 'Social accounts',
          icon: 'user',
          active: false,
          route: 'Social',
        },
      ],
    },
    {
      id: 3,
      linkTitle: 'Giftcard',
      subLinks: [
        {
          id: 1,
          title: 'Gift cards',
          icon: 'user',
          active: false,
          route: 'Giftcard',
        },
      ],
    },
    {
      id: 4,
      linkTitle: 'Logout',
      subLinks: [
        {
          id: 1,
          title: 'Logout',
          icon: 'log-out',
          active: false,
          route: 'Orders',
        },
      ],
    },
  ],
})
</script>

<style scoped></style>
