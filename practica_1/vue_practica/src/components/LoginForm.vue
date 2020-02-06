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
                    class="mb-3 mt-3"
                    placeholder="Correo electrónico"
                  >
              </div>
              <div>
                  <input
                  type="text"
                  class="mb-3 mt-3"
                  placeholder="Nombre"
                  />
              </div>
              <div>
                  <input
                    type="password"
                    class="mb-3 mt-3"
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

        <button class="btn-purple btn-block">Login</button>
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
  background-color: #e54669;
  color: #202020;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.10s ease-in-out;
  &:hover,
  &:active{
    background: pink;
  }
}
.alinearIzq{
  text-align: start;
}
html{
  background-color: #202020;
}
input[type='text'], [type='email'], [type='password'] {
  background: none;
  border: none;
  border-bottom: solid 2px #474544;
  color: #c9c6c7;
  font-size: 1.000em;
  font-weight: 200;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.3s;
}
input[type='text']:focus, [type='email']:focus, [type='password']:focus {
  outline: none;
  padding: 0 0 0.875em 0;
  border-bottom: solid 2px #e54669;
}

</style>
