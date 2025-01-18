//Declarar las variables promedioParaAprobar y promedioDelAlumno
//Asignar a promedioParaAprobar el valor 6
//Asignar a promedioDelAlumno el valor 4
//Mostrar en consola los siguientes mensajes:
//El alumno tiene un promedio mayor o igual que el requerido: true/false
//Al alumno le faltaron ${puntos} para aprobar

const promedioParaAprobar = 6;
const promedioDelAlumno = 4;

console.log(`El alumno tiene un promedio mayor o igual al requerido: ${promedioDelAlumno>=promedioParaAprobar}`)
console.log(`Al alumno le faltaron ${promedioParaAprobar-promedioDelAlumno} para aprobar`)