// Crear una función con el nombre invertirTexto que acepta un texto como parámetro
// Mostrar en consola el texto invertido
// Casos de uso:
// Si se ejecuta la función con el valor hola se espera que la función retorne aloh

function invertirTexto(texto){
    let textoInvertido = '';
    for(let i=texto.length-1;i>=0;i--){
        textoInvertido += texto.charAt(i);
    }
    console.log(textoInvertido);
}

invertirTexto('hola');
invertirTexto('reconocer');
invertirTexto('sofia');