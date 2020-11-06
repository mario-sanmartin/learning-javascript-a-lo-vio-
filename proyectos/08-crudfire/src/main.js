import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth } from './firebase'

//Archivos bootstrap previo su instalacion npm i bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

//archivos Css Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

//Observador
auth.onAuthStateChanged(user => {
  if(user){
    // console.log(user);
    const detectoUsuario = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario',detectoUsuario)
  }else {
    // console.log(user);
    store.dispatch('detectarUsuario',user)
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
})

