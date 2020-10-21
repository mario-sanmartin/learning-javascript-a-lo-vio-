import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 50
  },
  mutations: {
    //Es lo unico que cambia el state
    incrementar(state){
      state.contador = state.contador + 10
    }

  },
  actions: {
  },
  modules: {
  }
})
