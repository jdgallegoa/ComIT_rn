type especie= 'perro'|'gato'|'leon';

interface Animal{
    especie:especie;
    raza:string;
    muerde:boolean;
    color:['marron'| 'negro'| 'blanco'| 'gris']
};

const perro:Animal = {
  especie: 'perro',
  raza: "Cocker",
  muerde: true,
  color: ["negro"],
};

const gato:Animal = {
  especie:'gato',
  raza: "Persa",
  muerde: false,
  color: ["marron"],
};

const leon:Animal = {
  especie:'leon',
  raza: "León Africano",
  muerde: true,
  color: ["marron"],
};

function mostrarDatosDeLaColeccion(parametro:unknown){
    console.log(`Especie: ${(parametro as Animal).especie}`);
    console.log(`Raza: ${(parametro as Animal).raza}`);
    console.log(`Muerde: ${(parametro as Animal).muerde}`);
    console.log(`Color: ${(parametro as Animal).color} \n`);
}

mostrarDatosDeLaColeccion(perro);
mostrarDatosDeLaColeccion(gato);
mostrarDatosDeLaColeccion(leon);