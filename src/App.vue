<template>
  <div id="q-app">
    <component :is="this.mode || this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>
<script>
import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import { mapState } from 'vuex'

/**
* Dynamic Layout
* https://dev.to/lampewebdev/vuejs-pages-with-dynamic-layouts-problems-and-a-solution-4460
*/
import VerticalLayout from './layouts/VerticalLayout.vue'
import HorizontalLayout from './layouts/HorizontalLayout.vue'

import TestLayout from './layouts/TestLayout.vue'

export default {
  name: 'App',
  components: {
    VerticalLayout,
    HorizontalLayout,
    TestLayout
  },
  computed: {
    // ...mapState({
    //   menuAutoExpand: state => state.layout.menuAutoExpand
    // }),
    mode: {
      get () {
        return this.$store.state.layout.mode
      },
      set (value) {
        this.setLayout({ layout: value })
      }
    }
  }
}
</script>
