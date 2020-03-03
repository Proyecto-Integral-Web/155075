<template>
<section>
    <div
    class="alert animated tada"
    :class="tipo"
    >
        {{message}}
    </div>
    </section>
</template>

<script lang="js">
export default {
  name: 'AlertsComponent', // Lo que se exporta en LofinForm
  props: ['error', 'code', 'message'], // Propiedades que va a recibir del LoginForm
  data () {
    return {
      tipo: 'alert-sucess' // Guarda una clase, se lo suma al div
    }
  },
  mounted () {
    switch (this.code) {
      case 'auth/user-not-found':
        this.tipo = 'alert-danger'
        break
      case 'auth/invalid-email':
        this.tipo = 'alert-warning'
        break
      case 'auth/wrong-password':
        this.tipo = 'alert-warning'
        break

      default:
        this.tipo = 'alert-warning'
        break
    }
  }
}
</script>
<style lang="scss">
</style>
