<template>
  <Section class="iot">
    <Title :title="`IoT`" :sub-title="`Internet of Things`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="iot__content content">
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
        'fields.slug': 'iot',
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
.iot {
  &__content {
    width: $content-width;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }
}
</style>
