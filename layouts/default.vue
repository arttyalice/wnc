<template>
  <el-container>
    <el-header style="postion: relative;">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="/home">
              <img src="@/static/logo.png" alt="" srcset="" class="header-logo">
            </nuxt-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item" to="/home">
              Home
            </nuxt-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Services
              </a>

              <div class="navbar-dropdown">
                <nuxt-link class="navbar-item" to="/service/business">
                  Business Registration/License
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/service/accounting">
                  Accounting & Tax consulting
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/service/logistic">
                  Logistics
                </nuxt-link>
              </div>
            </div>

            <nuxt-link class="navbar-item" to="/about">
              About us
            </nuxt-link>
          </div>
        </div>
      </nav>
    </el-header>
    <nuxt />
    <el-footer class="footer-container">
      <div>Wisley & Company</div>
      <div>Tel: 06 234 23452</div>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        menulist: [
          {title: "Services", child: [
            { title: 'Business Registration / License Obtain', to: '/service/business'},
            { title: 'Accounting & Tax Consulting', to: '/service/accounting'},
            { title: 'Audit and Assurance', to: '/service/audit'},
            { title: 'IT', to: '/service/it'},
            { title: 'Logistics', to: '/service/logistic'},
            { title: 'Recruitment Consulting', to: '/service/recruitment'},
            { title: 'Serviced Office', to: '/service/office'},
          ]},
          {title: "About us", to: "/about"}
        ]
      }
    }
  }
</script>

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
