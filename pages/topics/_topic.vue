<template>
  <Section class="post">
    <div class="post__header">
      <h2 class="post__title">{{ post.fields.title }}</h2>
      <p class="post__date">{{ post.fields.date }}</p>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div class="post__content content" v-html="$md.render(post.fields.body)" />
    <nuxt-link to="/topics" class="post__back">投稿一覧へ</nuxt-link>
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData({ params }) {
    return await client
      .getEntry(params.topic)
      .then((post) => {
        return {
          post,
        }
      })
      .catch()
  },
}
</script>

<style lang="scss" scoped>
.post {
  width: $content-width;
  max-width: 90%;
  margin: 1rem auto;

  &__header {
    display: grid;
    grid-template-columns: 10fr 1fr;
    align-items: center;
  }

  &__title {
    font-size: 2rem;
    font-weight: bold;
    word-break: keep-all;
  }

  &__content {
    margin-top: 2rem;
  }

  &__back {
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
}
</style>
