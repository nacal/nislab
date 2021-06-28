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
  width: 640px;
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
    margin: 1rem 0 0.5rem 0;
    font-size: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
}
</style>
