<template>
  <Section>
    <Title :title="`About NISLAB`" />
    <p class="about__text">
      私たちネットワーク情報システム研究室（佐藤研究室）は，身の回りの家電や自動車などの組込みシステムからスマートフォンやクラウドまで，モノのインターネット（IoT:
      Internet of
      Things）により現実世界と仮想世界を融合し，いつでも，どこでも，誰もが自由で安全に利用可能なコンピューティング環境を実現できる分散システム（Network
      & Distributed Systems）の研究を行っています．
      <br />私たちネットワーク情報システム研究室（佐藤研究室）は，身の回りの家電や自動車などの組込みシステムからスマートフォンやクラウドまで，モノのインターネット（IoT:
      Internet of
      Things）により現実世界と仮想世界を融合し，いつでも，どこでも，誰もが自由で安全に利用可能なコンピューティング環境を実現できる分散システム（Network
      & Distributed Systems）の研究を行っています．
    </p>
    <div class="about__button">
      <MoreButton :link-to="`/about`" />
    </div>
  </Section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  &__text {
    width: 720px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 8rem;
  }

  &__button {
    margin-top: 8rem;
    text-align: center;
  }
}
</style>
