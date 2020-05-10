<template>
  <div class="container">
    <div class="pt-5 margen-0">
      <!--incovamos componente para ordenar hacia la derecha-->
      <div class="row p-4">
        <div class="col-md-4">
          <ProfileForm></ProfileForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js">
import ProfileForm from '@/components/ProfileForm'

export default {
  name: 'profile',
  components: {
    ProfileForm
  }
}
</script>
