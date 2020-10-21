<template>
 <div>
    <Titulo texto="Titulo de mi Blog"/>
    <!-- <button @click="consumirApi">Consumir Api</button> -->
    <button @click="consumirPastaBase">Consumir PastaBase</button>

   <div v-for="articulo in arrayBlog" :key="articulo.id">
        <router-link :to="`/blog/${articulo.id}`">
            {{articulo.title}}
        </router-link>

   </div>

 </div>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
    // setup(){
    //     return{
    //         Titulo
    //     }
    // }
    components:{
        Titulo
    },
    data(){
        return{
            arrayBlog:[]
        }
    },
    methods:{
        async consumirApi(){
            try {
              const data = await fetch('https://jsonplaceholder.typicode.com/posts')
              const array = await data.json()
              console.log(array);
              this.arrayBlog = array;
            } catch (error) {
                console.log(error);
            }
        },
        async consumirPastaBase(){
            try {
                const datito = await fetch('https://randomuser.me/api/')
                const donArray = await datito.json()
                // console.log(donArray);
                // this.arrayBlog = donArray;
            } catch (error) {
                console.log(donArray);
            }
        }

    },
    created(){
        this.consumirApi()
    }
}
</script>

<style scoped>
button{
    padding: 4px 4px;
    margin-right: 10px;
    /* color: #1999; */
    /* background-color: rgba(0,0,0, 0.25); */
    border-radius: 4px;
    /* --box-shadow: 5px 3px 5px; */
}
</style>