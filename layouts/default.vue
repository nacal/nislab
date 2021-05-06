<template>
  <Nuxt />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getPosts')
  },
}
</script>
