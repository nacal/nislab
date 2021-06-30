<template>
  <Section class="publications">
    <Title :title="`Publications`" :sub-title="`研究業績`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="publications__content">
      <h3 class="publications__title">{{ publications[0].fields.title }}</h3>
      <div v-html="$md.render(publications[0].fields.body)" />
    </article>
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData({ $config }) {
    return await client
      .getEntries({
        content_type: $config.publicationsTypeID,
        // order: '-fields.date',
      })
      .then((res) => {
        return {
          publications: res.items,
        }
      })
      .catch()
  },
}
</script>

<style lang="scss" scoped>
.publications {
  width: 960px;
  max-width: 90%;
  margin: 1rem auto;

  &__title {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  &__content {
    margin-top: 4rem;
  }
}
</style>

<style lang="scss">
.publications__content {
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  h3:not(:first-child) {
    margin-top: 2rem;
  }

  li {
    padding-top: 1rem;
    margin-bottom: 1rem;
  }

  li + li {
    border-top: 1px solid #000;
  }
}
</style>
