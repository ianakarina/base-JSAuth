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
                <!-- onkeypress="return permite(event, 'car');"  onblur="validaName(this)"-->
                <div id="mensajeContrasena" class="invalid-feedback" v-if="!getValidContrasena">{{getMensajeContrasena}}</div>
            </div>
      
          <!--<div class="checkbox mb-3">
             <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label> 
          </div>-->

          <button id="btnForm" type="submit" class="w-100 btn btn-lg btn-primary">
              <span v-show="!getIsLoading">Entrar</span>
              <div v-show="getIsLoading"  >
                  <!-- <i class='fa fa-spinner fa-spin' role="status"></i> -->
                  <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                  <span class="sr-only">Verificando...</span>
              </div>
          </button>

          <!-- <div v-if="formInvalid" class="alert alert-danger" role="alert">{{mensajeError}}</div> -->

        </form>
  </section>

  <section v-if="getIsAuth" class="text-center">
    <h2>Bienvenido</h2>
    <img class="opacity-25" src="@/assets/rym-logo.png" alt="" width="500">
    <p>Pronto</p>
  </section>

</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex';

export default {
  name: 'HomeView',
  // components: {
  // }

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
    /* background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); */
}
.form-control.valid {
    border-color: limegreen;
    padding-right: calc(1.5em + 0.75rem);
    /* background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); */
}
</style>
