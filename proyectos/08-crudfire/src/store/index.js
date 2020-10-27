import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import router from '../router';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[],
    tarea:{
      nombre:'',
      id:''
    }
  },
  mutations: {
    setTareas(state,payload){
      state.tareas = payload //tarea
    },
    setTarea(state,payload){
      state.tarea = payload
    }
  },
  actions: {
    //llamamos a la colección de firebase
    getTareas({commit}){

      const tareas = []

      db.collection('tareas').get()
        .then(res => {
          res.forEach(doc => {
            // console.log(doc.id)
            // console.log(doc.data())
            let tarea = doc.data()
            tarea.id = doc.id //tarea individual
            tareas.push(tarea)//empujando la tarea individual al array
          })

          commit('setTareas',tareas)
        })
    },
    getTarea({commit},idTarea){
      db.collection('tareas').doc(idTarea).get()
        .then(doc => {
          console.log(doc.id)
          console.log(doc.data());
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea',tarea)
        })
    },
    editarTarea({commit},tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(()=> {
        console.log('tarea editada')
        router.push('/')
      })
    }

  },
  modules: {
  }
})
