<template>
  <div id="app" class="container text-center">
    <div>
      <router-link to="/">
      Inicio
      </router-link> |
      <router-link to="/registro">
      registro
      </router-link>
      <router-link to="/acceso"> |
      Login
      </router-link>
      <button
      @click.prevent="cerrarSession"
      >cerrar Session</button>
    </div>
          <Logo class="text-center"/>

    <router-view/>
    
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import Logo from './components/Logo'; 
export default {
  components:{
    Logo
  },
  methods:{
    ...mapActions(['cerrarSession'])
  }
  
}
</script>


