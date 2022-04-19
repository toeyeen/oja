<template>
  <div class="advert-products">
    <div
      class="advert-product"
      v-for="product in props.products"
      :key="product.id"
    >
      <div class="advertProduct__image">
        <img
          src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648030993/contentservice/superapp.gif_HkYfBu_zc.gif"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, PropType } from 'vue'

interface Products {
  products: Array<Product>
}

interface Product {
  id: number
  name: string
  iamge: string
}

const props = defineProps<Products>()
const state = reactive({
  products: [
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
})
</script>

<style scoped></style>
