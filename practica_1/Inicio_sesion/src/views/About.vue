<template>
  <div class="about">
    <h1>Te has registrado</h1>
    <h1>this is an {{$route.name}} </h1>
    <button
      class="btn btn-danger"
      @click="logOut"
    >
      Cerrar sesion
    </button>
  </div>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'About',
  methods: {
    logOut () {
      return Auth.logOut()
    }
  }
}
</script>
