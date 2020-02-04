<template>
  <section>
       <header>
        <div class="logo"></div>
       </header>
      <section>
        <h3>Olis, benvenido</h3>
          <h3>Iniciar sesión</h3>
            <div class="form-group">
              <div class="col">
                <p>Correo electrónico</p>
                  <input
                  type="email"
                  class="form-control mb-2"
                  >
                </div>
      <div class="contenEntrada">
        <p>Nombre completo</p>
          <input
           type="text"
           placeholder="Pato Yakitobi"
          />
      </div>
      <div>
        <p>Contraseña</p>
          <input
            type="password"
            class="form-control"
            placeholder="*******"
          />
        </div>
      </div>
    <div class="row">
      <div class="col">
        <p>Remebber ee</p>
      </div>
      <div class="col">
        <p>holaa</p>
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
</style>
