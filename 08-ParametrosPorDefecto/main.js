function randonNum(){
    //Puede ser a 1 + 2 o 1 +1 
    return Math.floor(Math.random() * 2) +1;
}
function sumar(nu1 = 1,nu2 = randonNum()){
    //var nu1 = 1;
    //var nu2 = undefined

   // if(!nu1 || !nu2) return;
   //parametros por defecto (chochinos)
//    !nu1 && (nu1= 1);
//    !nu2 && (nu2 = 2);
    return nu1 + nu2;
}
console.log(sumar());

//nan = not a number
//Math.random = devuelve un numero decimal entre 0 y 1 . 
//Pero uno no incluido

//Floor aproxima al entero pero por abajo


//usando valor por defecto
console.log(sumar(undefined,6));