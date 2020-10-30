import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '../firebase'
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[],
    tarea:{
      nombre:'',
      id:''
    },
      //autenticacion
      usuario: null,
      error: null
  },
  mutations: {
    setTareas(state,payload){
      state.tareas = payload //tarea
    },
    setTarea(state,payload){
      state.tarea = payload
    },
    eliminarTarea(state,payload){
      const tareasFiltradas = state.tareas = state.tareas.filter(item => item.id !== payload)
      // console.log(tareasFiltradas);
      state.tareas = tareasFiltradas
      //cuando item.id sea distitnto del id que estamos recibiendo lo elimine del array
      // y devolvera todo lo que sea distinto
    }
    ,
    //Autenticacion
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state,payload){
      state.error = payload
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
    },
    agregarTarea({commit},nombreTarea){
      db.collection('tareas').add({
        nombre: nombreTarea
      })
      .then(doc =>{
        console.log(doc.id)
        router.push('/')
      })
    },
    //mediante dispatch usamos la otra accion
    eliminarTarea({commit,dispatch},idTarea){
      db.collection('tareas').doc(idTarea).delete()
        .then(()=>{
          console.log('tarea eliminada...')
          // dispatch('getTareas')
          commit('eliminarTarea',idTarea)
        })
    },

    //Autenticacion
    crearUsuario({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          // console.log(res);
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario',usuarioCreado)
          router.push('/')
        })
        .catch(error => {
          // console.log(error);
          commit('setError',error)
        })
    },
    ingresoUsuario({commit},usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(res =>{
          // console.log(res);
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario',usuarioCreado)
          router.push('/')
        })
        .catch(error => {
          // console.log(error);
          commit('setError',error)
        })
    },
    cerrarSession({commit}){
      auth.signOut()
        .then(()=>{
          router.push('/acceso')
        })
    },
    detectarUsuario({commit},usuario){
      commit('setUsuario',usuario)
    }

  },
  modules: {
  }
})
