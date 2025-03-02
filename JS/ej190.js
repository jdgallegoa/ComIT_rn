// Copiar el código del ejercicio ej189.js
// Intentar modificar la función crearPromesa para que tarde 5 segundos en resolver la promesa (como vimos con setTimeout)
// Un cambio necesario va a ser que al llamar onSuccess tenemos que pasar el mensaje obtenido como parámetro en la función crearPromesa.

function crearPromesa(mensaje){
    return new Promise((onSuccess)=>{
        setTimeout(()=>{
            onSuccess(mensaje);
        },5000);
    });
};

async function mostrarMensaje(){
    const mensaje = await crearPromesa('No entiendo la diferencia con el ejercicio anterior');
    console.log(mensaje);
};

mostrarMensaje();