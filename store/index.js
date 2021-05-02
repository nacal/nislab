export const state = () => ({
  posts: [],
})

export const mutations = {
  setData(state, res) {
    state.posts = res
  },
}
