// Crear una array de gastos para un viaje, por ejemplo 100 pesos de hotel, 1000 de viaje y 200 de comida
// Sumar todos los valores de los gastos utilizando reduce
// Mostrar en consola cuanto vamos a gastar en el viaje

const viaje = [3000000, 1500000, 9000000];

const total = viaje.reduce(function(total,gasto){
    return total+gasto;
},0);

console.log('El viaje cuesta: ',total);