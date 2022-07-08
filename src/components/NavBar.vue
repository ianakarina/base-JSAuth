<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Sitio web</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" :class="[{disabled: !isAuth, active: isAuth}]" href="#">Bienvenida</a>
            </li>
          </ul>
          <span class="navbar-text">
            <!-- <a class="nav-link" aria-current="page" href="#">Login</a> -->
            <button v-if="!getIsAuth" class="btn btn-sm btn-outline-light me-2" type="button">Login</button>
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