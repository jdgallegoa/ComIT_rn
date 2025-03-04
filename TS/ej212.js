// Copiar el código del ejercicio ej211.ts y pegarlo en el nuevo archivo del ejercicio ej212.ts
// Modificar el código para utilizar una interface Mascota en lugar de un alias type Mascota
// El resto del ejercicio debe funcionar de la misma manera
var mascota1 = {
    nombre: 'Luna',
    edad: 3,
};
var mascota2 = {
    nombre: 'Dorotea',
    edad: 4,
    fechaDeNacimiento: '2021-04-26'
};
function mostrarDatosMascota(Mascota) {
    if (Mascota.fechaDeNacimiento) {
        console.log("La mascota se llama ".concat(Mascota.nombre, " y tiene ").concat(Mascota.edad, " anios"));
        console.log("La mascota naci\u00F3 en ".concat(Mascota.fechaDeNacimiento));
    }
    else {
        console.log("La mascota se llama ".concat(Mascota.nombre, " y tiene ").concat(Mascota.edad, " anios"));
    }
}
;
mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);
