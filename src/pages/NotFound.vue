<template>
  <main>
    <div class="page-width page-padding">
      <header>
        <h1>Error 404</h1>

        <p>This page could not be found.</p>
      </header>

      <picture>
        <source srcset="/static/img/404-quaggan.webp" type="image/webp">
        <img src="/static/img/404-quaggan.png" alt="">
      </picture>

      <br>

      <router-link class="button button--large" to="/">
        Back to Home Page
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  title: "404 Not Found"
};
</script>

<style scoped>
img {
  display: inline-block;
  width: 100%;
  max-width: 356px;
  max-height: 375px;
  vertical-align: top;
}
</style>
