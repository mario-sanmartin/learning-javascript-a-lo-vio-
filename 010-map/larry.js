const map = new Map()

map.set(1,"Number");
map.set("1","String");
map.set(true,"Boolean");   

console.log(map.get(1));

// for(let key of map.keys()){
//     console.log(key);
// }

// for(let val of map.values()){
//     console.log(val);
// }

// for(let data of map.entries()){
//     let [key,value] = data;
//     console.log(key,value);
// }

// map.forEach(element => {
//     console.log(element);
// });

const person = {
    name:"Mario",
    city:"Concepcion",
    color:"blue"
}

const personMap = new Map(Object.entries(person));
// console.log(personMap.get("name"));

const personClone = Object.fromEntries(personMap);
