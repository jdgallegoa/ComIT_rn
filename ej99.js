// Sumar los números pares del 0 al 10000
// Cortar la ejecución al encontrar 10 números pares
// Mostrar en consola el resultado de los números hasta el momento del corte

let contPares = 0;
let suma = 0;

for(let i=0;i<=1000;i++){
    suma += i;
    console.log(`Suma en valor ${suma}`);
    if(i%2===0){
        contPares++;
        console.log(`Numero par ${i} para un total de ${contPares} numeros pares`)
    }
    if(contPares>=10){
        break;
    }
}