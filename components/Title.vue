<template>
  <h2 class="title">
    <span class="title__en">{{ title }}</span>
    <span class="title__ja">{{ subTitle }}</span>
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'title',
    },
    subTitle: {
      type: String,
      required: true,
      default: 'タイトル',
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  text-align: center;

  &__en {
    padding: 0 0.5rem;
    font-family: $font-set-en;
    font-size: 2rem;
    color: $main-color;
    border-bottom: 3px solid #000;
  }

  &__ja {
    margin-top: 0.5rem;
  }
}
</style>
