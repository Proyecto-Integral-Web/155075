<template>
  <div class="login container">
   <h1> BIENVENIDOS </h1>
    <div class="card p-3">
      <!--incovamos componente para ordenar hacia la derecha-->
     <div class="row">
      <div class="col">

       </div>
       <div class="col">
        <!--Invocamos el componente para su visualizacion-->
       <LoginForm></LoginForm>
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
