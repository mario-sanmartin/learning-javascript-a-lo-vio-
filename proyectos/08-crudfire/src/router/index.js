import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue')
  },

  //Autenticaion
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
