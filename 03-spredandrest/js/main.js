/*Expande valores (string o matriz) 
allá donde se esperan argumentos
(funcion) o elementos (matriz)
*/

//SPREAD

const numeros = [1,2,3,4,5];
console.log(numeros);
console.log(...numeros);

const amor = "AleChiqui";
console.log(amor);
console.log(...amor);

//pasar matrices como argumentos
function sumar (a,b,c,d,e){
    return a + b + c + d + e;
}
//usamos la matriz numeros y la usamos con la funcion
// sumar que espera X cantidad de parametros
// console.log(sumar.apply(null,numeros));
console.log(sumar(...numeros));

//Clonar matricez y objetos
const numerosCopia = [...numeros];
// console.log(numerosCopia);

numeros.push(6);
console.log(numeros, numerosCopia);

const datos = {nombre: "Ale", edad: 27};
// console.log(datos);
const datosCopia = {...datos}
console.log(datosCopia);

//Fusionar matrices y objetos
const preferencias = {nombre: "Marioly",color: "Amarillo",grupo:"Soja"};
const persona = {...datos, ...preferencias};
console.log(persona);


//REST
//Representa un numero infinito de argumentos como matriz

function sumar2(...argumentos) {
    return argumentos;
}

//se puede usar spread varias vcs
const numeros2 = [21,22,66];
console.log();