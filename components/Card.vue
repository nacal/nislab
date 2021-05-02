<template>
  <section class="card">
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__date">{{ date }}</p>
    <img :src="img" alt="" class="card__img" />
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  width: 320px;

  &__title {
    order: 1;
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__date {
    order: 2;
    width: 25%;
    font-size: 0.8rem;
    line-height: 1.5rem;
  }

  &__img {
    order: 0;
    width: 100%;
    height: 180px;
    object-fit: cover;
    border: 2px #000 solid;
  }
}
</style>
