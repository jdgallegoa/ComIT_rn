// Crear una variable con el nombre tieneError y asignar el valor true.
// Crear una función con el nombre crearPromesa.
// La función crearPromesa retorna una nueva Promise que como parámetro toma una arrow function y el primer parámetro se llama onSuccess que es la función que se va a ejecutar cuando la promesa sea exitosa en el método then y un segundo parámetro que se llame onError que se ejecuta si hay error.
// La promesa retornada debe validar si la variable tieneError es verdadera o falsa. Si es verdadera debe llamar a la función onError para que se ejecute el método catch pero si la variable tieneError es falsa debe llamar a la función onSuccess.
// Crear una variable promesa y asignar el valor retornado por la función crearPromesa y manejar los métodos then y catch.
// Encontrar la forma de mostrar un mensaje de éxito si todo salió bien y uno de error en caso de que la promesa no se cumpliera (muy feo no cumplir las promesas!!!)
// Pobrar ejecutar el código cambiando el valor de la variable tieneError para ver ambos casos.

const tieneError = true;

function crearPromesa(){
    return new Promise((onSuccess, onError)=>{
        setTimeout(()=>{
            if(tieneError){
                onError('Ocurrio algo mal');
            } else{
                onSuccess('Promesa ejecutada con exito');
            }
        },2000);
    });
};

const promesa = crearPromesa();

promesa
    .then((mensaje)=>
    {console.log(mensaje)})
    .catch((mensaje)=>
    {console.log(mensaje)});