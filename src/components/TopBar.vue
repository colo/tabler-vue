<template>
  <!-- <b-navbar toggleable="md" :type="(dark) ? 'dark' : 'light'" tag="header"> -->
    <div :class="containerClass">
      <b-navbar-toggle target="navbar-menu"></b-navbar-toggle>
      <bar-logo v-if="combined === false" :horizontal="true" :dark="dark" />

      <!-- Right aligned nav items -->
      <bar-dropdowns />

      <b-collapse id="navbar-menu" is-nav>
        <!-- <b-navbar-nav v-if="vertical === true">
          <b-nav-form> -->
            <bar-search v-if="vertical === true"/>

            <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center" v-if="condensed === true">
              <nav-bar :dark="dark" :condensed="true" :vertical="false"/>
              <div class="ml-md-auto pl-md-4 py-2 py-md-0 mr-md-4 order-first order-md-last flex-grow-1 flex-md-grow-0">
                <bar-search />
              </div>
            </div>
          <!-- </b-nav-form>
        </b-navbar-nav> -->
      </b-collapse>

    </div>

  <!-- </b-navbar> -->

</template>

<script>
import BarLogo from 'components/bar/logo'
import BarSearch from 'components/bar/search'
import BarDropdowns from 'components/bar/dropdowns'
// import HorizontalNavBar from 'components/HorizontalNavBar'
import NavBar from 'components/NavBar'

export default {
  name: 'TopBar',
  components: { BarLogo, BarSearch, BarDropdowns, NavBar },

  props: {
    // title: {
    //   type: String,
    //   required: true
    // },
    //
    // right: {
    //   type: Boolean,
    //   default: false
    // },
    //
    vertical: {
      type: Boolean,
      default: false
    },
    condensed: {
      type: Boolean,
      default: false
    },
    combined: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    containerClass: function () {
      let appendClass = ''

      appendClass += (this.fluid === true) ? 'container-fluid ' : 'container-xl '

      return appendClass
    },
    // headerClass: function () {
    //   let appendClass = ''
    //   appendClass += (this.dark === true) ? 'navbar-dark ' : 'navbar-light '
    //
    //   appendClass += (this.combined === true) ? 'navbar-expand-md navbar-light d-none d-lg-flex ' : 'navbar-expand-md '
    //
    //   return appendClass
    // }
  }
}
</script>
