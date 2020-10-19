<template>
  <button> {{texto}}</button>
</template>

<script>
export default {
    props:{
        texto: String
       
    }

}
</script>

<style scoped>
button {
  border-radius: 8px;
  padding: 5px 10px;
  color: #666;
}

</style>