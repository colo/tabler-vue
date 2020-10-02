<template>
  <!-- <aside class="navbar" :class="asideClass"> -->
    <b-navbar toggleable="lg" :type="(dark) ? 'dark' : 'light'" tag="aside" class="navbar-vertical" :class="asideClass">
      <div class="container">
        <b-navbar-toggle target="navbar-menu"></b-navbar-toggle>

        <bar-logo :dark="dark"/>

        <!-- Right aligned nav items -->
        <bar-dropdowns :vertical="true"/>

        <b-collapse id="navbar-menu" is-nav>
          <nav-bar :vertical="true" :dark="dark"/>
        </b-collapse>
    </div>
    </b-navbar>
  <!-- </aside> -->
</template>

<script>
import BarLogo from 'components/bar/logo'
import BarDropdowns from 'components/bar/dropdowns'
import NavBar from 'components/NavBar'

export default {
  name: 'VerticalNavBar',
  components: { BarLogo, BarDropdowns, NavBar },

  props: {
    // title: {
    //   type: String,
    //   required: true
    // },
    //
    right: {
      type: Boolean,
      default: false
    },

    // vertical: {
    //   type: Boolean,
    //   default: true
    // },

    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    asideClass: function () {
      let appendClass = ''
      appendClass += (this.dark === true) ? 'navbar-dark ' : 'navbar-light '

      appendClass += (this.right === true) ? 'navbar-right' : ''

      return appendClass
    },
    // containerClass: function () {
    //   let appendClass = ''
    //
    //   appendClass += 'container'
    //
    //   return appendClass
    // },
  }
}
</script>
