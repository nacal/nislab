<template>
  <Section class="post">
    <div class="post__header">
      <h2 class="post__title">{{ post.fields.title }}</h2>
      <p class="post__date">{{ post.fields.publishedAt }}</p>
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
  width: 960px;
  max-width: 90%;
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
