// Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while

let numero1 = 0;
let numero2 = 1;
let numeroVar;
let contador = 3;
console.log(numero1);
console.log(numero2);

while(contador<=10){
    numeroVar = numero1 + numero2;
    numero1 = numero2;
    numero2 = numeroVar;
    console.log(numeroVar);
    contador++;
}