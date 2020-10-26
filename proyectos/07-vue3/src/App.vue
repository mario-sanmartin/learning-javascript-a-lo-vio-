<template>
  <div id="app"> 
    <PerfilUsuario/>
  </div>
</template>

<script>

import PerfilUsuario from './components/PerfilUsuario'
export default {
  name: 'App',
  components:{
    PerfilUsuario
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */

  /* --nuevas */
  display: flex;
  flex-direction: column;
  text-align: center;

}
</style>
