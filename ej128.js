// Copiar y pegar el código del último ejercicio 127
// Eliminar los 2 últimos gustos de la lista de helados
// Asignar los gustos eliminados en el array de gustos que no tienen stock
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
stock.push(nuevosGustos.pop());
stock.push(nuevosGustos.pop());
console.log(nuevosGustos);
console.log(stock);