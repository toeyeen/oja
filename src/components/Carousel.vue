<template>
  <!-- <div class="carousel">
    <div class="carousel__inner" ref="inner" :style="state.innerStyles">
      <div
        v-for="slide in state.slides"
        :key="slide.id"
        class="carousel__inner-card"
      >
        <h1>
          {{ slide.id }}
        </h1>
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
        v-if="state.ctrlCenter"
        @click="goTo(+slide.id)"
        class="carousel__control-indicators"
        :class="state.activeIndex == slide.id ? 'active' : ''"
        v-for="slide in state.slides"
        :key="slide.id"
        style="padding: 1rem"
      ></div>
      <button
        class="carousel__control-btn"
        v-show="state.ctrlPrevNext"
        @click="next"
      >
        Next
      </button>
    </div>
  </div> -->

  <div class="splide-carousel">
    <Splide :options="{ rewind: true }">
      <SplideSlide v-for="slide in state.slides" :key="slide.id">
        <h1>
          {{ slide.id }}
        </h1>
        <!-- 
        <img
          src="https://images.unsplash.com/photo-1648047548158-c5dadf258bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="Sample 1"
          style="height: 100%"
        /> -->
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, onUpdated } from 'vue'

interface Slide {
  id: number | string
  name: string
  content: string
}

interface State {
  activeIndex: number
  slides: Array<Slide>
  innerStyles: {}
  step: string
  position: string | number
  percentage: string | number
  auto: boolean
  text: string
  count: number
  interval: number
  ctrlPrevNext: boolean
  ctrlCenter: boolean
}

const state: State = reactive({
  activeIndex: 1,
  slides: [
    { id: 1, name: 'Jolaoso', content: '' },
    { id: 2, name: 'Bukola', content: '' },
    { id: 3, name: 'Gabriel', content: '' },
    { id: 4, name: 'Olamide', content: '' },
    { id: 5, name: 'James', content: '' },
    { id: 6, name: 'Inbukm', content: '' },
    { id: 7, name: 'Obigwor', content: '' },
  ],
  step: '',
  innerStyles: '',
  position: 100,
  percentage: 100,
  auto: true,
  text: '',
  count: 0,
  interval: 4,
  ctrlPrevNext: false,
  ctrlCenter: true,
})

const inner = ref()

const setStep = () => {
  const innerWidth = inner.value.scrollWidth

  const totalSlides = state.slides.length
  state.step = `${innerWidth / totalSlides}`
}
const moveLeft = () => {
  if (state.activeIndex < 1) return

  console.log(state.activeIndex)
  if (state.activeIndex == 1) {
    state.position = state.slides.length * +state.percentage
    state.activeIndex = state.slides.length + 1

    console.log('back active')
  }

  state.innerStyles = {
    transform: `translateX(${-Math.abs(+state.position - +state.percentage)}%)`,
  }
  state.position = +state.position - +state.percentage

  state.activeIndex--
}

const moveRight = () => {
  if (state.activeIndex == state.slides.length) {
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
  // if (state.activeIndex == state.slides.length - 1) return
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
  autoMove()
})

onUpdated(() => {})

onUnmounted(() => {
  clearInterval(autoMove())
})

/**
   Create a carousel with Items
   We should be able to select current image and let it display

   Create an Array of

   */
</script>

<style lang="scss">
// .splide__track {
//   height: 100%;
// }
// height: 200px;
</style>
