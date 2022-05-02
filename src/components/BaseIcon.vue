<template>
  <div v-html="iconSvg" :style="state.styleObject"></div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import feather from 'feather-icons'

interface IconStyleObject {
  width: string
  height: string
}

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value: string) => {
      return !!feather.icons[value]
    },
  },
  size: {
    type: Number,
    default: 22,
  },
  stroke: {
    type: String,
    default: 'currentColor',
  },
  fill: {
    type: String,
    default: 'none',
  },
})

const state = reactive({
  styleObject: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    display: 'inline',
  },
})

const iconSvg = computed(() => {
  return feather.icons[props.name].toSvg({
    width: props.size,
    height: props.size,
    fill: props.fill ?? 'none',
    stroke: props.stroke ?? 'currentColor',
  })
})
</script>

<style scoped></style>
