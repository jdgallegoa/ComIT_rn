;
;
;
function mostrarAutoOCamion(vehiculo) {
    console.log("Marca: ".concat(vehiculo.marca));
    console.log("Modelo: ".concat(vehiculo.modelo));
    console.log("Color: ".concat(vehiculo.color));
    console.log("Cantidad de Pasajeros: ".concat(vehiculo.cantidadDePasajeros));
    if ("esDescapotable" in vehiculo) {
        console.log("Es descapotable: ".concat(vehiculo.esDescapotable));
    }
    else {
        console.log("Cantidad de acoplados: ".concat(vehiculo.cantidadDeAcoplados));
    }
}
function mostrarAutoOCamion2(Vehiculo) {
    var keys = Object.keys(Vehiculo);
    keys.forEach(function (vehiculo) {
        console.log("".concat(vehiculo, ": ").concat(Vehiculo[vehiculo]));
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
mostrarAutoOCamion(auto);
mostrarAutoOCamion2(camion);
