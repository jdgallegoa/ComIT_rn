// Copiar y pegar el código del ejercicio ej70.js
// Refactorizar el código utilizando la estructura for en lugar de do/while
// Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.
let totalizador=0;
for(var i=1;i<=1000;i+=2){
    totalizador+=i;
}
console.log(`La suma parcial de los numeros impares del 0 al 1000 es ${totalizador}`);