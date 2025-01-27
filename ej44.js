// Declarar la variable texto y asignar el siguiente valor: HOLA
// Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
// Mostrar en consola el contenido de la variable resultado en minúscula
// Deberías ver como resultado la palabra aloh

const texto = 'RECONOCIDO';
let resultado = texto.charAt(3).concat(texto.charAt(2),texto.charAt(1),texto.charAt(0));
console.log(resultado.toLowerCase());

// let contador = 0;
// let resulato = '';
// while(contador < texto.length){
//     contador++;
//     resulato = resulato + texto.charAt(texto.length-contador);
// }
// console.log(resulato.toLowerCase());

let resulato2 = '';
for (var i = texto.length - 1; i>=0; i--){
    resulato2 = resulato2 + texto.charAt(i);
}
console.log(resulato2.toLowerCase());
