<template>
  <div class="top-products">
    <h1 class="top-products__title">Top Sellers</h1>

    <div class="top-products__list">
      <div
        class="top-products__list-item"
        v-for="product in state.products"
        :key="product.id"
      >
        <!-- <div class="top-products__list-item__img">
          <img
            src="https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY"
            alt=""
          />
        </div>
        <div class="top-products__list-item__title">Garnier</div>
        <div class="top-products__list-item__description">
          Even & Matte Vitamin C Booster Serum 30ml
        </div>
        <div class="top-products__list-item__price">R 180.00</div>
        <div class="top-products__list-item__btn">Shop now</div>
        <div><BaseIcon name="star" /></div> -->
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
        >
          <ProductItem :product="product" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import ProductItem from './ProductItem.vue'

const state = reactive({
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
      name: 'Nestle',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI3NTQ5M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g1Ni9oMGYvMTAzNjk3NTE2NzkwMDYuanBnfDFiOWJjMDMzNDJiMDNmMWVhMDMxZWUzMmYwMmFjZjc3ZGYxZGQ5NzllYTlmYzRkYWJjNzdiYTE5NzZkNzA0NDE',
    },
    {
      id: '3',
      name: 'Nestle',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY',
    },
    {
      id: '4',
      name: 'Nestle',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI3NTQ5M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g1Ni9oMGYvMTAzNjk3NTE2NzkwMDYuanBnfDFiOWJjMDMzNDJiMDNmMWVhMDMxZWUzMmYwMmFjZjc3ZGYxZGQ5NzllYTlmYzRkYWJjNzdiYTE5NzZkNzA0NDE',
    },
    {
      id: '5',
      name: 'Nestle',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY',
    },
    {
      id: '6',
      name: 'Nestle',
      description: 'Cerelac Baby Cereal With Milk Banana 250g',
      price: '37.99',
      image:
        'https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI3NTQ5M3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g1Ni9oMGYvMTAzNjk3NTE2NzkwMDYuanBnfDFiOWJjMDMzNDJiMDNmMWVhMDMxZWUzMmYwMmFjZjc3ZGYxZGQ5NzllYTlmYzRkYWJjNzdiYTE5NzZkNzA0NDE',
    },
  ],
})
</script>

<style scoped></style>
