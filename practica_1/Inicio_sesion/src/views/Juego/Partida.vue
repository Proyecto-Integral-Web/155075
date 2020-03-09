<template>
  <section>
    <div>
      <div class="col col-sm-6 contenido">
        <h3 class="text-center">Juego 1</h3>
      </div>
    </div>
    <div class="centrar-row partida contenido container">
      <div class="col col-sm-6">
        <user-arena @opcion="getOpcion"></user-arena>
      </div>
      <div class="col col-sm-6">
        <user-arena></user-arena>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  methods: {
    getOpcion (opcion) {
      alert(`Estoy en partida: ${opcion}`)
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
