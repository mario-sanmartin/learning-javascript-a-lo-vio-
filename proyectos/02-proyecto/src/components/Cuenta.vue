<template>
<div>
  <h2>Tipo de Cuenta : {{cuenta}}</h2>
  <h2>Saldo : {{saldo}}</h2>
  <h2>Estado : {{estado ? 'Activo':'Desactivada'}}</h2>
  <div v-for="(servicio,index) in servicios" 
  :key="index">
  {{index+1}} - {{servicio}}

  </div>
  <accionSaldo 
    texto="Aumentar Saldo"
    @accion="aumentar"
     />
  <accionSaldo 
    texto="Disminuir Saldo"
   @accion="disminuir"
   :desactivar="desactivar"
   />
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
            servicios:['giro','abono','transferencia'],
            desactivar: false
        }
    },
    methods:{
        aumentar(){
            this.saldo =  this.saldo + 100;
            this.desactivar = false
        },
        disminuir(){
            if(this.saldo === 0 ){
                this.desactivar = true
                // alert('Saldo Agotado')
            } else {
                this.saldo =  this.saldo - 100
            }
        }
        
    }

}
</script>

<style scoped>
h2{
    color: #888;
}


</style>