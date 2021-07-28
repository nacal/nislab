<template>
  <header class="header" :class="{ scrolled: scrolledLayout }">
    <h1 class="header__title" @click="close()">
      <nuxt-link to="/" aria-label="トップページに遷移する"
        ><Nislab
      /></nuxt-link>
    </h1>
    <Nav class="header__nav" />
    <Hamburger />
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import { Nislab } from '~/components/assets/index'
import { Nav } from '~/components/common/index'
import { Hamburger } from '~/components/utility/index'

export default {
  components: {
    Nislab,
    Nav,
    Hamburger,
  },
  data() {
    return {
      scrolledLayout: true,
      scroll: 0,
    }
  },
  methods: {
    ...mapMutations(['close']),
  },
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  height: 80px;
  padding: 0 2.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.3));
  border-radius: 24px;
  transition: all 0.3s ease-in-out;

  @include mq(desk) {
    width: 100%;
    height: 64px;
    padding: 0 0 0 1rem;
    border-radius: 0 0 24px 24px;
  }

  &__title {
    width: 180px;
  }

  &__nav {
    @include mq(desk) {
      display: none;
    }
  }
}
</style>
