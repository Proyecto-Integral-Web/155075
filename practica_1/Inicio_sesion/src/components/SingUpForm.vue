<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section>
      <h3>Registro</h3>
      <alerts-component
        v-if="showError"
        :message="errorMessage"
        :code="errorCode"
      >
      </alerts-component>
      <div class="form-group">
        <input
          type="text"
          class="mb-3 mt-3"
          placeholder="Nombre"
          v-model="user.name"
        />
        <input
          type="text"
          class="mb-3 mt-3"
          placeholder="Nombre de usuario"
          v-model="user.username"
        />
        <input
          type="email"
          class="mb-3 mt-3"
          placeholder="Correo electrónico"
          v-model="user.email"
        />
        <input
          type="password"
          class="mb-3 mt-3"
          placeholder="Contraseña"
          v-model="user.password"
          @keypress.enter="singup"
        />
        <!--Handlebars templating, pasar cosas como js a html-->
        {{user.password}}
        <div class="row">
          <div class="col">
            <router-link
              to="/"
              tag="a"
            ><small>¿Tienes una cuenta?</small></router-link>
          </div>
          <div class="col pb-5">

          </div>
        </div>
      </div>

      <button
        class="btn-purple btn-block"
        @click=" singUp"
      >SignUp</button>
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertsComponent from './helpers/Alerts.vue'
export default { // febrero 06 2020
  name: 'SingUpForm',
  components: {
    AlertsComponent // Lo registramos como componente
  },
  data () { // poner los datos que estan siendo ingresados en el momento
    return {
      showError: false,
      errorMessage: '',
      errorCode: '',
      user: {
        name: '',
        username: '',
        email: '',
        password: ''
      },
      userEmail: '',
      userPassword: ''
    }
  },
  created () {
    console.log('Estoy en created')
  },
  mounted () { // Siempre vamos a usar este pare ejecutar cualquier funcion preparatoria
    console.log(this.user.name)
  },
  methods: {
    // metodos que queramos utilizar solo en este archivo
    singUp () {
      Auth.singUp(this.user)
      console.log('soy el signup')
      console.log(this.user.email)
      console.log(this.user.password)
      // alertas feas ;(
      Auth.login(this.user).catch(error => {
        console.log('Esto es un error:' + error.code, error.message)
        // alert('aAAA')
        this.showError = true
        this.errorMessage = error.message
        this.errorCode = error.code
      })
      /*
      setTimeout(() => {
        // Luego de iniciar sesion nos envia a la pagina about
        this.$router.push({ name: 'profile' })
      }, 1000) */
    },
    logOut () {
      return Auth.logOut()
    }
  }
}
</script>
