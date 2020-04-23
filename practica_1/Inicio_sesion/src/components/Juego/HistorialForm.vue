<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section>
      <h3>Historial de partidas</h3>
      <div class="row">
        <div class="col">
        </div>
      </div>
      <div class="form-group row">
        <div class="col">
          <p>Participadas</p>

          <p>Otras partidas</p>
        </div>
        <!--Handlebars templating, pasar cosas como js a html-->
      </div>
    </section>
  </section>
</template>
<script lang='js'>
// import Auth from '@/config/auth.js'
// import Firebase from '@/config/_firebase.js'
export default {
  name: 'profileForm',
  data () {
  },
  mounted () {
    console.log(this.user.name)
  },
  methods: {
    mostrarPartidas () {
      console.log('tratar de sacar el historial')
    }
  }
}
</script>
