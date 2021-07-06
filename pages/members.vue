<template>
  <Section class="members">
    <Title :title="`Members`" :sub-title="`研究室メンバー`" />
    <!-- eslint-disable vue/no-v-html -->
    <article class="members__content content" v-html="$md.render(body)" />
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData() {
    return await client
      .getEntries({
        content_type: 'members',
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
.members {
  width: $content-width;
  max-width: 90%;
  margin: 1rem auto;

  &__content {
    margin-top: 4rem;
  }
}
</style>
