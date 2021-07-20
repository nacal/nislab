<template>
  <div>
    <transition name="pageLoading">
      <div v-show="pageLoading" class="pageLoading">
        <img
          src="../static/apple-touch-icon.png"
          alt="NISLAB"
          class="pageLoading__img"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLoading: true,
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.pageLoading = false
      }, 1500)
    })
  },
}
</script>

<style lang="scss" scoped>
.pageLoading-leave-active {
  transition: all 0.5s ease-out;
}
.pageLoading-enter,
.pageLoading-leave-to {
  opacity: 0;
}

.pageLoading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  &__img {
    max-height: 128px;
    animation: rotate-anime 3s linear infinite;
  }
}

@keyframes rotate-anime {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
