<template>
  <div class="text-center">
      {{tarea.id}} - {{tarea.nombre}}
       <h1>Editar</h1>
       <form @submit.prevent="editarTarea(tarea)"
       class="text-center"
       >
       <div class="input-group mb-2 mr-sm-2">
           <div class="input-group-prepend">
               <div class="input-group-text">Nombre</div>
           </div>
          <input 
          class="form-control"
           type="text"
            v-model="tarea.nombre"
           >
       </div>
          
           <button
           class="btn btn-warning sm-2"
            type="submit">Editar</button>
       </form>

  </div>
</template>

<script>

import { mapActions,mapState } from 'vuex'

export default {
    name: 'Editar',
    data(){
        return{
            id: this.$route.params.id
        }
    },
    created(){
        this.getTarea(this.id)
    },
    computed:{
        ...mapState(['tarea'])
    },
    methods:{
        ...mapActions(['getTarea','editarTarea'])
    }

}
</script>

<style>

</style>