<template>
  <!-- <div class="card d-flex flex-column">
    <a href="#">
      <img class="card-img-top" src="../static/photos//9f36332564ca271d.jpg" alt="And this isn&#39;t my nose. This is a false one.">
    </a>
    <div class="card-body d-flex flex-column">
      <h3 class="card-title"><a href="#">And this isn't my nose. This is a false one.</a></h3>
      <div class="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...</div>
      <div class="d-flex align-items-center pt-5 mt-auto">
        <span class="avatar avatar-md" style="background-image: url(../static/avatars/002m.jpg)"></span>
        <div class="ml-3">
          <a href="./profile.html" class="text-body">Dunn Slane</a>
          <small class="d-block text-muted">3 days ago</small>
        </div>
        <div class="ml-auto">
          <a href="#" class="icon d-none d-md-inline-block ml-3 text-red">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
          </a>
        </div>
      </div>
    </div>
  </div> -->
  <b-card
    class="d-flex flex-column"
    v-bind="cardOptions"
    body-class="d-flex flex-column"
  >
    <!-- <template v-slot:header> -->
      <h3 class="card-title">
        <b-link :to="to">
          {{title}}
        </b-link>
      </h3>
    <!-- </template> -->
    <b-card-text class="text-muted">{{body}}</b-card-text>
    <!-- <div class="text-muted">{{body}}</div> -->

    <div class="d-flex align-items-center pt-5 mt-auto">
      <span v-if="processedAvatar" class="avatar avatar-md" :style="processedAvatar"></span>
      <span v-else class="avatar avatar-md">{{processedAuthor}}</span>
      <div class="ml-3">
        <b-link :to="authorTo" class="text-body">
          {{author}}
        </b-link>
        <small class="d-block text-muted">{{date}}</small>
      </div>
      <div class="ml-auto">
        <b-link :to="actionTo" :class="actionClass" v-html="actionIcon">
        </b-link>
      </div>
    </div>
    <!-- <div class="row row-sm align-items-center">
      <div class="col-auto">
        <span v-if="processedAvatar" class="avatar avatar-md" :style="processedAvatar"></span>
        <span v-else class="avatar avatar-md">{{processedAuthor}}</span>
      </div>
      <div class="col">
        <h3 class="mb-0"><b-link :to="to">{{author}}</b-link></h3>
        <div class="text-muted text-h5">{{title}}</div>
      </div>
      <div class="col-auto lh-1 align-self-start">
        <span class="badge" :class="statusClass">
          {{status.label}}
        </span>
      </div>
    </div>
    <div class="row align-items-center mt-4">
      <div class="col">
        <div>
          <div class="d-flex mb-1 align-items-center lh-1">
            <div class="text-h5 font-weight-bolder m-0">{{progress.title}}</div>
            <span class="ml-auto text-h6 strong">{{progressLabel}}</span>
          </div>
          <b-progress size="sm" :max="progress.max" height="4px">
            <b-progress-bar :value="progress.value" :class="progress.class"></b-progress-bar>
          </b-progress>
        </div>
      </div>
      <div class="col-auto">
        <div class="btn-list">
          <b-button v-for="(action, index) in actions" :variant="action.variant || 'white'" size="sm" :to="action.to" :key="index">{{action.label}}</b-button>
        </div>
      </div>
    </div> -->
  </b-card>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'

export default {
  name: 'TBlogCard',
  components: { BCard, BCardText, BLink },

  props: {
    'card-options': {
      type: Object,
      default: function () {
        return {
          'img-src': '../static/photos/9f36332564ca271d.jpg',
          'img-alt': 'And this isn&#39;t my nose. This is a false one.',
          'img-top': true,
          'tag': 'article'
        }
      }
    },

    author: {
      type: String,
      default: 'Dunn Slane'
    },

    'author-to': {
      type: Object,
      default: function () {
        return { name: 'profile' }
      }
    },
    date: {
      type: String,
      default: '3 days ago'
    },
    body: {
      type: String,
      default: 'Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...'
    },
    title: {
      type: String,
      default: 'And this isn\'t my nose. This is a false one.'
    },

    'author-avatar': {
      type: [Object, String, Boolean],
      default: function () {
        return { 'background-image': 'url(../static/avatars/002m.jpg)' }
      }
    },
    to: {
      type: Object,
      default: function () {
        return { path: '#' }
      }
    },
    'action-to': {
      type: Object,
      default: function () {
        return { path: '#' }
      }
    },
    'action-icon': {
      type: String,
      default: '<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>'
    },
    'action-class': {
      type: String,
      default: 'icon d-none d-md-inline-block ml-3 text-red'
    }
    // actions: {
    //   type: Array,
    //   default: function () {
    //     return [
    //       {label: 'Chat', to: {path: '#'}, variant: 'white'},
    //       {label: 'Profile', to: {path: '#'}, variant: 'white'}
    //     ]
    //   }
    // },
    // status: {
    //   type: Object,
    //   default: function () {
    //     return {
    //       label: 'offline',
    //       class: undefined
    //     }
    //   }
    // },
    // progress: {
    //   type: Object,
    //   default: function () {
    //     return {
    //       title: 'Progress',
    //       label: undefined,
    //       class: 'bg-blue',
    //       value: 50,
    //       max: 100,
    //     }
    //   }
    // }

  },
  // data () {
  //   return {
  //     default_progress: {
  //       title: 'Progress',
  //       label: undefined,
  //       class: 'bg-blue',
  //       value: 50,
  //       max: 100,
  //     }
  //   }
  // },
  computed: {
    processedAvatar: function () {
      if (typeof this.authorAvatar === 'string') {
        return { 'background-image': 'url(' + this.authorAvatar + ')' }
      } else if (this.authorAvatar === null || this.authorAvatar === false || this.authorAvatar === undefined) {
        return false
      } else {
        return this.authorAvatar
      }
    },
    processedAuthor: function () {
      let author = ''
      let arr = this.author.split(' ')
      for (let i = 0; i < arr.length; i++) {
        author += arr[i].charAt(0).toUpperCase()
      }

      return author
    },
    statusClass: function () {
      if (this.status && !this.status.class) {
        if (this.status.label.toLowerCase() === 'online') return 'bg-green-lt'
        return 'bg-gray-lt'
      } else {
        return this.status.class
      }
    },
    progressLabel: function () {
      if (this.progress && !this.progress.label) return this.progress.value + '%'
      return this.progress.label
    },
  }
}
</script>
