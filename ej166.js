// Definir una variable usuario y asigne el siguiente objeto { nombre: valor} donde valor sea tu nombre.
// Crear una función isUserValid que utilize el scope global para acceder a la variable usuario.
// Si el nombre del usuario es el mismo que tu nombre muestra un mensaje de éxito en pantall.
// Si no muestra un mensaje de error.
// Llama a la función para que se ejecute tu código.
// Prueba cambiar la definción de la variable usuario con var, let & const

const usuario = {nombre: 'Juan'};

function isUserValid(){
    if(usuario.nombre === 'Juan'){
        console.log('Exito');
    } else {
        console.log('Error');
    }
};

isUserValid();