<template>
  <form>
    <input 
    type="text"
    class="form-control my-2"
    placeholder="Ingrese nombre"
    v-model="tarea.nombre"
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
              {{tarea.categoria}}
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
          {{tarea.categoria}}
      </div>
    </div>
  </form>
  <p>  {{tarea.nombre}}
  </p>
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
        descripcion:'',
        categoria:['javascript','desarrollo']
      }
    }
  }
}
</script>
