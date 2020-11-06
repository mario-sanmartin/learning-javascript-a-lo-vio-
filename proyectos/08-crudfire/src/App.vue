<template>
  <div id="app" class="text-center">

  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">AM</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name:'Inicio'}" exact v-if="existeUsuario"
        >Inicio</b-nav-item>
        <b-nav-item :to="{name:'Informacion'}">Informacion</b-nav-item>
        <b-nav-item :to="{name:'Registro'}" v-if="!existeUsuario" >Registro</b-nav-item>
        <b-nav-item :to="{name:'Acceso'}"  v-if="!existeUsuario" >Acceso</b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
<!-- 
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown right v-if="existeUsuario"
>
          <!-- Using 'button-content' slot -->
          <!-- <template #button-content>
            <em>Salir</em>
          </template> -->
          <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
          <b-dropdown-item  
          class="text-center"
          @click.prevent="cerrarSession"
           >Cerrar Session
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <!-- <div class="mt-2">
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
    </div> -->
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


