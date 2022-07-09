<template>
  <div>
    <section v-if="!getIsAuth" class="text-center">
    <h2>Bienvenida</h2>
      <img class="opacity-25" src="@/assets/rym-logo.png" alt="" width="500">
      <button type="button" class="btn btn-lg btn-primary"
        @click="$router.push({name:'login'})">
          Inicia sesión
      </button>
    </section>

    <section v-if="getIsAuth" class="text-center">
      <h2>Personajes</h2>
      <img class="opacity-25" src="@/assets/rym-logo.png" alt="" width="500">
      <p>Pronto</p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';

export default {
  name: 'HomeView',
  computed: {
      ...mapGetters(['getIsAuth', 'getIsLoading']),
  }
}
</script>

<style scoped>
section {
  width: 100%;
  max-width: 570px;
  padding: 15px;
  margin: auto;
}
</style>