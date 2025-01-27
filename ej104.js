// Declarar la variable fibonacci y asignar una función como valor
// La función fibonacci tiene que mostrar los primeros 10 números de la secuencia en consola
// Ejecutar esta función 3 veces

const fibonnacci = function(){
    let numero1 = -1;
    let numero2 = 1;
    let numeroVar = 0;
    for(let i=0;i<10;i++){
        numeroVar = numero1 + numero2;
        numero1 = numero2;
        numero2 = numeroVar;
        console.log(numero2);
    }
}

fibonnacci();