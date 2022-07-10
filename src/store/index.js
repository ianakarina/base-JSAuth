import { createStore } from 'vuex'
import router from '@/router';

export default createStore({
  state: {
      usermail: "",
      contrasena: "",
      mensajeEmail: "",
      mensajeContrasena: "",
      isAuth: false,
      validMail: null,
      validContrasena: null,
      regMail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
      regAN: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/,
      isLoading:false
  },
  mutations: {
    updateUsermail (state, usermail) {
      state.usermail = usermail
    },
    updateContrasena (state, contrasena) {
      state.contrasena = contrasena
    },
    validaEmail(state){
      if( state.usermail == null || state.usermail.length == 0) {//Si no existe (null) o si el campo está vacío
        state.validMail = false;
        state.mensajeEmail = "Falta ingresar tu Email.";
          
      } else if ( !state.regMail.test(state.usermail))  {//RegEx minimalista
        state.validMail = false;
        state.mensajeEmail = "Debes ingresar un Email válido.";

      } else {
        state.validMail = true;
      }
    },
    validaContrasena(state) {
      if( state.contrasena == null || state.contrasena.length == 0) {
        state.validContrasena = false;
        state.mensajeContrasena = "Falta ingresar tu contraseña.";
            
      } else if ( state.contrasena.length<6 || !state.regAN.test(state.contrasena) )  {
        state.validContrasena = false;
        //La contraseña debe tener entre 6 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
        //Puede tener otros símbolos.
        state.mensajeContrasena = "La contraseña debe tener 6 o más caracteres alfanuméricos, mayúsculas y minúsculas.";
      } else {
        state.validContrasena=true;
      }
    },
    changeIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setIsAuthT(state) {
      state.isAuth = true;
    },
    resetForm(state) {
      state.isLoading = false;
      state.contrasena = "";
      state.usermail = "";
      state.validMail = null;
      state.validContrasena = null;
    },
    setLogout(state) {
      state.isLoading = true;
      setTimeout(() => {
        state.isAuth = !state.isAuth;
        state.isLoading = false;
      },2000);

    }
  },
  actions: {
    submitForm(context) {
      let formValido = true;
      context.commit('changeIsLoading');

      // Valida Email onSubmit
      context.commit('validaEmail');
      //console.log('Email ' + context.state.validMail);

      // Valida contraseña onSubmit
      context.commit('validaContrasena');
      //console.log('Contraseña ' + context.state.validContrasena);

      if(context.state.validContrasena && context.state.validMail) {
        formValido=true;
      }
      else {
        formValido=false;
      }
      // Promesa
      const promesa = new Promise((resolve, reject) => {
  
        if(formValido) {
          setTimeout(() => {//Procesa
            resolve('Procesa');
          },2000);
        }
          else {
            reject('No procesa');
          }
        });
  
      promesa.then( res => {
          console.log(res)
          context.commit('setIsAuthT');
          context.commit('resetForm');
          router.push({name:'home'});//Redirecciona al inicio
      })
      .catch(error => {
        console.log('Error en promesa: ', error);
        context.commit('resetForm');
      });
  
      console.log('Form válido: '+ formValido);
      return formValido;
    },
  },
  getters: {
    //Equivalente a Computed Properties
    getIsAuth(state) {
      return state.isAuth;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
    getValidMail(state) {
      return state.validMail;
    },
    getValidContrasena(state) {
      return state.validContrasena;
    },
    getUserMail(state) {
      return state.usermail;
    },
    getContrasena(state) {
      return state.contrasena;
    },
    getMensajeEmail(state) {
      return state.mensajeEmail;
    },
    getMensajeContrasena(state) {
      return state.mensajeContrasena;
    },
  },
  modules: {
  }
})
