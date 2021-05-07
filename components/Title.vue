<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'title',
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  z-index: 1;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 100px;
    height: 100px;
    content: '';
    background: $main-color;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
