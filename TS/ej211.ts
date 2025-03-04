// Copiar el código del ejercicio ej210.ts y pegarlo en el nuevo archivo del ejercicio ej211.ts
// Declarar una Alias con el nombre de Mascota con las mismas propiedades que tiene el objeto mascota definido en el ejercicio anterior.
// Modificar la función mostrarDatosMascota para que ahora acepte un parámetro del tipo Mascota.
// Crear 2 objetos con los nombre mascota1 y otro con el nombre mascota2 y asignarle valores a las propiedades.
// mascota1 no tiene fechaDeNacimiento
// mascota2 tiene una fechaDeNacimiento
// Llamar a la función mostrarDatosMascota una vez con cada objeto mascota

type Mascota={
    nombre: string;
    edad:number;
    fechaDeNacimiento?: string;
}

const mascota1:Mascota= {
    nombre: 'Luna',
    edad: 3,
};

const mascota2:Mascota= {
    nombre: 'Dorotea',
    edad: 4,
    fechaDeNacimiento: '2021-04-26'
};

function mostrarDatosMascota(Mascota){
    if(Mascota.fechaDeNacimiento){
        console.log(`La mascota se llama ${Mascota.nombre} y tiene ${Mascota.edad} anios`);
        console.log(`La mascota nació en ${Mascota.fechaDeNacimiento}`);
    } else {
        console.log(`La mascota se llama ${Mascota.nombre} y tiene ${Mascota.edad} anios`);
    }
};

mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);