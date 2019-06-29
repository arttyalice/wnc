<template>
    <nuxt />
</template>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: rgb(255, 136, 0);
$primary-invert: findColorInvert($primary);
$twitter: rgb(248, 81, 137);
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;


// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

@media screen and (min-width: 1024px) {
  .container {
    max-width: 100%;
  }
}

.footer-container {
  // display: flex;
  height: fit-content!important;
  text-align: center;
  background-color: $primary;
  font-size: 24px;
  color: white;

  div {
    margin: 15px 0 0 0;
  }
}
</style>

