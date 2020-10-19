//Math.trunc
/*
devuelve la parte entera de un numero
eliminando los decimales (+/-)
*/
const num = 123.456;
//para numeros 
console.log(Math.trunc(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

//para valores string
console.log(parseInt(num));


let valor = undefined + 4;
//El metodo gobal retorna true en valores que pueden
//convertirse en Nan pero que no tienen porue ser NaN.
//Ojo con esto
console.log(Number.isNaN(valor));

valor = "NaN";
console.log(Number.isNaN(valor));
console.log(isNaN(valor));