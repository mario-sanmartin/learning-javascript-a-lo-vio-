// class declaration

class Task {
    //Constructor
    constructor(title) {
        if(!title) throw new Error("we need a title!!")
        this.title = title;
        this.completed = false;
    }
}



//creamos una instancia de la Task
const tarea = new Task ("Aprende Javascript");
console.log(tarea instanceof Task);



const taskList = class {
    constructor() {
        this.tasks = [
            {title:"Aprende Firebase" , completed:false},
            {title:"Aprende CSS" , completed:true},
            {title:"Aprende HTML" , completed:false}
        ]
    }

    //Getters
    get uncompleted(){
        return[...this.tasks].filter(task => !task.completed)
    }

    get completed(){
        return[...this.tasks].filter(task => task.completed)
    }

    //Setters
    set addTask(task){
        this.tasks.push(task)
    }

    //Metodos
    //Creamos un metodo de busqueda realmente Nazi
    search(search){
        return this.tasks.find(task => task.title.includes(search));
    }

    removeTask(index){
        this.tasks.splice(index,1);
    }

    //Metodo estatico
    static normaliceTask(title){
        title = title.trim();
        return title.charAt(0).toUpperCase() + title.substring(1);
    }

}

// console.log(taskList);
const tareas = new taskList();

const tarea2 = new Task("Aprende Vuex");

//Usando Spread 
tareas.addTask = {...tarea2};
console.log(tareas.uncompleted);

console.log(tareas.search("Firebase"));


console.log(taskList.normaliceTask(" esto es una mierda "));

// console.log(tareas.completed);


// const info = document.getElementById("info");
// info.innerHTML = `
// <h1>
// Tareas:
// </h1>
// ${tareas.uncompleted}
// `

//Subclassing (subclases)
class Reminder extends Task{
    constructor(title,date){
        super(title);
        this.date = date;
    }
   get duration(){
       return `${this.title} finalza el ${this.date}`;
   } 
}

const producir = new Reminder("Producir leccion eterna", "4 de octubre 2020");

console.log(producir.duration);



////EJERCITANDO
//Primera forma
class familia{
    constructor(nombre,sexo,edad) {
        if(!nombre) throw new Error("QUe pasa con el nombre hermanito!!!");
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
    }
}

const integrante = new familia("Vero", "mujer","28");
console.log(integrante);


//Segunda forma

const Familiares = class {
    constructor(){
        this.familiares = [
            {nombre:"Homero" ,sexo:"hombre" , edad:60 , parentesco:"padre"},
            {nombre:"Lurdez" ,sexo:"mujer" , edad:56 , parentesco:"madre"},
            {nombre:"Puky" ,sexo:"mujer" , edad:28 , parentesco:"hermano"},
            {nombre:"Ozuni" ,sexo:"hombre" , edad:35 , parentesco:"hermano"},
            {nombre:"Boby Jhonson" ,sexo:"hombre" , edad:13 , parentesco:"sobrino"}
        ]
    }
    //getters
    get generoMasculino(){
        return[...this.familiares].filter(personita => personita.sexo="hombre");
    }

    get generoFemenino(){
        return[...this.familiares].filter(personita => personita.sexo="mujer");
    }
}

const miFamilia = new Familiares();

console.log(miFamilia.generoMasculino);