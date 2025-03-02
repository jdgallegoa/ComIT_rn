// Completa el código para que al llamar a la función crearMultiplicador retorne 15.
// Muestra en pantalla el resultado de ejecutar la función crearMultiplicador.

function crearMultiplicador(numero1) {
    return function (numero2) {
        return numero1*numero2;      
    };
};

const numero15 = crearMultiplicador(2);
console.log(numero15(7.5));

