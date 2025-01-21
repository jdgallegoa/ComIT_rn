// Declarar la variable mensaje y establecer el siguiente valor: 'Juan Roman Riquelme es un pecho frio'
// Declarar la variable jugador
// Utilizar el método slice para obtener el nombre Juan Roman Riquelme del texto en la variable mensaje y asignarlo a la variable jugador
// Mostrar en consola el siguiente mensaje utilizando interpolación de textos: ${jugador} es el mejor 10 de la historia!!

const mensaje = 'Juan Roman Riquelme es un pecho frio';
const jugador = mensaje.slice(0,18);

console.log(`${jugador} es el mejor 10 de la historia!!`)