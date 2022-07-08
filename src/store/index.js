import { createStore } from 'vuex'

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
      if( state.usermail.length == 0) {//Si no existe (null) o si el campo está vacío
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
    if( state.contrasena.length == 0) {
      state.validContrasena = false;
      state.mensajeContrasena = "Falta ingresar tu contraseña.";
          
    } else if ( state.contrasena.length<6 || !state.regAN.test(state.contrasena) )  {
      state.validContrasena = false;
      //La contraseña debe tener entre 6 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
      //Puede tener otros símbolos.
      state.mensajeContrasena = "La contraseña debe tener 6 o más caracteres alfanuméricos";

    } else {
      state.validContrasena=true;
    }
  },
  submitForm(state) {
    state.isLoading = true;
    let formValido = true;

    // Valida Email onSubmit
    if( state.usermail == null || state.usermail.length == 0) {//Si no existe (null) o si el campo está vacío
      state.validMail = false;
      state.mensajeEmail = "Falta ingresar tu Email.";
      formValido=false;
        
    } else if ( !state.regMail.test(state.usermail))  {//RegEx minimalista
      state.validMail = false;
      state.mensajeEmail = "Debes ingresar un Email válido.";
      formValido=false;

    } else {
      state.validMail = true;
    }

    // Valida contraseña onSubmit
    if( state.contrasena == null || state.contrasena.length == 0) {
      state.validContrasena = false;
      state.mensajeContrasena = "Falta ingresar tu contraseña.";
      formValido=false;
        
    } else if ( state.contrasena.length<6 || !state.regAN.test(state.contrasena))  {
      state.validContrasena = false;
      state.mensajeContrasena = "La contraseña debe tener 6 o más caracteres alfanuméricos.";
      formValido=false;

    } else {
      state.validContrasena=true;
    }

    if(formValido) {
        setTimeout(() => {//Procesa
          state.isAuth = true;
          state.isLoading = false;
          state.contrasena = "";
          state.usermail = "";
          state.validMail = null;
          state.validContrasena = null;
        },2000);
      
    } else {// No procesa
      state.isAuth = false;
      state.isLoading = false;
      state.contrasena = "";
      state.usermail = "";
      state.validMail = null;
      state.validContrasena = null;
    }

    console.log('Form válido: '+ formValido);
    return formValido;
  },
  setLogout(state) {
      state.isAuth = !state.isAuth;
    }
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
  actions: {
  },
  modules: {
  }
})
