<template>
  <section class="card">
    <nuxt-link :to="`/topics/${id}`" class="card__link">
      <div class="card__header">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h2 class="card__title" v-html="title" />
        <p class="card__date">{{ date }}</p>
      </div>
      <img
        :src="img.fields.file.url"
        :alt="img.fields.description"
        class="card__image"
      />
    </nuxt-link>
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
  width: 320px;

  &__header,
  &__img {
    transition: all 0.3s;
  }

  &__link {
    display: flex;
    flex-wrap: wrap;
  }

  &__header {
    position: relative;
    display: flex;
    flex-direction: column;
    order: 1;
    width: 100%;
    padding: 1rem 0 0.5rem 0.5rem;
    overflow: hidden;

    &::before,
    &::after {
      position: absolute;
      bottom: 0;
      height: 3px;
      transition: all 0.2s;
    }

    &::before {
      right: 0;
      width: 0;
      content: '';
      background-color: #000;
      transform: translate(-325px, 1px) rotate(45deg);
      transform-origin: 100% 100%;
    }

    &::after {
      left: 0;
      width: 100%;
      content: '';
      background-color: #000;
      transform: translateX(-325px);
    }
  }

  &__title {
    order: 1;
    width: 100%;
    margin-top: 0.5rem;
    overflow: hidden;
    font-size: 0.875rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__date {
    order: 0;
    width: 100%;
    font-size: 0.8rem;
    line-height: 1.5rem;
  }

  &__img {
    order: 0;
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  &__link:hover {
    .card__img {
      filter: grayscale(50%);
      border-radius: 10px;
      transition: all 0.5s;
      transform: scale(0.8, 0.8);
    }
    .card__header {
      &::before,
      &::after {
        transition: all 0.3s;
      }
      &::before {
        width: 20px;
        transform: translate(-24px, 1px) rotate(45deg);
      }
      &::after {
        transform: translateX(-24px);
      }
    }
  }
}
</style>
