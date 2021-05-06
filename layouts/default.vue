<template>
  <div>
    <Header class="l-header" />
    <main class="l-main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
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
  min-height: 100vh;
}
</style>
