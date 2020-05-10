<template>
  <section class="cont-usuario">
    <header>
      <br />
      <img class="img-perfil" src="../assets/Page-Files/icono.png" />
    </header>
    <section class="perfil">
      <input class="texto" v-model="usuarioActual.displayName" readonly />
      <input class="texto" v-model="usuarioActual.email" readonly />
      <div class="cont-bt">
        <button class="bt-p" @click="editar(false)">Editar</button>
        <button class="bt-p" @click="logOut">Salir</button>
      </div>
    </section>
    <section id="editar">
      <div class="linea"></div>
      <!--<form name="subida-imagenes" type="POST" enctype="multipart/formdata">
        <input type="file" name="imagen" />
      </form>-->
      <h3>Editar</h3>
      <div class="cont-input">
        <p class="nombre">Nombre</p>
        <input
          type="text"
          class="mb-3 mt-3"
          placeholder="Nombre"
          v-model="usuarioActual.displayName"
        />
      </div>
      <div class="cont-input">
        <p>Email</p>
        <input
          type="email"
          class="mb-3 mt-3"
          placeholder="Correo electrónico"
          v-model="usuarioActual.email"
        />
      </div>

      <div class="cont-bt">
        <button class="bt" @click="updateProfile">Actualizar</button>
        <button class="bt" @click="editar(true)">Cancelar</button>
      </div>

      <!--Handlebars templating, pasar cosas como js a html-->
    </section>
    <section></section>
  </section>
</template>
<script lang='js'>
import Auth from '@/config/auth.js'
import Firebase from '@/config/_firebase.js'
export default {
  name: 'profileForm',
  data () {
    return {
      usuarioActual: Firebase.auth().currentUser
    }
  },
  mounted () {
    this.userActual = Firebase.auth().currentUser
    console.log(this.userActual)
  },
  methods: {
    editar (bandera) {
      if (!bandera) {
        document.getElementById('editar').style.display = 'block'
      } else {
        document.getElementById('editar').style.display = 'none'
      }
    },
    logOut () {
      Auth.logOut()
    },
    updateProfile () {
      this.userActual.updateProfile({
        displayName: this.usuarioActual.displayName,
        email: this.usuarioActual.email
      }).then((result) => {
        console.log(result)
        console.log('usuario actualizado')
        console.log('nombre de usuario' + this.usuarioActual.displayName)
      }).catch(() => {
        console.log('error actualizar')
      })
    }
  }
}
</script>
<style lang="scss">
#editar {
  display: none;
  margin-top: 3vh;
}
.bt-p {
  width: 70%;
  background-color: red; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 1vh;
  text-decoration: none;
  font-size: 16px;
  margin-left: 3vh;
  margin-right: 1vh;
  margin-bottom: 3vh;
}
.bt-p:hover {
  background-color: white;
  color: red;
}
.cont-bt {
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1vh;
  margin-top: 6vh;
  margin-left: 1vh;
  margin-bottom: 3vh;
  align-items: center;
}
.texto {
  border: none;
  background-color: rgba($color: white, $alpha: 0);
  font-size: 4vh;
  text-align: center;
}
.linea {
  height: 1px;
  border-bottom: 2px solid #631f5c;
  width: 90%;
  margin: auto;
  margin-top: 1vh;
}
.editar {
  width: 100%;
  margin: auto;
}
.bt {
  width: 75%;
  background-color: #ea5680; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 1vh;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: auto;
}
.bt:hover {
  color: #ea5680;
  background-color: white;
}
.nombre {
  margin: auto;
}
.cont-input {
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.img-perfil {
  margin-top: 3vh;
  width: 50%;
  margin: auto;
}
.cont-usuario {
  background-color: rgba($color: white, $alpha: 0.6);
  border-style: solid;
  border-width: 7px;
  border-radius: 5%;
  border-color: #631f5c;
  margin-bottom: 3vh;
}
</style>
