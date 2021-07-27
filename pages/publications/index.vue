<template>
  <article>
    <Section class="publications">
      <Title :title="`Publications`" :sub-title="`研究業績`" />
      <!-- eslint-disable vue/no-v-html -->
      <article class="publications__content content">
        <h3 class="publications__title">{{ publications[0].fields.title }}</h3>
        <div v-html="$md.render(publications[0].fields.body)" />
      </article>
      <ReturnPage />
    </Section>
    <PublicationsList />
  </article>
</template>

<script>
import { PublicationsList } from '~/components/common/index'
import { Section, Title, ReturnPage } from '~/components/utility/index'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  components: {
    PublicationsList,
    Section,
    Title,
    ReturnPage,
  },
  async asyncData() {
    return await client
      .getEntries({
        content_type: 'publications',
        order: '-fields.date',
      })
      .then((res) => {
        return {
          publications: res.items,
        }
      })
      .catch()
  },
  head() {
    return {
      title: '研究業績 | NISLAB',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: '研究業績 | NISLAB',
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
