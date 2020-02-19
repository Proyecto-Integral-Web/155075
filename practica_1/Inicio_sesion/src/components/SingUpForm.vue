<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section>
      <h3>Registro</h3>
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
          @keypress.enter="login"
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
export default { // febrero 06 2020
  name: 'SingUpForm',
  data () { // poner los datos que estan siendo ingresados en el momento
    return {
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
  beforeCreate () {
    console.log('Antes de ser creado')
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
      console.log('soy el login')
      console.log(this.user.email)
      console.log(this.user.password)

      setTimeout(() => {
        // Luego de iniciar sesion nos envia a la pagina about
        this.$router.push({ name: 'about' })
      }, 1000)
    }
  }
}
</script>
