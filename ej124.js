// Crear una array con el nombre peliculas
// Asignar los nombres de películas que te gusten (al menos 10)
// Mostrar en consola el nombre de la primer y última película de la lista
// Para el último elemento no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica como si no sabemos la cantidad exacta de elementos

const peliculas = ['The Dark Night', 'El club de la pelea', 'El padrino', 'Paraiso Travel',
'Memento', 'Coco', 'Arrivals', 'The lord of rings', 'Avatar', 'Se7en'];
console.log(`La primera pelicula es ${peliculas[0]} y la ultima es ${peliculas[peliculas.length-1]}`);