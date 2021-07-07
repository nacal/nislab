<template>
  <Section class="publications">
    <Title :title="`Publications`" :sub-title="`研究業績`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="publications__content content">
      <h3 class="publications__title">{{ publication.fields.title }}</h3>
      <div v-html="$md.render(publication.fields.body)" />
    </article>
    <article>
      <h3 class="publications__title">研究業績一覧</h3>
      <ul class="publications__links">
        <li v-for="(publication, index) in publications" :key="index">
          <!-- <span v-show="index != 0"> -->
          <nuxt-link :to="`/publications/${publication.fields.slug}`">{{
            publication.fields.title
          }}</nuxt-link>
          <!-- </span> -->
        </li>
      </ul>
    </article>
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData({ params }) {
    const publication = await client
      .getEntries({
        content_type: 'publications',
        'fields.slug': params.publication,
      })
      .then((res) => {
        return res.items[0]
      })
      .catch()
    const publications = await client
      .getEntries({
        content_type: 'publications',
        order: '-fields.date',
      })
      .then((res) => {
        return res.items
      })
      .catch()
    return { publications, publication }
  },
}
</script>

<style lang="scss" scoped>
.publications {
  &__title {
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
  }

  &__content {
    width: $content-width;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }

  &__links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 1.5rem;
    justify-items: center;
    width: $content-width;
    max-width: 90%;
    margin: 0 auto;
  }
}
</style>
