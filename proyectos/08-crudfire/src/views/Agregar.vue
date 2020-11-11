<template>
  <div class="text-center">
      <h1>Agregar Tarea</h1>
      <form @submit.prevent="agregarTarea(nombre)"
      
      >
      <div>     
          <input
          type="text"
           v-model="nombre"
           class="form-control mb-2 mt-2"
           >
           <input
          type="number"
           v-model.number="cantidad"
           class="form-control mb-2 mt-2"
           >
    </div>
          <button type="submit" class="btn btn-primary mb-2">Agregar</button>
      </form>
  </div>
</template>

<script>
import {mapActions}  from 'vuex';
export default {
    name: 'Agregar',
    data(){
        return{
            nombre: '',
            cantidad:0
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>

<style>

</style>