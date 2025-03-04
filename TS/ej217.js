;
var perro = {
    especie: 'perro',
    raza: "Cocker",
    muerde: true,
    color: ["negro"],
};
var gato = {
    especie: 'gato',
    raza: "Persa",
    muerde: false,
    color: ["marron"],
};
var leon = {
    especie: 'leon',
    raza: "León Africano",
    muerde: true,
    color: ["marron"],
};
function mostrarDatosDeLaColeccion(parametro) {
    console.log("Especie: ".concat(parametro.especie));
    console.log("Raza: ".concat(parametro.raza));
    console.log("Muerde: ".concat(parametro.muerde));
    console.log("Color: ".concat(parametro.color, " \n"));
}
mostrarDatosDeLaColeccion(perro);
mostrarDatosDeLaColeccion(gato);
mostrarDatosDeLaColeccion(leon);
