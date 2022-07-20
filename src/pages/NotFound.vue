<template>
  <main class="page">
    <div class="page-width page-padding">
      <header>
        <h1>Error 404</h1>

        <p>This page could not be found.</p>
      </header>

      <picture>
        <source srcset="/static/img/error-quaggan.webp" type="image/webp">
        <img src="/static/img/error-quaggan.png" alt="">
      </picture>

      <br>

      <router-link class="button button--large" to="/">
        Back to Home Page
      </router-link>
    </div>
  </main>
</template>

<style scoped>
img {
  display: inline-block;
  width: 100%;
  max-width: 336px;
  max-height: 336px;
  vertical-align: top;
}
</style>
