<template>
  <div>
    <Cards />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config, store }) {
    return await axios
      .get($config.apiUrl + '/posts?_embed')
      .then((res) => {
        store.commit('setData', res.data)
      })
      .catch(() => {
        return {}
      })
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
}
</script>
