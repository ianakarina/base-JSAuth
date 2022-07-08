<template>
  <nav-bar/>
  <router-view/>
  <footer-bar/>
</template>

<script>
// @ is an alias to /src
import FooterBar from '@/components/FooterBar.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'AppView',
  components: {
    FooterBar,
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  height: 100%;
}

body {
  align-items: center;
  background-color: #f5f5f5;
}
</style>
