<template>
  <li class="footer-list">
    <div class="footer-list-title" @click="isActive = !isActive">
      <span>ClubCard</span>
      <BaseIcon
        name="chevron-down"
        class="footer-list__icon"
        :class="!isActive ? 'rotate' : ''"
      />
    </div>
    <div class="footer-list-item__container" :class="isActive ? 'active' : ''">
      <a class="footer-list-item" href="#"> Join Clubcard </a>
      <a class="footer-list-item" href="#"> Join Clubcard </a>
      <a class="footer-list-item" href="#"> Join Clubcard </a>
      <a class="footer-list-item" href="#"> Join Clubcard </a>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import BaseIcon from './BaseIcon.vue'

let isActive = ref(false)
let windowWidth = ref(0)
const links = [
  {
    id: 1,
    linkTitle: 'ClubCard',
    subLinks: [
      {
        id: 1,
        title: 'Join ClubCard',
      },
      {
        id: 2,
        title: 'Partners',
      },
      {
        id: 3,
        title: 'Competition',
      },
      {
        id: 4,
        title: 'Baby Club',
      },
    ],
  },
  {
    id: 2,
    linkTitle: 'My Account',
    subLinks: [
      {
        id: 1,
        title: 'My CLubCard',
      },
      {
        id: 2,
        title: 'Order History',
      },
      {
        id: 3,
        title: 'Competition',
      },
      {
        id: 4,
        title: 'Baby Club',
      },
    ],
  },
  {
    id: 1,
    linkTitle: 'Customer Service',
    subLinks: [
      {
        id: 1,
        title: 'Help',
      },
      {
        id: 2,
        title: 'Contact Us',
      },
      {
        id: 3,
        title: 'Legal terms and condition',
      },
      {
        id: 4,
        title: 'Delivery times',
      },
    ],
  },
  {
    id: 1,
    linkTitle: 'Click Groups',
    subLinks: [
      {
        id: 1,
        title: 'Careers',
      },
      {
        id: 2,
        title: 'Click Groups',
      },
      {
        id: 3,
        title: 'Legal',
      },
      {
        id: 4,
        title: 'Club Card',
      },
      {
        id: 5,
        title: 'Site Stamp',
      },
    ],
  },
]

watch(windowWidth, (newWidth, oldWidth) => {
  if (newWidth > 768) {
    isActive.value = true
  } else {
    isActive.value = false
  }
})
const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => {
  window.addEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
@use '../style/abstracts/mixins' as vars;

.footer-list {
  &:not(:last-child) {
  }
  padding: 1rem 0;

  @include vars.respond(tab-land) {
    padding-top: 0;
  }

  &-title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    @include vars.respond(tab-land) {
      margin-bottom: 1rem;
    }

    & > span {
      font-weight: 600;
      font-size: 14px;
    }
  }

  &__icon {
    @include vars.respond(tab-land) {
      display: none !important;
    }
  }

  &-item {
    &__container {
      // display: none;
      // transition: all 0.3s;
      // opacity: 0;
      transition: opacity 0.3s ease-out;
      opacity: 0;
      height: 0;
      overflow: hidden;

      @include vars.respond(tab-land) {
        & > * {
          margin: 0.35rem 0;
        }
      }

      &.active {
        opacity: 1;
        height: auto;
      }
    }

    display: block;
  }
}
.rotate {
  transform: rotate(-90deg);
  transition: transform 0.2s;
}
</style>
