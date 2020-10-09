const buyFood = new Promise((resolve,reject)=>{
    resolve("Aqui tienes tu comida , rey");
    // reject("Error al procesar el pago");
});

buyFood
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.info("Proceso finalizado"))