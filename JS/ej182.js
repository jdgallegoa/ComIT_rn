// Crear un array con el nombre animales con los siguientes items perro, gato, delfin, elefante.
// Utilizar el método map de los array para crear una colección con todos los items de la colección animales en mayúscula.
// Utilizar una arrow function como callback del map.
// Mostrar el siguiente resultado

const animales = ['perro', 'gato', 'delfin', 'elefante'];
const animalesMayuscula = animales.map((animal) => {
    return animal.toUpperCase();
})

console.log('Animales:');
animalesMayuscula.forEach((animalMayuscula)=> console.log(animalMayuscula));