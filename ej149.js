// Crear un documento con el nombre ej149.js
// Definir y declarar un objeto persona con tus datos y valores
// Este objeto tiene que tener al menos 10 propiedades y al menos un tipo de dato de: string, number, boolean, array y object (si un objeto puede tener otros objetos como propiedades)
// Algunas propiedades definirlas utilizando el objeto literal al asignarlo:
// Algunas propiedades definirlas utilizando la forma más dinámica:
// Mostrar en consola el objeto persona

const persona ={
    nombre: 'Juan David',
    apellidos: 'Gallego Arango',
    cedula: 1017250789,
    edad: 27,
    profesion: 'Ingeniero Civil',
    casado: false,
    hijos: false,
};
persona.padres = {
    madre: 'Luz Amparo Arango',
    padre: 'Gustavo Gallego',
};
persona.hermanos = 
['Katherine Mancera', 
'Ana Sofia Gallego', 
'Sebastian Engivst', 
'Marta Gallego', 
'Lucely Gallego', 
'Milena Gallego'];
persona.residencia = 'Palestina, Caldas';

console.log(persona);