<script setup lang="ts">
import { defineComponent, reactive } from 'vue'
import Navigation from './components/Navigation.vue'
import SubNavigation from './components/SubNavigation.vue'
import Carousel from './components/Carousel.vue'
import AdvertProduct from './components/AdvertProduct.vue'
import CategoryCard from './components/CategoryCard.vue'
import TopProducts from './components/TopProducts.vue'
import ProductCarousel from './components/ProductCarousel.vue'
import Footer from './components/Footer.vue'

// const products = [
//   {
//     id: '1',
//     name: 'Nestle',
//     description: 'Cerelac Baby Cereal With Milk Banana 250g',
//     price: '37.99',
//     image:
//       'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI3NTQ5M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g1Ni9oMGYvMTAzNjk3NTE2NzkwMDYuanBnfDFiOWJjMDMzNDJiMDNmMWVhMDMxZWUzMmYwMmFjZjc3ZGYxZGQ5NzllYTlmYzRkYWJjNzdiYTE5NzZkNzA0NDE',
//   },
//   {
//     id: '2',
//     name: 'Indomie',
//     description: 'Cerelac Baby Cereal With Milk Banana 250g',
//     price: '37.99',
//     image:
//       'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI3NTQ5M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g1Ni9oMGYvMTAzNjk3NTE2NzkwMDYuanBnfDFiOWJjMDMzNDJiMDNmMWVhMDMxZWUzMmYwMmFjZjc3ZGYxZGQ5NzllYTlmYzRkYWJjNzdiYTE5NzZkNzA0NDE',
//   },
//   {
//     id: '3',
//     name: 'Dangote',
//     description: 'Cerelac Baby Cereal With Milk Banana 250g',
//     price: '37.99',
//     image:
//       'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY',
//   },
// ]

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
  products: [
    {
      id: '1',
      name: 'Nestle',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI3NTQ5M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g1Ni9oMGYvMTAzNjk3NTE2NzkwMDYuanBnfDFiOWJjMDMzNDJiMDNmMWVhMDMxZWUzMmYwMmFjZjc3ZGYxZGQ5NzllYTlmYzRkYWJjNzdiYTE5NzZkNzA0NDE',
    },
    {
      id: '2',
      name: 'Indomie',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI3NTQ5M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g1Ni9oMGYvMTAzNjk3NTE2NzkwMDYuanBnfDFiOWJjMDMzNDJiMDNmMWVhMDMxZWUzMmYwMmFjZjc3ZGYxZGQ5NzllYTlmYzRkYWJjNzdiYTE5NzZkNzA0NDE',
    },
    {
      id: '3',
      name: 'Dangote',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY',
    },
    {
      id: '4',
      name: 'Dangote',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY',
    },
    {
      id: '5',
      name: 'Dangote',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY',
    },
    {
      id: '6',
      name: 'Dangote',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY',
    },
  ],
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
      <category-card title="Trending Categories">
        <template v-slot:product>
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
        </template>
      </category-card>
      <AdvertProduct :products="state.advert2" />
    </div>

    <TopProducts />
    <div class="advert__third">
      <ProductCarousel
        headline="Save on Nestle Cerelac baby cereals!"
        :promotion="true"
        :products="state.products"
      />
      <ProductCarousel
        headline="Get the cheapest Nivea shower gel free, when you buy three!"
        :products="state.products"
      />
    </div>

    <div class="advert__fourth">
      <category-card
        v-for="category in state.categories"
        :key="category.id"
        :title="category.name"
      >
        <template v-slot:product>
          <div class="category__list-item">
            <div class="category__list-item__img">
              <img
                src="https://clicks.co.za/medias/Artboard-5.png?context=bWFzdGVyfEN1c3RvbUltYWdlc3w5NTcwfGltYWdlL3BuZ3xDdXN0b21JbWFnZXMvaGYzL2gwNi8xMDQwNjQwMzI3NjgzMC5wbmd8NDdhNTQ5ZGIxN2JmYTc3ODFiZmI4YTM2MjQ0OWI3YTdmNmExNTcxOGQ2NTRkMmY2OGFlZmIxNThhYThkODQ5OQ"
                alt=""
              />
            </div>
            <div class="category__list-item__title">
              <h3>{{ category.id }}</h3>
            </div>
          </div>
        </template>
      </category-card>
    </div>
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<style></style>
