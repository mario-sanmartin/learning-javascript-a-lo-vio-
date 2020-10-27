<template>
  <div>
      <h1>Editar</h1>
      {{tarea.id}} - {{tarea.nombre}}
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
        ...mapActions(['getTarea'])
    }

}
</script>

<style>

</style>