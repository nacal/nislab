<template>
  <section class="post">
    <div class="post__header">
      <h2 class="post__title">{{ post.title.rendered }}</h2>
      <p class="post__date">{{ $moment(post.date).format('YYYY-MM-DD') }}</p>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="post__content content" v-html="post.content.rendered" />
    <nuxt-link to="/">back</nuxt-link>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config, params }) {
    return await axios
      .get(`${$config.apiUrl}/posts/${params.post}?_embed`)
      .then((res) => {
        return {
          post: res.data,
        }
      })
      .catch(() => {
        return {}
      })
  },
}
</script>

<style lang="scss" scoped>
.post {
  width: 80%;
  margin: 1rem auto;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 2rem;
  }

  &__content {
    margin-top: 2rem;
  }
}
</style>

<style lang="scss">
.content {
  p {
    margin-bottom: 1em;
  }

  a {
    color: $main-color;
    text-decoration: underline;
  }

  li {
    line-height: 2em;
  }
}
</style>
