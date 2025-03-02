// Sumar los números del 0 al 1000
// Cortar la ejecución si la suma es superior a 100
// Mostrar el resultado final en consola

let suma=0;

for(var i=0;i<=1000;i++){
    if(suma<=100){
        suma +=i;
    } else{
        break;
    }
}
console.log('El resultado final es ', suma);