<script setup lang="ts">
import { defineComponent, reactive } from 'vue'
import Navigation from './components/Navigation.vue'
import SubNavigation from './components/SubNavigation.vue'
import Carousel from './components/Carousel.vue'
import AdvertProduct from './components/AdvertProduct.vue'
import CategoryCard from './components/CategoryCard.vue'
import TopProducts from './components/TopProducts.vue'
import ProductCarousel from './components/ProductCarousel.vue'

const state = reactive({
  advert1: [
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
  ],
  advert2: [
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
      id: 2,
      name: 'relevant',
      iamge: '1224355',
    },
  ],
})
</script>

<template>
  <div class="header">
    <Navigation />
    <SubNavigation />
  </div>

  <div class="container">
    <div class="advert__first">
      <Carousel />
      <AdvertProduct :products="state.advert1" />
    </div>

    <div class="advert__second">
      <CategoryCard />
      <AdvertProduct :products="state.advert2" />
    </div>

    <div class="dic">
      <TopProducts />
      <ProductCarousel />
    </div>
  </div>
</template>

<style></style>
