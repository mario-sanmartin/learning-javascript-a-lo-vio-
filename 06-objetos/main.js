const nombre = "Ale";
const color = "amarillo";
const ciudad = "Concepción";
const pelicula = "Power";


const persona = {
    nombre,
    color,
    ciudad,
    pelicula,
    //propiodad dinamica en base a resultados del objeto
    [pelicula + " valoración"]: 5,
    //funcion anonima
    saludar(){
        console.log(`Hola me llamo ${nombre}`);
    }
}

persona.saludar();
console.log(persona);

//retorna una matriz con las propiedades enumerables del objeto (los valores)
console.log(Object.values(persona));

const [nombre2,color2,ciudad2,pelicula2] = Object.values(persona);
console.log(nombre2);
//Object Entry
Object.entries(persona).forEach(([key,value]) => {
    console.log(`${key} : ${value}`);
});