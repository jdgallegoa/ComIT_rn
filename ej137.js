// Crear un array con números de 0 a 100
// Crear un nuevo array incrementando cada valor del array en 10
// Mostrar en consola el ínidice, valor original y valor incrementado de cada uno de los primeros 10 valores

const numeros = [];

for(let i = 0; i<=100;i++){
    numeros.push(i);
}

const numerosMas10 = numeros.map(function(numero, index){
    return numero+10;
});

for(let i=0;i<10;i++){
    console.log(`Indice ${i}, valor original ${numeros[i]}, valor incrementado ${numerosMas10[i]}`);
}