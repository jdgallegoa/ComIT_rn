// Crear un array con el nombre de 5 alumnas del curso
// Crear un array con el nombre de 5 alumnos del curso
// Crear un array con el nombre de los alumnos y alumnas del curso
// Mostrar en consola los siguiente nombres de forma individual (uno por linea):
// Nombres de las alumnas (a mano utilizando índices)
// Nombres de los alumnos (utilizando while)
// Nombres de todos los alumnos del curso (utilizando for)

const alumnas = ['Ana', 'Sofia', 'Luz', 'Amparo', 'Tatiana'];
const alumnos = ['Juan', 'David', 'Nico', 'Jersson', 'Camilo'];
const alumnosTot = alumnas.concat(alumnos);

console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let n = 0;
while(n<=alumnos.length-1){
    console.log(alumnos[n]);
    n++;
}

for(let i=0;i<=alumnosTot.length-1;i++){
    console.log(alumnosTot[i]);
}