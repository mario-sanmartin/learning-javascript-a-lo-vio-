<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Titulo texto="Inicio Bien nazi" />
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  name: 'Home',
  setup(){
    return{
      Titulo
    }
  }
}
</script>
