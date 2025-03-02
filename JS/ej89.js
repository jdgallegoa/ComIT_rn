// Copiar y pegar el código del ejercicio ej69.js
// Refactorizar el código utilizando la estructura for en lugar de do/while
// Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.

let totalizador = 0;

for(var i=0;i<=1000;i++){
    totalizador+=i;
}
console.log(`La suma parcial de los numeros del 0 al 1000 es ${totalizador}`);