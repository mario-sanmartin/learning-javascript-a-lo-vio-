<template>
<div>
  <h2>Tipo de Cuenta : {{cuenta}}</h2>
  <h2>Saldo : {{saldo}}</h2>
  <h2>Estado : {{estado ? 'Activo':'Desactivada'}}</h2>
  <div v-for="(servicio,index) in servicios" 
  :key="index">
  {{index+1}} - {{servicio}}

  </div>
  <accionSaldo texto="Aumentar Saldo"  @click="aumentar" />
  <accionSaldo  texto="Disminuir Saldo" @click="disminuir"/>
</div>
</template>

<script>
import accionSaldo from './AccionSaldo';
export default {
    components:{
        accionSaldo
    },
    data(){
        return{
            saldo: 1000,
            cuenta: 'Visa',
            estado:false,
            servicios:['giro','abono','transferencia']
        }
    },
    methods:{
        aumentar(){
            this.saldo =  this.saldo + 100;
        },
        disminuir(){
            this.saldo =  this.saldo - 100;
        }
        
    }

}
</script>

<style scoped>
h2{
    color: #888;
}


</style>