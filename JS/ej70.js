// Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.

let contador = 1;
let totalizador = 0;

while(contador<=1000){
    totalizador += contador;
    contador += 2;
}

console.log(`La suma parcial de los numeros impares del 0 al 1000 es ${totalizador}`);
