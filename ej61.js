// Escribir un programa donde se ingresa un número entre 1 y 7 que representa un día de la semana y se obtiene un mensaje como salida. En caso de ingresar un número que no sea válido mostrar un mensaje de error
// Declarar la variable dia y asignar un número del 1 al 7
// Declarar la variable nombreDelDia y asignar un valor null

// Versión SWITCH
// Según el día seleccionado Entonces
// asignar el nombre del día correspondiente al número en la variable nombreDelDia (ejemplo: si dia es 1 entonces nombreDelDia debería ser 'lunes')
// SINO
// Asignar el valor null en la variable nombreDelDía
// Si nombreDelDía no es null Entonces
// Mostrar el siguiente mensaje en consola: El día seleccionado es ${nombreDelDía}
// SINO
// Mostrar el siguiente mensaje en consola: Por favor seleccionar un número de 1 a 7

// Versión IF/ELSE/IF
// Escribir la misma funcionalidad pero utilizando la estructura de If's anidados. El resultado debe ser el mismo
// En ambos casos ingresar distintos números como valor de la variable dia y ver el resultado

let dia = 8;
let nombreDelDia = null;

switch (dia){
    case 1:
        nombreDelDia = 'lunes';
        console.log(`El día seleccionado es ${nombreDelDia}`);
        break;
    case 2:
        nombreDelDia = 'martes';
        console.log(`El día seleccionado es ${nombreDelDia}`);
        break;
    case 3:
        nombreDelDia = 'miercoles';
        console.log(`El día seleccionado es ${nombreDelDia}`);
        break;
    case 4:
        nombreDelDia = 'jueves';
        console.log(`El día seleccionado es ${nombreDelDia}`);
        break;
    case 5:
        nombreDelDia = 'viernes';
        console.log(`El día seleccionado es ${nombreDelDia}`);
        break;
    case 6:
        nombreDelDia = 'sabado';
        console.log(`El día seleccionado es ${nombreDelDia}`);
        break;
    case 7:
        nombreDelDia = 'domingo';
        console.log(`El día seleccionado es ${nombreDelDia}`);
        break;
    default:
        console.log('Por favor seleccionar un número de 1 a 7')
}

dia = 3;

if (dia === 1){
    nombreDelDia = 'lunes';
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if(dia === 2){
    nombreDelDia = 'martes';
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if(dia === 3){
    nombreDelDia = 'miercoles';
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if(dia === 4){
    nombreDelDia = 'jueves';
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if(dia === 5){
    nombreDelDia = 'viernes';
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if(dia === 6){
    nombreDelDia = 'sabado';
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if(dia === 7){
    nombreDelDia = 'domingo';
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else{
    console.log('Por favor seleccionar un número de 1 a 7')
}