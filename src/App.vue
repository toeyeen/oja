<script setup lang="ts">
import { defineComponent, reactive } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

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
    <Navbar />
  </div>

  <div class="content">
    <router-view></router-view>
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<style></style>
