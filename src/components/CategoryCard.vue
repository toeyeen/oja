<template>
  <div class="category">
    <div class="category__title">
      <h1>{{ props.title }}</h1>
      <button class="btn btn-link">
        <!-- <a href="#"> View all </a> -->
        View all
        <!-- <h1>View all</h1> -->
      </button>
    </div>

    <slot> </slot>

    <div class="category__list">
      <slot name="product"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
  },
})

const state = reactive({
  categories: [
    {
      id: 1,
      name: 'relevant',
      iamge: '1224355',
    },
    {
      id: 2,
      name: 'relevant',
      iamge: '1224355',
    },
    {
      id: 3,
      name: 'relevant',
      iamge: '1224355',
    },
    {
      id: 4,
      name: 'relevant',
      iamge: '1224355',
    },
  ],
})
</script>

<style scoped></style>
