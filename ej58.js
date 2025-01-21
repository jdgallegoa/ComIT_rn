// Declarar la variable hora
// Establecer un valor entre 0 y 24
// Si la hora es menor que 12 y mayor que 5 entonces
// Mostrar el mensaje: Buen día
// Si la hora es menor o igual que 12 y mayor que 20 entonces
// Mostrar el mensaje: Buenas tardes
// Si No:
// Mostrar el mensaje: Buenas noches
// Cambiar el valor de la variable hora un par de veces y ejecutarlo para ver que pasa

const hora = 15;

if (hora<12 && hora>5){
    console.log('buen dia');
} else if (hora>=12 && hora<20){
    console.log('buena tarde');
} else {
    console.log('buena noche');
}