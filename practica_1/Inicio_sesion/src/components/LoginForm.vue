<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section class="alinearIzq">
      <h3>Login</h3>
      <div class="form-group">
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
            <a href="singup">Registro</a>
          </div>
          <div class="col pb-5">
            <small>¿Olvidaste la contraseña?</small>
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
import Auth from '@/config/auth.js'
export default { // febrero 06 2020
  name: 'LoginForm',
  data () { // poner los datos que estan siendo ingresados en el momento
    return {
      user: {
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
    // Auth.singUp(this.user.name)
    console.log('Estoy en mounted')
  },
  methods: {
    // metodos que queramos utilizar solo en este archivo
    login () {
      Auth.login(this.user)
      console.log(this.user.password)
    }
  }
}
</script>
<style lang="scss">
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
html {
  background-color: #202020;
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
