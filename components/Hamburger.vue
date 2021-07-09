<template>
  <div class="hamburger">
    <input
      id="menu"
      type="checkbox"
      class="hamburger__input"
      @change="toggle()"
    />
    <label for="menu" class="hamburger__icons">
      <transition name="fade" mode="out-in">
        <MenuIcon v-if="isOpen === false" class="hamburger__icon" />
        <MenuCloseIcon v-else class="hamburger__icon" />
      </transition>
    </label>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { MenuIcon, MenuCloseIcon } from '~/components/assets/index'

export default {
  components: { MenuIcon, MenuCloseIcon },
  computed: {
    isOpen() {
      return this.$store.state.isOpen
    },
  },
  methods: {
    ...mapMutations(['toggle']),
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.hamburger {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 0 0 24px 0;

  @include mq(desk, min) {
    display: none;
  }

  &__input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: $main-color;
    appearance: none;
    border-radius: 0 0 24px 0;
  }

  &__icons {
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  &__icon {
    color: #fff;
  }
}
</style>
