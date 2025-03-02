// Crear una función con el nombre dividir.
// Esta función acepta 2 parámetros numero1 y numero2.
// La función retorna el valor de dividir numero1 y numero2.
// En caso de que numero2 sea 0, la función debe tirar un error con el siguiente mensaje: No se puede dividir por 0.
// Al manejar el error (catch) se muestra la promiedad message del objeto error en pantalla.
// Llamar a la función con los siguientes valores:
// 10, 2
// 10, 0
// 15, 3

function dividir(numero1,numero2) {
    try{
        const resultado = numero1/numero2;
        console.log(resultado);
    } catch(error){
        console.log(error.message);
    }
}

dividir(10,2);
dividir(10,0);
dividir(15,3);