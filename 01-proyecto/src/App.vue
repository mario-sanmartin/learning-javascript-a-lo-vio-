<template>
 <Header :totalIncome="state.totalIncome"/>
 <Form   @add-income="AddIncome"/>
 <IncomeList :state="state" @remove-item="removeItem" />
</template>

<script>
import { reactive, computed } from 'vue';
import Header from './components/Header'
import Form from './components/Form'
import IncomeList from './components/IncomeList'

export default {
  // components:{
  //   Header
  // }
  //Vue 3
  setup(){
    const state = reactive({
        // income:[{
        //   value: 777
        // },
        // {
        //   value:600
        // }],
        income:[],
        totalIncome: computed(()=>{
          let temp = 0;
          if(state.income.length > 0){
            for (let i = 0; i< state.income.length; i++){
              temp += state.income[i].value;
            }
          }
          return temp;
        }),
        sortedIncome : computed(()=>{
          let temp = [];

          temp = state.income.sort(function (a,b){
            return b.date - a.date;
          });
          return temp;
        })
    });
    
    function AddIncome(data){
      let d = data.date.split("-");
      let newD = new Date(d[0],d[1],d[2]);
      state.income = [...state.income,{
        id: Date.now(),
        desc: data.desc,
        value: parseInt(data.value),
        date: newD.getTime()
      }];
      console.log(state.income);
    }

    function removeItem(id){
      state.income = state.income.filter(v => v.id != id);
    }

    return {
      Header,
      Form,
      state,
      AddIncome,
      IncomeList,
      removeItem
    }
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
body{
  background: #EEE;
}

</style>
