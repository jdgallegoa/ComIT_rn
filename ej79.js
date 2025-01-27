// Copiar y pegar el código del ejercicio ej69.js
// Refactorizar el código utilizando la estructura do/while en lugar de while
// Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.

let contador = 0;
let totalizador = 0;

do{
    totalizador += contador;
    contador++;
} while(contador<=1000);

console.log(`La suma parcial de los numeros del 0 al 1000 es ${totalizador}`);
