<template>
  <div class="text-center">
    <h1>Inicio</h1>
   <router-link to="/agregar">
      <button class="btn btn-info btn-block">Agregar</button>
   </router-link>
    <ul class="list-group mt-2">
      <li class="list-group-item"
       v-for="(tarea,index) in tareas" :key="index">
        {{tarea.nombre}} - {{tarea.id}}

        <div class="float-right">
            <router-link :to="{name:'Editar',params:{id: tarea.id}}">
                 <button
                    class="btn btn-warning btn-sm mr-2 ml-2"
                    >
                      editar
                    </button>
            </router-link>
            <button
             class="btn btn-danger btn-sm"
             @click="eliminarTarea(tarea.id)">
              Eliminar
            </button>
        </div>
        
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