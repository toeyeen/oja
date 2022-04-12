<template>
  <div class="top-products__list-item__img">
    <img
      src="https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDI0OTgwM3xpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2g3Ny9oOWQvMTA0MjU3OTgxMzE3NDIuanBnfGE3NDMwY2Q4NGU0Y2RjZjcyOTdhMjEzNjNjMmI1ZjQzOGY2NDQxN2JhNWQ1NzY5NmY4YjI5ZDU2MzI0NTc0ZmY"
      alt=""
    />
  </div>
  <div class="top-products__list-item__title">{{ props.product.name }}</div>
  <div class="top-products__list-item__description">
    {{ props.product.description }}
  </div>
  <div class="top-products__list-item__price">R {{ props.product.price }}</div>
  <div class="top-products__list-item__btn">Shop now</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Product {
  id: string
  name: string
  image: string
  description: string
  price: string
}

const props = defineProps<{
  product: {
    id: string
    name: string
    image: string
    description: string
    price: string
  }
}>()
</script>

<style scoped></style>
