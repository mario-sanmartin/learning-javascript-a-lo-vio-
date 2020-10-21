<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
    :style="colorContador"
    >
      {{titulo}}:  {{contador}}
    </h1>
    <button @click="accionIncrementar">aumentar</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations,mapActions } from 'vuex'
export default {
  name: 'Home',
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
