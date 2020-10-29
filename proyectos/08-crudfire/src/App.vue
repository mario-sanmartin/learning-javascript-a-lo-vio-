<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link to="/">
      Inicio
      </router-link> |
      <router-link to="/registro">
      registro
      </router-link>
    </div>
          <Logo class="text-center"/>

    <router-view/>
    
  </div>
</template>

<script>
import Logo from './components/Logo'; 
export default {
  components:{
    Logo
  }
  
}
</script>


