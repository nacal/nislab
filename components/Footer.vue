<template>
  <footer class="footer">
    <div class="footer__contents">
      <img
        src="~/assets/images/nislab-dark.png"
        alt="NISLAB"
        class="footer__logo"
      />
      <div class="footer__nav">
        <FooterNav />
        <a href="" class="footer__login">Login</a>
      </div>
      <div class="footer__links">
        <nuxt-link to="privacy-policy" class="footer__link"
          >プライバシーポリシー</nuxt-link
        >
        <nuxt-link to="disclaimer" class="footer__link">免責事項</nuxt-link>
      </div>
      <small class="footer__copy">&copy; 2021 NISLAB.</small>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $main-color;

  &__contents {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__logo {
    max-width: 120px;
    margin: 3rem 0;
  }

  &__nav {
    display: flex;
    align-items: center;
  }

  &__login {
    margin-left: 2.5rem;
    font-family: $font-set-en;
  }

  &__links {
    display: flex;
    margin-top: 2rem;
    font-size: 0.75rem;
  }

  &__link {
    padding: 0 0.5rem;
  }

  &__copy {
    margin: 0.5rem 0;
    font-size: 0.75rem;
  }
}
</style>
