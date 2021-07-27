<template>
  <div class="globalNav">
    <Nav />
  </div>
</template>

<style lang="scss" scoped>
.globalNav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background-color: $main-color;
}
</style>
