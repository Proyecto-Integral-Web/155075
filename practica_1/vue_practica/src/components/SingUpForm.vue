<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section>
      <h4 class="mb-5">img</h4>
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
            <a href="home"><small>¿Tienes una cuenta?</small></a>
          </div>
          <div class="col pb-5">

          </div>
        </div>
      </div>

      <button
        class="btn-purple btn-block"
        @click="login"
      >Login</button>
    </section>
  </section>
</template>

<script lang="js">
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
    console.log('Estoy en mounted')
  },
  methods: {
    // metodos que queramos utilizar solo en este archivo
    login () {
      let user = {
        email: 'esto es local'
      }
      console.log('soy el login')
      console.log('User local' + user)
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
