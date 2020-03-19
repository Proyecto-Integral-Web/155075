<template>
  <section>
    <div>
      <div class="col col-sm-6 contenido">
        <h3 class="text-center">Juego 1</h3>
      </div>
    </div>
    <div class="centrar-row">
    </div>
    <button
      class="btn btn-success"
      @click="crearPartida"
    >
      Nueva partida
    </button>
    <div class="centrar-row partida contenido container">
      <div class="col col-sm-6">
        <user-arena
          @opcion="getOpcion"
          :userOpcion="partida.usuario_1"
          :displayName="!user.displayName?partida.names[0] !== user.displayName?partida.names[0]: ' ':user.displayName"
        ></user-arena>
      </div>
      <div class="col col-sm-6">
        <button
          v-if="!partida.names[1]"
          class="btn btn-outline-primary"
          @click="retar"
        >
          👾
        </button>
        <user-arena
          :userOpcion="partida.usuario_1!= ' ' ?partida.usuario_2: ' ' "
          @opcion="getOpcion"
          :displayName="!partida.names[1]? 'Esperanding': partida.names[1] "
        ></user-arena>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
// import fireApp from '@/config/_firebase.js' aiudaa
import fireApp from '../../config/_firebase.js'
import Auth from '@/config/auth'
const partida = fireApp.firestore().collection('juego-1')
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.obtenerPArtida(to.params)
      vm.user = Auth.getUser()
      vm.crearPartida()
      vm.$bind('partida', partida.doc(to.params.no_partida))
      // return this.user
    })
  },
  data () {
    return {
      partida: {},
      partidas: [],
      user: {}
    }
  },
  firestore: {
    partidas: fireApp.firestore().collection('juego-1')
  },
  // Hwlpwe para asignar objetos o variables que necesitan ser detectados en sus cambios para ejecutar metodos
  watch: {
    '$route.params': {
      deep: true, // puede ser un objeto anidado, fijarnos en el ultimojson
      immediate: true, // no esperar
      handler (value) { // lo que vas a hacer cuando detectes un ca,bio
        this.user = Auth.getUser()
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  methods: {
    // ;etodo paragenerar nueva partida
    crearPartida () {
      // Tomar el usuario
      this.user = Auth.getUser()
      // constante
      let uid = this.user.uid
      // *Escribe en la base de datos.
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).set({
        participantes: [uid],
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        usuario_1: ' ',
        usuario_2: ' ',
        ganador: ' '
      })
    },
    // cargar los datos de la partida del firestore
    obtenerPArtida (partida) {
      fireApp.firestore().collection('juego-1').doc(partida).get().then((result) => {
        console.log(result.data())
      })
    },
    retar () {
      this.user = Auth.getUser()
      // let uid = this.user.uid
      // *Escribe en la base de datos.
      this.partida.names.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.participantes.push(this.user.uid)
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(this.partida)
    },
    getOpcion (opcion) {
      let participantes = this.partida.participantes
      console.log(participantes.indexOf(this.user.uid))
      if (this.partida.names[participantes.indexOf(this.user.uid)] !== opcion[1]) {
        return 0
      }
      console.log(opcion)
      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario_1': opcion[0]
        }
      } else {
        data = {
          'usuario_2': opcion[0]
        }
      }
      // alert(`Estoy en partida: ${opcion}`)
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(data)
    }
  }
}
</script>
<style lang="scss">
.partida {
  background: palevioletred;
}
.centrar-row {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  flex-wrap: wrap;
}
.contenido {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
</style>
