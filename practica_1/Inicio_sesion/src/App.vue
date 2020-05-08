<template>
<html>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!-- <router-link :to="{name: 'about'}"> About </router-link>-->
      <router-link to="/singup">Singup</router-link>
      <router-link to="/juego-1/partida-1">Juego</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/historial">Historial</router-link>
    </div>
    <router-view />
  </div>
</html>
</template>

<style lang="scss">
html {
  background-image: url("/src/assets/Page-Files/background2.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #644a56;

    &.router-link-exact-active {
      color: #e54669;
    }
  }
}
</style>
