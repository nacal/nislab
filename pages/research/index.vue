<template>
  <Section class="research">
    <Title :title="`Research`" :sub-title="`研究内容`" />
    <article class="research__content">
      <nuxt-link to="research/iot">IoT</nuxt-link>
      <nuxt-link to="research/its">ITS</nuxt-link>
      <nuxt-link to="research/Network-architecture"
        >Network Architecture</nuxt-link
      >
    </article>
    <ReturnPage />
  </Section>
</template>

<style lang="scss" scoped>
.research {
  &__content {
    width: $content-width;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }
}
</style>
