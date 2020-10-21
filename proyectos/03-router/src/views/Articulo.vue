<template>
  <Titulo texto="Ruta con parametros" />
  <h2> paramaetro: {{ $route.params.id }}</h2>
  <h3>{{articulo.title}}</h3>
  <h3> {{articulo.id}} - {{articulo.body}}</h3>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
components:{
    Titulo
    },
    data(){
        return{
            articulo:{}
        }
    },
      methods:{
        async consumirArticulo(){
            try {
              const dota = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
              const ogete = await dota.json()
              this.articulo = ogete;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.consumirArticulo()
    }
}
</script>

<style>

</style>