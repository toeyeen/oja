<template>
  <li class="footer-list">
    <div class="footer-list-title" @click="isActive = !isActive">
      <span>{{ props.links.linkTitle }}</span>
      <BaseIcon
        name="chevron-down"
        class="footer-list__icon"
        :class="!isActive ? 'rotate' : ''"
      />
    </div>
    <div class="footer-list-item__container" :class="isActive ? 'active' : ''">
      <a
        v-for="link in props.links.subLinks"
        :key="link.id"
        class="footer-list-item"
        href="#"
      >
        {{ link.title }}
      </a>
      <!-- <a class="footer-list-item" href="#"> Join Clubcard </a>
      <a class="footer-list-item" href="#"> Join Clubcard </a>
      <a class="footer-list-item" href="#"> Join Clubcard </a> -->
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  links: {
    type: Object,
  },
})

let isActive = ref(false)
let windowWidth = ref(0)

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
    font-weight: 300;
  }
}
.rotate {
  transform: rotate(-90deg);
  transition: transform 0.2s;
}
</style>
