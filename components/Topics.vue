<template>
  <div class="topics">
    <div class="topics__search">
      <input
        v-model="filterQuery.title"
        type="text"
        placeholder="タイトル検索"
        clearable
        class="topics__searchTitle"
        @change="handleChangeQuery"
      />
      <select
        v-model="filterQuery.categories"
        placeholder="投稿年度"
        clearable
        class="topics__searchYears"
        @change="handleChangeQuery"
      >
        >
        <option value="" disabled selected style="display: none">
          投稿年度
        </option>
        <option
          v-for="(item, index) in years"
          :key="index"
          :label="item"
          :value="10 - index"
        ></option>
      </select>
      <button class="topics__searchReset" @click="reset">リセット</button>
    </div>
    <article class="topics__items">
      <Card
        v-for="post in filteredPosts"
        :id="post.id"
        :key="post.id"
        :title="post.title.rendered"
        :date="$moment(post.date).format('YYYY-MM-DD')"
        :img="
          post._embedded['wp:featuredmedia'][0].media_details.sizes.medium[
            'source_url'
          ]
        "
      />
    </article>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      filterQuery: {
        title: '',
        categories: '',
      },
      years: ['2021年度', '2020年度', '2019年度', '2018年度', '2017年度'],
    }
  },
  computed: {
    ...mapGetters(['filteredPosts']),
  },
  mounted() {
    this.setFilterQuery(this.filterQuery)
  },
  methods: {
    ...mapMutations(['setFilterQuery']),
    handleChangeQuery() {
      this.setFilterQuery(this.filterQuery)
    },
    reset() {
      this.filterQuery.title = ''
      this.filterQuery.categories = ''
      this.setFilterQuery(this.filterQuery)
    },
  },
}
</script>

<style lang="scss" scoped>
.topics {
  &__search {
    display: flex;
    justify-content: center;
  }
  &__searchTitle {
    width: 240px;
    height: 1.5rem;
  }
  &__searchYears,
  &__searchReset {
    margin-left: 1rem;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 64px 32px;
    justify-items: center;
    max-width: 1024px;
    margin: auto;
    margin-top: 4rem;
  }
}
</style>
