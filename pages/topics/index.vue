<template>
  <Section>
    <Title :title="`Topics`" :sub-title="`記事一覧`" />
    <Topics class="topics__cards" />
    <ReturnPage />
  </Section>
</template>

<style lang="scss" scoped>
.topics {
  &__cards {
    margin-top: 4rem;
  }
}
</style>
