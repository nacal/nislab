<template>
  <Section class="publications">
    <Title :title="`Publications`" :sub-title="`研究業績`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="publications__content content">
      <h3 class="publications__title">{{ publication.fields.title }}</h3>
      <div v-html="$md.render(publication.fields.body)" />
    </article>
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData({ params }) {
    return await client
      .getEntries({
        content_type: 'publications',
        'fields.slug': params.publication,
      })
      .then((res) => {
        return { publication: res.items[0] }
      })
      .catch()
  },
}
</script>

<style lang="scss" scoped>
.publications {
  margin: 1rem auto;

  &__title {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  &__content {
    width: 960px;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }
}
</style>
