// Declarar un array vacio con el nombre alumnos
// Asignar el nombre de un alumno en los ínidices: 0, 1, 2, 3, 4 y 5
// Mostrar en consola cada uno de los elementos utilizando los índices dados
// Ejemplo de formato de salida: índice 0: Marta

const alumnos = [];
alumnos[0] = 'Juan';
alumnos[1] = 'Nico';
alumnos[2] = 'Ana';
alumnos[3] = 'Sofia';
alumnos[4] = 'Jersson';
alumnos[5] = 'Diego';

for(let i = 0;i<=alumnos.length-1;i++){
    console.log(`Indice ${i}: ${alumnos[i]}`);
}