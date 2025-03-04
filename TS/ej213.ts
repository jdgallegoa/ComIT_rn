interface Vehiculo {
    marca: string;
    modelo: string;
    color: string;
    cantidadDePasajeros: number;
};

interface Auto extends Vehiculo{
    esDescapotable: boolean;
};

interface Camion extends Vehiculo{
    cantidadDeAcoplados: number;
};

function mostrarDatosAuto(Auto){
    const keys = Object.keys(Auto);
    keys.forEach((auto)=>{
        console.log(`${auto}: ${Auto[auto]}`)
    });
};

function mostrarDatosCamion(Camion){
    const keys = Object.keys(Camion);
    keys.forEach((camion)=>{
        console.log(`${camion}: ${Camion[camion]}`)
    });
};

const auto: Auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};

const camion: Camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
  };

mostrarDatosAuto(auto);
mostrarDatosCamion(camion);