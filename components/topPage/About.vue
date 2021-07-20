<template>
  <Section id="about">
    <Title :title="`About Us`" :sub-title="`NISLABとは`" />
    <p class="about__text">
      私たちネットワーク情報システム研究室（佐藤研究室）は，身の回りの家電や自動車などの組込みシステムからスマートフォンやクラウドまで，モノのインターネット（IoT:
      Internet of
      Things）により現実世界と仮想世界を融合し，いつでも，どこでも，誰もが自由で安全に利用可能なコンピューティング環境を実現できる分散システム（Network
      & Distributed
      Systems）の研究を行っています．モノの個体情報を識別したり，そのモノが置かれた周りの状況を把握したり，そのモノ自体を制御し，クラウドコンピューティングとの連携も考慮し，世界全体として飛躍的に安全性・効率性・利便性・持続可能性の高い情報化社会の実現を目指します．
    </p>
    <div class="about__button">
      <MoreButton :link-to="`/research`" />
    </div>
  </Section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  &__text {
    width: $content-width;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 8rem;
    font-weight: 300;

    @include mq(sp) {
      margin-top: 4rem;
    }
  }

  &__button {
    margin-top: 8rem;
    text-align: center;

    @include mq(sp) {
      margin-top: 4rem;
    }
  }
}
</style>
