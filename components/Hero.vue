<template>
  <div class="hero">
    <swiper :options="swiperOption" class="hero__swiper">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img
          :src="require(`~/assets/images/${image}`)"
          alt="NISLABイメージ画像"
          class="hero__image"
        />
      </swiper-slide>
    </swiper>
    <div class="hero__filter" />
    <h2 class="hero__title">
      <span class="hero__univName">Doshisha University</span>
      <span v-for="(span, index) in name" :key="index" class="hero__labName">{{
        span
      }}</span>
    </h2>
    <!-- <nuxt-link to="#about" class="hero__scroll">Scroll</nuxt-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ['hero1.jpg', 'hero2.jpg'],
      name: ['Network', 'Information', 'System', 'Laboratory'],
      swiperOption: {
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: $font-set-en;

  &__filter {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: radial-gradient(rgba(0, 0, 0, 0.3) 35%, transparent 36%);
    background-repeat: repeat;
    background-position: 0 0, 20px 20px;
    background-size: 3px 3px;
  }

  &__swiper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
  }

  &__title {
    position: absolute;
    bottom: 32px;
    left: 32px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #fff;
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.6));
  }

  &__univName {
    display: inline;
    font-size: 2rem;
    border-bottom: 3px solid #fff;

    @include mq(sp) {
      font-size: 1.5rem;
    }
  }

  &__labName {
    font-size: 4rem;
    line-height: 1em;

    @include mq(sp) {
      font-size: 3rem;
    }
  }

  &__scroll {
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 1.5rem;
    height: 200px;
    overflow: hidden;
    font-size: 1.5rem;
    color: #fff;
    text-transform: uppercase;
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.6));
    writing-mode: vertical-lr;

    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 2px;
      height: 100px;
      content: '';
      background: #fff;
      animation: scrollDown 3s cubic-bezier(1, 0, 0, 1) infinite;

      @keyframes scrollDown {
        0% {
          transform: scale(1, 0);
          transform-origin: 0 0;
        }
        50% {
          transform: scale(1, 1);
          transform-origin: 0 0;
        }
        50.1% {
          transform: scale(1, 1);
          transform-origin: 0 100%;
        }
        100% {
          transform: scale(1, 0);
          transform-origin: 0 100%;
        }
      }
    }
  }
}
</style>
