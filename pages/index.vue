<template>
  <div>
    <Hero />
    <About />
    <Topics />
  </div>
</template>

<script>
import { About, Topics } from '~/components/topPage/index'

export default {
  components: {
    About,
    Topics,
  },
}
</script>
