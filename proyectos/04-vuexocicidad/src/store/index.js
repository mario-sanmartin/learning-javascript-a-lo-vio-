import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 50
  },
  mutations: {
    //Es lo unico que cambia el state
    incrementar(state,payload){
      state.contador = state.contador + payload
    },
    disminuir(state,payload){
      state.contador = state.contador - payload
    }
  },
  actions: {
    //llamados a APis y BDs , accionar una mutacion
    accionIncrementar({commit}){
      commit('incrementar',77)
    },
    accionDisminuir({commit},numero){
      commit('disminuir',numero)
    },
    accionBoton({commit},objeto){
      if(objeto.estado){
        commit('incrementar',objeto.numero)
      }else{
        commit('disminuir',objeto.numero)
      }
    }

  },
  modules: {
  }
})
