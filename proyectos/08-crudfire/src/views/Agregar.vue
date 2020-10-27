<template>
  <div>
      <h1>Agregar Tarea</h1>
      <form @submit.prevent="agregarTarea(nombre)">
          <input type="text" v-model="nombre">
          <button type="submit">Agregar</button>
      </form>
  </div>
</template>

<script>
import {mapActions}  from 'vuex';
export default {
    nmae: 'Agregar',
    data(){
        return{
            nombre: ''
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>

<style>

</style>