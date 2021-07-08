<template>
  <nuxt-link :to="slug" class="back">{{ text }}</nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'トップへ',
    },
    slug: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped>
.back {
  width: 80px;
  margin: 4rem auto 0;
  text-align: center;
  border-bottom: 2px solid #000;
  transition: all 0.2s ease-in-out;

  &:hover {
    width: 100px;
    color: #666;
  }
}
</style>
