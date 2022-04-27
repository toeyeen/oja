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
            :class="{
              active:
                route.fullPath.substring(route.fullPath.lastIndexOf('/') + 1) ==
                subLink.slug,
            }"
            v-for="subLink in link.subLinks"
            :key="subLink.id"
          >
            <router-link
              @click.native="state.isActive = subLink.slug"
              :to="{ name: subLink.route }"
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
        <router-view :key="$route.fullPath"></router-view>
        <!-- <h1>Account</h1> -->
        <!-- <router-link></router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

let isActive = ref('account-overview')
const state = reactive({
  isActive: 'account-overview',
  links: [
    {
      id: 5,
      linkTitle: 'overview',
      subLinks: [
        {
          id: 1,
          title: 'Account overview',
          slug: 'account',
          icon: 'user',
          active: false,
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
          slug: 'orders',
          icon: 'package',
          active: false,
          route: 'Orders',
        },
        {
          id: 2,
          title: 'Prime Oja',
          slug: 'prime',
          icon: 'user',
          active: false,
          route: 'Prime',
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
          slug: 'my-details',
          icon: 'user',
          active: false,
          route: 'Details',
        },
        {
          id: 2,
          title: 'Change password',
          slug: 'change-password',
          icon: 'lock',
          active: false,
          route: 'Password',
        },
        {
          id: 3,
          title: 'Address book',
          slug: 'address-book',
          icon: 'home',
          active: false,
          route: 'Address',
        },
        {
          id: 4,
          title: 'Social accounts',
          slug: 'social-accounts',
          icon: 'users',
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
          slug: 'gift-cards',
          icon: 'gift',
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
          slug: 'logout',
          icon: 'log-out',
          active: false,
          route: 'Orders',
        },
      ],
    },
  ],
})

const route = useRoute()

// function changeRoute(route: string) {
//   const newRoute = route.substring(route.lastIndexOf('/') + 1)

//   state.isActive = newRoute
//   console.log(state.isActive)
// }

// watch(route, (newRoute, oldRoute) => {
//   const index = route.fullPath.lastIndexOf('/')
//   if (index !== 0) {
//     isActive.value = route.fullPath.substring(
//       route.fullPath.lastIndexOf('/') + 1
//     )
//     state.isActive = route.fullPath.substring(index + 1)
//     console.log(isActive.value)
//   }

//   if (index === 0) {
//     isActive.value = 'account-overview'
//     state.isActive = 'account-overview'
//   }

// })
</script>

<style scoped></style>
