<template>
  <div>
    <h1>Tareas</h1>
    <ul>
      <li v-for="(tarea,index) in tareas" :key="index">
        {{tarea.nombre}} - {{tarea.id}}

        <router-link :to="{name:'Editar',params:{id: tarea.id}}">
          <button>
            editar
          </button>
        </router-link>
        
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
    ...mapActions(['getTareas'])
  }
}
</script>

<style>

</style>