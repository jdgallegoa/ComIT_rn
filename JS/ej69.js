// Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.

let contador = 0;
let totalizador = 0;

while (contador<=1000){
    totalizador += contador;
    contador++;
}

console.log(`La suma parcial de los numeros del 0 al 1000 es ${totalizador}`);
