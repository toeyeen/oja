<template>
  <div
    class="drawer"
    :class="{ 'drawer-open': props.show, 'drawer-left': props.direction }"
  >
    <div @click="close" class="drawer-mask"></div>
    <div class="drawer-wrapper">
      <div class="drawer-wrapper__title">
        <!-- <p>{{ props.title }}</p> -->
        <p>Title</p>

        <button class="drawer-wrapper__title-close" @click="close">
          <BaseIcon name="x" />
        </button>
      </div>
      <div class="drawer-wrapper__body">
        <div class="drawer-wrapper__body-title">
          <slot name="title"> </slot>
        </div>
        <div class="drawer-wrapper__body-content">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const emit = defineEmits(['cancel'])

const mask = ref('mask')

const props = defineProps({
  title: {
    type: String,
  },
  show: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: 'drawer-left',
  },
})

watch(
  () => props.show,
  (newValue, oldValue) => {
    if (!newValue) document.body.style.overflow = 'auto'

    if (newValue) document.body.style.overflow = 'hidden'
  }
)

const close = (e: Event) => {
  emit('cancel', e)
}

const keyClose = (e: KeyboardEvent) => {
  const key = e.key || e.keyCode
  if (key == 'esc' || key == 'Escape' || key == 27) close(e)
}

onMounted(() => {
  document.addEventListener('keyup', keyClose)
})

onUnmounted(() => {
  document.removeEventListener('keyup', keyClose)
})
</script>

<style scoped></style>
