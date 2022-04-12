<template>
  <div class="product-carousel">
    <div class="product-carousel__title">
      <h1>Get the cheapest Nivea shower gel free, when you buy three!</h1>
      <button class="btn btn-link">View more</button>
    </div>

    <div
      class="product-carousel__inner"
      ref="inner"
      :style="state.innerStyles"
      style="transform: translateX(-0%)"
    >
      <div class="product-carousel__list">
        <div
          class="product-carousel__list-item"
          v-for="product in state.products"
          :key="product.id"
        >
          <ProductItem :product="product" />
        </div>
      </div>
      <!-- <div
        v-for="slide in state.products"
        :key="slide.id"
        class="carousel__inner-card"
      >
        <ProductItem :product="slide" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import { reactive, ref, onMounted, onUnmounted } from 'vue'
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
  ],
  activeIndex: 1,
  step: '',
  innerStyles: {},
  position: 100,
  percentage: 100,
  auto: false,
  text: '',
  count: 0,
  interval: 3,
  ctrlPrevNext: false,
  ctrlCenter: true,
})
const inner = ref()

const setStep = () => {
  const innerWidth = inner.value.scrollWidth

  const totalSlides = state.products.length
  state.step = `${(innerWidth / totalSlides).toFixed(2)}`
}
const moveLeft = () => {
  if (state.activeIndex < 1) return

  console.log(state.activeIndex)
  if (state.activeIndex == 1) {
    state.position = state.products.length * +state.percentage
    state.activeIndex = state.products.length + 1

    console.log('back active')
  }

  state.innerStyles = {
    transform: `translateX(${-Math.abs(+state.position - +state.percentage)}%)`,
  }
  state.position = +state.position - +state.percentage

  state.activeIndex--
}

const moveRight = () => {
  if (state.activeIndex == state.products.length) {
    state.activeIndex = 0
    state.innerStyles = ''
    state.position = 100
    state.percentage = 100
  }

  state.innerStyles = {
    transform: `translateX(-${+state.percentage * +state.activeIndex}%)`,
  }
  state.position = +state.percentage * state.activeIndex
  state.activeIndex++
}

const paused = (pause: boolean) => {
  state.auto = pause

  console.log(state.auto)
  console.log('here here')
}

const goTo = (index: number): void => {
  state.activeIndex = index

  const multiplier = index - 1 * +state.percentage

  state.innerStyles = {
    transform: `translateX(${-Math.abs((index - 1) * +state.percentage)}%)`,
  }
}

const resetTranslate = () => {
  state.innerStyles = {
    transition: 'none',
    transform: 'translateX(0)',
  }
}

const next = () => {
  moveRight()
}

const prev = () => {
  // if (state.activeIndex == state.products.length - 1) return
  moveLeft()
}

const autoMove = (): number => {
  const intervalID = setInterval(() => {
    if (!state.auto) return
    moveRight()
  }, state.interval * 1000)

  return intervalID
}

onMounted(() => {
  setStep()
  autoMove()
})

onUnmounted(() => {
  clearInterval(autoMove())
})
</script>

<style scoped></style>
