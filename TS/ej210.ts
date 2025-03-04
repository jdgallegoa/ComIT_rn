const mascota:{
    nombre: string;
    edad:number;
    fechaDeNacimiento?: string;
} = {
    nombre: 'Dorotea',
    edad: 4,
    fechaDeNacimiento: '2021-04-26'
};

function mostrarDatosMascota(mascota:{nombre:string, edad:number, fechaDeNacimiento?:string}){
    if(mascota.fechaDeNacimiento){
        console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`);
        console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
    } else {
        console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`);
    }
};

mostrarDatosMascota(mascota);