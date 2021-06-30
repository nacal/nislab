<template>
  <nav class="footerNav">
    <ul class="footerNav__list">
      <li
        v-for="(items, index) in navItems"
        :key="index"
        class="footerNav__items"
      >
        <ul>
          <li
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            class="footerNav__link"
          >
            <nuxt-link :to="item.link">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        [{ name: 'research', link: 'research' }],
        [{ name: 'topics', link: 'topics' }],
        [{ name: 'education', link: 'education' }],
        [
          { name: 'publications', link: 'publications' },
          { name: '2021年度', link: 'publications/2021' },
          { name: '2020年度', link: 'publications/2020' },
          { name: '2019年度', link: 'publications/2019' },
          { name: '研究業績一覧', link: 'publications' },
        ],
        [
          { name: 'members', link: 'members' },
          { name: '2021年度', link: 'members' },
          { name: '卒業生', link: 'members' },
        ],
        [{ name: 'contact', link: 'contact' }],
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.footerNav {
  &__list {
    display: flex;
  }

  &__items {
    font-family: $font-set-en;
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: capitalize;

    & + & {
      margin-left: 2.5rem;
    }
  }

  &__link {
    &:first-child {
      margin-bottom: 0.5rem;
      font-family: $font-set-en;
    }

    &:not(:first-child) {
      margin-left: 1.5rem;
      font-size: 1rem;
      font-weight: 400;
      list-style: disc;
    }
  }

  // &__link {
  //   position: relative;
  //   display: inline-block;
  //   transition: 0.3s;

  //   &:hover {
  //     color: #666;
  //   }

  //   &::after {
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     width: 0;
  //     height: 2px;
  //     content: '';
  //     background-color: $main-color;
  //     transition: 0.3s;
  //   }

  //   &:hover::after {
  //     width: 100%;
  //   }
  // }
}
</style>
