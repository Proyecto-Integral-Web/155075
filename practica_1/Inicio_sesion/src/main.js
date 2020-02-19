import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Librerias de usuario FEB 04 2020}
// Con esto se cambia el estilo de la pagina
import 'bootstrap/scss/bootstrap.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
