<template>
  <div id="app" class="container text-center">
    <div class="mt-2">
      <router-link
      class="btn btn-success mr-2"
       to="/"
        v-if="existeUsuario">
      Inicio
      </router-link> 
      <router-link 
      class="btn btn-info mr-2"
      to="/registro"
      v-if="!existeUsuario"
      >
      registro
      </router-link>
      <router-link 
      class="btn btn-success mr-2"
      to="/acceso"
      v-if="!existeUsuario"
      > 
      Login
      </router-link>
      <button
      class="btn btn-danger mr-2"
      @click.prevent="cerrarSession"
      v-if="existeUsuario"
      >
      cerrar
      </button>
    </div>
          <Logo class="text-center mt-2"/>

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


