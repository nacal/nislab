import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export const state = () => ({
  posts: [],
  posts2: [],
  filterQuery: {},
})

export const mutations = {
  setPosts(state, res) {
    state.posts = res
  },
  setPosts2(state, res) {
    state.posts2 = res
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
        return row.title.rendered.includes(state.filterQuery.title)
      })
    }

    if (state.filterQuery.categories !== '') {
      data = data.filter(function (row) {
        return row.categories[0] === state.filterQuery.categories
      })
    }

    return data
  },
}

export const actions = {
  async getPosts({ commit }) {
    await this.$axios
      .get(this.$config.apiUrl + '/posts?per_page=50&_embed')
      .then((res) => {
        commit('setPosts', res.data)
      })
      .catch()
  },

  async getPosts2({ commit }) {
    await client
      .getEntries({
        content_type: this.$config.postTypeID,
        order: '-fields.date',
      })
      .then((entries) => {
        commit('setPosts2', entries.items)
      })
      .catch()
  },
}
