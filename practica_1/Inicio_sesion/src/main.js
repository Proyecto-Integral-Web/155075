import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'
import 'animate.css'
import { firestorePlugin } from 'vuefire'

// Librerias de usuario FEB 04 2020}
// Con esto se cambia el estilo de la pagina
import 'bootstrap/scss/bootstrap.scss'
Vue.config.productionTip = false
// Metodo de comprobacion
router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    console.log('necesita permiso')
    // traemos info del usuario actual
    let user = await Auth.checkUser()
    console.log(user)
    // comrpobamos que si haya usuario
    if (user == null) {
      // console.log('Usuario logeado: ${user.email}')
      next({
        name: 'login'
      })
      return
    }
    // si hay usuario
    console.log('usuario logeado')
    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
