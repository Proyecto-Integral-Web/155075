<template>
  <section>
    <header>
      <div class="logo"></div>
    </header>
    <section>
      <h3>Perfil de usuario</h3>
      <div class="row">
          <div class="col">
              <p>Imagen bien bonita siono</p>
              <img src="../assets/login-back.jpg">
          </div>
        </div>
      <div class="form-group row">
        <div class="col">
        <p>Nombre</p>
        <input
          type="text"
          class="mb-3 mt-3"
          placeholder="Nombre"
        />
        </div>
        <div class="col">
        <p>Nombre de usuario</p>
        <input
          type="text"
          class="mb-3 mt-3"
          placeholder="Nombre de usuario"
        />
        </div>
        <div class="col">
        <p>Email</p>
        <input
          type="email"
          class="mb-3 mt-3"
          placeholder="Correo electrónico"
        />
        </div>
        <!--Handlebars templating, pasar cosas como js a html-->
      </div>
    </section>
  </section>
</template>
