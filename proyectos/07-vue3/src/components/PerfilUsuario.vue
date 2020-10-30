<template>
  <div class="perfil-usuario">
      <div class="perfil-usuario-panel">
          <h1 class="perfil-usuario-username">
              @{{ user.username }}
          </h1>
            <div 
            v-if="user.isAdmin"
            class="perfil-usuario-admin">
                Admin
            </div>
            <!-- <div 
            v-else
            class="perfil-usuario-admin">
               No soy admin
            </div> -->
          <div class="perfil-usuario-cantidad-seguidores">
              <strong>Seguidores: </strong> {{seguidores}}
          </div>
      </div>
      <div class="perfil-usuario-twoots">
        <div class="perfil-usuario-twoots"
         v-for="comentario in user.twoots"
         :key="comentario.id"
         >
          {{comentario.content}}
        </div>

      </div>
  </div>
</template>

<script>
export default {
    name:'PerfilUsuario',
    data(){
          return{
      seguidores:0,
      user:{
        id: 1,
        username: 'Larry Love',
        nombre: 'Mario',
        apellido: 'San Martin',
        email: 'mariomoreno@kk.com',
        isAdmin: true,
        twoots: [
          {id:1,content:'Ale chiqui'},
          {id:2,content:'Ser feliz juntos'},
          {id:3,content:'Comprar cortinas'}
        ]
      }
    }
  },
  watch:{
    seguidores(nuevosSeguidores, antigosSeguidores){
      if(antigosSeguidores < nuevosSeguidores){
        console.log(`${this.user.username} has ganado un seguidor`);
      }
    }
  },
  computed: {
    nombreCompleto(){
      return `${this.user.nombre} ${this.user.apellido}`;
    }
  },
  methods: {
    misSeguidores(){
      this.seguidores++;
    }
  },

  // CicloVida
  mounted(){
    this.misSeguidores();
  }
}
</script>

<style scoped>
 .perfil-usuario{
     display: grid;
     grid-template-columns: 1fr 3fr;
     width: 100%;
     padding: 50px 5%;

 }

 .perfil-usuario-panel{
     display: flex;
     flex-direction: column;
     margin-right: 50px;
     padding: 20px;
     background-color: white;
     border-radius: 5px;
     border: 1px solid #DFE3E8;
 }
 h1{
     margin: 0;
 }
 .perfil-usuario-admin{
     background: purple;
     color: white;
     border-radius: 5px;
     margin-right: auto;
     padding: 0 10px;
     font-weight:  bold;
 }

</style>