<template>
  <div>
    <Header class="l-header" />
    <main class="l-main" :class="{ lower: lowerPage }">
      <Nuxt />
    </main>
    <ReturnTop />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lowerPage: false,
      path: this.$route.path,
    }
  },
  watch: {
    $route(to) {
      this.path = to.path
      to.path === '/' ? (this.lowerPage = false) : (this.lowerPage = true)
    },
  },
  mounted() {
    this.path === '/' ? (this.lowerPage = false) : (this.lowerPage = true)
    this.$store.dispatch('getPosts')
  },
}
</script>

<style lang="scss" scoped>
.l-header {
  position: fixed;
  top: 32px;
  right: 0;
  left: 0;
  margin: 0 auto;
}
.l-main {
  max-width: 100vw;
  min-height: 100vh;
}
</style>
