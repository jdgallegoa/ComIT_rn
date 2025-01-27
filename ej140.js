// Copiar la lista de mutantes del ejercicio 130
// Filtrar la lista de mutantes removiendo a Scott Summers sin alterar la lista original
// Mostrar en consola el nombre del mutante en el índice 1 en ambas listas

const mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey',
'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett',
'Ororo Monroe'];

const scott = mutantes.filter(function(mutante){
    if(mutante==='Scott Summers'){
        return mutante;
    }
});

console.log(mutantes[0], '/', scott[0]);