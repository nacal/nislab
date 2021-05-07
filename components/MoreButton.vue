<template>
  <nuxt-link :to="linkTo" class="button" role="button"
    ><span>more</span></nuxt-link
  >
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      required: true,
      default: './',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-block;
  width: 240px;
  padding: 1rem 4rem;
  overflow: hidden;
  color: #fff;
  text-align: center;
  background: #000;
  border-radius: 30px;
  transition: all 0.3s;

  & span {
    position: relative;
    z-index: 1;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100px;
    height: 100px;
    content: '';
    background: $main-color;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    transform: translateX(-80%) translateY(-25px);
  }

  &:hover::before {
    width: 400px;
    height: 400px;
    transform: translateX(-1%) translateY(-175px);
  }
}
</style>
