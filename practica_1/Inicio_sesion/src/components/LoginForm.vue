<template>
  <section>
    <header></header>
    <div class="logo">
      <img class="imgLogo" src="../assets/Page-Files/Logo_1.png" />
    </div>
    <section class="alinearIzq color-blanco">
      <br />
      <h3 class="txt-titulo">
        <small>Login</small>
      </h3>
      <div class="form-group">
        <!--- Lo utilizamos como etiqueta de HTM, propiedades de las etiquetasL --->
        <alerts-component v-if="showError" :message="errorMessage" :code="errorCode"></alerts-component>
        <input
          type="email"
          class="mb-3 mt-3"
          placeholder="Correo electrónico"
          v-model="user.email"
          @keypress="showError = false"
        />
        <input
          type="password"
          class="mb-3 mt-3"
          placeholder="Contraseña"
          v-model="user.password"
          @keypress.enter="login"
        />
        <!--Handlebars templating, pasar cosas como js a html-->
        {{user.password}}
        <div class="row">
          <div class="col">
            <a href="singup">Registro</a>
          </div>
          <div class="col pb-5">
            <small>¿Olvidaste la contraseña?</small>
          </div>
        </div>
      </div>
      <button class="btn-purple btn-block" @click="login">Login</button>
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/Alerts.vue'
// importamos componentes reutilizables de alertas
export default { // febrero 06 2020
  name: 'LoginForm',
  components: {
    AlertsComponent // Lo registramos como componente
  },
  data () { // poner los datos que estan siendo ingresados en el momento
    return {
      showError: false,
      errorMessage: '',
      errorCode: '',
      user: {
        email: '',
        password: ''
      },
      userEmail: '',
      userPassword: ''
    }
  },
  created () {
    console.log('Estoy en login')
  },
  mounted () { // Siempre vamos a usar este pare ejecutar cualquier funcion preparatoria
    // Auth.singUp(this.user.name)
    console.log('Estoy en mounted')
  },
  methods: {
    // metodos que queramos utilizar solo en este archivo
    login () {
      Auth.login(this.user).catch(error => {
        console.log('Esto es un error:' + error.code, error.message)
        // alert('aAAA')
        this.showError = true
        this.errorMessage = error.message
        this.errorCode = error.code
      })
      // console.log('login: ' + this.user.password)
    }
  }
}
</script>
<style lang="scss">
.txt-titulo {
  color: darkslategrey;
  font-size: 2em;
  text-align: center;
  margin-top: 13vh;
}
.logo {
  position: relative;
  width: 50%;
  height: 50%;
  margin: 0;
  margin-left: 25%;
  margin-top: 5%;
  background-color: rgba($color: white, $alpha: 1);
  border-radius: 100%;
  bottom: -100px;
}
.imgLogo {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10%;
  margin-top: 5%;
}
.btn-purple {
  background-color: #e54669;
  color: #202020;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
  &:hover,
  &:active {
    background: pink;
  }
}
.alinearIzq {
  text-align: start;
}
.color-blanco {
  background-color: rgba($color: white, $alpha: 0.6);
  border-style: solid;
  border-width: 7px;
  border-radius: 5%;
  border-color: #631f5c;
}
html {
  background-image: url("../assets/Page-Files/background2.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
input[type="text"],
[type="email"],
[type="password"] {
  background: none;
  border: none;
  border-bottom: solid 2px #474544;
  color: #c9c6c7;
  font-size: 1em;
  font-weight: 200;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
}
input[type="text"]:focus,
[type="email"]:focus,
[type="password"]:focus {
  outline: none;
  padding: 0 0 0.875em 0;
  border-bottom: solid 2px #e54669;
}
</style>
