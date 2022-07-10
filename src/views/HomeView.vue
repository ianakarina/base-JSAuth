<template>
  <div>
    <Transition name="fade">
      <section v-if="!getIsAuth" class="text-center">
      <h2>Bienvenida</h2>
        <img class="opacity-25" src="@/assets/rym-logo.png" alt="" width="500">
        <button type="button" class="btn btn-lg btn-primary"
          @click="$router.push({name:'login'})">
            Inicia sesión
        </button>
      </section>
    </Transition>

    <section v-if="getIsAuth" class="text-center">
        <div v-if="!getIsLoading"><h2>Personajes</h2>
          <img class="opacity-25" src="@/assets/rym-logo.png" alt="" width="500">
          <p>Pronto</p>
        </div>

        <div v-if="getIsLoading" class="d-flex flex-column">
          <div class="spinner-grow text-info" style="width: 4rem; height: 4rem; align-self: center" role="status">
            <span class="visually-hidden">Cerrando sesión...</span>
          </div>
          <p class="my-3">Cerrando sesión</p>
        </div>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>