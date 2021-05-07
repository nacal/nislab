<template>
  <div class="cards">
    <Card
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title.rendered"
      :date="$moment(post.date).format('YYYY-MM-DD')"
      :img="
        post._embedded['wp:featuredmedia'][0].media_details.sizes.medium[
          'source_url'
        ]
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: false,
      default: 0,
    },
    filter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    posts() {
      return this.filter
        ? this.$store.getters.indexPosts(6)
        : this.$store.state.posts
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 64px 32px;
  justify-items: center;
  max-width: 100%;
}
</style>
