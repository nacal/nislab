<template>
  <Section class="indexTopics" :bg="`#eee`">
    <Title :title="`New Topics`" :sub-title="`新着記事`" />
    <Cards class="indexTopics__cards" :number="6" :filter="true" />
    <div class="indexTopics__button">
      <MoreButton :link-to="`/topics`" />
    </div>
  </Section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.indexTopics {
  &__cards {
    margin-top: 8rem;
  }

  &__button {
    margin-top: 8rem;
    text-align: center;
  }
}
</style>
