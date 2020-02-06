<template>
  <section>
       <header>
        <div class="logo"></div>
       </header>
      <section class="alinearIzq">
        <h4 class="mb-5">img</h4>
        <h3>Login</h3>
      <div class="form-group">
              <div>
                  <input
                    type="email"
                    class="form-control mb-3 mt-3"
                    placeholder="Correo electrónico"
                  >
              </div>
              <div>
                  <input
                  type="text"
                  class="form-control mb-3 mt-3"
                  placeholder="Nombre"
                  />
              </div>
              <div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Contraseña"
                  />
                </div>
      </div>
    <div class="row">
      <div class="col">
      </div>
      <div class="col">
        <p>Olvidaste la contraseña?</p>
      </div>
    </div>

        <button class="btn btn-purple btn-block">Login</button>
      </section>
    </section>
</template>

<script lang="js">
export default {
  name: 'LoginForm'
}
</script>

<script lang="scss">
</script>

<style lang="scss">
.btn-purple{
  background: purple;
  &:hover,
  &:active{
    background: pink;
  }
}
.alinearIzq{
  text-align: start;
}
</style>
