// Copiar el código del ejercicio ej211.ts y pegarlo en el nuevo archivo del ejercicio ej212.ts
// Modificar el código para utilizar una interface Mascota en lugar de un alias type Mascota
// El resto del ejercicio debe funcionar de la misma manera

interface Mascota {
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