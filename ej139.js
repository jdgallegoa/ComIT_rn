// Crear un array números con valores entre 1 y 100
// Crear un nuevo array filtando los números pares
// Crear un nuevo array filtando los números impares
// Mostrar en consola sólo los últimos 10 números pares e impares

const numeros = [];

for(let i=1;i<=100;i++){
    numeros.push(i);
}

const numerosPares = numeros.filter(function(numero){
    if(numero%2===0){
        return numero;
    }
});
const numerosImpares = numeros.filter(function(numero){
    if(numero%2!==0){
        return numero;
    }
});
for(i=0;i<10;i++){
    console.log(`Numero par ${numerosPares[numerosPares.length-(i+1)]}, Numero impar ${numerosImpares[numerosImpares.length-(i+1)]}`);
}