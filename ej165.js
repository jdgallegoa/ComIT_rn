const numeros = [];
for(let i=1;i<11;i++){
    numeros.push(i);
};

function map(coleccion=[], callback){
    const newColeccion = [];
    for(let i=0; i<coleccion.length; i++){
        newColeccion.push(callback(coleccion[i]));
    };
    return newColeccion;
};

function multiplicador(valor){
    return valor * 2;
};

const numerosNuevos = map(numeros,multiplicador);

console.log(numerosNuevos);