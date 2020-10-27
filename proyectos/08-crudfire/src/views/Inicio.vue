<template>
  <div>
    <h1>Inicio</h1>
   <router-link to="/agregar">
      <button>Agregar</button>
   </router-link>
    <ul>
      <li v-for="(tarea,index) in tareas" :key="index">
        {{tarea.nombre}} - {{tarea.id}}

        <router-link :to="{name:'Editar',params:{id: tarea.id}}">
          <button>
            editar
          </button>
        </router-link>

        <button @click="eliminarTarea(tarea.id)">
          Eliminar
        </button>
        
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Inicio',
  created(){
   this.getTareas() 
  },
  computed:{
    ...mapState(['tareas'])
  },
  methods:{
    ...mapActions(['getTareas','eliminarTarea'])
  }
}
</script>

<style>

</style>