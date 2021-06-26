<template>
  <Section class="publications">
    <Title :title="`Publications`" />
    <article class="publications__content"></article>
  </Section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config }) {
    return await axios
      .get($config.apiUrl + '/pages?slug=publications')
      .then((res) => {
        return {
          publications: res.data[0],
        }
      })
      .catch()
  },
}
</script>

<style lang="scss" scoped>
.publications {
  width: 640px;
  max-width: 90%;
  margin: 1rem auto;

  &__content {
    margin-top: 8rem;
  }
}
</style>

<style lang="scss">
.publications__content {
  h2 {
    margin: 1rem 0 0.5rem 0;
    font-size: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
}
</style>
