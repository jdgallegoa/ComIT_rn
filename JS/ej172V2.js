function crearSaludador(mensaje){
    return function saludador(nombre){
        return `${mensaje} ${nombre}`
    };
};

console.log(crearSaludador('Hola')('Juan'));