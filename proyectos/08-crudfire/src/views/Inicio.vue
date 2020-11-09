<template>
  <div>
     
    <h1>Control venta de lentes</h1>
    <strong>Email:</strong>
    <p>{{usuario.email}}</p>
   <router-link to="/agregar">
      <button class="btn btn-info btn-block">Agregar</button>
   </router-link>
   <!-- Spinner -->
   <div v-if="carga" class="text-center mt-3">
     <h3>Cargando información ...</h3>
     <PulseLoader />
   </div>
    <ul class="list-group mt-2" v-if="!carga">
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
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Inicio',
   components: {
    PulseLoader
  },
  created(){
   this.getTareas() 
  },
  computed:{
    ...mapState(['tareas','usuario','carga'])
  },
  methods:{
    ...mapActions(['getTareas','eliminarTarea'])
  }
}
</script>

<style>

</style>