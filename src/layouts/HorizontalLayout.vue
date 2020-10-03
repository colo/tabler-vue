<template>
  <q-layout>
    <div class="page">
      <b-navbar toggleable="md" :type="(darkTopBar === true) ? 'dark' : 'light'" tag="header">
        <top-bar :condensed="condensed" :combined="topbar.combined" :dark="darkTopBar" :fluid="fluid" v-if="topbar.available === true"/>
      </b-navbar>
      <horizontal-nav-bar v-if="condensed !== true && navbar.available === true" :dark="darkNavBar" :fluid="fluid"/>

      <div class="content">
        <div :class="containerClass">
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>
      </div>
    </div>
  </q-layout>

</template>

<script>
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

import Layout from '@mixins/Layout'

import HorizontalNavBar from 'components/HorizontalNavBar'
import TopBar from 'components/TopBar'

export default Vue.extend({
  name: 'HorizontalLayout',
  mixins: [Layout],
  components: {
    HorizontalNavBar,
    TopBar
  },
  data () {
    return {
    }
  },
  // props: {
  //   topbar: {
  //     type: Object,
  //     default: function () {
  //       return {
  //         available: true,
  //         combined: false,
  //         dark: false
  //       }
  //     }
  //   },
  //   navbar: {
  //     type: Object,
  //     default: function () {
  //       return {
  //         available: true,
  //         // right: false,
  //         dark: false
  //       }
  //     }
  //   },
  //   condensed: {
  //     type: Boolean,
  //     default: false
  //   },
  //   // fluid: {
  //   //   type: Boolean,
  //   //   default: false
  //   // }
  // },

  computed: {
    ...mapState({
      navbar: state => state.layout.HorizontalLayout.navbar,
      topbar: state => state.layout.HorizontalLayout.topbar,
      condensed: state => state.layout.HorizontalLayout.condensed,
    }),
    containerClass: function () {
      let appendClass = ''

      appendClass += (this.fluid === true) ? 'container-fluid ' : 'container-xl '

      return appendClass
    },

  },

})
</script>
