// Dado el siguiente código:
const estadoProfesor = {
  nombre: "Nicolas",
  apellido: "Isnardi",
  amigos: ["Juan, Pablo, Char"],
  leGustaJavaScript: true,
};
// Crear un objeto con el nombre estadoAlumno con las propiedades nombre, apellido y amigos.
// Asignar a cada propiedad tus datos.
// No sobrescribir la propiedad leGustaJavaScript.
// Crear una nuevo objeto con el nombre nuevoEstado donde usando destructuring primero poner los datos del profesor, luego sobrescribir con tus datos haciendo destructuring de tus datos.
// Finalmente imprimir el contenido de la variable nuevoEstado.
// El resultado final debería ser tus datos más la propiedad leGustaJavaScript inicial.
const estadoAlumno = {
    ...estadoProfesor,
    nombre: 'Juan David',
    apellido: 'Gallego Arango',
    amigos: ['Camilo', 'Laura', 'Sara']
};
console.log(estadoAlumno);