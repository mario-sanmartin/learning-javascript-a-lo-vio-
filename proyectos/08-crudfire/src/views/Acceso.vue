<template>
    <div>
          <h1>Acceso de usuarios</h1>
          <form @submit.prevent="ingresoUsuario({email: email, password:pass1})">
              <input type="email"
              placeholder="ingrese email"
              v-model="email"
              >
              <input type="password"
              placeholder="ingrese contraseña"
              v-model="pass1"  
              >
              <button type="submit">ingresar</button>
          </form>
          <p>{{error}}</p>
    </div>
</template>

<script>
import { mapActions ,mapState } from 'vuex'
export default {
    name:'Acceso',
    data(){
        return{
            email:'',
            pass1:''
        }
    },
    computed: {
        ...mapState(['error'])
    }
    ,
    methods:{
        ...mapActions(['ingresoUsuario'])
    }

}
</script>

<style>

</style>