<template>
  <div class="container">
    <div class="pt-5">
      <!--incovamos componente para ordenar hacia la derecha-->
      <div class="row p-3">
        <div class="col-md-4">
          <LoginForm></LoginForm>
        </div>
        <div class="col">
          <img
            class="img-ajus"
            src="../assets/login-back.jpg"
          >
          <!--Invocamos el componente para su visualizacion-->
        </div>
      </div>
      <!--Hasta aqui termina el div del primer row, ordenando todo el loginform-->
    </div>
  </div>
</template>

<script lang="js">
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
<style lang="scss">
.img-ajus {
  width: 100%;
  //width: 20%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
