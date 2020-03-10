<template>
  <section>
    <div>
      <div class="col col-sm-6 contenido">
        <h3 class="text-center">Juego 1</h3>
      </div>
    </div>
    <div class="centrar-row">
        <button
        class="btn btn-success"
        @click="crearPartida"
        >
          Nueva partida
        </button>
      </div>
    <div class="centrar-row partida contenido container">
      <div class="col col-sm-6">
        <user-arena 
        @opcion="getOpcion" 
        :userOpcion="partida.usuario_1"></user-arena>
      </div>
      <div class="col col-sm-6">
        <user-arena :userOpcion)"partida.usuario_1 != ´´ ?"></user-arena>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
import fireApp from '@/config/_firebase.js'
const partida users = fireApp,firestore().collection('users')
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.obtenerPArtida(to.params)
    })
  },
  data () {
    return {
      partida: ''
    }
  },
  firestore: {
    partida: fireApp.firestore.collection('juego-1')
  },
  // Hwlpwe para asignar objetos o variables que necesitan ser detectados en sus cambios para ejecutar metodos
  watch: {
    '$route.params': {
      deep: true, // puede ser un objeto anidado, fijarnos en el ultimojson
      immediate: true, // no esperar
      handler (value) { // lo que vas a hacer cuando detectes un ca,bio
        this.$bind('user', partida.doc(value.no_partida))
      }
    }
  },
  methods: {
    // ;etodo paragenerar nueva partida
    crearPartida () { // Toma los datos de la base de datos de firebase
    // escribe en la base de datos
      fireApp.firestore().collection('juego-1').doc('partida').set({
        'usuario-1': '',
        'usuario-2': '',
        'ganador': ''
      })
    },
    // cargar los datos de la partida del firestore
    obtenerPArtida (partida) {
      fireApp.firestore().collection('juego-1').doc(partida).get().then((result) => {
        console.log(result.data)
      })
    },
    getOpcion (opcion) {
      //alert(`Estoy en partida: ${opcion}`)
      fireApp.firestore().collection('juego-1'),doc(this.$route.params.no_partida).update({
        'usuario-1': '',
        'usuario-2': '',
        'ganador': ''
      })
    }
  }
}
</script>
<style lang="scss">
.partida {
  background:palevioletred;
}
.centrar-row{
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    flex-wrap: wrap;
}
.contenido{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}
</style>
