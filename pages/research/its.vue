<template>
  <Section class="its">
    <Title :title="`ITS`" :sub-title="`Intelligent Transport Systems`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="its__content content">
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
        'fields.slug': 'its',
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
.its {
  &__content {
    width: $content-width;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }
}
</style>
