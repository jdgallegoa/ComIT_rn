// Crear una función con el nombre esElMasGrande que acepte un nombre como parámetro
// Si el parámetro es Roman entonces:
// Mostrar el siguiente mensaje en mayúscula: El mejor de la historia es Román
// Sino
// Mostrar el siguiente mensaje en minuscula: Por favor ingrese el nombre de un gran jugador

function esElMasGrande(D10S){
    if(D10S.toLowerCase() === 'messi'){
        console.log('El mejor de la historia es Messi');
    } else{
        console.log('Por favor ingrese el nombre de un gran jugador');
    }
}

esElMasGrande('Messi');
esElMasGrande('MESSI');
esElMasGrande('messi');
esElMasGrande('Ronaldo');
esElMasGrande('Pelé');