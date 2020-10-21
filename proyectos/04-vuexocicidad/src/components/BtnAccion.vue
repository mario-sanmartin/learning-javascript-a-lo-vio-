<template>
  <button @click="accionBoton({estado: estado,numero:17})">{{textoBoton}}</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        estado: Boolean
    },
    computed:{
        textoBoton(){
            return this.estado ? 'agrandar' : 'achicar'
        }
    },
    methods:{
        ...mapActions(['accionBoton'])
    }
}
</script>

<style>

</style>