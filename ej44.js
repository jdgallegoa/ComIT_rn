// Declarar la variable texto y asignar el siguiente valor: HOLA
// Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
// Mostrar en consola el contenido de la variable resultado en minúscula
// Deberías ver como resultado la palabra aloh

const texto = 'HOLA';
let resultado = texto.charAt(3).concat(texto.charAt(2),texto.charAt(1),texto.charAt(0));
console.log(resultado.toLowerCase());

// let resulato = '';
// for (var i = (texto.length - 1); i<0; i--){
//     resulato.concat(texto.charAt(i))
// }
// console.log(resulato);
