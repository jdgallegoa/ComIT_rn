// Copiar la lista de mutantes del ejercicio 130
// Si Lorna Sally Dane está en los mutantes entonces
// Cortar la ejecución
// Sino
// Mostrar el nombre del mutante
// Transformar la colección de mutantes en un string sin usar join
// Mostrar en consola la representación de los mutantes en formato string

const mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey',
'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett',
'Ororo Monroe'];

if(mutantes.indexOf('Lorna Sally Dane')>-1){
    console.log('cortar');
} else{
    console.log('Lorna Sally Dane');
}

const mutanteString = mutantes.toString();
console.log(mutanteString);