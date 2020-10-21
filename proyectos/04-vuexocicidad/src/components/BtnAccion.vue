<template>
  <button>{{textoBoton}}</button>
</template>

<script>
export default {
    props:{
        estado: Boolean
    },
    computed:{
        textoBoton(){
            return this.estado ? 'agrandar' : 'achicar'
        }
    }
}
</script>

<style>

</style>