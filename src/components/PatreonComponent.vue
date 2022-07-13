<template>
  <div class="patreon">
    <div class="page-width page-padding">
      <hr>

      <span class="h2">Contribute to GW2Bot</span>

      <p>GW2Bot will remain free to use and continues to run with kind donations and volunteer contributions.<br>If you enjoy using GW2Bot, please consider donating to fund future development!</p>

      <div class="flexbox">
        <div class="flexbox__item">
          <a id="patreon" class="button button--large button--patreon" href="https://www.patreon.com/bePatron?u=9811418" target="_blank">Become a Patron</a>
        </div>

        <div class="flexbox__item">
          <form id="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="96N5SP5FYTTGJ">

            <button class="button button--large button--paypal" name="submit" type="submit">Donate with PayPal</button>

            <img class="sr-only" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" aria-hidden="true">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@/assets/scss/colors';
@import '~@/assets/scss/settings';

.patreon {
  padding-top: $baseline-rem;
  .flexbox__item {
    margin-top: $baseline-rem;
  }
}
</style>
