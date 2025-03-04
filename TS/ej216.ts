// Crear una interfaz con el nombre Mascota con las siguientes propiedades:
// nombre es un string
// edad es un number
// Crear un Alias con el nombre TipoDeMascota con la Union de los siguientes valores literales:
// perro como string
// gato como string
// mono como string
// Crear una función con el nombre mostrarMascota y que acepte los siguientes parámetros:
// mascota del tipo Mascota
// tipo del tipo TipoDeMascota
// La función debe mostrar los siguientes mensajes dependiendo del tipoDeMascota que se le pase:
// Si es Perro: La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años
// Si es Gato: La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años
// Si es Mono: La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años
// Crear 3 objetos del tipo Mascota con las siguientes propiedades
// Llamar a la función mostrarMascota con cada uno de los objetos creados y pasando un tipoDeMascota como segundo parámetro

interface Mascota {
    nombre:string;
    edad:number;
};

type TipoDeMAscota = 'Perro' | 'Gato' | 'Mono';

function mostrarMascota(mascota:Mascota, tipo:TipoDeMAscota){
    switch(tipo){
        case 'Perro':
            console.log(`La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
            break;
        case 'Gato':
            console.log(`La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
            break;
        default:
            console.log(`La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
    }
};

const mono = {nombre:'Kong', edad:12};
const gato = {nombre:'Botas', edad:6};
const perro = {nombre:'Volt', edad:3};

mostrarMascota(mono, "Mono");
mostrarMascota(gato, "Gato");
mostrarMascota(perro, "Perro");