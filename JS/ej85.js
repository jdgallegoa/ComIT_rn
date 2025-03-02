// Copiar y pegar el código del ejercicio ej75.js
// Refactorizar el código utilizando la estructura do/while en lugar de while
// Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while

let numero1 = 0;
let numero2 = 1;
let numeroVar;
let contador = 3;
console.log(numero1);
console.log(numero2);

do {
    numeroVar = numero1 + numero2;
    numero1 = numero2;
    numero2 = numeroVar;
    console.log(numeroVar);
    contador++;
} while(contador<=10);