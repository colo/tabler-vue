<template>
  <b-navbar-brand href=".">
      <img :src="'../static/'+logo" alt="Tabler" class="navbar-brand-image">
  </b-navbar-brand>

</template>

<script>
export default {
  name: 'BarLogo',

  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    logo: function () {
      return (this.dark === true) ? 'logo-white.svg' : 'logo.svg'
    }
  }
}
</script>
