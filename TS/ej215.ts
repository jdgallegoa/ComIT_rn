// Definir un Alias (type) con el nombre de Alumno y asignar un tuple donde el primer valor es un number y el segundo un string
// Crear una colección de strings con el nombre de alumnos con los siguites valores: "Nicolas", "Clara", "Manuel", "Alejandra"
// Crear una función con el nombre de mostrarAlumno y que acepte un parámetro del tipo Alumno
// Recorrer la colección alumnos utilizando un forEach
// El callback del forEach tiene que obtener el alumno y su indice
// Llamar dentro del callback a la función mostrarAlumno y pasarle el tuple con el indice y el nombre del alumno

type Alumno = [number, string];
const alumnos = ["Nicolas", "Clara", "Manuel", "Alejandra"];

function mostrarAlumno(Alumno){
    console.log(`ID: ${Alumno[0]} Alumno: ${Alumno[1]}`)
};

alumnos.forEach((alumno,index)=>{
    mostrarAlumno([index,alumno]);
});

