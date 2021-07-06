<template>
  <transition>
    <div>
      <Hero />
      <About />
      <IndexTopics />
    </div>
  </transition>
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
