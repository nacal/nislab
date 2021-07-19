<template>
  <Section class="research">
    <Title :title="`Research`" :sub-title="`研究内容`" />
    <article class="research__content">
      <section
        v-for="(research, index) in researches"
        :key="index"
        class="research__section"
      >
        <div class="research__card">
          <h3 class="research__title">
            {{ research.title }} | {{ research.subTitle }}
          </h3>
          <p class="research__text">
            {{ research.description }}
          </p>
          <MoreButton class="research__button" :link-to="research.link" />
        </div>
        <img
          :src="research.img.src"
          :alt="research.img.alt"
          class="research__img"
        />
      </section>
    </article>
    <ReturnPage />
  </Section>
</template>

<script>
export default {
  data() {
    return {
      researches: [
        {
          title: 'IoT',
          subTitle: 'Internet of Things',
          description:
            '私たちネットワーク情報システム研究室（佐藤研究室）は，身の回りの家電や自動車などの組込みシステムからスマートフォンやクラウドまで，モノのインターネット（IoT: Internet of Things）により現実世界と仮想世界を融合し，いつでも，どこでも，誰もが自由で安全に利用可能なコンピューティング環境を実現できる分散システム（Network & Distributed Systems）の研究を行っています．',
          link: '/research/iot',
          img: { src: '../../assets/images/hero1.jpg', alt: '' },
        },
        {
          title: 'ITS',
          subTitle: 'Intelligent Transport Systems',
          description:
            '私たちネットワーク情報システム研究室（佐藤研究室）は，身の回りの家電や自動車などの組込みシステムからスマートフォンやクラウドまで，モノのインターネット（IoT: Internet of Things）により現実世界と仮想世界を融合し，いつでも，どこでも，誰もが自由で安全に利用可能なコンピューティング環境を実現できる分散システム（Network & Distributed Systems）の研究を行っています．',
          link: '/research/its',
          img: { src: '../../assets/images/hero1.jpg', alt: '' },
        },
        {
          title: 'Network',
          subTitle: 'Network Architecture',
          description:
            '私たちネットワーク情報システム研究室（佐藤研究室）は，身の回りの家電や自動車などの組込みシステムからスマートフォンやクラウドまで，モノのインターネット（IoT: Internet of Things）により現実世界と仮想世界を融合し，いつでも，どこでも，誰もが自由で安全に利用可能なコンピューティング環境を実現できる分散システム（Network & Distributed Systems）の研究を行っています．',
          link: '/research/network-architecture',
          img: { src: '../../assets/images/hero1.jpg', alt: '' },
        },
      ],
    }
  },
  head() {
    return {
      title: '研究内容 | NISLAB',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: '研究内容 | NISLAB',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.research {
  &__content {
    width: $content-width;
    max-width: 90%;
    margin: 4rem auto 8rem;
  }

  &__section {
    position: relative;
    height: 500px;
    margin-bottom: 128px;

    @include mq(tab) {
      height: 640px;
    }
  }

  &__card {
    position: absolute;
    top: 200px;
    right: 0;
    z-index: 2;
    width: 710px;
    max-width: 100%;
    padding: 1rem 2rem;
    background-color: #fff;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    border-radius: 0 0 10px 0;
  }

  &__title {
    margin-bottom: 1rem;
    font-family: $font-set-en;
    font-size: 1.5rem;
  }

  &__text {
    margin-bottom: 2rem;
    font-weight: 300;
  }

  &__button {
    float: right;
  }

  &__img {
    width: 710px;
    height: 340px;
    background-color: #ccc;
    object-fit: cover;
    border-radius: 10px 0 10px 0;
  }

  &__section:nth-child(even) {
    .research {
      &__card {
        left: 0;
        border-right: 0;
        border-left: 2px solid #000;
        border-radius: 0 0 0 10px;
      }

      &__img {
        float: right;
        border-radius: 0 10px 0 0;
      }
    }
  }
}
</style>
