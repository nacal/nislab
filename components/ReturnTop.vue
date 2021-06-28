<template>
  <transition name="button">
    <button
      v-show="buttonActive"
      class="returnTop"
      aria-label="Topへ戻る"
      @click="returnTop"
    >
      <ChevronUp />
    </button>
  </transition>
</template>

<script>
import { ChevronUp } from '~/components/icons/index'

export default {
  components: {
    ChevronUp,
  },
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    scrollWindow() {
      const top = 1000
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.button-enter-active,
.button-leave-active {
  transition: opacity 0.5s;
}
.button-enter,
.button-leave-to {
  opacity: 0;
}
.returnTop {
  position: fixed;
  right: 16px;
  bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 0.75rem;
  line-height: 64px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background-color: $main-color;
  border-radius: 50%;
  transition: 0.2s all ease-out 0s;

  &:hover {
    transition: 0.5s all ease-out 0s;
    transform: scale(0.9);
  }
}
</style>
