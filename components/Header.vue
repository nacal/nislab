<template>
  <header class="header">
    <h1 class="header__title">
      <nuxt-link to="/" aria-label="トップページに遷移する"
        ><img src="~/assets/images/nislab-wide.png" alt="NISLAB"
      /></nuxt-link>
    </h1>
    <Nav />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 120px;
  padding: 0 2.5rem;
  background-color: #fff;
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.3));
  border-radius: 24px;

  &__title {
    width: 180px;
  }
}
</style>
