<template>
  <div>
    <Hero />
    <About />
    <IndexTopics />
  </div>
</template>

<script>
import { About, IndexTopics } from '~/components/topPage/index'

export default {
  components: {
    About,
    IndexTopics,
  },
}
</script>
