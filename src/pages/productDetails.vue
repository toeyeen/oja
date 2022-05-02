<template>
  <div class="product">
    <div class="product__general">
      <div class="product__general-section-1">
        <ul>
          <li>
            <img
              class="gallery-image"
              data-bind="attr: imageSources().thumbnail"
              sizes="40px"
              alt="Thumbnail 1 of 4"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/64d34b90-daf8-4429-819c-e8eb59832699/jordan-series-4-mens-shoes-zlXS1T.png"
            />
          </li>
          <li>
            <img
              class="gallery-image"
              data-bind="attr: imageSources().thumbnail"
              sizes="40px"
              alt="Thumbnail 1 of 4"
              src="https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain"
              srcset="
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain   40w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=75&amp;fit=constrain   75w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=120&amp;fit=constrain 120w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=168&amp;fit=constrain 168w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_320w$&amp;wid=317&amp;fit=constrain 317w
              "
            />
          </li>
          <li>
            <img
              class="gallery-image"
              data-bind="attr: imageSources().thumbnail"
              sizes="40px"
              alt="Thumbnail 1 of 4"
              src="https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain"
              srcset="
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain   40w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=75&amp;fit=constrain   75w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=120&amp;fit=constrain 120w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=168&amp;fit=constrain 168w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_320w$&amp;wid=317&amp;fit=constrain 317w
              "
            />
          </li>
          <li>
            <img
              class="gallery-image"
              data-bind="attr: imageSources().thumbnail"
              sizes="40px"
              alt="Thumbnail 1 of 4"
              src="https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain"
              srcset="
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain   40w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=75&amp;fit=constrain   75w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=120&amp;fit=constrain 120w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=168&amp;fit=constrain 168w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_320w$&amp;wid=317&amp;fit=constrain 317w
              "
            />
          </li>
          <li>
            <img
              class="gallery-image"
              data-bind="attr: imageSources().thumbnail"
              sizes="40px"
              alt="Thumbnail 1 of 4"
              src="https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain"
              srcset="
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=40&amp;fit=constrain   40w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=75&amp;fit=constrain   75w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=120&amp;fit=constrain 120w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_240w$&amp;wid=168&amp;fit=constrain 168w,
                https://images.asos-media.com/products/asos-design-skinny-jeans-in-flat-mid-wash-blue/22415420-1-midwashblue?$n_320w$&amp;wid=317&amp;fit=constrain 317w
              "
            />
          </li>
        </ul>
      </div>
      <div class="product__general-section-2">
        <Splide :options="splideOptions">
          <SplideSlide>
            <img
              src="https://clicks.co.za/medias/?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDE1MTUxOXxpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2hiZS9oOTgvMTAzNjY0MzEwMzU0MjIuanBnfGM1NDdhYjVhZmM1N2NhYjVhOTUxMzQ4OTdhNTFhMjk3NmVhYWJjYmVjOWMxZTRmNzYzZTQzMDk3ODcyNTVmNDE"
              alt="Sample 1"
              style="height: 100%"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div class="product__general-section-3">
        <div class="product__general-section-3__title">
          <h1>Nivea Men</h1>
          <p>Deep Deodorant Roll-on Black Carbon Espresso 50ml</p>
        </div>
        <div class="product__general-section-3__price">
          <p>$103.00</p>
        </div>
        <div class="product__general-section-3__ratings">
          <span>
            <BaseIcon
              v-for="item in [...new Array(ratings)]"
              name="star"
              stroke="gold"
              fill="gold"
              :size="18"
            />
            <BaseIcon
              v-for="item in [...new Array(stars - ratings)]"
              name="star"
              stroke="gold"
              :size="18"
            />
          </span>
          <p>
            {{ ratings.toFixed(1) }}
          </p>
          <p>({{ reviews }})</p>

          <!-- <BaseIcon name="star" stroke="gold" fill="gold" :size="16" />
          <BaseIcon name="star" stroke="gold" fill="gold" :size="16" />
          <BaseIcon name="star" stroke="gold" :size="16" />
          <BaseIcon name="star" stroke="gold" :size="16" /> -->
        </div>
      </div>
    </div>
    <div class="product__information">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum
        molestias eaque aliquid reprehenderit doloribus dolor labore, veniam
        laudantium. Numquam!
      </p>
    </div>
    <div class="product__reviews">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur
      corrupti optio? Voluptas, cupiditate totam quo repellendus asperiores
      itaque culpa soluta consequatur consequuntur maxime numquam expedita
      dignissimos exercitationem esse quis?
    </div>

    <h1>{{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '../components/BaseIcon.vue'

const ratings = ref(3)
const reviews = ref(3)
const stars = 5

const props = defineProps({
  id: String,
})

const splideOptions = {
  autoplay: true,
  rewind: true,
}
</script>

<style scoped lang="scss">
@use '../style/main.scss' as vars;
.product {
  margin: 0 auto;

  @include vars.respond(tab-land) {
    max-width: 1200px;
  }

  &__general,
  &__information,
  &__reviews {
    font-size: 14px;
    margin-bottom: 2rem;
    padding: 2rem 2.4rem;
    background: vars.$white-color;
  }

  &__general {
    width: 100%;
    display: grid;

    @include vars.respond(tab-port) {
      grid-template-columns: 6% 40% 1fr;
      padding: 2rem 0rem;
    }

    column-gap: 2rem;
    &-section-1 {
      & > ul {
        display: none;

        @include vars.respond(tab-port) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          row-gap: 1rem;
          align-items: center;
        }

        & > li {
          transition: box-shadow 0.5s;
          &:hover {
            box-shadow: rgba(210, 210, 210, 0.16) 0px 1px 4px,
              rgb(131, 131, 131) 0px 0px 0px 3px;
            cursor: pointer;
          }
          & > img {
            max-width: 50px;
            max-height: 50px;
          }
        }
      }
      border: 1px solid green;
    }
    &-section-2 {
      border: 1px solid red;
      padding: 1.5rem 0rem;
    }
    &-section-3 {
      letter-spacing: 1px;
      border: 1px solid orange;

      &__ratings {
        font-size: 18px;
        line-height: 1.6;
        border: 1px solid red;
        display: flex;
        align-items: center;
      }
    }
  }
}
/** Component related design are done here */
</style>
