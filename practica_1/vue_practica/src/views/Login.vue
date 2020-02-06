<template>
  <div class="login container">
   <h2> Bienvenido </h2>
    <div class="card p-5">
      <!--incovamos componente para ordenar hacia la derecha-->
     <div class="row">
      <div class="col-md-4">
        <LoginForm></LoginForm>
       </div>
       <div class="col">
        <!--Invocamos el componente para su visualizacion-->
     </div>
    </div><!--Hasta aqui termina el div del primer row, ordenando todo el loginform-->
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
