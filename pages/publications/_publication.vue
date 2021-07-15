<template>
  <article>
    <Section class="publications">
      <Title :title="`Publications`" :sub-title="`研究業績`" />
      <!-- eslint-disable vue/no-v-html -->
      <article class="publications__content content">
        <h3 class="publications__title">{{ publication.fields.title }}</h3>
        <div v-html="$md.render(publication.fields.body)" />
      </article>
      <ReturnPage />
    </Section>
    <PublicationsList />
  </article>
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
  head({ $config, params }) {
    return {
      title: this.publication.fields.title + ' | NISLAB',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: $config.baseURL + params.publication,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.publication.fields.title + ' | NISLAB',
        },
      ],
    }
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
    margin: 4rem auto 0;
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
