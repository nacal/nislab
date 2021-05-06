export const state = () => ({
  posts: [],
})

export const mutations = {
  setPosts(state, res) {
    state.posts = res
  },
}

export const getters = {
  indexPosts: (state) => (index) => {
    return state.posts.slice(0, index)
  },
}

export const actions = {
  async getPosts({ commit }) {
    await this.$axios
      .get(this.$config.apiUrl + '/posts?_embed')
      .then((res) => {
        commit('setPosts', res.data)
      })
      .catch()
  },
}
