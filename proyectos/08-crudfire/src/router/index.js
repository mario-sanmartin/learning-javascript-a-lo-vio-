import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue'),
    meta:{ requiresAuth: true,title:'Lentes y Sueño'}
  },
  {
    path: '/informacion',
    name: 'Informacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Informacion.vue'),
    meta:{ requiresAuth: false,title:'Lentes y Sueño'}
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
    meta:{ requiresAuth: true}
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue'),
    meta:{ requiresAuth: true}
  },

  //Autenticaion
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue'),
    meta:{ requiresAuth: false,title:'Lentes y Sueño'}
  },
  {
    path: '/acceso',
    name: 'Acceso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Acceso.vue'),
    meta:{ title:'Lentes y Sueño'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//
router.beforeEach((to,from,next) =>{

  if(to.matched.some(record => record.meta.requiresAuth)){
    const usuario = auth.currentUser

    // console.log('usuario desde router', usuario);
      if(!usuario){
        next({path: '/acceso'})
      }else{
        document.title = to.meta.title;
        next()

      }
  }else {
    next()//lo dejara ir a la ruta correspondiente

  }
})

export default router
