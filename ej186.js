function crearPromesa(mensaje){
    return new Promise((onSuccess)=>{});
};

const promesa = crearPromesa();

promesa.then((mensaje)=>{
    console.log('Exito');
});
