//Declarar la cariable cantidadDeUsuarios y asignar el valor 100
let cantidadDeUsuarios = 100;

//Incrementar la cantidad de usuarios en 5
cantidadDeUsuarios += 5;

//Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
console.log(`Cantidad de usuarios: ${cantidadDeUsuarios}`)

//Se dieron de baja 3 usuarios
cantidadDeUsuarios -= 3;

//Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
console.log(`Cantidad de usuarios: ${cantidadDeUsuarios}`)

//Compramos una empresa y los usuarios se duplicaron
cantidadDeUsuarios *= 2;

//Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
console.log(`Cantidad de usuarios: ${cantidadDeUsuarios}`)

//Sabemos que el 50% de los usuarios son mujeres y el otro 50% son varones, Dividir la cantidad de usuarios en 2 para saber cuántos hombres y mujeres hay de cada género
const hombres = cantidadDeUsuarios * 0.5;
const mujeres = cantidadDeUsuarios / 2;

//Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
console.log(
    `Cantidad de usuarios: ${cantidadDeUsuarios}, mujeres: ${mujeres}, hombres: ${hombres}`
    )