;
;
;
function mostrarDatosAuto(Auto) {
    var keys = Object.keys(Auto);
    keys.forEach(function (auto) {
        console.log("".concat(auto, ": ").concat(Auto[auto]));
    });
}
;
function mostrarDatosCamion(Camion) {
    var keys = Object.keys(Camion);
    keys.forEach(function (camion) {
        console.log("".concat(camion, ": ").concat(Camion[camion]));
    });
}
;
var auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};
var camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
};
mostrarDatosAuto(auto);
mostrarDatosCamion(camion);
