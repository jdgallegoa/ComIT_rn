// Crear un array números
// Ingresar números de 0 a 10000
// Sumar los valores de todos los números del array
// Mostrar en consola los resultados parciales
// Mostrar en consola el resultado final
// Si el número es igual a 50005000 Entonces
// Mostrar en pantalla: El ejercicio es correcto
// Sino
// Verificar el ejercicio para obtener el resultado esperado!!! pero

const numeros = [];
let suma = 0;

for (let i=0; i<=10000;i++){
    numeros.push(i);
    suma+=i;
    console.log(suma);
}
if(suma===50005000){
    console.log('El ejercicio es correcto');
} else{
    console.log('Verificar el ejercicio para obtener el resultado esperado!!! pero');
}