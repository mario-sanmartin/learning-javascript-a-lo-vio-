<template>
  <div id="app" class="container text-center">
    <div>
      <router-link
       to="/"
        v-if="existeUsuario">
      Inicio
      </router-link> |
      <router-link 
      to="/registro"
      v-if="!existeUsuario"
      >
      registro
      </router-link>
      <router-link 
      to="/acceso"
      v-if="!existeUsuario"
      > |
      Login
      </router-link>
      <button
      @click.prevent="cerrarSession"
      v-if="existeUsuario"
      >
      cerrar Session
      </button>
    </div>
          <Logo class="text-center"/>

    <router-view/>
    
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import Logo from './components/Logo'; 
export default {
  components:{
    Logo
  },
  methods:{
    ...mapActions(['cerrarSession'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  }
  
}
</script>


