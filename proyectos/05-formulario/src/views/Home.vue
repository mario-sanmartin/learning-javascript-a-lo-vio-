<template>
  <form @submit.prevent="procesarFormulario">
    <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese nombre"
    v-model.trim="tarea.nombre"
    >

    <!-- checkbox -->
    <div class="my-2">
      <div class="form-check form-check-inline">
        <input
         type="checkbox"
         class="form-check-input"
          v-model="tarea.categoria"
          value="javascript"
          id="check-1"
         >
         <label for="check-1"
         class="form-check-label"
         >
          javascript
         </label>
      </div>
      <div class="form-check form-check-inline">
          <input
          type="checkbox"
          class="form-check-input"
            v-model="tarea.categoria"
            value="desarrollo"
            id="check-2"
          >
          <label for="check-2"
          class="form-check-label"
          >
            desarrollo
          </label>
      </div>
    </div>

      <!-- Radio -->
    <div class="my-2">
      <div class="form-check form-check-inline">
        <input
         type="radio"
          value="urgente"
          id="radio-1"
          v-model="tarea.estado"
         >
         <label for="radio-1"
         class="form-check-label"
         >
          Urgente
         </label>
      </div>
      <div class="form-check form-check-inline">
          <input
          type="radio"
            value="relax"
            id="radio-2"
            v-model="tarea.estado"

          >
          <label for="radio-2"
          class="form-check-label"
          >
          Relax
          </label>
      </div>
    </div>

    <!-- numeros -->
    <div class="mt-2">
      <input type="number"
      class="form-control"
      v-model="tarea.numero"
      >
    </div>

    <button  class="btn btn-dark mt-3 btn-block"
    type="submit"
    :disabled="bloquear"
    >
      Procesar
    </button>

  </form>
  <p>  {{ tarea }} </p>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      tarea:{
        nombre:'',
        // descripcion:'',
        categoria:['javascript','desarrollo'],
        estado: '',
        numero:0
      }
    }
  },
  methods:{
    procesarFormulario(){
      console.log(this.tarea);
      if(this.tarea.nombre.trim() === ""){
        console.log('campo vacio');
        return
      }
      console.log('no esta vacio');
    }
  },
  computed:{
    bloquear(){
      return this.tarea.nombre.trim() === "" ? true : false
    }
  }

}
</script>
