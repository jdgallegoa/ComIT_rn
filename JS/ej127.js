// Copiar y pegar el código del último ejercicio 126
// A la lista final que mostramos en consola eliminarle los 2 primeros gustos
// Asignar los gustos eliminados en un nuevo array de gustos que no tienen stock
// Mostrar la lista de gustos que quedó
// Mostrar la lista de gustos sin stock

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

agregarGustos(nuevosGustos, primero, ultimo);

const stock = [];
stock.push(nuevosGustos.shift());
stock.push(nuevosGustos.shift());
console.log(nuevosGustos);
console.log(stock);