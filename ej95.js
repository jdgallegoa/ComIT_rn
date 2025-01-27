// Copiar y pegar el código del ejercicio ej75.js
// Refactorizar el código utilizando la estructura for en lugar de do/while

let numero1 = 0;
let numero2 = 1;
let numeroVar;
console.log(numero1);
console.log(numero2);

for(var i = 3; i<=10;i++){
    numeroVar = numero1 + numero2;
    numero1 = numero2;
    numero2 = numeroVar;
    console.log(numeroVar);
}