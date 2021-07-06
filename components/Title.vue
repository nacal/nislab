<template>
  <h2 class="title">
    <span class="title__en">{{ title }}</span>
    <span class="title__ja">{{ subTitle }}</span>
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'title',
    },
    subTitle: {
      type: String,
      required: true,
      default: 'タイトル',
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  text-align: center;
  transition: 3s;

  &__en {
    position: relative;
    display: inline-block;
    padding: 0 0.5rem;
    font-family: $font-set-en;
    font-size: 2rem;
    color: $main-color;

    &::after {
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
      content: '';
      background: $main-color;
      transition: transform 0.3s;
      transform: scale(1, 1);
      transform-origin: center top;
    }
  }

  &__ja {
    margin-top: 0.5rem;
  }
}

.page-enter-active {
  .title {
    &__en::after {
      transform: scale(0, 1);
    }
  }
}
</style>
