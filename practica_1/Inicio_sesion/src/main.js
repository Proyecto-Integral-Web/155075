import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Auth from './config/auth'

// Librerias de usuario FEB 04 2020}
// Con esto se cambia el estilo de la pagina
import 'bootstrap/scss/bootstrap.scss'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('a que hora pasas por el pan, ah y no tienes permiso')
    if (Auth.checkUser()) {
      next()
      return
    }
    router.push({ name: 'login' })
  }next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
