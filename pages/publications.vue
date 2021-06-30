<template>
  <Section class="publications">
    <Title :title="`Publications`" :sub-title="`研究業績`" />
    <!-- eslint-disable vue/no-v-html -->
    <article
      class="publications__content"
      v-html="$md.render(publication.fields.body)"
    />
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData() {
    return await client
      .getEntry('5WmJj7781fcwFFWFRnHkZP')
      .then((publication) => {
        return {
          publication,
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

  &__content {
    margin-top: 8rem;
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
    margin-bottom: 1rem;
  }
}
</style>
