<template>
<div class="container">
<div class="row p-2">
  <div class="col"></div>
  <div class="col">
    <ProfileForm></ProfileForm>
  </div>
  <div class="col"></div>
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
