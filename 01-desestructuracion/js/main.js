//Matriz
const aprender = ["Javascript","Vue","Nodejs"];

//Acceder a los valores de la matriz
// var Javascript = aprender[0];
// var Vue = aprender[1];
// var Nodejs = aprender[2];


// Desestructurando matrices
var[Javascript,vue,Nodejs] = aprender;


// Desestructurar String
// var direccion = "Poblacion Antonio Varas,pasaje 3 , casas 355, lirquen,Penco";

// var [poblacion,calle,numero,pueblo,comuna] = direccion.split(',');
// // Con trim sacamos los espacions en blanco y tabulaciones

// Desestructurando objeto

const perro = {
    nombre: "Blue",
    raza: "Labrador",
    color: "amarillo",
    edad: 8,
        hermana: {
            nombre: "Luna",
            raza: "Kilterry",
            color: "Negra"
        },
}
// var nombre = perro.nombre;
// var nombre1 = perro.hermana.nombre;

var {nombre,raza,color,edad} = perro;
var {nombre:nombreHermano,raza:razaHermano,color:colorHermano,edad:edadHermano = "desconocida"} = perro.hermana;

// Reemplazo de los parametros por defecto

// function saludar(saludo,nombre,momento){
// function saludar(saludo,nombre = "Chiqui",momento){

//     alert(`${saludo} ${nombre}, feliz  ${momento}`);
// }
// // saludar("Holanda","Alechanchi","tarde");
// saludar("Holanda",undefined,"tarde");

//Funcion con desestructuracion si no se especifica nombre ni momento
function saludar({saludo,nombre = "Ale",momento = "Tarde"}){
    alert (`${saludo} ${nombre}, feliz ${momento}`);
}

saludar({saludo: "Holanda", nombre:"Amor"});