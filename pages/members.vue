<template>
  <Section class="members">
    <Title :title="`Members`" />
    <article class="members__content content">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="members.content.rendered" />
    </article>
  </Section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config }) {
    return await axios
      .get($config.apiUrl + '/pages?slug=members')
      .then((res) => {
        return {
          members: res.data[0],
        }
      })
      .catch()
  },
}
</script>

<style lang="scss" scoped>
.members {
  width: 640px;
  max-width: 90%;
  margin: 1rem auto;

  &__content {
    margin-top: 8rem;
  }
}
</style>

<style lang="scss">
.content {
  table {
    width: 100%;
    background-color: #efefef;
  }

  th,
  td {
    padding-left: 1rem;
    line-height: 2rem;
    border: solid 1px;
  }
}
</style>
