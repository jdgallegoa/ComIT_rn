// Declarar una variable con el nombre propiedad1 y asignar el valor nombre
// Declarar una variable con el nombre propiedad2 y asignar el valor edad
// Crear un objeto persona con las propiedades nombre y edad
// Asignar a las propiedades del objeto persona tu nombre y edad
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
// Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedad1 y propiedad2

const propiedad1 = 'nombre';
const propiedad2 = 'edad';
const persona = {
    nombre: 'Juan',
    edad: 27,
};
console.log(`Nombre: ${persona[propiedad1]} \t
Edad: ${persona[propiedad2]}`);