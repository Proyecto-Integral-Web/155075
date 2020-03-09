import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SingUp from '../views/SingUp.vue'
import Profile from '../views/Profile.vue'
import Partida from '../views/Juego/Partida.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/home',
  name: 'home',
  component: Home
},
{
  path: '/profile',
  name: 'profile',
  component: Profile
},
{
  path: '/',
  name: 'Login',
  component: Login,
  meta: {
    user: false
  }
},
{
  path: '/singup',
  name: 'singup',
  component: SingUp
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import (/* webpackChunkName: "about" */ '../views/About.vue'),
  meta: {
    auth: true // controlar acceso a usuarios
  }
},
{
  // ruta dinamica, donde no_partida puede ser difrente para cargar dicha partida
  path: '/juego-1/:no_partida',
  name: 'partida',
  component: Partida
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
