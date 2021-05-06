<template>
  <div class="hero">
    <swiper :options="swiperOption" class="hero__swiper">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img
          :src="require(`~/assets/images/${image}`)"
          alt=""
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

  &__filter {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: radial-gradient(#000 35%, transparent 36%);
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
  }

  &__labName {
    font-size: 4rem;
    line-height: 1em;
  }
}
</style>
