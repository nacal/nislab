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
        <div class="nav__spacer" />
        <ul class="nav__dropdown">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
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
    height: 1.5em;

    @include mq(desk) {
      flex-direction: column;
      align-items: center;
      height: auto;
      color: #fff;

      a:hover {
        color: #dedede;
        transition: 0.3s;
      }
    }
  }

  &__spacer {
    height: 1.35rem;
  }

  &__dropdown {
    height: 0;
    overflow: hidden;
    color: #fff;
    text-align: center;
    background-color: $main-color;
    border-radius: 0 0 12px 12px;
    transition: 0.2s;

    @include mq(desk) {
      display: none;
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

    &:hover .nav__dropdown {
      height: auto;
      padding: 1rem;
      transition: 0.3s;
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

      @include mq(desk) {
        background-color: #fff;
      }
    }

    &:hover::after {
      width: 100%;
    }
  }
}
</style>
