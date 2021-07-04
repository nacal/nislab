import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export const state = () => ({
  posts: [],
  years: [],
  categories: [],
  filterQuery: {},
})

export const mutations = {
  setPosts(state, res) {
    state.posts = res
  },
  setYears(state, res) {
    res.forEach((index) => state.years.push(index.fields.year))
  },
  setCategories(state, res) {
    res.forEach((index) => state.categories.push(index.fields.name))
  },
  setFilterQuery(state, filterQuery) {
    state.filterQuery = { ...filterQuery }
  },
}

export const getters = {
  indexPosts: (state) => (index) => {
    return state.posts.slice(0, index)
  },
  filteredPosts(state) {
    let data = state.posts

    if (state.filterQuery.title !== '') {
      data = data.filter(function (row) {
        return row.fields.title.includes(state.filterQuery.title)
      })
    }

    if (state.filterQuery.categories !== '') {
      data = data.filter(function (row) {
        return row.fields.category.fields.name === state.filterQuery.categories
      })
    }

    if (state.filterQuery.years !== '') {
      data = data.filter(function (row) {
        return row.fields.year.fields.year === state.filterQuery.years
      })
    }

    return data
  },
}

export const actions = {
  async getPosts({ commit }) {
    await client
      .getEntries({
        content_type: this.$config.postTypeID,
        order: '-fields.date',
      })
      .then((entries) => {
        commit('setPosts', entries.items)
      })
      .catch()
  },
  async getYears({ commit }) {
    await client
      .getEntries({
        content_type: 'year',
        order: '-fields.year',
      })
      .then((entries) => {
        commit('setYears', entries.items)
      })
      .catch()
  },
  async getCategories({ commit }) {
    await client
      .getEntries({
        content_type: 'category',
        order: 'fields.order',
      })
      .then((entries) => {
        commit('setCategories', entries.items)
      })
      .catch()
  },
}
