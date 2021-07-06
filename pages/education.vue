<template>
  <Section>
    <Title :title="`Education`" :sub-title="`NISLABについて`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="contact__content content">
      <div v-html="$md.render(body)" />
    </article>
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
        'fields.slug': 'education',
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
.contact {
  margin: 1rem auto;

  &__content {
    width: $content-width;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }
}
</style>
