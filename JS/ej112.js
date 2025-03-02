// Crear una función que se llame mostrarNumeros que acepte 2 parámetros numéricos inicio y fin
// Mostrar en consola los números que van desde el inicio hasta el fin
// Si el primer parámetro es más grande que el segundo la secuencia tiene que ser ascendente
// En caso que el primer número sea más chico que el primero la secuencia tiene que ser descendente
// Ejecutar la función utilizando los siguientes números:
// inicio = 0, fin = 1000
// inicio = 1000, fin = 0
// inicio = 100, fin = 100
// inicio = "100", fin = 300
// Resolver de alguna forma los siguientes inconvenientes
// Los números sean iguales
// Algunos de los parámetros no son números

function mostrarNumeros(numero1,numero2){
    if(typeof numero1 !== "number" || typeof numero2 !== "number"){
        console.log('Esta función espera valores del tipo number');
    } else if(numero1===numero2){
        console.log(`Los dos números son ${numero1}`);
    } else if(numero1<numero2){
        for(let i=numero1;i<=numero2;i++){
            console.log(i);
        }
    } else {
        for(let i=numero1;i>=numero2;i--){
            console.log(i);
        }
    }
}
mostrarNumeros(0,1000);
mostrarNumeros(1000,0);
mostrarNumeros(100,100);
mostrarNumeros('100',300);