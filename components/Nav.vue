<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="nav__item"
        @click="close()"
      >
        <nuxt-link
          :to="`/${item}`"
          class="nav__link"
          :aria-label="`${item}ページに遷移する`"
          >{{ item }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      navItems: [
        'research',
        'topics',
        'advisor',
        'education',
        'publications',
        'members',
        'contact',
      ],
    }
  },
  methods: {
    ...mapMutations(['close']),
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;

    @include mq(desk) {
      flex-direction: column;
      align-items: center;
      margin-top: 128px;
      color: #fff;
    }
  }

  &__item {
    font-family: $font-set-en;
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: capitalize;

    & + & {
      margin-left: 2.5rem;

      @include mq(desk) {
        margin-top: 1.5rem;
        margin-left: 0;
      }
    }
  }

  &__link {
    position: relative;
    display: inline-block;
    transition: 0.3s;

    &:hover {
      color: #666;
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      content: '';
      background-color: $main-color;
      transition: 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
