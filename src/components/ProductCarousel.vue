<template>
  <div class="product-carousel">
    <div class="product-carousel__title">
      <h1 :class="headlineStyle">{{ props.headline }}</h1>
      <button class="btn btn-link">View more</button>
    </div>

    <!-- <div class="product-carousel__inner" ref="inner" :style="state.innerStyles">
      <div
        class="product-carousel__list-item"
        v-for="product in props.products"
        :key="product.id"
        :style="state.divStyle"
      >
        <div class="product-carousel__list-style">
          <ProductItem :product="product" />
        </div>
      </div>


    </div>   

    <div
      class="carousel__control"
      @mouseenter="state.auto = false"
      @mouseleave="state.auto = true"
    >
      <button
        class="carousel__control-btn"
        v-show="state.ctrlPrevNext"
        @click="prev"
      >
        Prev
      </button>
      <div
        v-for="product in props.products"
        v-if="state.ctrlCenter"
        @click="goTo(+product.id)"
        class="carousel__control-indicators"
        :class="state.activeIndex == product.id ? 'active' : ''"
        :key="product.id"
        style="padding: 1rem"
      ></div>
      <button
        class="carousel__control-btn"
        v-show="state.ctrlPrevNext"
        @click="next"
      >
        Next
      </button>
    </div> -->

    <div class="splide-carousel">
      <Splide :options="splideOptions">
        <SplideSlide v-for="product in props.products" :key="product.id">
          <div class="product-carousel__list-style">
            <ProductItem :product="product" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from './ProductItem.vue'
// import { useMedia } from '../composable/useMedia'

import { reactive, ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  headline: {
    type: String,
  },
  products: {
    type: Array,
    required: true,
  },
  promotion: {
    type: Boolean,
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
  activeIndex: 1,
  step: '',
  innerStyles: {},
  divStyle: {},
  position: 100,
  percentage: 100,
  auto: false,
  text: '',
  count: 0,
  interval: 4,
  ctrlPrevNext: false,
  ctrlCenter: true,
  perPage: 2,
})
const inner = ref()

const splideOptions = {
  // autoplay: true,
  rewind: true,
  perPage: 2,
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
}

const headlineStyle = computed(() => {
  return { 'text-red': props.promotion == true }
})

const setStep = () => {
  const innerWidth = inner.value.scrollWidth

  const totalSlides = props.products.length

  if (window.innerWidth < 600) {
    state.divStyle = {
      width: `calc(100%)`,
    }
    state.step = `${(innerWidth / totalSlides).toFixed(2)}`
  }
  state.step = `${(innerWidth / totalSlides / state.perPage).toFixed(2)}`

  state.divStyle = {
    width: `calc(${state.percentage / state.perPage}%)`,
  }
}
const moveLeft = () => {
  if (state.activeIndex < 1) return

  skipLast('left')

  console.log(+state.position - +state.step)

  state.innerStyles = {
    transform: `translateX(${-Math.abs(+state.position - +state.step)}px)`,
  }

  state.position = +state.position - +state.step

  state.activeIndex--
}

const moveRight = () => {
  skipLast('right')

  state.innerStyles = {
    transform: `translateX(-${+state.step * +state.activeIndex}px)`,
  }

  state.position = +state.step * state.activeIndex
  state.activeIndex++
}

const skipLast = (direction: string) => {
  if (
    state.perPage > 1 &&
    state.activeIndex == props.products.length - 1 &&
    direction == 'right'
  ) {
    state.activeIndex = 0
    state.innerStyles = ''
    state.position = 100
    state.percentage = 100
  }
  if (state.perPage > 1 && state.activeIndex == 1 && direction == 'left') {
    state.activeIndex = props.products.length
    // state.innerStyles = ''
    // state.position = 100
    // state.percentage = 100
    console.log('shpout from the skipleft ')
  }
}

const paused = (pause: boolean) => {
  state.auto = pause
}

const goTo = (index: number): void => {
  state.activeIndex = index

  const multiplier = index - 1 * +state.step

  state.innerStyles = {
    transform: `translateX(${-Math.abs((index - 1) * +state.step)}px)`,
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
  // if (state.activeIndex == props.products.length - 1) return
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
  window.addEventListener('resize', setStep)
  // setStep()
  autoMove()
})

onUnmounted(() => {
  window.removeEventListener('resize', setStep)

  clearInterval(autoMove())
})
</script>

<style scoped></style>
