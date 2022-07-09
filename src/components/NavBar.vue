<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Sitio web</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :class="[{disabled: !getIsAuth, active: getIsAuth}]" to="/">Inicio</router-link>
            </li>
          </ul>
          
          <span class="navbar-text">
            <button v-if="!getIsAuth" @click="$router.push({name:'login'})" class="btn btn-sm btn-outline-light me-2" type="button">Login</button>
            <button v-if="getIsAuth" @click="setLogout" class="btn btn-sm btn-outline-light me-2" type="button">Logout</button>
          </span>
        </div>
      </div>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'NavBar',
  computed: {
      ...mapGetters(['getIsAuth', 'getIsLoading']),
  },
  methods: {
    setLogout() {
      this.$store.commit('setLogout');
    } 
  }
}
</script>