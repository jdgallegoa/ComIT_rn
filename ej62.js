// Escribir un programa donde se ingresa un número que representa el mes y se obtiene como salida un mensaje con el nombre del mes y la cantidad de días que tiene
// Declarar la variable numeroDeMes y asignar un valor entre 1 y 12
// Declarar la variable nombreDelMes y asignar un valor null
// Declarar la variable cantidadDeDias y asignar un valor null
// Según el número del mes Entonces
// Asignar el nombre del mes correspondiente en la variable nombreDelMes
// Asignar la cantidad de días que le corresponend al mes seleccionado
// SINo
// Asignar null a las variables nombreDelMes y cantidadDeDias
// Si nombreDelMes Y cantidadDeDias son null Entonces
// Mostrar un mensaje de error: Ingrese un número entre 1 y 12
// SINO
// Mostrar el siguiente mensaje: El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días

const numeroDeMes = 12;
let nombreDelMes = null;
let cantidadDeDias = null;

switch (numeroDeMes) {
    case 1:
        nombreDelMes = 'Enero';
        cantidadDeDias = 31;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 2:
        nombreDelMes = 'Febrero';
        cantidadDeDias = '28/29';
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 3:
        nombreDelMes = 'Marzo';
        cantidadDeDias = 31;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 4:
        nombreDelMes = 'Abril';
        cantidadDeDias = 30;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 5:
        nombreDelMes = 'Mayo';
        cantidadDeDias = 31;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 6:
        nombreDelMes = 'Junio';
        cantidadDeDias = 30;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 7:
        nombreDelMes = 'Julio';
        cantidadDeDias = 31;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 8:
        nombreDelMes = 'Agosto';
        cantidadDeDias = 31;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 9:
        nombreDelMes = 'Septiembre';
        cantidadDeDias = 30;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 10:
        nombreDelMes = 'Octubre';
        cantidadDeDias = 31;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 11:
        nombreDelMes = 'Noviembre';
        cantidadDeDias = 30;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    case 12:
        nombreDelMes = 'Diciembre';
        cantidadDeDias = 31;
        console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`);
        break;
    default:
        console.log('Ingrese un número entre 1 y 12')
}