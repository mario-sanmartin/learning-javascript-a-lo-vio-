<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
    :style="colorContador"
    >
      {{titulo}}:  {{contador}}
    </h1>
    <button @click="accionIncrementar">aumentar</button>
    <BtnDisminuir />
    <hr>
    <BtnAccion :estado="true"/>
    <BtnAccion :estado="false"/>
  </div>
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir'
import BtnAccion from '../components/BtnAccion'
import { mapState, mapMutations,mapActions } from 'vuex'
export default {
  name: 'Home',
  components:{
    BtnDisminuir,
    BtnAccion
  },
  data(){
    return{
      titulo:'Mi contador desde Vuex'
    }
  },
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color': 'green'}: {'color':'red'}]
    }
  },
  methods:{
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
