<template>
  <Section class="advisor">
    <Title :title="`Advisor`" :sub-title="`教員`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="advisor__content content">
      <div v-html="$md.render(body)" />
    </article>
    <ReturnPage />
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData() {
    return await client
      .getEntries({
        content_type: 'pages',
        'fields.slug': 'advisor',
        limit: 1,
      })
      .then((res) => {
        return {
          body: res.items[0].fields.body,
        }
      })
      .catch()
  },
}
</script>

<style lang="scss" scoped>
.advisor {
  &__content {
    width: $content-width;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }
}
</style>
