<template>
  <div>
    <Hero />
    <About />
    <Topics />
    <Cards />
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
