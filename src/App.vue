<template>
  <nav-bar/>

  <!--Router view con transition -->
    <router-view v-slot="{ Component, route }">
      <Transition name="route" mode="out-in">
        <div :key="route.name">
          <!--Aplicamos la transición al componente y no al router view completo-->
          <component :is="Component"></component>
        </div>
      </Transition>
    </router-view>

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
@keyframes fade-component {
  from {opacity:0; transform:scale(0.9);}
  to{opacity:1; transform:scale(1);}
}
.route-enter-active {
  animation:fade-component 0.5s ease-out forwards;
}
.route-leave-active {
  animation:fade-component 0.5s ease-out reverse;
}
</style>
