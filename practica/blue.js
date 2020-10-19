const lista = Array.from(document.querySelectorAll("li"));

const familia = Array.from(
    document.querySelectorAll("li"),
    elemento => elemento.textContent
);

familia.forEach(integrante =>{
    console.log(integrante);
})