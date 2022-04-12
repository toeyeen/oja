<template>
  <div class="category">
    <div class="category__title">
      <h1>Trending Categories</h1>
      <button class="btn btn-link">
        <!-- <a href="#"> View all </a> -->
        View all
        <!-- <h1>View all</h1> -->
      </button>
    </div>

    <div class="category__list">
      <div
        v-for="category in state.categories"
        :key="category.id"
        class="category__list-item"
      >
        <div class="category__list-item__img">
          <img
            src="https://clicks.co.za/medias/Artboard-5.png?context=bWFzdGVyfEN1c3RvbUltYWdlc3w5NTcwfGltYWdlL3BuZ3xDdXN0b21JbWFnZXMvaGYzL2gwNi8xMDQwNjQwMzI3NjgzMC5wbmd8NDdhNTQ5ZGIxN2JmYTc3ODFiZmI4YTM2MjQ0OWI3YTdmNmExNTcxOGQ2NTRkMmY2OGFlZmIxNThhYThkODQ5OQ"
            alt=""
          />
        </div>
        <div class="category__list-item__title">
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
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
