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
      <div class="navigation__menu" @click="open">
        <div class="navigation__menu-btn">
          <BaseIcon name="menu" />
        </div>
      </div>

      <Teleport to="#modals" v-if="showDrawer">
        <base-drawer @cancel="close" :show="showDrawer">
          <template v-slot:body class="login__drawer">
            <div class="login__drawer-auth">
              <span>Sign In</span>
              |
              <span> Create Account </span>
            </div>

            <div class="login__drawer-links">
              <div
                v-for="link in state.links"
                :key="link.id"
                class="login__drawer-links__item"
              >
                <span>
                  <BaseIcon :name="link.icon" />
                </span>
                {{ link.name }}
              </div>
            </div>

            <!-- content for the header slot -->
          </template>
        </base-drawer>
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from '../assets/svg/reprint.svg'
import SearchIcon from '../assets/svg/search.svg'
import BaseInput from './BaseInput.vue'
import BaseIcon from './BaseIcon.vue'

import { ref, reactive } from 'vue'

const showDrawer = ref(false)

const state = reactive({
  links: [
    {
      id: 1,
      name: 'Account',
      link: 'account',
      icon: 'user',
    },
    {
      id: 2,
      name: 'Orders',
      link: 'account/order',
      icon: 'package',
    },
    {
      id: 3,
      name: 'Wishlist',
      link: 'account/wishlist',
      icon: 'gift',
    },
    {
      id: 3,
      name: 'Track your orders',
      link: 'account/track',
      icon: 'x',
    },
    {
      id: 4,
      name: 'Sign out',
      link: 'account',
      icon: 'log-out',
    },
  ],
})

const open = () => {
  showDrawer.value = !showDrawer.value
  console.log('open')
}
const close = () => {
  showDrawer.value = !showDrawer.value
  console.log('close')
}
</script>

<style scoped lang="scss">
@use '../style/abstracts/variables' as vars;

.icon-syle {
  width: 32px;
  height: 32px;
  fill: currentColor;
  color: blue;
  display: inline;
}

.login {
  &__drawer {
    &-auth {
      padding: 2rem 3.2rem;
      font-size: 20px;
      font-weight: 400;
      background: vars.$gray-color-light;
      cursor: pointer;
      display: flex;
      justify-content: center;

      span {
        text-decoration: underline;
        margin: 0 1rem;
        &:hover {
          color: vars.$primary-color;
        }
      }
    }

    &-links {
      padding: 2rem 3.2rem;
      font-size: 18px;

      &__item {
        padding: 1.8rem 0;
        display: flex;
        font-weight: 400;
        cursor: pointer;

        &:hover {
          color: vars.$primary-color;
        }

        span {
          margin-right: 1.4rem;
        }
        // justify-content: center;
        // align-items: center;
      }
    }
  }
}
</style>
