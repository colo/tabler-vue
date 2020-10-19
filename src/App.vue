<template>
  <div id="q-app">
    <component :is="this.$route.meta.layout || this.mode" :user="user">
      <router-view />
    </component>
  </div>
</template>
<script>
import Vue from 'vue'

import { IconsPlugin } from 'bootstrap-vue' // BootstrapVue

// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import { mapActions, mapState } from 'vuex'

/**
* Dynamic Layout
* https://dev.to/lampewebdev/vuejs-pages-with-dynamic-layouts-problems-and-a-solution-4460
*/
import VerticalLayout from './layouts/VerticalLayout.vue'
import HorizontalLayout from './layouts/HorizontalLayout.vue'
import EmptyLayout from './layouts/EmptyLayout.vue'

import TestLayout from './layouts/TestLayout.vue'

// let mootools = require('mootools')
// import DefaultConn from '@etc/default.http'
// let http = Object.merge(Object.clone(DefaultConn), { path: DefaultConn.path + 'user' })

export default {
  name: 'App',
  components: {
    VerticalLayout,
    HorizontalLayout,
    EmptyLayout,
    TestLayout
  },
  computed: {
    // ...mapState({
    //   user: state => state.user.current
    // }),
    user: function () {
      if (this.$store.state.user.data && this.$store.state.user.data.role) {
        return {
          name: this.$store.state.user.data.name + ' ' + this.$store.state.user.data.surname,
          title: this.$store.state.user.data.role,
          avatar: this.$store.state.user.data.avatar,
          actions: this.$store.state.user.data.actions,
          // actions: [{
          //   label: 'Sign out',
          //   to: { path: 'signout'}
          // }]
        }
      }

      return this.$store.state.layout[this.mode].user
    },
    mode: {
      get () {
        if (!this.$store.state.layout.mode || this.$store.state.layout.mode === undefined) {
          return false
        } else {
          return this.$store.state.layout.mode
        }
      },
      set (value) {
        this.setMode({ mode: value })
      }
    }
  },
  created: function () {
    // console.log('created', this.mode, this.$route)
    if (this.mode === false) { this.mode = 'HorizontalLayout' }
  },
  mounted: function () {
    // console.log('mounted', this.mode, this.$route)
    if (this.mode === false) { this.mode = 'HorizontalLayout' }

    // this.loadUser(http.scheme + '://' + http.host + ':' + http.port + http.path)
  },
  methods: {
    ...mapActions({
      setMode: 'layout/setMode',
      loadUser: 'user/load'
    }),

  },
}
</script>
