// Copiar el código del ejercicio ej186.js
// Modifica la función crearPromesa para que la Promise retornada ahora use setTimeout para esperar 5 segundos en resolverse.
// Crear una función con el nombre mostrarPromesa que acepta un mensaje como parámetro.
// La función mostrarPromesa es una función async y nos permite usar await adentro para esperar el resultado de llamar a la función crearPromesa.
// Ejecutar la función mostrarPromesa pasando como parámetro Wow, estamos usando async / await.

function crearPromesa(mensaje){
    return new Promise((onSuccess)=>{
        setTimeout(()=>{
            onSuccess(mensaje);
        },5000);
    });
};

async function mostrarMensaje(){
    const mensaje = await crearPromesa('Wow, estamos usando async / await.');
    console.log(mensaje);
};

mostrarMensaje();
