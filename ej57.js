// Crear un documento con el nombre ej57.js
// Copiar el código del ej54.md
// // Refactorizar el código y utilizar operador ternario en lugar de if/else

const usuario = 'pepe2017';
const password = '12345';
const mensaje = usuario === 'pepe2017' && password === '12345' ?
'El usuario está autenticado y puede ver el contenido del sitio':
'Error, no se pudo autenticar al usuario, puede intentarlo más tarde';

console.log(mensaje);