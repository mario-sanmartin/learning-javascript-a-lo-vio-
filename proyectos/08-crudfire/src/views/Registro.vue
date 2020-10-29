<template>
  <div>
      <h1>Registro de usuario</h1>
      <form @submit.prevent="crearUsuario({email: email,password: pass1})">
          <input
           type="email"
           placeholder="Ingrese su correo"
           v-model="email"
          >
          <input 
          type="password"
          placeholder="ingrese su contraseña"
          v-model="pass1"
          >
          <input 
          type="password"
          placeholder="Repita su contraseña"
          v-model="pass2"
          >
          <button type="submit">
            registrar usuario
          </button>
      </form>
      <p>{{error}}</p>
  </div>
</template>

<script>

import { mapActions,mapState } from 'vuex';
export default {
    name:'Registro',
    data(){
        return{
            email: '',
            pass1:'',
            pass2: ''
        }
    },
    created(){

    },
    computed:{
        ...mapState(['error'])
    },
    methods:{
        ...mapActions(['crearUsuario'])
    }
    
}
</script>

<style>

</style>