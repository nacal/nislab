<template>
  <Section>
    <Title :title="`Topics`" :sub-title="`記事一覧`" />
    <Topics class="topics__cards" />
    <ReturnPage />
  </Section>
</template>

<script>
export default {
  head() {
    return {
      title: '記事一覧 | NISLAB',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: '記事一覧 | NISLAB',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.topics {
  &__cards {
    margin-top: 4rem;
  }
}
</style>
