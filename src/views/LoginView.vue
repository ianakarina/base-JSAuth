<template>
  <section v-if="!getIsAuth" class="form-login">
        <form id="formLogin" name="formLogin" @submit.prevent="submitForm">
            <div class="text-center">
              <img class="mb-4" src="@/assets/rym-logo.png" alt="" width="72">
              <h1 class="h3 mb-3 fw-normal">Inicia sesión</h1>
            </div>

            <!-- Email -->
            <div class="form-group mb-3">
                <label for="email">* Correo electrónico:</label>
                <input type="email" :class="['form-control', {'is-invalid': getValidMail==false, 'is-valid': getValidMail}]" id="email" placeholder="mail@mail.com" name="email" v-model="usermail" @blur="validaEmail">

                <div id="mensajeEmail" class="invalid-feedback" v-if="!getValidMail">{{getMensajeEmail}}</div>
            </div>

            <!-- Contraseña -->
            <div class="form-group mb-3">
                <label for="contrasena">* Contraseña:</label>
                <input type="password" :class="['form-control', {'is-invalid': getValidContrasena==false, 'is-valid': getValidContrasena}]" id="contrasena" placeholder="Contraseña" name="contrasena" v-model="contrasena" @blur="validaContrasena">
                <div id="mensajeContrasena" class="invalid-feedback" v-if="!getValidContrasena">{{getMensajeContrasena}}</div>
            </div>

          <button id="btnForm" type="submit" class="w-100 btn btn-lg btn-primary">
              <span v-show="!getIsLoading">Entrar</span>
              <div v-show="getIsLoading"  >
                  <span class="spinner-border spinner-border-sm me-2 my-1" role="status"></span>
                  <span class="sr-only my-2">Verificando...</span>
              </div>
          </button>
        </form>

        <div class="row my-2"><router-link to="/">Volver</router-link></div>
  </section>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';

export default {
  name: 'LoginView',
  computed: {
      ...mapGetters(['getIsAuth', 'getIsLoading', 'getValidMail', 'getValidContrasena','getValidMail', 'getMensajeEmail', 'getMensajeContrasena']),
      
      //Two-way Computed Properties
      usermail: {
      get () {
        return this.$store.state.usermail
      },
      set (value) {
        this.$store.commit('updateUsermail', value)
      }
      },
      contrasena: {
      get () {
        return this.$store.state.contrasena
      },
      set (value) {
        this.$store.commit('updateContrasena', value)
      }
    }
  },
  methods: {
    validaEmail() {
      this.$store.commit('validaEmail');
    },
    validaContrasena() {
      this.$store.commit('validaContrasena');
    },
    submitForm() {
      this.$store.commit('submitForm');
    },
    setLogout() {
      this.$store.commit('setLogout');
    } 
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
.form-login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-login input[type="email"] {
  margin-bottom: -1px;
  border-radius: 0;
}
.form-login input[type="password"] {
  margin-bottom: 10px;
  border-radius: 0;
}
.auth {
    padding: 10% ;
    margin: 5%;
    background-color: #dedede;
    text-align: center;
    border-radius: 20px;
  }
.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #999;
    opacity: 1; /* Firefox */
}
.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #999;
}
.form-control::-ms-input-placeholder { /* Microsoft Edge */
    color: #999;
}
.invalid-feedback {
    display: block;
    width: 100%;
    margin-top: 0.25rem;
    font-size: .875em;
    color: #dc3545;
}
.form-control.invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
}
.form-control.valid {
    border-color: limegreen;
    padding-right: calc(1.5em + 0.75rem);
}
</style>
