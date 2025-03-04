var mascota = {
    nombre: 'Dorotea',
    edad: 4,
    fechaDeNacimiento: '2021-04-26'
};
function mostrarDatosMascota(mascota) {
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    else {
        console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
    }
}
;
mostrarDatosMascota(mascota);
