<template>
  <section>
    <div class="container-fluid pb-5">
      <div class="row">
        <h3 class="mx-auto">{{displayName}}</h3>
      </div>
      <div class="row">
        <div class="col-3 mx-auto">
          <h1>{{options[userOpcion]}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mx-auto opciones">
          <div class="row">
            <button
              class="col col-sm-4 opcion p-3"
              v-for="(option,key) in options"
              :key="key"
              @click="select(key)"
            >
              {{option}}
            </button>
          </div>
          <button @click="aceptarEleccion">Aceptar</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
export default {
  name: 'UserArena',
  props: ['userOpcion', 'displayName', 'confirmarOpcion'],
  data () {
    return {
      options: {
        t: '☭',
        pp: '🧻',
        p: '💎'
      }
    }
  },
  methods: {
    select (key) {
      if (this.confirmarOpcion === true) {
        this.$emit('opcion', [key, this.displayName])
      }
    },
    aceptarEleccion () {
      this.confirmarOpcion = true
      /* if (this.confirmarOpcion === false) {
        this.$emit('aceptarEleccion', [true, this.displayName])
      } */
    }
  }
}
</script>
<style lang="scss">
.opciones {
  background: rgb(212, 188, 204);
  .opcion {
    cursor: pointer;
    &:hover {
      background: darkgray;
    }
    &:focus {
      background: pink;
    }
  }
}
</style>
