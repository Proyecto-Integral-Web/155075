<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section>
      <h3>Perfil de usuario</h3>
      <div class="row">
        <div class="col">
          <p>Imagen bien bonita siono</p>
          <img src="../assets/Nuko.gif">
        </div>
      </div>
      <div class="form-group row">
        <div class="col">
          <p>Nombre</p>
          <input
            type="text"
            class="mb-3 mt-3"
            placeholder="Nombre"
            v-model="user.name"
          />
          <p>Nombre de usuario</p>
          <input
            type="text"
            class="mb-3 mt-3"
            placeholder="Nombre de usuario"
          />
          <p>Email</p>
          <input
            type="email"
            class="mb-3 mt-3"
            placeholder="Correo electrónico"
            v-model="user.email"
          />
          <button
            class="btn btn-danger"
            @click="updateProfile"
          >
            actualizar
          </button>
          <button
            class="btn btn-danger"
            @click="logOut"
          >
            Cerrar sesion
          </button>
        </div>
        <!--Handlebars templating, pasar cosas como js a html-->
      </div>
    </section>
  </section>
</template>
<script lang='js'>
import Auth from '@/config/auth.js'
import Firebase from '@/config/_firebase.js'
export default {
  name: 'profileForm',
  data () {
    return {
      user: {
        email: '',
        name: '',
        username: '',
        password: '',
        telefono: '',
        foto: ''
      },
      userEmail: ''
    }
  },
  mounted () {
    let user = Firebase.auth().currentUser
    console.log('estoy en profile ' + user.name)
    console.log('estoy en profile ' + user.email)
    this.user.email = user.email
    this.user.password = user.password
    this.user.name = user.displayName
    console.log(this.user.name)
  },
  methods: {
    logOut () {
      Auth.logOut()
    },
    updateProfile () {
      let usuarioP = Firebase.auth().currentUser
      usuarioP.updateProfile({
        displayName: this.user.name,
        email: this.user.email
      }).then((result) => {
        console.log(result)
        console.log('usuario actualizado')
        console.log('nombre de usuario' + this.user.name)
      }).catch(() => {
        console.log('error actualizar')
      })
    }
  }
}
</script>
