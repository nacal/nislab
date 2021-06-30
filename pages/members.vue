<template>
  <Section class="members">
    <Title :title="`Members`" :sub-title="`メンバー一覧`" />
    <!-- eslint-disable vue/no-v-html -->
    <article
      class="members__content"
      v-html="$md.render(members.fields.body)"
    />
  </Section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData() {
    return await client
      .getEntry('1z61gVmBB7WnqlH8aIgfJW')
      .then((members) => {
        return {
          members,
        }
      })
      .catch()
  },
}
</script>

<style lang="scss" scoped>
.members {
  width: 640px;
  max-width: 90%;
  margin: 1rem auto;

  &__content {
    margin-top: 8rem;
  }
}
</style>

<style lang="scss">
.members__content {
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  table {
    width: 100%;
    margin-top: 1.5rem;
    background-color: #efefef;
  }

  th,
  td {
    padding-left: 1rem;
    line-height: 2rem;
    border: solid 1px;
  }
}
</style>
