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
    <!-- <router-view v-slot="{ Component, route }">
      <transition>
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view> -->
    <router-view></router-view>
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<style lang="scss">
@use './style/main.scss' as vars;

/* .slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-enter-from,
.slide-enter-to {
  opacity: 0;
  transform: translateX(-30%);
} */

.slide-left-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  opacity: 0;
  transform: translate(-100vw);
  overflow: hidden;
}

.slide-left-enter {
  opacity: 0;
  transform: translate(100vw);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(20px);
  clip-path: polygon(
    calc(100% - 45px) 0,
    100% 0,
    100% 100%,
    0 100%,
    0 5px,
    calc(100% - 25px) 0,
    calc(100% - 35px) 0
  );
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s, transform 0.5s, clip-path 1s;
}

.splide {
  &-carousel {
    height: 100%;
  }
  height: 300px;

  @include vars.respond(tab-land) {
    height: 200px;
  }

  @include vars.respond(desktop) {
    height: 300px;
  }

  @include vars.respond(big-desktop) {
    height: 300px;
  }

  &__track {
    height: 100%;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__slide {
    // color: vars.$white-color;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
