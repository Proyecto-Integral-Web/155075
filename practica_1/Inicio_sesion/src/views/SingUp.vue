<template>
  <div class="container">
    <div class="pt-5">
      <!--incovamos componente para ordenar hacia la derecha-->
      <div class="row p-3">
        <div class="col"></div>
        <div class="col">
          <SingUpForm></SingUpForm>
          <!--Invocamos el componente para su visualizacion-->
        </div>
        <div class="col"></div>
      </div>
      <!--Hasta aqui termina el div del primer row, ordenando todo el loginform-->
    </div>
  </div>
</template>

<script lang="js">
import SingUpForm from '@/components/SingUpForm'

export default {
  name: 'singup',
  components: {
    SingUpForm
  }
}
</script>
