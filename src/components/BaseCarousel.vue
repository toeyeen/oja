<template>
  <div class="carousel">
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
  </div>

  <div class="carousel__control">
    <button
      class="carousel__control-btn"
      @mouseenter="state.auto = false"
      @mouseleave="state.auto = true"
      v-if="state.ctrlPrevNext"
      @click="prev"
    >
      Prev
    </button>
    <div
      v-if="state.ctrlCenter"
      @click="goTo(+slide.id)"
      class="my-1 carousel__control-indicators"
      v-for="slide in state.slides"
      :key="slide.id"
      style="padding: 1rem"
    >
      {{ slide.id }}
    </div>
    <button
      class="carousel__control-btn"
      v-if="state.ctrlPrevNext"
      @click="next"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'

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

// don't forget to expose the function as well.

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
  interval: 3,
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
  // if (!state.activeIndex) return

  // const calc = -Math.abs(+state.position - +state.step)
  // state.position = +state.position - +state.step
  // state.activeIndex--

  // state.innerStyles = {
  //   transform: `translateX(${calc}px)`,
  // }

  if (state.activeIndex <= 1) return

  state.innerStyles = {
    transform: `translateX(${-Math.abs(+state.position - +state.percentage)}%)`,
  }
  state.position = +state.position - +state.percentage

  state.activeIndex--
}

const goTo = async (index: number): Promise<void> => {
  console.log(state.auto, 'before')
  state.auto = false

  await nextTick()

  console.log(state.auto, 'after')
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

const autoMove = (seconds: number): void => {
  if (!state.auto) return
  const intervalID = setInterval(() => {
    moveRight()
  }, seconds * 1000)
}

onMounted(() => {
  autoMove(state.interval)
})

onUnmounted(() => {
  clearInterval()
})

/**
   Create a carousel with Items
   We should be able to select current image and let it display

   Create an Array of

   */
</script>

<style scoped>
.my-1 {
  margin: 0 1rem;
}
</style>
