// Declarar una variable texto con el siguiente valor: game of thrones
// Declarar 3 variables en una línea con los siguientes nombres:
// primerLetra
// segundaLetra
// tercerLetra
// Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
// Asignar a la variable segundaLetra el caracter número 5 del contenido de la variable texto
// Asignar a la variable tercerLetra el caracter número 8 del contenido de la variable texto
// Declarar una variable resultado con el valor de concatenar las variables primerLetra, segundaLetra y tercerLetra
// Mostrar en consola el contenido de la variable resultado en mayúscula
// Deberías ver GOT como resultado

const texto = 'game of thrones';
let primerLetra, segundaLetra, tercerLetra;
primerLetra = texto.charAt(0);
segundaLetra = texto.charAt(5);
tercerLetra = texto.charAt(8);
console.log(primerLetra.concat(segundaLetra,tercerLetra).toUpperCase());