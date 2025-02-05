const numeros = [];
for(let i=1;i<11;i++){
    numeros.push(i);
};

function forEach(coleccion=[], callback){
    for(let i=0; i<coleccion.length; i++){
        callback(coleccion[i]);
    };
};

function imprimir(valor){
    console.log(valor);
};

forEach(numeros,imprimir);