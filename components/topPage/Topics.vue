<template>
  <Section class="topics" :bg="`#ddd`">
    <Title :title="`New Topics`" :sub-title="`新着記事`" />
    <Cards class="topics__cards" :number="6" :filter="true" />
    <div class="topics__button">
      <MoreButton :link-to="`/topics`" />
    </div>
  </Section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.topics {
  &__cards {
    margin-top: 8rem;
  }

  &__button {
    margin-top: 8rem;
    text-align: center;
  }
}
</style>
