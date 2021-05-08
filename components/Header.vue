<template>
  <header class="header" :class="{ scrolled: scrolledLayout }">
    <h1 class="header__title">
      <nuxt-link to="/" aria-label="トップページに遷移する"
        ><img src="~/assets/images/nislab-wide.png" alt="NISLAB"
      /></nuxt-link>
    </h1>
    <Nav />
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolledLayout: false,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollWindow() {
      const top = window.innerHeight
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.scrolledLayout = true
      } else {
        this.scrolledLayout = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  height: 120px;
  padding: 0 2.5rem;
  background-color: #fff;
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.3));
  border-radius: 24px;
  transition: all 0.3s ease-in-out;

  &__title {
    width: 180px;
  }

  &.scrolled {
    top: 16px;
    height: 80px;
  }
}
</style>
