// Copiar y pegar el código del ejercicio 125
// Ahora los gustos de helado se piden en otro orden del que fueron ingresados
// El primer elemento tiene que ser el último y el último el primero
// Para agregar los gustos utilizar una función que acepte 2 parámetros, la colección de gustos de helados y el nuevo gusto
// Esta función retorna la lista modificada
// Mostrar en consola los gustos de helados

const helados = [];
helados.push('vainilla', 'maracuya', 'frutos rojos', 'chocolate', 'vainilla chips', 'café', 'tiramisu', 'arequipe', 'limon', 'ron con pasas');
const nuevosGustos = helados;
let ultimo = nuevosGustos.pop();
let primero = nuevosGustos.shift();

function agregarGustos(array, nuevoGustoI, nuevoGustoF){
    array.push(nuevoGustoI);
    array.unshift(nuevoGustoF);
    return array;
}

console.log(agregarGustos(nuevosGustos, primero, ultimo));