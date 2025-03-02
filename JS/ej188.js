function crearPromesa(){
    return new Promise((onSucess)=>{
        setTimeout(()=>{
            onSucess('Pasaron 5 segundos y la promesa fue exitosa');
        },5000);
    });
};

const promesa = crearPromesa();

promesa
    .then((mensaje)=>{
        console.log(mensaje)});
