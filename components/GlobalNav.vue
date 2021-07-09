<template>
  <div class="globalNav">
    <Nav />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ['profile', 'works', 'links'],
    }
  },
}
</script>

<style lang="scss" scoped>
.globalNav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: $main-color;
}
</style>
